import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Link } from "@inertiajs/react";
import { MdOutlineDateRange } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import { IoIosColorFill } from "react-icons/io";
import { PiTire } from "react-icons/pi";
import api from "../Services/api";

export default function Home() {
    const [veiculos, setVeiculos] = useState([]);
    const [index, setIndex] = useState(0);
    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(veiculos.length / itemsPerSlide); 

    useEffect(() => {
        api.get("/")
            .then((response) => {
                console.log("Resposta da API:", response.data.data);
                setVeiculos(response.data.data || []);
            })
            .catch((error) => console.error("Erro ao buscar veículos:", error));
    }, []);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); 
        return () => clearInterval(interval);
    }, [veiculos]);

    return (
        <Layout>
            <div className="h-screen flex justify-center items-center">
                <div className="container mx-auto p-6 max-w-full">
                    <h1 className="text-3xl font-bold mb-6 text-center">Veículos em Destaque</h1>

                    {veiculos.length > 0 ? (
                        <div className="relative w-full">
                            <div className="relative overflow-hidden h-[600px] flex justify-center space-x-6 transition-all duration-1000 ease-in-out">
                                {veiculos.slice(index * itemsPerSlide, index * itemsPerSlide + itemsPerSlide).map((veiculo) => {
                                    let imagemUrl = "https://placehold.co/600x400";

                                    if (veiculo.imagens && Array.isArray(veiculo.imagens) && veiculo.imagens.length > 0) {
                                        imagemUrl = veiculo.imagens[0].replace("http://localhost:8000/storage/", "");
                                    }

                                    return (
                                        <div key={veiculo.id}>
                                            <div className="relative overflow-hidden rounded-xl shadow-lg">
                                                <img
                                                    src={imagemUrl}
                                                    alt={veiculo.modelo}
                                                    className="w-96 h-[300px] object-cover rounded-t-xl"
                                                />
                                                <div className="p-4 bg-stone-200 rounded-b-xl w-96 h-[250px]">
                                                    <h3 className="text-xl font-bold text-center">
                                                        {veiculo?.modelo || "Modelo desconhecido"} - {veiculo?.marca || "Marca desconhecida"}
                                                    </h3>

                                                    <div className="grid grid-cols-2 gap-4 mt-2 text-gray-600 text-sm">
                                                        <p className="flex items-center">
                                                            <MdOutlineDateRange className="mr-2" />
                                                            {veiculo?.ano_fabricacao}/{veiculo?.ano_modelo}
                                                        </p>
                                                        <p className="flex items-center">
                                                            <PiTire className="mr-2" />
                                                            {veiculo?.km_atual || "0"} KM
                                                        </p>
                                                        <p className="flex items-center">
                                                            <LuFuel className="mr-2" />
                                                            {veiculo?.tipo_combustivel}
                                                        </p>
                                                        <p className="flex items-center">
                                                            <IoIosColorFill className="mr-2" />
                                                            {veiculo?.cor}
                                                        </p>
                                                    </div>

                                                    <p className="text-red-600 font-bold text-lg text-center mt-3">
                                                        R$ {veiculo?.valor_veiculo?.toLocaleString("pt-BR", {
                                                            minimumFractionDigits: 2,
                                                        }) || "Valor não disponível"}
                                                    </p>

                                                    <Link
                                                        href={route("estoque.show", veiculo.id)}
                                                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition block text-center mt-4"
                                                    >
                                                        Ver Veículo
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">Nenhum veículo disponível no momento.</p>
                    )}
                </div>
            </div>
        </Layout>
    );
}
