"use client"

// import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
// import {useState } from "react";


interface CartItemProps {
    data: Product 
}

const CartItem: React.FC<CartItemProps> = ({
    data,
}) => {
    const cart = useCart()
    // const [quantity, setQuantity] = useState<number>(data.quantity || 1) //初始值为1


    const onRemove = () => {
        cart.removeItem(data.id)
    }

    // 增加数量
    // const increaseQuantity = async () => {
    //     const newQuantity = quantity + 1
    //     setQuantity(newQuantity)
    //     cart.addItem({ ...data, quantity: newQuantity });

    // }

    // 减少数量，确保数量不小于1
    // const decreaseQuantity = () => {
    //     if(quantity > 1) {
    //         const newQuantity = quantity - 1;
    //         setQuantity(newQuantity);
    //         cart.addItem({ ...data, quantity: newQuantity });
    //     }
    // }

    // 手动输入数量，确保不能低于1
    // const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = parseInt(e.target.value, 10)
    //     if(!isNaN(value) && value >=1) {
    //         setQuantity(value)
    //         cart.addItem({ ...data, quantity: value });
    //     }
    // }

    // 计算总价
    // const totalPrice = Number(data.price) * quantity
    const totalPrice = Number(data.price) 

    // 更新购物车中的数量
    // useEffect(() => {
    //     cart.addItem({...data, quantity})
    // },[quantity, data, cart])

    return ( 
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image 
                 fill
                 src={data.images[0].url}
                 alt=""
                 className="object-cover object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onRemove} icon={<X size={15}/>} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-black">
                            {data.name} (x{data.quantity}) {/* 显示数量 */}
                        </p>
                    </div>

                    <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">{data.color.name}</p>
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
                    </div>
                    {/* 数量控制 */}
                    {/* <div className="flex items-center mt-4">
                        <Button 
                          onClick={decreaseQuantity}
                          className="p-2 bg-gray-200 rounded-t-full hover:bg-gray-300"
                        >
                            <Minus size={15} />
                        </Button> */}

                        {/* 数量输入框 */}
                        {/* <input 
                          type="number"
                          min={1}
                          value={quantity}
                          onChange={handleQuantityChange}
                          className="text-center mx-4 border border-gray-300 rounded-md"
                          style={{  minWidth: '3ch', width: `${Math.max(quantity.toString().length, 2)}ch` }}
                        /> */}

                        {/* <Button 
                          onClick={increaseQuantity}
                          className="p-2 bg-gray-200 rounded-t-full hover:bg-gray-300"
                        >
                            <Plus size={15} />
                        </Button> */}
                    {/* </div> */}
                    <Currency value={totalPrice} />
                </div>
            </div>
        </li>
     );
}
 
export default CartItem;