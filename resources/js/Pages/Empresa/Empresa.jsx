import React from 'react';
import Layout from "../Layout";
import Mapa from '../Mapa/Mapa';
function Empresa() {
  return (
    <Layout>
      <div className="max-w-screen-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Conheça a Multimarcas</h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Missão:</h2>
          <p>
            Oferecer a melhor experiência na venda de seminovos através de uma consultoria personalizada ao cliente.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Visão:</h2>
          <p>
            Tornar-se a número 1 do Brasil no mercado de seminovos - Sendo respeitado pelos mais velhos e referência para os mais novos.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Valores:</h2>
          <p>
            Nosso padrão é prezar sempre pela mais alta qualidade de atendimento do início ao fim, tendo como prioridade a transparência e oferecer o melhor do mercado no quesito procedência, ética e confiabilidade.
          </p>
        </div>
        <Mapa />
      </div>
    </Layout>
  );
}

export default Empresa;
