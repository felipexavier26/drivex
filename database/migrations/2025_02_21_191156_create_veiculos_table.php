<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVeiculosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('veiculos', function (Blueprint $table) {
            $table->id(); 
            $table->string('modelo');
            $table->string('marca');
            $table->integer('ano_fabricacao');
            $table->integer('ano_modelo');
            $table->string('cor');
            $table->string('placa', 7)->unique();
            $table->string('chassi', 17)->unique();
            $table->string('renavam', 11)->unique();
            $table->integer('km_atual')->nullable();
            $table->enum('tipo_combustivel', ['Gasolina', 'Álcool', 'Diesel', 'Elétrico', 'GNV', 'Flex']);
            $table->enum('tipo_veiculo', ['Carro', 'Moto', 'Caminhão', 'Van', 'Ônibus', 'Utilitário']);
            $table->enum('categoria_veiculo', ['Passeio', 'Carga', 'Transporte', 'Utilitário']);
            $table->integer('numero_portas')->nullable();
            $table->integer('capacidade_passageiros')->nullable();
            $table->integer('capacidade_carga')->nullable();
            $table->decimal('valor_veiculo', 10, 2);
            $table->enum('status_veiculo', ['Disponível', 'Vendido', 'Em Manutenção', 'Reservado']);
            $table->json('imagens')->nullable();
            $table->date('data_fabricacao');
            $table->date('data_entrada')->nullable();
            $table->text('observacoes')->nullable();
            $table->boolean('ativo')->default(true);
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('veiculos');
    }
}
