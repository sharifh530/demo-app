import { createSlice } from '@reduxjs/toolkit';
import sum from 'lodash/sum';
import uniqBy from 'lodash/uniqBy';

const initialState = {
  isLoading: false,
  products: [
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
      cover:
        'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_1.jpg',

      name: 'Nike Air Force 1 NDESTRUKT',
      code: '38BEE270',
      sku: 'WW75K5210YW/SV',
      tags: [
        'Dangal',
        'The Sting',
        '2001: A Space Odyssey',
        "Singin' in the Rain",
      ],
      price: 16.19,
      priceSale: 16.19,
      totalRating: 2.5,
      totalReview: 3752,
      ratings: [
        { name: '1 Star', starCount: 2808, reviewCount: 5412 },
        { name: '2 Star', starCount: 8611, reviewCount: 2047 },
        { name: '3 Star', starCount: 6001, reviewCount: 9379 },
        { name: '4 Star', starCount: 3918, reviewCount: 2554 },
        { name: '5 Star', starCount: 6833, reviewCount: 4562 },
      ],

      status: 'sale',
      inventoryType: 'low_stock',
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
      available: 33,

      sold: 51,
      createdAt: '2022-07-01T13:26:04.276Z',
      category: 'Shose',
      gender: 'Kids',
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
      cover:
        'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_2.jpg',

      name: 'Foundations Matte Flip Flop',
      code: '38BEE271',
      sku: 'WW75K5211YW/SV',
      tags: [
        'Dangal',
        'The Sting',
        '2001: A Space Odyssey',
        "Singin' in the Rain",
      ],
      price: 35.71,
      priceSale: null,
      totalRating: 2,
      totalReview: 6381,
      ratings: [
        { name: '1 Star', starCount: 68, reviewCount: 7636 },
        { name: '2 Star', starCount: 9863, reviewCount: 1123 },
        { name: '3 Star', starCount: 9115, reviewCount: 8690 },
        { name: '4 Star', starCount: 5130, reviewCount: 9030 },
        { name: '5 Star', starCount: 8628, reviewCount: 461 },
      ],

      status: '',
      inventoryType: 'low_stock',
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
      available: 2,

      sold: 242,
      createdAt: '2022-06-30T12:26:04.276Z',
      category: 'Accessories',
      gender: 'Women',
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
      cover:
        'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_3.jpg',

      name: 'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
      code: '38BEE272',
      sku: 'WW75K5212YW/SV',
      tags: [
        'Dangal',
        'The Sting',
        '2001: A Space Odyssey',
        "Singin' in the Rain",
      ],
      price: 34.3,
      priceSale: null,
      totalRating: 4.9,
      totalReview: 7859,
      ratings: [
        { name: '1 Star', starCount: 7646, reviewCount: 2551 },
        { name: '2 Star', starCount: 1458, reviewCount: 21 },
        { name: '3 Star', starCount: 9447, reviewCount: 376 },
        { name: '4 Star', starCount: 123, reviewCount: 6317 },
        { name: '5 Star', starCount: 1052, reviewCount: 1762 },
      ],

      status: 'new',
      inventoryType: 'low_stock',
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
      available: 2,

      sold: 446,
      createdAt: '2022-06-29T11:26:04.276Z',
      category: 'Shose',
      gender: 'Kids',
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4',
      cover:
        'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_4.jpg',

      name: 'Arizona Soft Footbed Sandal',
      code: '38BEE273',
      sku: 'WW75K5213YW/SV',
      tags: [
        'Dangal',
        'The Sting',
        '2001: A Space Odyssey',
        "Singin' in the Rain",
      ],
      price: 93.1,
      priceSale: 93.1,
      totalRating: 2,
      totalReview: 324,
      ratings: [
        { name: '1 Star', starCount: 1792, reviewCount: 3639 },
        { name: '2 Star', starCount: 2677, reviewCount: 4166 },
        { name: '3 Star', starCount: 1210, reviewCount: 7395 },
        { name: '4 Star', starCount: 548, reviewCount: 6962 },
        { name: '5 Star', starCount: 7356, reviewCount: 6085 },
      ],

      status: 'sale',
      inventoryType: 'low_stock',
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
      available: 88,

      sold: 788,
      createdAt: '2022-06-28T10:26:04.276Z',
      category: 'Apparel',
      gender: 'Women',
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5',
      cover:
        'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_5.jpg',

      name: 'Boston Soft Footbed Sandal',
      code: '38BEE274',
      sku: 'WW75K5214YW/SV',
      tags: [
        'Dangal',
        'The Sting',
        '2001: A Space Odyssey',
        "Singin' in the Rain",
      ],
      price: 55.47,
      priceSale: null,
      totalRating: 4,
      totalReview: 2493,
      ratings: [
        { name: '1 Star', starCount: 4971, reviewCount: 71 },
        { name: '2 Star', starCount: 3630, reviewCount: 1561 },
        { name: '3 Star', starCount: 1108, reviewCount: 5343 },
        { name: '4 Star', starCount: 4598, reviewCount: 101 },
        { name: '5 Star', starCount: 7180, reviewCount: 8092 },
      ],

      status: '',
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
      available: 2,

      sold: 819,
      createdAt: '2022-06-27T09:26:04.276Z',
      category: 'Accessories',
      gender: 'Men',
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
      cover:
        'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_6.jpg',

      name: 'Zoom Freak 2',
      code: '38BEE275',
      sku: 'WW75K5215YW/SV',
      tags: [
        'Dangal',
        'The Sting',
        '2001: A Space Odyssey',
        "Singin' in the Rain",
      ],
      price: 89.09,
      priceSale: null,
      totalRating: 5,
      totalReview: 7521,
      ratings: [
        { name: '1 Star', starCount: 2258, reviewCount: 9675 },
        { name: '2 Star', starCount: 4386, reviewCount: 9292 },
        { name: '3 Star', starCount: 8046, reviewCount: 6507 },
        { name: '4 Star', starCount: 8676, reviewCount: 9723 },
        { name: '5 Star', starCount: 2610, reviewCount: 359 },
      ],

      status: '',
      inventoryType: 'in_stock',
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
      available: 2,

      sold: 562,
      createdAt: '2022-06-26T08:26:04.276Z',
      category: 'Accessories',
      gender: 'Men',
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
      cover:
        'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_7.jpg',

      name: 'Gazelle Vintage low-top sneakers',
      code: '38BEE276',
      sku: 'WW75K5216YW/SV',
      tags: [
        'Dangal',
        'The Sting',
        '2001: A Space Odyssey',
        "Singin' in the Rain",
      ],
      price: 44.39,
      priceSale: 44.39,
      totalRating: 4.9,
      totalReview: 6263,
      ratings: [
        { name: '1 Star', starCount: 1786, reviewCount: 3623 },
        { name: '2 Star', starCount: 7850, reviewCount: 7564 },
        { name: '3 Star', starCount: 2481, reviewCount: 4767 },
        { name: '4 Star', starCount: 8260, reviewCount: 6893 },
        { name: '5 Star', starCount: 7124, reviewCount: 913 },
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
      available: 36,

      sold: 262,
      createdAt: '2022-06-25T07:26:04.277Z',
      category: 'Apparel',
      gender: 'Kids',
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
      cover:
        'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_8.jpg',

      name: 'Jordan Delta',
      code: '38BEE277',
      sku: 'WW75K5217YW/SV',
      tags: [
        'Dangal',
        'The Sting',
        '2001: A Space Odyssey',
        "Singin' in the Rain",
      ],
      price: 26.92,
      priceSale: null,
      totalRating: 5,
      totalReview: 3551,
      ratings: [
        { name: '1 Star', starCount: 7932, reviewCount: 6496 },
        { name: '2 Star', starCount: 6417, reviewCount: 5209 },
        { name: '3 Star', starCount: 6456, reviewCount: 440 },
        { name: '4 Star', starCount: 1780, reviewCount: 674 },
        { name: '5 Star', starCount: 3655, reviewCount: 1324 },
      ],

      status: '',
      inventoryType: 'low_stock',
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
      available: 2,

      sold: 387,
      createdAt: '2022-06-24T06:26:04.277Z',
      category: 'Accessories',
      gender: 'Men',
    },

    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b19',
      cover:
        'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_19.jpg',

      name: 'Madrid Big Buckle Sandal',
      code: '38BEE2718',
      sku: 'WW75K52118YW/SV',
      tags: [
        'Dangal',
        'The Sting',
        '2001: A Space Odyssey',
        "Singin' in the Rain",
      ],
      price: 52.84,
      priceSale: 52.84,
      totalRating: 1.8,
      totalReview: 7074,
      ratings: [
        { name: '1 Star', starCount: 6452, reviewCount: 3317 },
        { name: '2 Star', starCount: 3003, reviewCount: 9438 },
        { name: '3 Star', starCount: 7322, reviewCount: 4654 },
        { name: '4 Star', starCount: 1478, reviewCount: 7480 },
        { name: '5 Star', starCount: 3576, reviewCount: 1440 },
      ],

      status: 'sale',
      inventoryType: 'low_stock',
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
      available: 59,

      sold: 286,
      createdAt: '2022-06-12T19:26:04.278Z',
      category: 'Accessories',
      gender: 'Men',
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b20',
      cover:
        'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_20.jpg',

      name: 'Chuck 70 Hi Sneaker',
      code: '38BEE2719',
      sku: 'WW75K52119YW/SV',
      tags: [
        'Dangal',
        'The Sting',
        '2001: A Space Odyssey',
        "Singin' in the Rain",
      ],
      price: 72.8,
      priceSale: null,
      totalRating: 5,
      totalReview: 7057,
      ratings: [
        { name: '1 Star', starCount: 9168, reviewCount: 4091 },
        { name: '2 Star', starCount: 331, reviewCount: 9599 },
        { name: '3 Star', starCount: 3696, reviewCount: 2975 },
        { name: '4 Star', starCount: 8735, reviewCount: 5842 },
        { name: '5 Star', starCount: 6475, reviewCount: 7224 },
      ],

      status: 'new',
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
      available: 2,

      sold: 619,
      createdAt: '2022-06-11T18:26:04.278Z',
      category: 'Apparel',
      gender: 'Kids',
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b21',
      cover:
        'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_21.jpg',

      name: 'Relaxed Adjustable Strap Slingback Sandal',
      code: '38BEE2720',
      sku: 'WW75K52120YW/SV',
      tags: [
        'Dangal',
        'The Sting',
        '2001: A Space Odyssey',
        "Singin' in the Rain",
      ],
      price: 83.08,
      priceSale: null,
      totalRating: 2.9,
      totalReview: 9013,
      ratings: [
        { name: '1 Star', starCount: 2341, reviewCount: 3990 },
        { name: '2 Star', starCount: 1261, reviewCount: 1305 },
        { name: '3 Star', starCount: 2866, reviewCount: 8923 },
        { name: '4 Star', starCount: 732, reviewCount: 8452 },
        { name: '5 Star', starCount: 1304, reviewCount: 619 },
      ],

      status: '',
      inventoryType: 'low_stock',
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
      available: 2,

      sold: 631,
      createdAt: '2022-06-10T17:26:04.278Z',
      category: 'Shose',
      gender: 'Men',
    },
    {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b22',
      cover:
        'https://minimal-assets-api-dev.vercel.app/assets/images/products/product_22.jpg',

      name: 'Superturf Adventure X Atmos',
      code: '38BEE2721',
      sku: 'WW75K52121YW/SV',
      tags: [
        'Dangal',
        'The Sting',
        '2001: A Space Odyssey',
        "Singin' in the Rain",
      ],
      price: 85.02,
      priceSale: 85.02,
      totalRating: 3.9,
      totalReview: 9273,
      ratings: [
        { name: '1 Star', starCount: 4810, reviewCount: 9096 },
        { name: '2 Star', starCount: 78, reviewCount: 9222 },
        { name: '3 Star', starCount: 9422, reviewCount: 9406 },
        { name: '4 Star', starCount: 275, reviewCount: 7095 },
        { name: '5 Star', starCount: 5266, reviewCount: 4968 },
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
      available: 50,

      sold: 379,
      createdAt: '2022-06-09T16:26:04.290Z',
      category: 'Shose',
      gender: 'Men',
    },
  ],
  product: null,
  sortBy: null,
  checkout: {
    activeStep: 0,
    cart: [],
    subtotal: 0,
    total: 0,
    discount: 0,
    shipping: 0,
    billing: null,
  },
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getCart(state, action) {
      const subtotal = sum(
        state.checkout.cart.map(cartItem => cartItem.price * cartItem.quantity)
      );

      state.checkout.subtotal = subtotal;
      state.checkout.total = subtotal;
    },

    addCart(state, action) {
      const product = action.payload;

      const isEmptyCart = state.checkout.cart.length === 0;

      if (isEmptyCart) {
        state.checkout.cart = [...state.checkout.cart, product];
      } else {
        state.checkout.cart = state.checkout.cart.map(_product => {
          const isExisted = _product.id === product.id;
          if (isExisted) {
            return {
              ..._product,
              quantity: _product.quantity + product.quantity,
              subtotal: _product.subtotal + product.subtotal,
            };
          }
          return _product;
        });
      }

      state.checkout.cart = uniqBy([...state.checkout.cart, product], 'id');
    },
  },

  deleteCart(state, action) {
    console.log(action.payload);
    const updateCart = state.checkout.cart.filter(
      item => item.id !== action.payload
    );

    state.checkout.cart = updateCart;
  },

  resetCart(state) {
    state.checkout.activeStep = 0;
    state.checkout.cart = [];
    state.checkout.total = 0;
    state.checkout.subtotal = 0;
    state.checkout.discount = 0;
    state.checkout.shipping = 0;
    state.checkout.billing = null;
  },

  increaseQuantity(state, action) {
    const productId = action.payload;
    const updateCart = state.checkout.cart.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });

    state.checkout.cart = updateCart;
  },

  decreaseQuantity(state, action) {
    const productId = action.payload;
    const updateCart = state.checkout.cart.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });

    state.checkout.cart = updateCart;
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  getCart,
  addCart,
  resetCart,
  deleteCart,
  increaseQuantity,
  decreaseQuantity,
} = slice.actions;

// ----------------------------------------------------------------------
