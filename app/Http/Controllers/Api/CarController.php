<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Veiculo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CarController extends Controller
{
    public function index()
    {
        $cars = Veiculo::orderBy('id', 'DESC')->get();

        // Formatar as imagens para URLs acessíveis
        $cars->transform(function ($car) {
            if ($car->imagens) {
                $car->imagens = array_map(fn($imagem) => asset('storage/' . $imagem), $car->imagens);
            }
            return $car;
        });

        return response()->json([
            'status' => true,
            'message' => 'Lista de veículos',
            'data' => $cars
        ], 200);
    }

    public function show($id)
    {
        $car = Veiculo::find($id);
        if (!$car) {
            return response()->json([
                'status' => false,
                'message' => 'Veículo não encontrado'
            ], 404);
        }

        // Converter caminhos das imagens em URLs acessíveis
        if ($car->imagens) {
            $car->imagens = array_map(fn($imagem) => asset('storage/' . $imagem), $car->imagens);
        }

        return response()->json([
            'status' => true,
            'message' => 'Detalhes do veículo',
            'data' => $car
        ], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'modelo' => 'required|string',
            'marca' => 'required|string',
            'ano_fabricacao' => 'required|integer',
            'ano_modelo' => 'required|integer',
            'cor' => 'required|string',
            'placa' => 'required|string|size:7|unique:veiculos',
            'chassi' => 'required|string|size:17|unique:veiculos',
            'renavam' => 'required|string|size:11|unique:veiculos',
            'valor_veiculo' => 'required|numeric',
            'status_veiculo' => 'required|in:Disponível,Vendido,Em Manutenção,Reservado',
            'imagens.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Permite múltiplas imagens
        ]);

        $imagensPaths = [];
        if ($request->hasFile('imagens')) {
            foreach ($request->file('imagens') as $imagem) {
                $path = $imagem->store('veiculos', 'public');
                $imagensPaths[] = $path;
            }
        }

        $car = Veiculo::create([
            'modelo' => $request->modelo,
            'marca' => $request->marca,
            'ano_fabricacao' => $request->ano_fabricacao,
            'ano_modelo' => $request->ano_modelo,
            'cor' => $request->cor,
            'placa' => $request->placa,
            'chassi' => $request->chassi,
            'renavam' => $request->renavam,
            'valor_veiculo' => $request->valor_veiculo,
            'status_veiculo' => $request->status_veiculo,
            'imagens' => $imagensPaths, // Armazena como array JSON
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Veículo cadastrado com sucesso!',
            'data' => $car
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $car = Veiculo::find($id);
        if (!$car) {
            return response()->json([
                'status' => false,
                'message' => 'Veículo não encontrado'
            ], 404);
        }

        $request->validate([
            'modelo' => 'sometimes|string',
            'marca' => 'sometimes|string',
            'ano_fabricacao' => 'sometimes|integer',
            'ano_modelo' => 'sometimes|integer',
            'cor' => 'sometimes|string',
            'placa' => 'sometimes|string|size:7|unique:veiculos,placa,' . $id,
            'chassi' => 'sometimes|string|size:17|unique:veiculos,chassi,' . $id,
            'renavam' => 'sometimes|string|size:11|unique:veiculos,renavam,' . $id,
            'valor_veiculo' => 'sometimes|numeric',
            'status_veiculo' => 'sometimes|in:Disponível,Vendido,Em Manutenção,Reservado',
            'imagens.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile('imagens')) {
            // Remover imagens antigas do storage
            if ($car->imagens) {
                foreach ($car->imagens as $imagem) {
                    Storage::disk('public')->delete($imagem);
                }
            }

            $imagensPaths = [];
            foreach ($request->file('imagens') as $imagem) {
                $path = $imagem->store('veiculos', 'public');
                $imagensPaths[] = $path;
            }
            $car->imagens = $imagensPaths;
        }

        $car->update($request->except('imagens'));

        return response()->json([
            'status' => true,
            'message' => 'Veículo atualizado com sucesso',
            'data' => $car
        ], 200);
    }

    public function destroy($id)
    {
        $car = Veiculo::find($id);
        if (!$car) {
            return response()->json([
                'status' => false,
                'message' => 'Veículo não encontrado'
            ], 404);
        }

        // Excluir imagens do storage antes de excluir o veículo
        if ($car->imagens) {
            foreach ($car->imagens as $imagem) {
                Storage::disk('public')->delete($imagem);
            }
        }

        $car->delete();

        return response()->json([
            'status' => true,
            'message' => 'Veículo excluído com sucesso'
        ], 200);
    }
}
