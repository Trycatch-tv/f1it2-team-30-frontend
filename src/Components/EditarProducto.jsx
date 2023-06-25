/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "./InputLabel";
import Modal from "./Modal";
import PrimaryButton from "./PrymaryButton";
import SecondaryButton from "./SecondaryButton";
import TextInput from "./TextInput";

const api = axios.create({
  baseURL: "https://f1it2-team-30-backend-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    language: "es-ES",
  },
});

function EditarProducto({ productId, index, actualizarProducto }) {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    product_name: "",
    product_presentation: "",
    id_brand_fk: "",
    id_category_fk: "",
    id_provider_fk: "",
    product_date_in: "",
    product_date_caducity: "",
    product_quantity: "",
    product_buy_price: "",
    product_sell_price: "",
    category: {
      id: "",
      category_name: "",
    },
    brands: {
      id: "",
      brand_name: "",
    },
    providers: {
      id: "",
      provider_name: "",
    },
  });

  useEffect(() => {
    // Obtener los datos del producto existente al cargar el componente
    obtenerProducto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const obtenerProducto = async () => {
    try {
      const response = await api.get(`/product/${productId}`);
      const productoExistente = response.data;

      const { id_category_fk, id_brand_fk, id_provider_fk } = productoExistente;

      const responseCategories = await api.get(`/products/`);
      const categories = responseCategories.data;
      const category = categories.find((cat) => cat.id === id_category_fk);

      const responseBrands = await api.get(`/products/`);
      const brands = responseBrands.data;
      const brand = brands.find((br) => br.id === id_brand_fk);

      const responseProviders = await api.get(`/products/`);
      const providers = responseProviders.data;
      const provider = providers.find((pr) => pr.id === id_provider_fk);

      setProducto((prevProducto) => ({
        ...prevProducto,
        ...productoExistente,
        category,
        brands: brand,
        providers: provider,
      }));
    } catch (error) {
      console.error("Error al obtener el producto:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Producto antes de la actualización:", producto);
      // Realizar la solicitud para actualizar el producto
      await api.put(`/product/${productId}`, producto);
      actualizarProducto(index, producto);

      // Realizar cualquier acción adicional que desees después de editar el producto
      console.log("Producto después de la actualización:", producto);
    } catch (error) {
      console.error("Error al editar el producto:", error.message);
    }
    navigate("/");
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    navigate("/");
  };

  return (
    <div>
      <button
        onClick={() => openModal()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Editar Producto
      </button>
      <Modal show={modal} closeModal={closeModal}>
        <h2 className="text-lg text-center mt-2 font-medium ">
          Editar Producto
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Campos del formulario */}
          <div className="flex justify-center gap-10">
            <div className="w-60 text-gray-900">
              <InputLabel htmlFor="product_name" value="Producto" />
              <TextInput
                id="product_name"
                name="product_name"
                type="text"
                value={producto.product_name}
                onChange={handleInputChange}
                className="mt-1 block w-full"
                autoComplete="off"
                isFocused={true}
              />
            </div>
            <div className="mt-3">
              <InputLabel htmlFor="product_presentation" value="Presentacion" />
              <TextInput
                id="product_presentation"
                name="product_presentation"
                type="text"
                value={producto.product_presentation}
                onChange={handleInputChange}
                className="mt-1 block w-full"
                autoComplete="off"
                isFocused={true}
              />
            </div>
            <div className="mt-3">
              <InputLabel htmlFor="product_buy_price" value="Precio compra" />
              <TextInput
                id="product_buy_price"
                name="product_buy_price"
                type="number"
                value={producto.product_buy_price}
                onChange={handleInputChange}
                className="mt-1 block w-full"
                autoComplete="off"
                isFocused={true}
              />
            </div>
          </div>

          <div className="w-96">
            <div className="flex gap-2">
              <div className="mt-3">
                <InputLabel htmlFor="product_sell_price" value="Precio Venta" />
                <TextInput
                  id="product_sell_price"
                  name="product_sell_price"
                  type="number"
                  value={producto.product_sell_price}
                  onChange={handleInputChange}
                  className="mt-1 block w-full"
                  autoComplete="off"
                  isFocused={true}
                />
              </div>
              <div className="mt-3">
                <InputLabel htmlFor="product_quantity" value="Cantidad" />
                <TextInput
                  id="product_quantity"
                  name="product_quantity"
                  type="number"
                  value={producto.product_quantity}
                  onChange={handleInputChange}
                  className="mt-1 block w-full"
                  autoComplete="off"
                  isFocused={true}
                />
              </div>
            </div>
            <div className="mt-3">
              <InputLabel htmlFor="product_date_in" value="Fecha de ingreso" />
              <TextInput
                id="product_date_in"
                name="product_date_in"
                type="date"
                value={producto.product_date_in}
                onChange={handleInputChange}
                className="mt-1 block w-full"
                autoComplete="off"
                isFocused={true}
              />
            </div>
            <div className="mt-3">
              <InputLabel
                htmlFor="product_date_caducity"
                value="Fecha de caducidad"
              />
              <TextInput
                id="product_date_caducity"
                name="product_date_caducity"
                type="date"
                value={producto.product_date_caducity}
                onChange={handleInputChange}
                className="mt-1 block w-full"
                autoComplete="off"
                isFocused={true}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-4 ">
            <PrimaryButton type="submit" className="" onClick={closeModal}>
              Guardar Cambios
            </PrimaryButton>
            <SecondaryButton className="" onClick={closeModal}>
              Cancel
            </SecondaryButton>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default EditarProducto;
