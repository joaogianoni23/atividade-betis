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

suspeitosRoutes.post("/", (req, res) => {

  const {
      nome,
      profissao,
      apostas,
      suspeita
  } = req.body;

  if (!nome) {
      return res.status(400).send({ message: "Coloque um nome para o suspeito" })
  }

  if (!profissao) {
      return res.status(400).send({ message: "Coloque uma profissão" })
  }

  if (suspeita == "") {
      return res.status(400).send({ message: "Coloque o nivel de suspeita" })
  }


  const novoSuspeito = {
      id: Math.floor(Math.random() * 1000),
      nome,
      profissao,
      apostas,
      suspeita
  }

  suspeitos.push(novoSuspeito)
  return res.status(201).send("Suspeito criado com sucesso")
});


export default suspeitosRoutes;