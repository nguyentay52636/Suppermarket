import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
    id: number
    name: string
    price: string
    image: string
    unit: string
    quantity: number
}

interface CartState {
    items: CartItem[]
    totalItems: number
    totalPrice: number
}

const initialState: CartState = {
    items: [],
    totalItems: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
            
            // Recalculate totals
            state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0)
            state.totalPrice = state.items.reduce((total, item) => {
                const price = parseInt(item.price.replace(/\./g, ''))
                return total + (price * item.quantity)
            }, 0)
        },
        
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            
            // Recalculate totals
            state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0)
            state.totalPrice = state.items.reduce((total, item) => {
                const price = parseInt(item.price.replace(/\./g, ''))
                return total + (price * item.quantity)
            }, 0)
        },
        
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item) {
                item.quantity += 1
            }
            
            // Recalculate totals
            state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0)
            state.totalPrice = state.items.reduce((total, item) => {
                const price = parseInt(item.price.replace(/\./g, ''))
                return total + (price * item.quantity)
            }, 0)
        },
        
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1
                } else {
                    state.items = state.items.filter(cartItem => cartItem.id !== action.payload)
                }
            }
            
            // Recalculate totals
            state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0)
            state.totalPrice = state.items.reduce((total, item) => {
                const price = parseInt(item.price.replace(/\./g, ''))
                return total + (price * item.quantity)
            }, 0)
        },
        
        clearCart: (state) => {
            state.items = []
            state.totalItems = 0
            state.totalPrice = 0
        }
    }
})

export const { 
    addToCart, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    clearCart 
} = cartSlice.actions

export default cartSlice.reducer
