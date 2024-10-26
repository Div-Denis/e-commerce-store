"use client"

import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { MessageCircle, ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
interface InfoProps {
    data: Product

    // user: any
}

const Info: React.FC<InfoProps> = ({
    data,
}) =>  {
    const cart = useCart()



    const onAddToCart = () => {
        cart.addItem(data)
    }

    const onToChat = () => {
        window.open(`https://wa.me/${data.salesperson?.phone}`, '_blank')
    }

    return ( 
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Description
:</h3>
                    {data?.description}
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    {data?.size?.name}
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div 
                    className="h-6 w-6 rounded-full border border-gray-600" 
                    style={{ backgroundColor: data?.color?.value }}
                    />
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">MOQ:</h3>
                    {data?.quantity}
                </div>
                <div className="mt-10 flex items-center gap-x-3">
                    <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                        Add To Cart
                        <ShoppingCart />
                    </Button>
                    {/* 进去聊天界面 */}
                    <Button onClick={onToChat} className="flex bg-green-500 items-center gap-x-2">
                        Chat Now
                        <MessageCircle />
                    </Button>
                </div>
            </div>
        </div>
     );
}
 
export default Info;