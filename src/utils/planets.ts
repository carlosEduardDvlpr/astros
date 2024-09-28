export const planetsInfo = {
  Sun: {
    id: 'sol',
    color: 'rgb(255, 217, 0)',
    name: 'Sol',
    width: '1.392.700 km',
    distanceOfEarth: '149 600 000 km',
    velocity: '239km/s',
    delayOfTranslateForGalaxy: '200 milhões de anos terrestres',
    description:
      'O Sol é uma estrela anã amarela que os demais corpos celestes do Sistema Solar orbitam. Ele é formado por gases e não dispõe de nenhuma superfície sólida.O Sol é formado essencialmente por hélio e hidrogênio. A temperatura por lá é de cerca de 15.000.000°C',
  },
  Mercury: {
    id: 'mercurio',
    color: 'rgb(195, 238, 224)',
    name: 'Mercurio',
    width: '4.879 km',
    velocity: '170 km/h',
    delayOfTranslateForSun: '88 dias terrestres',
    delayOfRotate: '59 dias terrestres',
    distanceOfEarth: '194.083.200 km',
    description:
      'Mercúrio é considerado o menor planeta do Sistema Solar. A proximidade de Mercúrio com o Sol torna o desenvolvimento da vida nesse planeta bastante difícil.Devido à variação térmica, o planeta possui uma temperatura média de 179°C. Em geral, possui gases como hélio, sódio e oxigênio.',
  },
  Venus: {
    id: 'venus',
    color: 'rgb(231, 158, 0)',
    name: 'Vênus',
    width: '12.104 km',
    velocity: '35 km/h',
    delayOfTranslateForSun: '225 dias terrestres',
    delayOfRotate: '243 dias terrestres',
    distanceOfEarth: '108.000.000 km',
    description:
      'Vênus tem cerca de 800 milhões de anos e além do Sol e da Lua é o corpo celeste mais brilhante no céu.A sua superfície é coberta de lava e composta principalmente de dióxido de carbono e ácido sulfúrico. É isso que faz a temperatura aumentar a níveis suficientes para derreter o chumbo, podendo atingir 480°C',
  },
  Earth: {
    id: 'terra',
    color: 'rgb(0, 204, 255)',
    name: 'Terra',
    width: '12.742 km',
    velocity: '1675 km/h',
    delayOfTranslateForSun: '365 dias',
    delayOfRotate: '24 horas',
    description:
      'O planeta Terra é o maior dentre os quatro planetas rochosos que fazem parte do Sistema Solar.A Terra possui sua estrutura interna dividida em: crosta terrestre, manto e núcleo. Além da estrutura interna, há também a externa que corresponde à litosfera, hidrosfera, biosfera e atmosfera, que oferecem as condições favoráveis para a existência de vida.',
  },
  Mars: {
    id: 'marte',
    color: 'rgb(255, 51, 0)',
    name: 'Marte',
    width: '6779 km',
    velocity: '87 km/h',
    delayOfTranslateForSun: '687 dias terrestres',
    delayOfRotate: '25 horas terrestres',
    distanceOfEarth: '54.000.000 km',
    description:
      "Marte é um planeta rochoso com uma atmosfera fina, com características de superfície que lembram tanto as crateras de impacto da Lua quanto vulcões, desertos e etc. É descrito como o 'Planeta Vermelho', porque o óxido de ferro em sua superfície lhe dá uma aparência avermelhada, a temperatura varia desde -125 graus Celsius no inverno até 22 graus Celsius no verão Marciano.",
  },
  Jupiter: {
    id: 'jupiter',
    color: 'rgb(245, 217, 126)',
    name: 'Júpiter',
    width: '139.820 km',
    velocity: '47.000 km/h',
    delayOfTranslateForSun: '4.332 dias terrestres',
    delayOfRotate: '10 horas terrestres',
    distanceOfEarth: '590.000.000 km',
    description:
      'Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa. É um planeta gasoso, que não é composta de matéria sólida.Sua atmosfera externa é visivelmente dividida em diversas faixas, resultando em tempestades nas regiões onde as faixas se encontram. Uma dessas tempestades é a Grande Mancha Vermelha. Sua temperatura está em torno de 20.000°C.',
  },
  Saturn: {
    id: 'saturno',
    color: 'rgb(245, 217, 126)',
    name: 'Saturno',
    width: '116.460 km',
    velocity: '34.700 km/h',
    delayOfTranslateForSun: '10.760 dias terrestres',
    delayOfRotate: '11 horas terrestres',
    distanceOfEarth: '1.673.000.000 km',
    description:
      'Pertencente ao grupo dos gigantes gasosos, possui um pequeno núcleo rochoso, circundado por uma espessa camada de hidrogênio metálico e hélio. Uma das origens de seu campo magnético é a rápida rotação do planeta (menos de onze horas), que faz ainda que Saturno seja o planeta mais achatado do Sistema Solar.  Uma das características mais notáveis de Saturno é seu complexo e proeminente sistema de anéis, formados por gelo de água. Sua temperatura está em torno de -138°C',
  },
  Uranus: {
    id: 'urano',
    color: 'rgb(124, 221, 228)',
    name: 'Urano',
    width: '50.724 km',
    velocity: '27.400 km/h',
    delayOfTranslateForSun: '30.681 dias terrestres',
    delayOfRotate: '17 horas terrestres',
    distanceOfEarth: '2.800.000.000 km',
    description:
      "Anunciado em 13 de março de 1781, Urano foi o primeiro planeta a ser descoberto por meio de um telescópio.Urano tem uma composição similar à de Netuno, os astrônomos algumas vezes os colocam em uma categoria separada, os 'gigantes gelados'. A atmosfera de Urano contem 'gelos' tais como água, amônia e metano. É a mais fria atmosfera planetária no Sistema Solar, com uma temperatura mínima de –224 °C.",
  },
  Neptune: {
    id: 'netuno',
    color: 'rgb(33, 98, 240)',
    name: 'Netuno',
    width: '49.244 km',
    velocity: '19.620 km/h',
    delayOfTranslateForSun: '60.190 dias terrestres',
    delayOfRotate: '16 horas terrestres',
    distanceOfEarth: '4.000.000.000 km',
    description:
      'O planeta é formado por um pequeno núcleo rochoso ao redor do qual encontra-se uma camada formada possivelmente por água, amônia e metano sobre a qual está sua atmosfera, constituída de hidrogênio e hélio. Contem os ventos mais rápidos do Sistema Solar, 2 000 km/h.A pequena quantidade de metano na atmosfera é responsável pela coloração azul do planeta, lá a temperatura é -245°C',
  },
};

export interface Planet {
  id: string;
  color: string;
  name: string;
  width: string;
  velocity: string;
  delayOfTranslateForSun?: string;
  delayOfRotate?: string;
  description: string;
  distanceOfEarth?: string;
  delayOfTranslateForGalaxy?: string;
}

export interface PlanetsInterface {
  Sun: Omit<Planet, 'delayOfRotate' & 'delayOfTranslateForSun'>;
  Mercury: Omit<Planet, 'delayOfTranslateForGalaxy'>;
  Venus: Omit<Planet, 'delayOfTranslateForGalaxy'>;
  Earth: Omit<Planet, 'distanceOfEarth' & 'delayOfTranslateForGalaxy'>;
  Mars: Omit<Planet, 'delayOfTranslateForGalaxy'>;
  Jupiter: Omit<Planet, 'delayOfTranslateForGalaxy'>;
  Saturn: Omit<Planet, 'delayOfTranslateForGalaxy'>;
  Uranus: Omit<Planet, 'delayOfTranslateForGalaxy'>;
  Neptune: Omit<Planet, 'delayOfTranslateForGalaxy'>;
}
