export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}

export interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    salesperson: Salesperson;
    images: Image[];

    // 添加 quantity 属性
    quantity: number;  // 这里加上 ? 表示它是可选的
}

export interface Image {
    id: string;
    url: string;
}

export interface Size {
    id: string;
    name: string;
    value: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;
}

export interface Salesperson {
    id: string;
    name: string;
    email: string;
    phone: string;
}