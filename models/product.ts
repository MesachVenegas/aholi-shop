import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  description: string;
  size: {
    id: number;
    name: string;
    width: string;
    height: string;
    type: string;
  };
  category: {
    id: number;
    name: string;
    icon: string;
  };
  images: string;
};

export interface CategoriesProps {
  id: number;
  name: string;
  description?: string;
  icon?: string | null;
}

export interface SizesProps {
  id: number;
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