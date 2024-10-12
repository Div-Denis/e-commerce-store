import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
    // const res = await fetch(URL);
    // const res = await fetch(`${URL}?t=${Date.now()}`);
    const res = await fetch(`${URL}/${id}?t=${Date.now()}`);

    return res.json();
}

export default getProduct