import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product | null> => {
    try {
        const res = await fetch(`${URL}/${id}?t=${Date.now()}`);
        if (!res.ok) {
            // 可以在这里 log 或打点
            return null;
        }
        return await res.json();
    } catch (err) {
        // log error if needed
        console.error(err);
        
        return null;
    }
};

export default getProduct;
