interface Product {
  name: string;
  img: string;
  firm: string;
  price: string;
  site: string;
  id: string;
}

interface Partner {
  name: string;
  img: string;
  firm: string;
  site: string;
  id: string;
}

interface MockData {
  products: Product[];
  partners: Partner[];
}

export const MOCK_ARR: MockData = {
  products: [
    {
      name: "Electronic Granite Keyboard",
      img: "https://loremflickr.com/640/480/nature",
      firm: "Miranda Ernser",
      price: "31.00",
      site: "https://reliable-code.name",
      id: "1",
    },
    {
      name: "Gorgeous Metal Hat",
      img: "https://loremflickr.com/642/481/nature",
      firm: "Claudia Kris",
      price: "731.00",
      site: "http://neat-chicory.biz",
      id: "2",
    },
    {
      name: "Bespoke Steel Soap",
      img: "https://loremflickr.com/641/488/nature",
      firm: "Grant Thiel",
      price: "765.00",
      site: "https://well-lit-majority.biz",
      id: "3",
    },
    {
      name: "Handcrafted Concrete Table",
      img: "https://loremflickr.com/682/487/nature",
      firm: "Bernice Jast",
      price: "142.00",
      site: "https://querulous-disengagement.com",
      id: "4",
    },
    {
      name: "Small Bronze Computer",
      img: "https://loremflickr.com/640/480/nature",
      firm: "Frederick Bogisich",
      price: "202.00",
      site: "http://frightened-oats.info",
      id: "5",
    },
    {
      name: "Incredible Wooden Pizza",
      img: "https://loremflickr.com/640/486/nature",
      firm: "Yolanda Baumbach",
      price: "326.00",
      site: "https://faithful-communist.com",
      id: "6",
    },
    {
      name: "Bespoke Granite Soap",
      img: "https://loremflickr.com/640/493/nature",
      firm: "Toby Bailey PhD",
      price: "306.00",
      site: "http://haunting-minister.org",
      id: "7",
    },
    {
      name: "Gorgeous Wooden Pizza",
      img: "https://loremflickr.com/641/486/nature",
      firm: "Jerome Braun",
      price: "541.00",
      site: "https://peppery-gondola.biz",
      id: "8",
    },
    {
      name: "Luxurious Steel Gloves",
      img: "https://loremflickr.com/640/455/nature",
      firm: "Tricia Mueller",
      price: "493.00",
      site: "https://jealous-chairman.org",
      id: "9",
    },
    {
      name: "Recycled Bronze Chicken",
      img: "https://loremflickr.com/640/483/nature",
      firm: "Mr. Lauren Stracke",
      price: "405.00",
      site: "https://whopping-buffet.name",
      id: "10",
    },
    {
      name: "Oriental Steel Salad",
      img: "https://loremflickr.com/640/423/nature",
      firm: "Grace Morissette",
      price: "149.00",
      site: "http://that-colonial.info",
      id: "11",
    },
    {
      name: "Generic Wooden Fish",
      img: "https://loremflickr.com/640/481/nature",
      firm: "Leah Halvorson",
      price: "860.00",
      site: "https://honorable-slate.info",
      id: "12",
    },
    {
      name: "Unbranded Bronze Soap",
      img: "https://loremflickr.com/640/436/nature",
      firm: "Miss Rolando Stracke",
      price: "464.00",
      site: "https://opulent-colonization.org",
      id: "13",
    },
    {
      name: "Rustic Frozen Pizza",
      img: "https://loremflickr.com/640/461/nature",
      firm: "Emma Schultz",
      price: "453.00",
      site: "https://deserted-chuck.net",
      id: "14",
    },
    {
      name: "Unbranded Cotton Hat",
      img: "https://loremflickr.com/620/490/nature",
      firm: "Gertrude Beer",
      price: "167.00",
      site: "http://probable-macro.com",
      id: "15",
    },
    {
      name: "Ergonomic Cotton Sausages",
      img: "https://loremflickr.com/640/480/technics",
      firm: "Don Beer",
      price: "69.00",
      site: "https://shocked-gran.name",
      id: "16",
    },
    {
      name: "Intelligent Bronze Chips",
      img: "https://loremflickr.com/640/480/technics",
      firm: "Justin Dach",
      price: "16.00",
      site: "http://faithful-snowman.net",
      id: "17",
    },
    {
      name: "Handcrafted Soft Bike",
      img: "https://loremflickr.com/640/480/technics",
      firm: "Alberto Buckridge",
      price: "680.00",
      site: "http://acceptable-juggernaut.com",
      id: "18",
    },
    {
      name: "Practical Concrete Car",
      img: "https://loremflickr.com/640/480/technics",
      firm: "Kerry Rutherford",
      price: "8.00",
      site: "https://last-million.info",
      id: "19",
    },
    {
      name: "Small Rubber Sausages",
      img: "https://loremflickr.com/640/480/technics",
      firm: "Dr. Nettie Dibbert I",
      price: "681.00",
      site: "https://critical-father-in-law.com",
      id: "20",
    },
  ],
  partners: [
    {
      name: "BMW",
      img: "https://www.bmw.ru/content/dam/bmw/marketRU/bmw_ru/topics/fascination-bmw/bmw-m-logo-and-colors/bmw-m-logo-and-colors.jpg",
      firm: "Bayerische Motoren Werke GmbH",
      site: "https://https://www.bmw.ru/ru/index.html",
      id: "21",
    },
    {
      name: "Toyota",
      img: "https://www.toyota.ru/content/dam/logos/large-logo-toyota.jpeg",
      firm: "Toyota Motor Corporation",
      site: "https://www.toyota.ru/",
      id: "22",
    },
    {
      name: "ЛУКОЙЛ",
      img: "https://im.kommersant.ru/gboxtexts/sp_com/logos/002.jpg",
      firm: "Нефтяная компания ЛУКОЙЛ",
      site: "https://lukoil.ru/",
      id: "23",
    },
    {
      name: "X5 Group",
      img: "https://cdn.forbes.ru/forbes-static/new/2022/10/X5Group-copy-6357f62cb69a2.jpg",
      firm: "X5 Retail Group N.V.",
      site: "https://www.x5.ru/ru/",
      id: "24",
    },
    {
      name: "Tesla",
      img: "https://market.us/wp-content/uploads/2019/09/Tesla_Logo.jpg",
      firm: "Tesla Motors, Inc.",
      site: "https://www.tesla.com/",
      id: "25",
    },
    {
      name: "Shell",
      img: "https://businessreviewlive.com/wp-content/uploads/2021/10/ROyal-Dutch-Shell.png",
      firm: "Royal Dutch Shell",
      site: "https://www.shell.com/",
      id: "26",
    },
    {
      name: "Nordberg",
      img: "https://topmaster-shop.ru/nordberg.jpg",
      firm: "NORDBERG LTD",
      site: "https://nordberg.ru/",
      id: "27",
    },
    {
      name: "Werther-OMA",
      img: "https://mosremtech.ru/upload/iblock/9ec/9ec2f0db108cf366b58abf6bd0e11271.png",
      firm: "WERTHER INTERNATIONAL",
      site: "https://oma-werther.ru/",
      id: "28",
    },
  ],
};
