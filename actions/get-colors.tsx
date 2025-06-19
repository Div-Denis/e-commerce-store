import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
    try {
        const res = await fetch(`${URL}?t=${Date.now()}`);
        if (!res.ok) {
            // 这里可以上报错误日志
            return [];
        }
        return await res.json();
    } catch (err) {
        // 这里可以上报异常
        console.error(err);
        
        return [];
    }
};

export default getColors
