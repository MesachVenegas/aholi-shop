'use client'

import { SizesProps } from "@/models/product";
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


export default function SizesTable ({ title, tableData } : { title: string, tableData: SizesProps[] }){


  return (
    <Card className="border border-rose-100/40 rounded-xl">
      <Title className="text-xl">{ title }</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Alto</TableHeaderCell>
            <TableHeaderCell>Ancho</TableHeaderCell>
            <TableHeaderCell>Tipo</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className="overflow-y-auto overflow-hidden">
          {tableData.map((prod: SizesProps, index) => (
            <TableRow key={index} className="hover:bg-rose-100/10">
              <TableCell>{prod.name}</TableCell>
              <TableCell>
                <Text>{prod.height}</Text>
              </TableCell>
              <TableCell>
                <Text>{prod.width}</Text>
              </TableCell>
              <TableCell>
                <Text>{prod.type}</Text>
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
