const imoveis = [
  {
    id:'e2b68630-1969-4d6b-9721-01efc6a4a47f',
    type: 'TERRENO',
    price: 5000,
    street: 'Rua josoares do balacobaco 521',
    cep: "15800",
    city: 'CATANDUVA',
     estado: 'SP',
    description: 'Ótima oportunidade para investimento! Este amplo terreno, localizado em uma área estratégica da cidade, oferece um espaço ideal para construção residencial ou comercial. Com fácil acesso a vias principais, o lote está situado em um bairro tranquilo e valorizado, proporcionando segurança e comodidade.',
    features: [
      {
        type: "BATHROOM",
        description: "Banheiros",
        quantity:0,
      },
      {
        type: "GARAGE",
        description: "Garagem",
        quantity: 0,
      },
      {
        type: "LIVINGROOM",
        description: "Sala",
        quantity: 0,
      },
      {
        type: "BEDROOM",
        description: "Quarto(s)",
        quantity: 0,
      }
    ],

    photos: [
      {
        img1:'https://images.pexels.com/photos/7986062/pexels-photo-7986062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        img2: "https://images.pexels.com/photos/7986063/pexels-photo-7986063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img3:"https://images.pexels.com/photos/16551361/pexels-photo-16551361/free-photo-of-view-of-a-cropland-and-forest-in-the-background-under-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"        
      }
    ],
  },
  {
    id: 'ba36f342-f673-4d76-997c-2df40aef3492',
    type: 'CASA',
    price: 20000,
    street: 'Rua santo antonio 876',
    cep: "15800",
    city: 'CATANDUVA',
     estado: 'SP',
    description: 'Localizada em um bairro tranquilo e seguro, esta casa é perfeita para quem busca conforto e qualidade de vida. Com uma arquitetura moderna e bem planejada, ela conta com [X] quarto(s), [X] banheiros, uma ampla sala de estar e uma cozinha funcional. Área externa com quintal generoso, espaço gourmet com churrasqueira e garagem coberta para 2 carros. Localizada em bairro tranquilo e valorizado, próxima a escolas, mercados e vias de fácil acesso. Ideal para famílias que desejam morar bem com segurança e qualidade de vida.Localizada em um bairro tranquilo e seguro, esta casa é perfeita para quem busca conforto e qualidade de vida. Com uma arquitetura moderna e bem planejada, ela conta com [X] quarto(s), [X] banheiros, uma ampla sala de estar e uma cozinha funcional. Área externa com quintal generoso, espaço gourmet com churrasqueira e garagem coberta para 2 carros. Localizada em bairro tranquilo e valorizado, próxima a escolas, mercados e vias de fácil acesso. Ideal para famílias que desejam morar bem com segurança e qualidade de vida.' ,

    features: [
      {
      type: "BATHROOM",
      description: "Banheiros",
      quantity: 1,
    },
    {
      type: "GARAGE",
      description: "Garagem",
      quantity: 1,
    },
    {
      type: "LIVINGROOM",
      description: "Sala",
      quantity: 1,
    },
    {
      type: "BEDROOM",
      description: "Quarto(s)",
      quantity: 1,
    }
  ],
    photos: [{
      img1:"https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2:"https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img3:"https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img4:"https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img5:"https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           
    }
   ],
  },
  {
    id: 'b1924db1-8439-4b4c-a39c-5bea593ff156',
    type: 'APARTAMENTO',
    price: 40000,
    street: 'Rua Zacarias cascalho 85',
    cep: "15870-000",
    city: 'CATIGUA',
     estado: 'SP',
    description: 'fodase',

    features: [{
      type: "BATHROOM",
      description: "Banheiros",
      quantity: 2,
    },
    {
      type: "GARAGE",
      description: "Garagem",
      quantity: 1,
    },
    {
      type: "LIVINGROOM",
      description: "Sala",
      quantity: 1,
    },
    {
      type: "BEDROOM",
      description: "Quarto(s)",
      quantity: 3,
    }
  ],
    photos: [{
      img1:"https://images.pexels.com/photos/1717272/pexels-photo-1717272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2:"https://images.pexels.com/photos/19776463/pexels-photo-19776463/free-photo-of-spacious-bathroom-with-white-bathtub-and-beige-walls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img3:"https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img4:"https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img5:"https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           
    }
  ],

  },
  {
    id: '4d93dde1-49c5-4c27-8f1d-e2594e782963',
    type: 'CASA',
    price: 100000,
    street: 'AV. marciano alagoas',
    cep: "15880-000",
    city: 'TABAPUA',
     estado: 'SP',
    description: 'fodase',

    features: [{
      type: "BATHROOM",
      description: "Banheiros",
      quantity: 3,
    },
    {
      type: "GARAGE",
      description: "Garagem",
      quantity: 2,
    },
    {
      type: "LIVINGROOM",
      description: "Sala",
      quantity: 2,
    },
    {
      type: "BEDROOM",
      description: "Quarto(s)",
      quantity: 2,
    }
  ],
    photos: [{
      img1:"https://images.pexels.com/photos/4030036/pexels-photo-4030036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2:"https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img3:"https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img4:"https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }]
  },
];

module.exports = {
  imoveis,
}