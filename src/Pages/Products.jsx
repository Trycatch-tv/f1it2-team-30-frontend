import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ActualizarPaginaButton from "../Components/ActualizarPagina";
import CrearProducto from "../Components/CrearProducto";
import EditarProducto from "../Components/EditarProducto";
import AuthenticatedLayout from "../Layouts/Menu";
const api = axios.create({
  baseURL: "https://f1it2-team-30-backend-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    language: "es-ES",
  },
});

export default function Inicio() {
  const [tabla, setTabla] = useState([]);
  /*   const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(""); */
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function obtenerProductosConCategorias() {
      try {
        // Realizar solicitudes a la API para obtener productos y categorías
        const productosResponse = await api.get(`/products`);
        console.log(productosResponse);
        const categoriasResponse = await api.get(`/categories`);

        if (
          productosResponse.status === 200 &&
          categoriasResponse.status === 200
        ) {
          const productos = productosResponse.data;
          const categorias = categoriasResponse.data;
          setCategorias(categorias);

          // Combinar productos, cantidad y categorías en una tabla
          const nuevaTabla = productos.map((producto) => {
            // Buscar la categoría correspondiente al ID
            const categoria = categorias.find(
              (c) => c.id === producto.id_category_fk
            );
            const brand = producto.brands[0];
            const provider = producto.providers[0];
            // Crear un nuevo objeto con los campos deseados

            return {
              id: producto.id,
              producto: producto.product_name,
              presentation: producto.product_presentation,
              brand: brand ? brand.brand_name : "Desconocida",
              categoria: categoria ? categoria.id : "",
              proveedor: provider ? provider.provider_name : "Desconocida",
              cantidad: producto.product_quantity,
              buyprice: producto.product_buy_price,
              sellprice: producto.product_sell_price,
              fechaing: producto.product_date_in,
              fechacad: producto.product_date_caducity,
            };
          });

          setTabla(nuevaTabla);
        }
      } catch (error) {
        console.error(
          "Error al obtener los productos y categorías:",
          error.message
        );
      }
    }

    obtenerProductosConCategorias();
  }, []);

  const agregarProducto = (nuevoProducto) => {
    setTabla([...tabla, nuevoProducto]);
  };

  const actualizarProducto = (index, productoActualizado) => {
    const productosActualizados = [...tabla];
    productosActualizados[index] = productoActualizado;
    setTabla(productosActualizados);
  };

  const deleteProduct = async (productId) => {
    try {
      // Realizar la solicitud para eliminar el producto
      await api.delete(`/product/${productId}`);
      // Realizar cualquier acción adicional que desees después de eliminar el producto
    } catch (error) {
      console.error("Error al eliminar el producto:", error.message);
    }
  };

  return (
    <>
      <AuthenticatedLayout
        header={
          <h2 className="font-semibold text-2xl text-black dark:text-[#404750] leading-tight">
            Lista de Productos
          </h2>
        }
      >
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white  dark:bg-gray-800 overflow-hidden shadow-sm flex justify-center sm:rounded-lg p-4">
              <CrearProducto agregarProducto={agregarProducto} />
              <ActualizarPaginaButton className="pr-4" />
            </div>
          </div>
        </div>
        <Card>
          <Table /* className="table-auto border gray-400" */>
            <TableHead>
              <TableRow className="bg-gray-100">
                <TableHeaderCell className="px-2 py-2">ID</TableHeaderCell>
                <TableHeaderCell className="px-2 py-2">
                  Producto
                </TableHeaderCell>
                <TableHeaderCell className="px-2 py-2">
                  Presentacion
                </TableHeaderCell>
                <TableHeaderCell className="px-2 py-2">Marca</TableHeaderCell>
                <TableHeaderCell className="px-2 py-2">
                  Categoría
                </TableHeaderCell>
                <TableHeaderCell className="px-2 py-2">
                  Proveedor
                </TableHeaderCell>
                <TableHeaderCell className="px-2 py-2">
                  Cantidad
                </TableHeaderCell>
                <TableHeaderCell className="px-2 py-2">
                  $ compra
                </TableHeaderCell>
                <TableHeaderCell className="px-2 py-2">$ Venta</TableHeaderCell>
                <TableHeaderCell className="px-2 py-2">Ingreso</TableHeaderCell>
                <TableHeaderCell className="px-2 py-2">
                  Caducidad
                </TableHeaderCell>
                <TableHeaderCell className="px-2 py-2">Acción</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tabla.map((fila, index) => (
                <TableRow key={index}>
                  <TableCell className="border px-2 py-2">{fila.id}</TableCell>
                  <TableCell className="border px-2 py-2">
                    {fila.producto}
                  </TableCell>
                  <TableCell className="border px-2 py-2">
                    {fila.presentation}
                  </TableCell>
                  <TableCell className="border px-2 py-2">
                    {fila.brand}
                  </TableCell>
                  <TableCell className="border px-2 py-2">
                    <select
                      value={fila.categoria}
                      onChange={(e) => {
                        const categoriaSeleccionada = e.target.value;
                        const productoActualizado = {
                          ...fila,
                          categoria: categoriaSeleccionada,
                        };
                        actualizarProducto(index, productoActualizado);
                      }}
                    >
                      <option value="">Seleccionar categoría</option>
                      {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                          {categoria.category_name}
                        </option>
                      ))}
                    </select>
                  </TableCell>
                  <TableCell className="border px-2 py-2">
                    {fila.proveedor}
                  </TableCell>
                  <TableCell className="border px-2 py-2">
                    {fila.cantidad}
                  </TableCell>
                  <TableCell className="border px-2 py-2">
                    {fila.buyprice}
                  </TableCell>
                  <TableCell className="border px-2 py-2">
                    {fila.sellprice}
                  </TableCell>
                  <TableCell className="border px-2 py-2">
                    {fila.fechaing}
                  </TableCell>
                  <TableCell className="border px-2 py-2">
                    {fila.fechacad}
                  </TableCell>
                  <TableCell className="border px-2 py-2">
                    <div className="flex justify-center gap-2">
                      <EditarProducto
                        actualizarProducto={(productoActualizado) =>
                          actualizarProducto(index, productoActualizado)
                        }
                        productId={fila.id}
                        index={index}
                      />
                      <Button
                        size="xs"
                        variant="secondary"
                        color="gray"
                        onClick={() => deleteProduct(fila.id)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </AuthenticatedLayout>
    </>
  );
}
