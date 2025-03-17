import React, { useState } from "react";
import Layout from "../Layout";

function Contato() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
        politica: false,
        ofertas: false,
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulário enviado:", formData);
        alert("Mensagem enviada com sucesso!");
    };

    return (
        <Layout>
            <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-center text-red-700 mb-6">
                    Entre em contato com a DSM Multimarcas
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Seu nome"
                            className="border p-2 rounded-md"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Seu e-mail"
                            className="border p-2 rounded-md"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor="telefone">Telefone</label>
                        <div className="flex">
                            <input
                                type="text"
                                id="ddd"
                                name="ddd"
                                placeholder="DDD"
                                className="border p-2 rounded-md w-20 mr-2"
                                required
                            />
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                                placeholder="Telefone"
                                className="border p-2 rounded-md flex-1"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor="assunto">Assunto</label>
                        <input
                            type="text"
                            id="assunto"
                            name="assunto"
                            value={formData.assunto}
                            onChange={handleChange}
                            placeholder="Assunto"
                            className="border p-2 rounded-md"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor="mensagem">Informações</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            placeholder="Digite sua mensagem"
                            className="border p-2 rounded-md h-32"
                            required
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="politica"
                                checked={formData.politica}
                                onChange={handleChange}
                                className="mr-2"
                                required
                            />
                            Lí e concordo com a política de privacidade
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="ofertas"
                                checked={formData.ofertas}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Quero receber promoções e ofertas.
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-red-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-800 transition"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </Layout>
    );
}

export default Contato;
