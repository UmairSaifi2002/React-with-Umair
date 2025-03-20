// cartSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      
      if (existingItem) {
        existingItem.quantity += newItem.quantity
      } else {
        state.items.push({
          ...newItem,
          quantity: newItem.quantity
        })
      }
      
      state.totalQuantity += newItem.quantity
      state.totalAmount += newItem.price * newItem.quantity
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload
      const existingItem = state.items.find(item => item.id === itemToRemove.id)
      
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
          state.totalQuantity -= 1
          state.totalAmount -= existingItem.price
        } else {
          state.totalQuantity -= existingItem.quantity
          state.totalAmount -= existingItem.price * existingItem.quantity
          state.items = state.items.filter(item => item.id !== existingItem.id)
        }
      }
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer