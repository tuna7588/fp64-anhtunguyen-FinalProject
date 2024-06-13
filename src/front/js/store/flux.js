

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {

            menu: [
                {
                    id: "1",
                    name: "Spring Rolls",
                    description: "Filled with fresh veggies and choice of protein, and served with dipping sauce",
                    price: 5.99,
                    category: "starter",
                    image: 'https://res.cloudinary.com/dpujdteiu/image/upload/c_fill,w_1200,h_1200/v1718232775/Vegetable-Spring-Rolls-4_uobm22.jpg'
                },
                {
                    id: "2",
                    name: "Soup",
                    description: "Try our pumpkin Soup with savory spices, and a hint of sweetness",
                    price: 4.99,
                    category: "starter",
                    image: 'https://res.cloudinary.com/dpujdteiu/image/upload/c_fill,w_1200,h_1200/v1718233083/soup_cmeixd.jpg'
                },
                {
                    id: "3",
                    name: "Pho",
                    description: "Vietnamese traditional, a hearty broth-based soup with aromatic herbs",
                    price: 12.99,
                    category: "main",
                    image: 'https://res.cloudinary.com/dpujdteiu/image/upload/c_fill,w_1200,h_1200/v1718233986/Beef-Pho_yjox9q.webp'
                },
                {
                    id: "4",
                    name: "Fried Chicken",
                    description: "Korean crispy chicken, crispy on the outside, tender on the inside",
                    price: 10.5,
                    category: "main",
                    image: 'https://res.cloudinary.com/dpujdteiu/image/upload/c_fill,w_1200,h_1200/v1718234058/fried_chicken_dpfj4b.jpg'
                },
                {
                    id: "5",
                    name: "Baos",
                    description: "Chinese steamed bun stuffed with an array of delectable fillings",
                    price: 12.99,
                    category: "main",
                    image: 'https://res.cloudinary.com/dpujdteiu/image/upload/c_fill,w_1200,h_1200/v1718234475/baos_oeo7yy.jpg'
                },
                {
                    id: "6",
                    name: "Green Bowl",
                    description: "Healthy bowl with shrimp and a lot of greens",
                    price: 8.99,
                    category: "main",
                    image: 'https://res.cloudinary.com/dpujdteiu/image/upload/c_fill,w_1200,h_1200/v1718234060/greenbowl_aememw.png'
                },
                {
                    id: "7",
                    name: "Chocolate Cake",
                    description: "Indulge your sweet tooth with our decadent Chocolate Cake",
                    price: 6.99,
                    category: "dessert",
                    image: 'https://res.cloudinary.com/dpujdteiu/image/upload/c_fill,w_1200,h_1200/v1718234469/chocolate_rmvlpf.jpg'
                },
                {
                    id: "8",
                    name: "Cheesecake",
                    description: "Velvety cream cheese and a buttery graham cracker crust",
                    price: 7.99,
                    category: "dessert",
                    image: 'https://res.cloudinary.com/dpujdteiu/image/upload/c_fill,w_1200,h_1200/v1718234462/cheesecake_tfwszi.jpg'
                },
                {
                    id: "9",
                    name: "Ice Cream",
                    description: "Choose your favorite flavour: Chocolate, Strawberry, Vanilla",
                    price: 4.99,
                    category: "dessert",
                    image: 'https://res.cloudinary.com/dpujdteiu/image/upload/c_fill,w_1200,h_1200/v1718234457/ice-cream_rujdbc.jpg'
                },
                {
                    id: "10",
                    name: "Water",
                    price: 1.99,
                    category: "drink",
                    image: 'https://res.cloudinary.com/dpujdteiu/image/upload/c_fill,w_1200,h_1200/v1718234451/water_ilfu4j.webp'
                },
                {
                    id: "11",
                    name: "Coke",
                    price: 1.99,
                    category: "drink",
                    image: 'https://res.cloudinary.com/dpujdteiu/image/upload/c_fill,w_1200,h_1200/v1718234444/coke_ndfuvd.jpg'
                },
                {
                    id: "12",
                    name: "Beer",
                    price: 1.99,
                    category: "drink",
                    image: 'https://res.cloudinary.com/dpujdteiu/image/upload/c_fill,w_1200,h_1200/v1718234434/beer_h5tjda.jpg'
                }
            ],




            cart: [],
            totalAmount: 0
        },
        actions: {
            // Use getActions to call a function within a fuction
            getMenu: () => {
                const store = getStore();
                // for fetch 
                setStore({ ...store, menu: store.menu });

            },
            addToCart: (meal, quantity = 1) => {


                const store = getStore()
                // setStore({...store, cart: [...store.cart,meal]})
                // console.log(store.cart)

                const existingItemIndex = store.cart.findIndex(item => item.id === meal.id);

                if (existingItemIndex !== -1) {
                    const updatedCart = [...store.cart];
                    updatedCart[existingItemIndex].quantity += quantity;
                    setStore({ ...store, cart: updatedCart });
                    console.log(store.cart)
                } else {
                    const updatedCart = [...store.cart, { ...meal, quantity }];
                    setStore({ ...store, cart: updatedCart });
                    console.log(store.cart)
                }

                const updatedTotalAmount = store.totalAmount + (meal.price) * quantity;
                setStore({ ...store, totalAmount: updatedTotalAmount });
            },

            removeFromCart: (mealId) => {
                const store = getStore();
                // const updatedList = store.cart.filter((meal,id) => id !== mealId)
                // setStore({...store, cart: updatedList})
                const updatedCart = store.cart.map(meal => {
                    if (meal.id === mealId) {
                        if (meal.quantity > 1) {
                            return { ...meal, quantity: meal.quantity - 1 };
                        } else {
                            return null;
                        }
                    } else {
                        return meal;
                    }
                }).filter(meal => meal !== null);

                const mealToRemove = store.cart.find(meal => meal.id === mealId);
                const updatedTotalAmount = store.totalAmount - mealToRemove.price;

                setStore({ ...store, cart: updatedCart, totalAmount: updatedTotalAmount });
            },

            removeItem: (mealId) => {
                const store = getStore();
                const updatedCart = store.cart.filter(meal => meal.id !== mealId);

                setStore({ ...store, cart: updatedCart });

            },

            clearCart: () => {
                const store = getStore();
                setStore({ ...store, cart: [], totalAmount: 0 });
            }



        }
    };
}

export default getState;
