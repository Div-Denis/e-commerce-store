import { Product } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    salespersonId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            salesperson: query.salespersonId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    })

    // const res = await fetch(URL);
    try {
        const res = await fetch(url);
        if (!res.ok) {
            // 可以 log 一下，方便排查
            // console.error(`Fetch failed: ${res.status} ${url}`)
            return [];
        }
        return await res.json();
    } catch (err) {
        console.error("Network error: ", err);
        return [];
    }
    
}

export default getProducts
