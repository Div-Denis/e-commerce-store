import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard | null> => {
    // const res = await fetch(URL);
    // const res = await fetch(`${URL}?t=${Date.now()}`);
    try {
        const res = await fetch(`${URL}/${id}?t=${Date.now()}`);
        if(!res.ok) {
            throw new Error(`Failed to fetch billboard: ${res.status}`);
            return null
        }
        return await res.json()
    } catch (err) {
        console.error(err);
        return null
    }
}

export default getBillboard
