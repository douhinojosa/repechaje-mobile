export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/categories/pizza.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/categories/hamburger.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/categories/spaghetti.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/categories/chinese.png'),
    },
    {
        id: 5,
        name: 'Drinks',
        image: require('../assets/images/categories/drinks.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/categories/cupcake.png'),
    },

]

export const business = [
    {
      id: 1,
      name: 'Unicasa',
      dist: '0.5',
      stars: '4.6',
      image: require('../assets/images/unicasa.gif'),
      type: 'Supermercado',
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
      dishes: [
        {
           id: 1,
           name: 'pizza',
           description: 'cheezy garlic pizza',
           price: 10,
           appPrice: 2.99,
           image:  require('../assets/images/dishes/pollo.jpeg')
        },
        {
           id: 2,
           name: 'pizza',
           description: 'cheezy garlic pizza',
           price: 10,
           appPrice: 2.99,
           image:  require('../assets/images/dishes/pollo.jpeg')
        },
        {
           id: 3,
           name: 'pizza',
           description: 'cheezy garlic pizza',
           price: 10,
           appPrice: 2.99,
           image:  require('../assets/images/dishes/pollo.jpeg')
        },
    ]
    },
    
    {
      id: 2,
      name: 'Farmatodo',
      dist: '1',
      volume: '110 ml',
      stars: '4.3',
      image: require('../assets/images/farmatodo.png'),
      type: 'Farmacia',
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
      dishes: [
        {
           id: 1,
           name: 'pizza',
           description: 'cheezy garlic pizza',
           price: 10,
           image:  require('../assets/images/dishes/pollo.jpeg')
        },
        {
           id: 2,
           name: 'pizza',
           description: 'cheezy garlic pizza',
           price: 10,
           image:  require('../assets/images/dishes/pollo.jpeg')
        }
    ]
    },
    
    {
      id: 3,
      name: 'Cine Citta',
      dist: '0.2',
      volume: '100 ml',
      stars: '4.0',
      image: require('../assets/images/citta.png'),
      type: 'Restaurante',
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
      dishes: [
        {
           id: 1,
           name: 'pizza',
           description: 'cheezy garlic pizza',
           price: 10,
           image:  require('../assets/images/dishes/pollo.jpeg')
        }]
    },
    
    {
      id: 4,
      name: 'Forum',
      dist: '3.7',
      volume: '80 ml',
      stars: '3.5',
      image: require('../assets/images/forum.jpg'),
      type: 'Supermercado',
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
      dishes: [
        {
           id: 1,
           name: 'pizza',
           description: 'cheezy garlic pizza',
           price: 10,
           image:  require('../assets/images/dishes/pollo.jpeg')
        },
        {
           id: 2,
           name: 'pizza',
           description: 'cheezy garlic pizza',
           price: 10,
           image:  require('../assets/images/dishes/pollo.jpeg')
        },
        {
           id: 3,
           name: 'pizza',
           description: 'cheezy garlic pizza',
           price: 10,
           image:  require('../assets/images/dishes/pollo.jpeg')
        }
    ]  
    },
    
    {
      id: 5,
      name: 'Rio Vida',
      dist: '0.7',
      volume: '120 ml',
      stars: '4.7',
      image: require('../assets/images/rio.jpg'),
      type: 'Supermercado',
      desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.',
      dishes: [
        {
           id: 1,
           name: 'pizza',
           description: 'cheezy garlic pizza',
           price: 10,
           image:  require('../assets/images/dishes/pollo.jpeg')
        },
        {
           id: 2,
           name: 'pizza',
           description: 'cheezy garlic pizza',
           price: 10,
           image:  require('../assets/images/dishes/pollo.jpeg')
        },
        {
           id: 3,
           name: 'pizza',
           description: 'cheezy garlic pizza',
           price: 10,
           image:  require('../assets/images/dishes/pollo.jpeg')
        }
    ]
    },
    
  
  ]


export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Cine Citta',
            image: require('../assets/images/pizza.jpg'),
            description: 'Hot and spicy pizzas',
            product: 'Pizza de queso',
            lng: -66.87459410621898,
            lat: 10.486788138552448,
            disponibles: 3,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/dishes/pollo.jpeg')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/dishes/pollo.jpeg')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/dishes/pollo.jpeg')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Espigadeli',
            image: require('../assets/images/dishes/panes.jpg'),
            description: 'Hot and spicy pizzas',
            product: 'Pack Sorpresa',
            disponibles: 2,
            lng: -66.87291526389076,
            lat: 10.486479986802054,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/dishes/pollo.jpeg')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/dishes/pollo.jpeg')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/dishes/pollo.jpeg')
                },
            ]
    
        },
        {
            id: 3,
            name: 'Cafe Piu',
            image: require('../assets/images/dishes/donas.jpg'),
            product: '4 donas rellenas',
            description: 'Hot and spicy pizzas',
            disponibles: 5,
            lng: -66.87469624854712,
            lat: 10.484973089045932,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/dishes/pollo.jpeg')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/dishes/pollo.jpeg')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/dishes/pollo.jpeg')
                },
            ]
    
        }
    ]
}
