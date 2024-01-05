export interface ProductProps {
  title: string;
  images: {
    src: string,
    description: string,
  }[];
  hight: string;
  width: string;
  description: string;
  price: number;
  tags: string[];
};