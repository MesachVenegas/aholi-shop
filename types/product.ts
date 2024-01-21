export type ProductProps = {
  id: string;
  name: string;
  price: number;
  sizeId: number;
  categoryId: number;
  description: string;
  images: string;
  size: {
    id: number;
    name: string;
    width: string;
    height: string;
    type: string;
  }
  category: {
    id: number;
    name: string;
    icon: string;
    description: string;
  }
} | undefined