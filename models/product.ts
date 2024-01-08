import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

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

export interface CategoriesProps {
  name: string;
  description?: string;
  icon?: IconDefinition;
}

export interface SizesProps {
  name: string;
  width: string;
  height: string;
  type: string;
}

export interface ImagesProps {
  index: number;
  name: string;
  url: string;
  file: {
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
  }
}

export type ProductFormPros = {
  name: string;
  price: string;
  sizes: string;
  category: string;
  description: string;
  images: ImagesProps[];
}