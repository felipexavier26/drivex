import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Link } from "@inertiajs/react";
import { MdOutlineDateRange } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import { IoIosColorFill } from "react-icons/io";
import { PiTire } from "react-icons/pi";
import api from "../Services/api";

export default function Estoque() {
  const [veiculos, setVeiculos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage] = useState(9); 

  useEffect(() => {
    api.get("/")
      .then((response) => {
        setVeiculos(response.data.data)
      })
      .catch((error) => console.error("Erro ao buscar veículos:", error));
  }, []);

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = veiculos.slice(indexOfFirstVehicle, indexOfLastVehicle);

  const totalPages = Math.ceil(veiculos.length / vehiclesPerPage);

  const paginatePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginateNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-6 max-w-7xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Nosso Estoque</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentVehicles.length > 0 ? (
            currentVehicles.map((veiculo) => {
              let imagemUrl = "https://placehold.co/600x400";

              if (veiculo.imagens && Array.isArray(veiculo.imagens) && veiculo.imagens.length > 0) {
                imagemUrl = veiculo.imagens[0].replace("http://localhost:8000/storage/", "");
              }

              return (
                <div
                  key={veiculo.id}
                  className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col"
                >
                  <img
                    src={imagemUrl}
                    alt={veiculo.modelo}
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-4 flex-1 flex flex-col justify-between bg-stone-200">
                    <h3 className="text-2xl font-bold text-center sm:text-left">
                      {veiculo.modelo} - {veiculo.marca}
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2 text-gray-600">
                      <p className="flex items-center">
                        <MdOutlineDateRange className="mr-2" />
                        {veiculo.ano_fabricacao}/{veiculo.ano_modelo}
                      </p>
                      <p className="flex items-center">
                        <PiTire className="mr-2" />
                        {veiculo.km_atual || "0"} KM
                      </p>
                      <p className="flex items-center">
                        <LuFuel className="mr-2" />
                        {veiculo.tipo_combustivel}
                      </p>
                      <p className="flex items-center">
                        <IoIosColorFill className="mr-2" />
                        {veiculo.cor}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                      <p className="text-red-600 font-bold text-2xl text-center sm:text-left">
                        R$ {veiculo.valor_veiculo.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </p>

                      <Link
                        href={route("estoque.show", veiculo.id)}
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition mt-3 sm:mt-0"
                      >
                        Ver Veículo
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">
              Nenhum veículo disponível.
            </p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={paginatePrev}
              disabled={currentPage === 1}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-300"
            >
              Anterior
            </button>
            <p className="text-center text-gray-600">
              Página {currentPage} de {totalPages}
            </p>
            <button
              onClick={paginateNext}
              disabled={currentPage === totalPages}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-300"
            >
              Próxima
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
