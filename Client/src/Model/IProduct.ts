export interface IProduct 
{
    id: number;
    name: string;
    description?: string;
    price: number;
    isActive:boolean;
    image?: string;
    stock?: number;
}