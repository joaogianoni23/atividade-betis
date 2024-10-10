import { Router } from "express";

const suspeitosRoutes = Router();

// Array com candidatos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "João Vitor",
    profissao: "Veterinário",
    apostas: true,
    suspeita: "Médio"
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Vitor Sampaio",
    profissao: "Vereador",
    apostas: false,
    suspeita: "Alto",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Rafael Sampaio",
    profissao: "Bancário",
    apostas: true,
    suspeita: "Alto"
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Giovanna",
    profissao: "Farmaceutica",
    apostas: false,
    suspeita: "Baixa"
  },
];

// Rota para listar todos os candidatos
suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

export default suspeitosRoutes;