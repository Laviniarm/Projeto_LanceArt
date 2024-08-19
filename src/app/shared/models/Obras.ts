import { ObraDeArte } from './ObraDeArte';

export const OBRAS = [
  new ObraDeArte(
    '1',
    'Amores',
    'Joana Amorim',
    2024,
    2000.0,
    'assets/imgs/pexels-steve-1145720.jpg'
  ),
  {
    id: '2',
    titulo: 'O Eco do Vento',
    artista: 'Luca Dante',
    ano: 1985,
    valorInicial: 8000.0,
    imagem: 'assets/imgs/pexels-steve-1572386.jpg',
  },
  {
    id: '3',
    titulo: 'A Dança das Estrelas',
    artista: 'Mia Leclerc',
    ano: 1892,
    valorInicial: 5000.0,
    imagem: 'assets/imgs/pexels-steve-1585325.jpg',
  },
];
