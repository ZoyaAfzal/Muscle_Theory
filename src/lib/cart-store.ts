import { create } from 'zustand';

interface CartItem {
  name: string;
  price: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (index) => set((state) => ({ 
    items: state.items.filter((_, i) => i !== index) 
  })),
  clearCart: () => set({ items: [] }),
}));
