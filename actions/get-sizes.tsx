import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    try {
        const res = await fetch(`${URL}?t=${Date.now()}`);
        if (!res.ok) {
            // 可以在这里记录错误日志
            return [];
        }
        return await res.json();
    } catch (err) {
        // 可以在这里记录异常
        console.error(err);
        
        return [];
    }
}

export default getSizes
