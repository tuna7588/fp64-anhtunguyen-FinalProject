

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {

            menu: [
                {
                    id: "1",
                    name: "Spring Rolls",
                    description: "Crispy and delicious",
                    price: 5.99,
                    category: "starter",
                    image: 'https://saltedmint.com/wp-content/uploads/2024/01/Vegetable-Spring-Rolls-4.jpg'
                },
                {
                    id: "2",
                    name: "Soup",
                    description: "Warm and comforting",
                    price: 4.99,
                    category: "starter",
                    image: 'https://images.immediate.co.uk/production/volatile/sites/2/2016/08/25097.jpg?quality=90&crop=2px,151px,596px,542px&resize=556,505'
                },
                {
                    id: "3",
                    name: "Hamburger",
                    description: "The Classic Burger... ",
                    price: 12.99,
                    category: "main",
                    image: 'https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg'
                },
                {
                    id: "4",
                    name: "Fried Chicken",
                    description: "Special crispy chicken",
                    price: 10.5,
                    category: "main",
                    image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/DA2CE7B2-213D-47CD-BC65-8746BF251207/Derivates/ac919776-333a-491f-adeb-f584db66502f.jpg'
                },
                {
                    id: "5",
                    name: "Barbecue Burger",
                    description: "American, raw, meaty",
                    price: 12.99,
                    category: "main",
                    image: 'https://images.radio-canada.ca/v1/alimentation/recette/4x3/burger-jamaicaine.jpg'
                },
                {
                    id: "6",
                    name: "Green Bowl",
                    description: "Healthy ...and green...",
                    price: 8.99,
                    category: "main",
                    image: 'https://greenbowl.com.do/wp-content/uploads/2024/03/greenbowl-shrimp-salad.png'
                },
                {
                    id: "7",
                    name: "Chocolate Cake",
                    description: "Perfect for sweettooth",
                    price: 6.99,
                    category: "dessert",
                    image: 'https://sugarspunrun.com/wp-content/uploads/2023/12/Best-chocolate-cake-recipe-1-of-1-2.jpg'
                },
                {
                    id: "8",
                    name: "Cheesecake",
                    description: "Smooth, tasty, rich, ....",
                    price: 7.99,
                    category: "dessert",
                    image: 'https://cakesbymk.com/wp-content/uploads/2023/11/Template-Size-for-Blog-Photos-24.jpg'
                },
                {
                    id: "9",
                    name: "Ice Cream",
                    description: "Chocolate, Strawberry",
                    price: 4.99,
                    category: "dessert",
                    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-ice-cream-e127d41.jpg'
                },
                {
                    id: "10",
                    name: "Water",
                    price: 1.99,
                    category: "drink"
                },
                {
                    id: "11",
                    name: "Coke",
                    price: 1.99,
                    category: "drink"
                },
                {
                    id: "12",
                    name: "Beer",
                    price: 1.99,
                    category: "drink"
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
