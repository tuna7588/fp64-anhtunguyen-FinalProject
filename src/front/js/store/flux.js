

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
                    description: "The Classic Burger",
                    price: 12.99,
                    category: "main",
                    image: 'hamburger.jpeg'
                },
                {
                    id: "4",
                    name: "Fried Chicken",
                    description: "Special crispy chicken",
                    price: 10.5,
                    category: "main",
                    image: 'fried-chicken.jpeg'
                },
                {
                    id: "5",
                    name: "Barbecue Burger",
                    description: "American, raw, meaty",
                    price: 12.99,
                    category: "main",
                    image: 'barbecue-hamburger.jpeg'
                },
                {
                    id: "6",
                    name: "Green Bowl",
                    description: "Healthy...and green...",
                    price: 8.99,
                    category: "main",
                    image: 'greenbowl.png'
                },
                {
                    id: "7",
                    name: "Chocolate Cake",
                    description: "Rich and creamy",
                    price: 6.99,
                    category: "dessert"},
                {
                    id: "8",
                    name: "Cheesecake",
                    description: "Smooth and tasty",
                    price: 7.99,
                    category: "dessert",
                },
                {
                    id: "9",
                    name: "Ice Cream",
                    description: "Chocolate, Strawberry, Vanilla",
                    price: 4.99,
                    category: "dessert",
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
            addToCart: (meal,quantity = 1) => {
                
               
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
                    const updatedCart = store.cart.concat({ ...meal, quantity });
                    setStore({ ...store, cart: updatedCart });
                    console.log(store.cart)
                }

                const updatedTotalAmount = store.totalAmount + meal.price * quantity;
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
                })
            
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
