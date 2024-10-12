import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware";


interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id)

            if (existingItem) {
                // 如果项目已经存在，更新为传入的数量，而不是直接增加
                const updatedItems = currentItems.map(item => 
                    item.id === existingItem.id ? { 
                        ...item, 
                        // quantity: data.quantity
                    } : item
                )
                set({ items: updatedItems})
                return toast.success("Item already in cart.")

                // return 
            } 
                set({ items: [...get().items, data] })
                // set({ items: [...currentItems, { ...data, quantity: data.quantity || 1 }] }); // 默认数量为 1
                toast.success("Item added to cart.")
            

          
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item.id !== id)]})
            toast.success("Item removed from the cart.")
        },
        removeAll: () => set({ items: []}),
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
    })
)

export default useCart