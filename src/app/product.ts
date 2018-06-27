import { Image } from "./image";

export class Product {
    id: number;
    name: string;
    description: string;
    size: string;
    color: string;
    categoryId: number;
    images: Image[]
}