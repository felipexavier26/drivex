import React, { useState } from "react";
import Layout from "../Layout";
import banner from '../../../../public/build/assets/img/banner.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faFileAlt, faIdCard } from '@fortawesome/free-solid-svg-icons';

export default function Financiamento() {
  const [formData, setFormData] = useState({
    cnh: "",
    comprovanteResidencia: "",
    comprovanteRenda: "",
    marca: "",
    modelo: "",
    anoModelo: "",
    cor: "",
    valorVeiculo: "",
    valorEntrada: "",
    qtdPrestacoes: "",
    nome: "",
    cpf: "",
    rg: "",
    dataNascimento: "",
    nomeMae: "",
    nomePai: "",
    naturalidade: "",
    estadoCivil: "",
    sexo: "",
    email: "",
    telefoneFixo: "",
    telefoneCelular: "",
    endereco: "",
    numero: "",
    complemento: "",
    cep: "",
    bairro: "",
    cidade: "",
    estado: "",
    tempoResidencia: "",
    empresa: "",
    cnpj: "",
    cargo: "",
    renda: "",
    enderecoEmpresa: "",
    numeroEmpresa: "",
    complementoEmpresa: "",
    cepEmpresa: "",
    bairroEmpresa: "",
    cidadeEmpresa: "",
    estadoEmpresa: "",
    telefoneEmpresa: "",
    tempoEmprego: "",
    banco: "",
    agencia: "",
    conta: "",
    tempoConta: "",
    referenciaPessoal1Nome: "",
    referenciaPessoal1Telefone: "",
    referenciaPessoal2Nome: "",
    referenciaPessoal2Telefone: "",
    informacoesAdicionais: "",
    politicaPrivacidade: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      politicaPrivacidade: !formData.politicaPrivacidade
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 bg-gray-100">
        <img src={banner} alt="Logo" className="mb-5" />


        <h1 className="text-3xl font-semibold text-red-700 mt-10">Aprove seu Financiamento On-Line</h1>
        <p className="text-lg mt-2">Preencha o formulário abaixo para aprovar seu financiamento.</p>


        <h1 className="text-3xl font-semibold text-red-700 mt-10">Documentações</h1>


        <div className="flex justify-center mt-6">
          <div className="flex flex-col items-center mx-14 mb-8">
            <p className="mb-5">CNH</p>
            <FontAwesomeIcon icon={faListAlt} className="text-[80px] mb-3" />
            <p className="mt-5">(Carteira Nacional de Habilitação)</p>
          </div>

          <div className="flex flex-col items-center mx-14 mb-8">
            <p className="mb-5">Comprovante de Residência</p>
            <FontAwesomeIcon icon={faFileAlt} className="text-[80px] mb-3" />
            <p className="mt-5">(Conta de Água, Luz, Telefone, Cartão de Crédito)</p>
          </div>

          <div className="flex flex-col items-center mx-14 mb-8">
            <p className="mb-5">Comprovante de Renda</p>
            <FontAwesomeIcon icon={faIdCard} className="text-[80px] mb-3" />
            <p className="mt-5">(Contra-Cheque, Extrato Bancário últimos 90 dias,<br /> Imposto de Renda)</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-red-700">Dados do Veículo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col">
                <label htmlFor="marca">Marca</label>
                <input
                  type="text"
                  id="marca"
                  name="marca"
                  placeholder="Ex: Volkswagen"
                  value={formData.marca}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="modelo">Modelo</label>
                <input
                  type="text"
                  id="modelo"
                  name="modelo"
                  placeholder="Ex: Golf"
                  value={formData.modelo}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="anoModelo">Ano/Modelo</label>
                <input
                  type="text"
                  id="anoModelo"
                  name="anoModelo"
                  placeholder="Ex: 2021"
                  value={formData.anoModelo}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cor">Cor</label>
                <input
                  type="text"
                  id="cor"
                  name="cor"
                  placeholder="Ex: Preto"
                  value={formData.cor}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="valorVeiculo">Valor do Veículo</label>
                <input
                  type="text"
                  id="valorVeiculo"
                  name="valorVeiculo"
                  placeholder="R$ 00.000,00"
                  value={formData.valorVeiculo}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="valorEntrada">Valor da Entrada</label>
                <input
                  type="text"
                  id="valorEntrada"
                  name="valorEntrada"
                  placeholder="R$ 00.000,00"
                  value={formData.valorEntrada}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="qtdPrestacoes">Quantidade de Prestações</label>
                <input
                  type="number"
                  id="qtdPrestacoes"
                  name="qtdPrestacoes"
                  placeholder="Ex: 24 parcelas"
                  value={formData.qtdPrestacoes}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Dados Pessoais */}
          <div>
            <h3 className="text-2xl font-semibold text-red-700">Dados Pessoais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  placeholder="Seu CPF"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="rg">RG</label>
                <input
                  type="text"
                  id="rg"
                  name="rg"
                  placeholder="Seu RG"
                  value={formData.rg}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="dataNascimento">Data de Nascimento</label>
                <input
                  type="date"
                  id="dataNascimento"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="nomeMae">Nome da Mãe</label>
                <input
                  type="text"
                  id="nomeMae"
                  name="nomeMae"
                  placeholder="Nome da Mãe"
                  value={formData.nomeMae}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="nomePai">Nome do Pai</label>
                <input
                  type="text"
                  id="nomePai"
                  name="nomePai"
                  placeholder="Nome do Pai"
                  value={formData.nomePai}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="naturalidade">Naturalidade</label>
                <input
                  type="text"
                  id="naturalidade"
                  name="naturalidade"
                  placeholder="Naturalidade"
                  value={formData.naturalidade}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="estadoCivil">Estado Civil</label>
                <select
                  id="estadoCivil"
                  name="estadoCivil"
                  value={formData.estadoCivil}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                >
                  <option value="">-- Selecione --</option>
                  <option value="solteiro">Solteiro</option>
                  <option value="casado">Casado</option>
                  <option value="divorciado">Divorciado</option>
                  <option value="viuvo">Viúvo</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="sexo">Sexo</label>
                <select
                  id="sexo"
                  name="sexo"
                  value={formData.sexo}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                >
                  <option value="">-- Selecione --</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="telefoneFixo">Telefone Fixo</label>
                <div className="flex">
                  <input
                    type="text"
                    id="dddFixo"
                    name="dddFixo"
                    placeholder="DDD"
                    value={formData.dddFixo}
                    onChange={handleInputChange}
                    className="border p-2 rounded-md w-20 mr-2"
                  />
                  <input
                    type="text"
                    id="telefoneFixo"
                    name="telefoneFixo"
                    placeholder="Número"
                    value={formData.telefoneFixo}
                    onChange={handleInputChange}
                    className="border p-2 rounded-md flex-1"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="telefoneCelular">Telefone Celular</label>
                <div className="flex">
                  <input
                    type="text"
                    id="dddCelular"
                    name="dddCelular"
                    placeholder="DDD"
                    value={formData.dddCelular}
                    onChange={handleInputChange}
                    className="border p-2 rounded-md w-20 mr-2"
                  />
                  <input
                    type="text"
                    id="telefoneCelular"
                    name="telefoneCelular"
                    placeholder="Número"
                    value={formData.telefoneCelular}
                    onChange={handleInputChange}
                    className="border p-2 rounded-md flex-1"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="endereco">Endereço</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  placeholder="Seu endereço"
                  value={formData.endereco}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="numero">Número</label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  placeholder="Número"
                  value={formData.numero}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="complemento">Complemento</label>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  placeholder="Complemento"
                  value={formData.complemento}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cep">CEP</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  placeholder="CEP"
                  value={formData.cep}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="bairro">Bairro</label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  placeholder="Bairro"
                  value={formData.bairro}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cidade">Cidade</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  placeholder="Cidade"
                  value={formData.cidade}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="estado">Estado</label>
                <select
                  id="estado"
                  name="estado"
                  value={formData.estado}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                >
                  <option value="">-- Selecione --</option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="MG">Minas Gerais</option>
                  {/* Adicione os outros estados aqui */}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="tempoResidencia">Tempo de Residência</label>
                <input
                  type="text"
                  id="tempoResidencia"
                  name="tempoResidencia"
                  placeholder="Ex: 2 anos"
                  value={formData.tempoResidencia}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
            </div>
          </div>


          {/* Dados Profissionais */}
          <div>
            <h3 className="text-2xl font-semibold text-red-700">Dados Profissionais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col">
                <label htmlFor="empresa">Empresa onde trabalha</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  placeholder="Nome da empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cnpj">CNPJ</label>
                <input
                  type="text"
                  id="cnpj"
                  name="cnpj"
                  placeholder="CNPJ da empresa"
                  value={formData.cnpj}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cargo">Cargo/Função</label>
                <input
                  type="text"
                  id="cargo"
                  name="cargo"
                  placeholder="Seu cargo ou função"
                  value={formData.cargo}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="renda">Renda</label>
                <input
                  type="number"
                  id="renda"
                  name="renda"
                  placeholder="R$"
                  value={formData.renda}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="rendaAtual">Renda Atual</label>
                <input
                  type="number"
                  id="rendaAtual"
                  name="rendaAtual"
                  placeholder="R$"
                  value={formData.rendaAtual}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="enderecoEmpresa">Endereço da empresa</label>
                <input
                  type="text"
                  id="enderecoEmpresa"
                  name="enderecoEmpresa"
                  placeholder="Endereço da empresa"
                  value={formData.enderecoEmpresa}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="numeroEmpresa">Número</label>
                <input
                  type="text"
                  id="numeroEmpresa"
                  name="numeroEmpresa"
                  placeholder="Número da empresa"
                  value={formData.numeroEmpresa}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="complementoEmpresa">Complemento</label>
                <input
                  type="text"
                  id="complementoEmpresa"
                  name="complementoEmpresa"
                  placeholder="Complemento do endereço"
                  value={formData.complementoEmpresa}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cepEmpresa">CEP</label>
                <input
                  type="text"
                  id="cepEmpresa"
                  name="cepEmpresa"
                  placeholder="CEP da empresa"
                  value={formData.cepEmpresa}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="bairroEmpresa">Bairro</label>
                <input
                  type="text"
                  id="bairroEmpresa"
                  name="bairroEmpresa"
                  placeholder="Bairro da empresa"
                  value={formData.bairroEmpresa}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="cidadeEmpresa">Cidade</label>
                <input
                  type="text"
                  id="cidadeEmpresa"
                  name="cidadeEmpresa"
                  placeholder="Cidade da empresa"
                  value={formData.cidadeEmpresa}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="estadoEmpresa">Estado</label>
                <select
                  id="estadoEmpresa"
                  name="estadoEmpresa"
                  value={formData.estadoEmpresa}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                >
                  <option value="">-- Selecione --</option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="MG">Minas Gerais</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="telefoneEmpresa">Telefone da Empresa</label>
                <div className="flex">
                  <input
                    type="text"
                    id="dddEmpresa"
                    name="dddEmpresa"
                    placeholder="DDD"
                    value={formData.dddEmpresa}
                    onChange={handleInputChange}
                    className="border p-2 rounded-md w-20 mr-2"
                  />
                  <input
                    type="text"
                    id="telefoneEmpresa"
                    name="telefoneEmpresa"
                    placeholder="Número"
                    value={formData.telefoneEmpresa}
                    onChange={handleInputChange}
                    className="border p-2 rounded-md flex-1"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="tempoEmprego">Tempo neste Emprego</label>
                <input
                  type="text"
                  id="tempoEmprego"
                  name="tempoEmprego"
                  placeholder="Ex: 3 anos"
                  value={formData.tempoEmprego}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
            </div>
          </div>


          <div>
            <h3 className="text-2xl font-semibold text-red-700">Referência Bancária</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col">
                <label htmlFor="banco">Banco</label>
                <input
                  type="text"
                  id="banco"
                  name="banco"
                  placeholder="Nome do banco"
                  value={formData.banco}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="agencia">Agência</label>
                <input
                  type="text"
                  id="agencia"
                  name="agencia"
                  placeholder="Número da agência"
                  value={formData.agencia}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="conta">Conta</label>
                <input
                  type="text"
                  id="conta"
                  name="conta"
                  placeholder="Número da conta"
                  value={formData.conta}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="tempoConta">Tempo de Conta</label>
                <input
                  type="text"
                  id="tempoConta"
                  name="tempoConta"
                  placeholder="Tempo de conta"
                  value={formData.tempoConta}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
            </div>
          </div>



          {/* Referência Pessoal */}
          <div>
            <h3 className="text-2xl font-semibold text-red-700">Referência Pessoal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col">
                <label htmlFor="nomeReferencia1">Nome</label>
                <input
                  type="text"
                  id="nomeReferencia1"
                  name="nomeReferencia1"
                  placeholder="Nome da referência"
                  value={formData.nomeReferencia1}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="telefoneReferencia1">Telefone</label>
                <div className="flex">
                  <input
                    type="text"
                    id="dddReferencia1"
                    name="dddReferencia1"
                    placeholder="DDD"
                    value={formData.dddReferencia1}
                    onChange={handleInputChange}
                    className="border p-2 rounded-md w-20 mr-2"
                  />
                  <input
                    type="text"
                    id="telefoneReferencia1"
                    name="telefoneReferencia1"
                    placeholder="Número"
                    value={formData.telefoneReferencia1}
                    onChange={handleInputChange}
                    className="border p-2 rounded-md flex-1"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="nomeReferencia2">Nome</label>
                <input
                  type="text"
                  id="nomeReferencia2"
                  name="nomeReferencia2"
                  placeholder="Nome da referência"
                  value={formData.nomeReferencia2}
                  onChange={handleInputChange}
                  className="border p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="telefoneReferencia2">Telefone</label>
                <div className="flex">
                  <input
                    type="text"
                    id="dddReferencia2"
                    name="dddReferencia2"
                    placeholder="DDD"
                    value={formData.dddReferencia2}
                    onChange={handleInputChange}
                    className="border p-2 rounded-md w-20 mr-2"
                  />
                  <input
                    type="text"
                    id="telefoneReferencia2"
                    name="telefoneReferencia2"
                    placeholder="Número"
                    value={formData.telefoneReferencia2}
                    onChange={handleInputChange}
                    className="border p-2 rounded-md flex-1"
                  />
                </div>
              </div>

            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-red-700">Informações Adicionais</h3>
            <div className="mt-4">
              <textarea
                id="informacoesAdicionais"
                name="informacoesAdicionais"
                placeholder="Digite informações adicionais"
                value={formData.informacoesAdicionais}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full h-32"
              />
            </div>
          </div>




          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="politicaPrivacidade"
              name="politicaPrivacidade"
              checked={formData.politicaPrivacidade}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="politicaPrivacidade">
              Lí e concordo com a <a href="/politica-de-privacidade" className="text-blue-600">política de privacidade</a>
            </label>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-red-800 text-white px-6 py-2 rounded-md"
            >
              Enviar Solicitação
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
