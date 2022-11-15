import navalha from "../assets/navalha.svg";
import pente from "../assets/pente.svg";
import barb from "../assets/barb.svg";
import secador from "../assets/secador.svg";
import joao from "../assets/joaobarber.jpg";
import roseevelt from "../assets/roseeveltbarber.jpg";
import avatarRoss from "../assets/avatarRoss.jpg";
import avatarPedro from "../assets/avatarPedro.svg";
import avatarJoao from "../assets/avatarJoao.svg";
import pedro from "../assets/pedrobarber.jpg";

export const features = [
  {
    id: "feature-1",
    name: "Corte Cabelo",
    info: "Cabelo cortado nas laterais e/ou no topo da cabeça.",
    image: secador,
    price: "25.00",
  },
  {
    id: "feature-2",
    name: "Corte e Barba",
    info: "Corte de cabelo completo e barba com toalha quente.",
    image: pente,
    price: "40.00",
  },
  {
    id: "feature-3",
    name: "Degradê Navalhado",
    image: navalha,
    info: "Graduação entre maquinas iniciando com a navalha, alternando entre tesoura ou tesoura e maquina.",
    price: "35.00",
  },
  {
    id: "feature-4",
    name: "Barba Prime",
    info: "Barba com vapor de Ozônio,gel shaving, óleo e pós barba.",
    image: barb,
    price: "28.00",
  },
];

export const barbers = [
  {
    id: 1,
    name: "João Weber",
    certficate: "2019, Workshop barbeiro de exelência SP",
    image: joao,
    avatar: avatarJoao,
  },
  {
    id: 2,
    name: "Ricardo Roseevelt",
    certficate: "mestre barbeiro e especialista em cores",
    image: roseevelt,
    avatar: avatarRoss,
  },
  {
    id: 3,
    name: "Pedro Snow",
    certficate: "especialista em corte e barba ",
    image: pedro,
    avatar: avatarPedro,
  },
];
