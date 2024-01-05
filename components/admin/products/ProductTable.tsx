'use client'

import { valueFormatter } from "@/libs/utils";
import { ProductProps } from "@/models/product";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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


export default function ProductsTable ({ title, tableData } : { title: string, tableData: ProductProps[] }){


  return (
    <Card>
      <Title className="text-xl">{ title }</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Descripcion</TableHeaderCell>
            <TableHeaderCell>Categorías</TableHeaderCell>
            <TableHeaderCell>Precio</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((prod: ProductProps) => (
            <TableRow key={prod.title} className="hover:bg-rose-100/10">
              <TableCell>{prod.title}</TableCell>
              <TableCell>
                <Text>{prod.description}</Text>
              </TableCell>
              <TableCell className="flex gap-2">
                {
                  prod.tags.map( tag => (
                    <small key={tag} className="px-2 py-1 bg-rose-100/20 rounded-xl">
                      {tag}
                    </small>
                  ))
                }
              </TableCell>
              <TableCell>
                  {valueFormatter(prod.price)}
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
