'use client'

import { delCategory } from "@/libs/categories/actions"
import { CategoriesProps } from "@/models/product"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from "@tremor/react"

export default function CategoriesTable({ title, tableData }: { title: string, tableData: any[]}) {

  const deleteCategory = async (id: number) => {
    await delCategory(id)
      .then( res => {
        console.log(res);
      }).catch( error => {
        console.error(error);
      } )
  }

  return (
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
          {tableData.map((prod: CategoriesProps) => (
            <TableRow key={prod.id} className="hover:bg-rose-100/10">
              <TableCell>{prod.name}</TableCell>
              <TableCell>
                <Text>{prod.description}</Text>
              </TableCell>
              <TableCell className="flex gap-3">
                  <span
                    className="flex items-center gap-1 cursor-pointer text-red-600"
                    onClick={() => deleteCategory(prod.id)}
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
  )
}
