'use client'

import { removeSize } from "@/utils/sizes/actions";
import { SizesProps } from "@/types/product";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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

  const rmSize = async (id: number) => {
    await removeSize(id)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

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
                <Text>{prod.height} cms</Text>
              </TableCell>
              <TableCell>
                <Text>{prod.width} cms</Text>
              </TableCell>
              <TableCell>
                <Text>{prod.type}</Text>
              </TableCell>
              <TableCell className="flex gap-3">
                  <span className="flex items-center gap-1 cursor-pointer text-red-600" onClick={() => rmSize(prod.id) }>
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
