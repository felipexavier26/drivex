<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class VeiculoSeeder extends Seeder
{
    public function run()
    {
        $veiculos = [];

        for ($i = 1; $i <= 10; $i++) {
            $veiculos[] = [
                'modelo' => ['Nivus', 'Polo', 'Civic', 'Corolla', 'Golf', 'T-Cross ', 'City', 'Toro', 'Cruze', 'Sentra'][rand(0, 9)],
                'marca' => ['Volkswagen', 'Volkswagen', 'Honda', 'Toyota', 'Volkswagen', 'Volkswagen', 'Honda', 'Fiat', 'Chevrolet', 'Nissan'][rand(0, 7)],
                'ano_fabricacao' => rand(2015, 2023),
                'ano_modelo' => rand(2016, 2024),
                'cor' => ['Prata', 'Branco', 'Preto', 'Vermelho', 'Azul'][rand(0, 4)],
                'placa' => strtoupper(Str::random(7)),
                'chassi' => strtoupper(Str::random(17)), 
                'renavam' => rand(10000000000, 99999999999),
                'km_atual' => rand(1000, 100000),
                'tipo_combustivel' => ['Gasolina', 'Álcool', 'Diesel', 'Elétrico', 'GNV', 'Flex'][rand(0, 5)],
                'tipo_veiculo' => ['Carro', 'Moto', 'Caminhão', 'Van', 'Ônibus', 'Utilitário'][rand(0, 5)],
                'categoria_veiculo' => ['Passeio', 'Carga', 'Transporte', 'Utilitário'][rand(0, 3)],
                'numero_portas' => rand(2, 4),
                'capacidade_passageiros' => rand(2, 7),
                'capacidade_carga' => rand(100, 1000),
                'valor_veiculo' => rand(30000, 150000),
                'status_veiculo' => ['Disponível', 'Vendido', 'Em Manutenção', 'Reservado'][rand(0, 3)],
                'data_fabricacao' => now()->subYears(rand(1, 10))->format('Y-m-d'),
                'data_entrada' => now()->subDays(rand(1, 365))->format('Y-m-d'),
                'observacoes' => 'Veículo em bom estado, revisado recentemente.',
                'imagens' => json_encode([
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-15-at-00.15.31.jpeg?quality=70&strip=info',                    
                    'https://carroesporteclube.com.br/wp-content/uploads/2022/10/Novo-Polo-Highline_16.jpg',
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2017/04/qr-694-comp-sedans-3525-e1715830310429.jpg?quality=70&strip=info',
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2024/01/03_COROLLA_2024_1FLP4760.jpg?quality=70&strip=info',
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2018/07/qr-710-comp-cvic-si-x-golf-gti-8578-cmyk.jpg?quality=70&strip=info',
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2025/01/1FLP1921-2-e1737057160257.jpg?quality=70&strip=info',
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2021/12/QR-752-CARRO-NOVO-HONDA-CITY-ABRE-FLP7944-e1639093843167.jpg?quality=70&strip=info',
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2019/03/toro_frente2.jpg?quality=70&strip=info',
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2019/09/dscf8140.jpg?quality=70&strip=info',
                    'https://quatrorodas.abril.com.br/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-23-at-16.22.34.jpeg?quality=70&strip=info'

                ], JSON_UNESCAPED_SLASHES),
                'detalhes' => json_encode([
                    "tecnologia" => [
                        "Sistema multimídia Discover Media",
                        "Apple CarPlay e Android Auto sem fio",
                        "Painel de instrumentos digital",
                        "Ar-condicionado automático"
                    ],
                    "mecanica" => [
                        "Motor 1.0 TSI turbo com 128 cv",
                        "Câmbio automático de 6 marchas",
                        "Direção elétrica"
                    ],
                    "seguranca" => [
                        "6 airbags",
                        "Controle eletrônico de estabilidade (ESC)",
                        "Frenagem automática de emergência"
                    ],
                    "espaco_interno" => [
                        "Amplo espaço interno e porta-malas",
                        "Bancos traseiros rebatíveis",
                        "Iluminação ambiente"
                    ]
                ], JSON_UNESCAPED_SLASHES),
                'ativo' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('veiculos')->insert($veiculos);
    }
}
