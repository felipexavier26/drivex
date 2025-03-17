
<h1>Sistema de Gerenciamento de Veículos - Laravel API + React</h1>

<h4>Descrição</h4>

<p>
Este projeto é um sistema completo de gerenciamento para uma agência de veículos. Ele permite a visualização e gerenciamento de carros, com detalhes completos, imagens, localização da loja via mapa, contato via WhatsApp e uma página de financiamento.
</p>

<h1>Tecnologias Utilizadas</h1>
<li><strong>Laravel: </strong> Framework PHP utilizado para construir o backend e a API RESTful.</li>
<li><strong>React.js:</strong>  Frontend interativo</li>
<li><strong>MySQL: </strong> Banco de dados</li>
<li><strong>Leaflet.js: </strong> Mapa interativo para localização da loja</li>
<li><strong>Bootstrap: </strong> Estilização da interface</li>
<li><strong>Axios: </strong> Requisições HTTP para a API</li>

<h1>Funcionalidades</h1>
<li>✅ Listagem de veículos com imagens e detalhes completos</li>
<li>✅ Página de financiamento com simulação</li>
<li>✅ Contato direto via WhatsApp</li>
<li>✅ Localização da loja com mapa interativo</li>
<li>✅ API segura e escalável com Laravel</li>
<li>✅ Interface responsiva e intuitiva com React</li>
<br>


<h1>Instruções de Instalação e Execução</h1>
<li><strong>PHP: </strong> >= 8.0</li>
<li><strong>Composer:</strong> Para gerenciar as dependências do Laravel</li>
<li><strong>Node.js e npm:</strong> Para o frontend React</li>
<li><strong>Banco de Dados: </strong> Configurado e acessível MySQL</li>



1. **Clone o repositório:**
   ```bash
      git clone https://github.com/seu-usuario/drivex.git
      cd drivex

2. **Instale as Dependências:**
   ```bash
     composer install


3. **Configure o Arquivo .env**
   ```bash
   cp .env.example .env

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=drivex
    DB_USERNAME=root
    DB_PASSWORD=   

4. **Gere a Chave da Aplicação:**
   ```bash
   php artisan key:generate

5. **Crie o Banco de Dados**
   ```bash
    php artisan migrate --seed

6. **Rode as Migrações**<br>
    ```bash    
    php artisan migrate

    
7. **Inicie o Servidor**
   ```bash
    php artisan serve


<h1>🎨 Frontend - React.js </h1>

1. **Acesse a pasta do frontend e instale as dependências:**
   ```bash
    npm install

2. **Inicie o frontend::**
   ```bash
    npm run dev


![image](https://github.com/user-attachments/assets/e906eb74-f2b0-4644-893d-864f1c4dcfd9)

