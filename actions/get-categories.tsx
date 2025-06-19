import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    try {
        const res = await fetch(`${URL}?t=${Date.now()}`);
        if (!res.ok) {
            // 这里可以 log，方便定位线上问题
            // console.error(`Failed to fetch categories: ${res.status}`);
            return [];
        }
        return await res.json();
    } catch (err) {
        console.error("Network error fetching categories:", err);
        return [];
    }
}

export default getCategories
