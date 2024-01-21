'use client'

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";

import { valueFormatter } from "@/libs/utils";
import { ProductProps } from "@/types/product";


export default function ProductsTable ({ data } : { data: ProductProps[]}){


  if(data.length === 0){
    return (
      <div className="flex flex-col w-full h-full justify-center items-center px-10">
        <Image
          src='/assets/empty_products.png'
          width={360}
          height={360}
          alt="empty products"
        />
        <h2 className="text-2xl">No hay productos disponibles agrega un producto.</h2>
      </div>
    )
  }

  return (
    <Card className="flex flex-col w-full h-full overflow-auto">
      <Title className="text-xl">Productos</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow className="bg-rose-100/20">
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Descripcion</TableHeaderCell>
            <TableHeaderCell>Medidas</TableHeaderCell>
            <TableHeaderCell>Categorías</TableHeaderCell>
            <TableHeaderCell>Precio</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((prod: ProductProps) => (
            <TableRow key={prod?.id} className="hover:bg-rose-100/10">
              <TableCell>{prod?.name}</TableCell>
              <TableCell>
                <Text>{prod?.description}</Text>
              </TableCell>
              <TableCell>
                <Text>{prod?.size.height}cms x {prod?.size.width}cms</Text>
              </TableCell>
              <TableCell className="flex gap-2">
                {prod?.category.name}
              </TableCell>
              <TableCell>
                  {valueFormatter(prod?.price as unknown as number)}
              </TableCell>
              <TableCell className="flex gap-3">
                  <span className="flex items-center gap-1 cursor-pointer text-rose-100">
                    <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
                    Editar
                  </span>
                  <span className="flex items-center gap-1 cursor-pointer text-red-600">
                    <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                    Eliminar
                  </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
