<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Veiculo extends Model
{
    use HasFactory;

    protected $table = 'veiculos';

    protected $fillable = [
        'modelo',
        'marca',
        'ano_fabricacao',
        'ano_modelo',
        'cor',
        'placa',
        'chassi',
        'renavam',
        'km_atual',
        'tipo_combustivel',
        'tipo_veiculo',
        'categoria_veiculo',
        'numero_portas',
        'capacidade_passageiros',
        'capacidade_carga',
        'valor_veiculo',
        'status_veiculo',
        'imagem',
        'data_fabricacao',
        'data_entrada',
        'observacoes',
        'ativo',
        'detalhes'
    ];

    protected $casts = [
        'data_fabricacao' => 'date',
        'data_entrada' => 'date',
        'ativo' => 'boolean',
        'valor_veiculo' => 'decimal:2',
        'imagens' => 'array',
        'detalhes' => 'array',  
    ];
}
