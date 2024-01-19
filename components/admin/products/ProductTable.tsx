import { valueFormatter } from "@/utils/utils";
import { ProductResponse } from "@/types/product";
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


export default function ProductsTable ({ title, tableData } : { title: string, tableData: ProductResponse[] }){


  return (
    <Card>
      <Title className="text-xl">{ title }</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Descripcion</TableHeaderCell>
            <TableHeaderCell>Medidas</TableHeaderCell>
            <TableHeaderCell>Categorías</TableHeaderCell>
            <TableHeaderCell>Precio</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((prod: ProductResponse, index) => (
            <TableRow key={index} className="hover:bg-rose-100/10">
              <TableCell>{prod.name}</TableCell>
              <TableCell>
                <Text>{prod.description}</Text>
              </TableCell>
              <TableCell>
                <Text>{prod.size.height}cms x {prod.size.width}cms</Text>
              </TableCell>
              <TableCell className="flex gap-2">
                {prod.category.name}
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
