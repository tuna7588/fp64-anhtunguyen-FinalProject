

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
                    image: 'https://saltedmint.com/wp-content/uploads/2024/01/Vegetable-Spring-Rolls-4.jpg'
                },
                {
                    id: "2",
                    name: "Soup",
                    description: "Try our pumpkin Soup with savory spices, and a hint of sweetness",
                    price: 4.99,
                    category: "starter",
                    image: 'https://images.immediate.co.uk/production/volatile/sites/2/2016/08/25097.jpg?quality=90&crop=2px,151px,596px,542px&resize=556,505'
                },
                {
                    id: "3",
                    name: "Pho",
                    description: "Vietnamese traditional, a hearty broth-based soup with aromatic herbs",
                    price: 12.99,
                    category: "main",
                    image: 'https://www.recipetineats.com/wp-content/uploads/2019/04/Beef-Pho_6.jpg'
                },
                {
                    id: "4",
                    name: "Fried Chicken",
                    description: "Korean crispy chicken, crispy on the outside, tender on the inside",
                    price: 10.5,
                    category: "main",
                    image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/DA2CE7B2-213D-47CD-BC65-8746BF251207/Derivates/ac919776-333a-491f-adeb-f584db66502f.jpg'
                },
                {
                    id: "5",
                    name: "Baos",
                    description: "Chinese steamed bun stuffed with an array of delectable fillings",
                    price: 12.99,
                    category: "main",
                    image: 'https://vidamasfacilclub.com/wp-content/uploads/2021/04/receta-de-pan-gua-bao.jpg'
                },
                {
                    id: "6",
                    name: "Green Bowl",
                    description: "Healthy bowl with shrimp and a lot of greens",
                    price: 8.99,
                    category: "main",
                    image: 'https://greenbowl.com.do/wp-content/uploads/2024/03/greenbowl-shrimp-salad.png'
                },
                {
                    id: "7",
                    name: "Chocolate Cake",
                    description: "Indulge your sweet tooth with our decadent Chocolate Cake",
                    price: 6.99,
                    category: "dessert",
                    image: 'https://sugarspunrun.com/wp-content/uploads/2023/12/Best-chocolate-cake-recipe-1-of-1-2.jpg'
                },
                {
                    id: "8",
                    name: "Cheesecake",
                    description: "Velvety cream cheese and a buttery graham cracker crust",
                    price: 7.99,
                    category: "dessert",
                    image: 'https://cakesbymk.com/wp-content/uploads/2023/11/Template-Size-for-Blog-Photos-24.jpg'
                },
                {
                    id: "9",
                    name: "Ice Cream",
                    description: "Choose your favorite flavour: Chocolate, Strawberry, Vanilla",
                    price: 4.99,
                    category: "dessert",
                    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-ice-cream-e127d41.jpg'
                },
                {
                    id: "10",
                    name: "Water",
                    price: 1.99,
                    category: "drink",
                    image:'https://images.thdstatic.com/productImages/2c12c804-7728-4112-9a79-d3dbb0c33548/svn/dasani-water-049000026566-64_600.jpg'
                },
                {
                    id: "11",
                    name: "Coke",
                    price: 1.99,
                    category: "drink",
                    image:'https://kentstreetcellars.com.au/cdn/shop/files/coke-can_7bf866c9-bffc-449d-a173-de324ac47905_2048x.png?v=1687840069'
                },
                {
                    id: "12",
                    name: "Beer",
                    price: 1.99,
                    category: "drink",
                    image:'https://del.h-cdn.co/assets/cm/15/11/3200x3200/54f65d39ab05d_-_183341797.jpg'
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

                const updatedTotalAmount = store.totalAmount + (meal.price || 0) * quantity;
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

            clearCart: () => {
                const store = getStore();
                setStore({ ...store, cart: [], totalAmount: 0 });
            }



        }
    };
}

export default getState;
