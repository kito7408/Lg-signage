import { Image } from "./image";

export class Product {
    id: number;
    name: string;
    description: string;
    size: string;
    color: string;
    category_id: number;
    images: Image[]
}