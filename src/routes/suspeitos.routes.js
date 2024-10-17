import { Router } from "express";

const suspeitosRoutes = Router();

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

suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

suspeitosRoutes.get("/:id ", (req, res) => {
  return res.send(200).json(suspeitos);
});

suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  const suspeito = suspeitos.find((suspects) => suspects.id == id);

  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `Suspeito com id ${id} não encontrado!` });
  }

  return res.status(200).json(suspeito);
});


export default suspeitosRoutes;