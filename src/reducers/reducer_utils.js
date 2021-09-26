
export const checkoutTotal = (cartItems) => {
  return cartItems.reduce((acc,item) => {
    return acc + item.count * item.price;
  },0)
}

export const decItemQuantity = (cartItems, item) => {
  // does not decrement if there is only one item
  if (item.count === 1) return cartItems;

  return cartItems.map(cartItem => {
    if (cartItem.id === item.id){
      return {
        ...cartItem,
        count:cartItem.count - 1
      } 
    } else {
      return cartItem;
    }
  })
}

export const removeItemFromCart = (cartItems, item) =>{
  return cartItems.filter(cartItem => cartItem.id !== item.id)
}

export const addItemToCart = (cartItems, item) => {
   
  // The find() method returns the value of the first element in an array that pass a test (provided as a function).
  
  const exists = cartItems.find(cartItem => cartItem.id === item.id);
  
  if (exists){
  // find the existing element to update the counter
  // skip the others
   return cartItems.map(cartItem => (
      cartItem.id === item.id ?
      {...cartItem, count:cartItem.count + 1}
      : {...cartItem}
    )
  )
  } else {
    // first time the item is added
    return [...cartItems, {...item, count:1}]
  }
}

export const itemsCount = (cartItems) => {
  const total = cartItems.reduce((acc, item)=>{
    return acc + item.count;
  }, 0);
  return total;
}