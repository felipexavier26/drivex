import React from "react";
import Layout from "../Layout";
import { usePage } from "@inertiajs/react";

export default function Show() {
    const { veiculo } = usePage().props; 

    const imagemUrl = veiculo.imagens && veiculo.imagens.length > 0 
        ? veiculo.imagens[0].replace("http://localhost:8000/storage/", "")
        : "https://via.placeholder.com/400";

    return (
        <Layout>
            <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 ">
                <div className="p-6 bg-stone-200 shadow-lg rounded-lg w-full md:w-2/3">
                    <h1 className="text-3xl font-bold mb-4">{veiculo.modelo} - {veiculo.marca}</h1>
                    
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <img
                            src={imagemUrl}
                            alt={veiculo.modelo}
                            className="w-10/12 h-full object-cover"
                        />
                        
                        <div className="w-full md:w-1/2 text-lg">
                            <h2 className="text-xl font-semibold mb-2">Dados do veículo</h2>
                            <p><strong>Marca:</strong> {veiculo.marca}</p>
                            <p><strong>Modelo:</strong> {veiculo.modelo}</p>
                            <p><strong>Ano:</strong> {veiculo.ano_fabricacao} / {veiculo.ano_modelo}</p>
                            <p><strong>Câmbio:</strong> {veiculo.cambio}</p>
                            <p><strong>Portas:</strong> {veiculo.numero_portas}</p>
                            <p><strong>Combustível:</strong> {veiculo.tipo_combustivel}</p>
                            <p><strong>Km:</strong> {veiculo.km_atual || "0"}</p>
                            <p><strong>Cor:</strong> {veiculo.cor}</p>
                            <p><strong>Placa:</strong> {veiculo.placa}</p>
                            <p><strong>Chassi:</strong> {veiculo.chassi}</p>
                            <p><strong>Renavam:</strong> {veiculo.renavam}</p>
                            <p><strong>Tipo:</strong> {veiculo.tipo_veiculo}</p>
                            <p><strong>Categoria:</strong> {veiculo.categoria_veiculo}</p>
                        </div>
                    </div>
                    
                    <div className="mt-6 text-lg">
                        <h2 className="text-xl font-semibold mb-2">Detalhes</h2>
                        <p>{veiculo.marca} {veiculo.modelo} {veiculo.ano_modelo}</p>
                        {veiculo.detalhes && (
                            <ul className="list-disc pl-5">
                                {Object.keys(veiculo.detalhes).map((key) => (
                                    <li key={key}>
                                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {Array.isArray(veiculo.detalhes[key]) ? veiculo.detalhes[key].join(", ") : veiculo.detalhes[key]}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                
                <div className="p-6 bg-stone-200 shadow-lg rounded-lg  md:w-1/3 h-full">
                    <div className="mt-6 text-lg">
                        <p className="text-xl text-red-900 font-bold mb-2">R$ {veiculo.valor_veiculo}</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="/estoque" className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition text-center">
                            Solicitar Proposta
                        </a>
                        <a href="/financiamento" className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition text-center">
                            Financiamento
                        </a>
                    </div>

                    <div className="border border-black mt-6 p-4 text-center">
                        <h2 className="font-bold text-2xl">Multimarcas</h2>
                        <h2 className="font-bold text-base">MULTIMARCAS - São Paulo<br/>Praça da Sé - São Paulo</h2>
                        <h2 className="font-bold text-2xl">(11)9999-9999</h2>
                    </div>

                    <div className="flex flex-col gap-4 mt-6">
                        <a href="/mapa" className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition text-center">
                            Ver Mapa
                        </a>
                        <a href="/estoque" className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition text-center">
                            Estoque
                        </a>
                    </div>  
                </div>
            </div>
        </Layout>
    );
}
