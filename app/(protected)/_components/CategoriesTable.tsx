'use client'

import { toast } from "react-toastify";

import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title
} from "@tremor/react";

import { deleteCategory } from "@/actions/categories";
import ToastNotification from "@/components/toast-notification";

export default function CategoriesTable({ title, tableData }: { title: string, tableData: any[]}) {

  const handleDelete = async (id: number) => {
    deleteCategory(id)
      .then( res => {
        console.log(res);
        toast.success("Producto eliminado")
      }).catch( error => {
        console.log(error);
        toast.error("No se pudo eliminar el producto")
      } )
  }

  return (
    <>
      <Card className="border border-rose-100/40 rounded-xl">
        <Title className="text-xl">{ title }</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Nombre</TableHeaderCell>
              <TableHeaderCell>Descripcion</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((prod: any) => (
              <TableRow key={prod.id} className="hover:bg-rose-100/10">
                <TableCell>{prod.name}</TableCell>
                <TableCell>
                  <Text>{prod.description}</Text>
                </TableCell>
                <TableCell className="flex gap-3">
                    <span
                      className="flex items-center gap-1 cursor-pointer text-red-600"
                      onClick={() => handleDelete(prod.id)}
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
      <ToastNotification />
    </>
  )
}
