import routePath from '../routes/routePath';

export const menuList = [
  {
    title: 'Product List',
    path: routePath.PRODUCT_LIST,
    icon: 'eos-icons:products',
  },
  {
    title: 'Order List',
    path: routePath.ORDER_LIST,
    icon: 'el:list-alt',
  },
  {
    title: 'New Order',
    path: routePath.NEW_ORDER,
    icon: 'fluent:task-list-add-20-regular',
  },
];

export const dummy = {
  id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
  cover:
    'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg',

  name: 'Nike Air Force 1 NDESTRUKT',
  code: '38BEE270',
  sku: 'WW75K5210YW/SV',
  tags: ['Dangal', 'The Sting', '2001: A Space Odyssey', "Singin' in the Rain"],
  price: 16.19,
  priceSale: 16.19,
  totalRating: 2.5,
  totalReview: 1920,
  ratings: [
    { name: '1 Star', starCount: 3170, reviewCount: 3838 },
    { name: '2 Star', starCount: 5146, reviewCount: 4900 },
    { name: '3 Star', starCount: 8068, reviewCount: 6524 },
    { name: '4 Star', starCount: 5158, reviewCount: 6160 },
    { name: '5 Star', starCount: 1607, reviewCount: 8787 },
  ],

  status: 'sale',
  inventoryType: 'out_of_stock',
  sizes: [
    '6',
    '7',
    '8',
    '8.5',
    '9',
    '9.5',
    '10',
    '10.5',
    '11',
    '11.5',
    '12',
    '13',
  ],
  available: 54,
  sold: 810,
  createdAt: '2022-07-01T07:58:01.176Z',
  category: 'Accessories',
  gender: 'Men',
};

export const dummyProducts = [
  {
    tag: 'Puma',
    title: 'FUSE FM - Sports shoes - eggnog',
    price: '75.49',
    image:
      'https://img01.ztat.net/article/spp-media-p1/f608e5bd023039bbacda81d86b31f7c6/e087481a3dc14e49962f91419c0e76c7.jpg?imwidth=300&filter=packshot',
  },
  {
    tag: 'Under Armour',
    title: 'TRIBASE REIGN 3 - Sports shoes - black',
    price: '54.99',
    image:
      'https://img01.ztat.net/article/spp-media-p1/36ba0adcb456405aaeb30b57e71c288d/a9de3313fc004c7d83ca7d97d515293d.jpg?imwidth=300&filter=packshot',
  },
  {
    tag: 'Nike Performance',
    title: 'SUPERREP GO 2 - Sports shoes - bright citron/black/white',
    price: '89.99',
    image:
      'https://img01.ztat.net/article/spp-media-p1/c4b1e53854ef4950aebddafc37f89558/50cfcd9cebd849a19db221db46333419.jpg?imwidth=300&filter=packshot',
  },
  {
    tag: 'Nike Performance',
    title: 'SPEEDREP - Sports shoes - black/chile red',
    price: '66.99',
    image:
      'https://img01.ztat.net/article/spp-media-p1/a04f8de129fb4b99bbd7085c31c0a4df/d685bfe29a38474c9a35e2aa9341d0ec.jpg?imwidth=300&filter=packshot',
  },
  {
    tag: 'Under Armour',
    title: 'APEX - Sports shoes - black',
    price: '56.99',
    image:
      'https://img01.ztat.net/article/spp-media-p1/17f5792f9b1f4daeabc1145d387b4a54/08bb0c68c0c3456f9b1050264fa6721e.jpg?imwidth=300&filter=packshot',
  },
  {
    tag: 'Under Armour',
    title: 'PROJECT ROCK 3 - Sports shoes - high-vis yellow',
    price: '93.99',
    image:
      'https://img01.ztat.net/article/spp-media-p1/65b3769ad7424f4aab283a6c974adc72/4f5d0d634df04075926ea69d672148a2.jpg?imwidth=300&filter=packshot',
  },
  {
    tag: 'Reebok',
    title:
      'NANO X1 GRIT FLOATRIDE ENERGY FOAM TRAINING WORKOUT - Sports shoes - footwear white/core black/pursuit pink',
    price: '124.99',
    image:
      'https://img01.ztat.net/article/spp-media-p1/54960d2f5fe04ec9b1f9c25985a0583d/afc469ef9be344faa124d48ccb6a694e.jpg?imwidth=300&filter=packshot',
  },
  {
    tag: 'Nike Performance',
    title: 'SUPERREP GO 2 - Sports shoes - white/black/pure platinum',
    price: '54.99',
    image:
      'https://img01.ztat.net/article/spp-media-p1/07b3678f80da4dfb94d38d0f9b9dee24/91478b0725be421082b93447acd7796a.jpg?imwidth=300&filter=packshot',
  },
];
