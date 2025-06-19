import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category | null> => {
    try {
        const res = await fetch(`${URL}/${id}?t=${Date.now()}`);
        if (!res.ok) {
            // console.error(`Failed to fetch category: ${res.status}`);
            return null;
        }
        return await res.json();
    } catch (err) {
        console.error("Network error fetching category:", err);
        return null;
    }
};

export default getCategory
