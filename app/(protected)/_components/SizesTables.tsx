'use client'

import { deleteSize } from "@/actions/sizes";
import { SizesProps } from "@/types/size";
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
import { toast } from "react-toastify";


export default function SizesTable ({ title, tableData } : { title: string, tableData: SizesProps[] }){

  const handleDelete = (id: number) =>{
    deleteSize(id)
      .then( res => {
        toast.success(res.success)
      })
      .catch( error => {
        toast.error(error)
      })
  }

  return (
    <Card className="h-full">
      <Title className="text-xl">{ title }</Title>
      <Table className="h-full border border-rose-100/40 rounded-xl mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Alto</TableHeaderCell>
            <TableHeaderCell>Ancho</TableHeaderCell>
            <TableHeaderCell>Tipo</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className="overflow-y-auto overflow-hidden">
          {tableData.map((prod: SizesProps) => (
            <TableRow key={prod?.id} className="hover:bg-rose-100/10">
              <TableCell>{prod?.name}</TableCell>
              <TableCell>
                <Text>{prod?.height} cms</Text>
              </TableCell>
              <TableCell>
                <Text>{prod?.width} cms</Text>
              </TableCell>
              <TableCell>
                <Text>{prod?.type}</Text>
              </TableCell>
              <TableCell className="flex gap-3">
                  <span
                    className="flex items-center gap-1 cursor-pointer text-red-600"
                    onClick={ () => handleDelete(prod?.id as number) }
                  >
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
