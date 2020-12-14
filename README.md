<h1 align="center">
Projeto de teste de conhecimentos para a empresa OI
</h1>

<p align="center">Este projeto foi desenvolvido exclusivamente para teste de conhecimentos referente a vaga de desenvolvedor Fullstack da empresa OI</p>

<p align="center">
  <a href="https://github.com/leandrogoncalves/nestjs_smartranking_api/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/leandrogoncalves/nestjs_smartranking_api?color=%237159c1&logoColor=%237159c1&style=flat" alt="Contributors">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/github/license/leandrogoncalves/nestjs_smartranking_api?color=%237159c1&logo=mit" alt="License">
  </a>
</p>

<hr>

## Participantes

| [<img src="https://avatars3.githubusercontent.com/u/12039813?s=460&u=78af286aeb7f9d808dc21635e331d0ecdb08e8a7&v=4" width="75px;"/>](https://github.com/leandrogoncalves) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


| [Leandro Gonçalves](https://github.com/leandrogoncalves)

## Requisitos

- [x] História 102 - Lista pública de telefones
- [x] História 102 - Gestão de pessoas


## Dependências

- NodeJs : v14.0.0
- Npm : v6.14.0
- React: v17.0.1
- Docker: v2.5.0.1


## Configuração inicial

1. Clone o repositório: `git clone git@github.com:leandrogoncalves/teste_oi_fullstack.git`
1. Acesse a pasta do projeto: `cd teste_oi_fullstack`
1. Inicialize o mongodb através dos scripts: `./scripts/mongodb.sh && create_user_mongodb.sh`
1. Execute o script de inicialização do backend: `./scripts/startup.sh`
1. Acesse o link para carregar os estados para o mongodb: `localhost:3333/api/v1/state/bulk-import`
1. Acesse o link para carregar os municipios para o mongodb: `localhost:3333/api/v1/city/bulk-import`


## Execução

- Acesse http://localhost:8081
