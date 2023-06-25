/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
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

function CrearProducto({ agregarProducto }) {
  const [modal, setModal] = useState(false);

  const [category, setCategory] = useState({
    category_name: "",
  });
  const [nuevoProducto, setNuevoProducto] = useState({
    product_name: "",
    product_presentation: "",
    product_date_in: "",
    product_date_caducity: "",
    product_quantity: "",
    product_buy_price: "",
    product_sell_price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
    setNuevoProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value,
    }));
  };

  const store = async (e) => {
    e.preventDefault();
    try {
      // Realizar la solicitud para crear un nuevo producto
      await api.post(`/product`, nuevoProducto);
      const newProduct = await api.get(`/products`);

      await api.post(`/category`, category);
      const newCategory = await api.get(`/categories`);

      agregarProducto(newProduct, newCategory);
      setModal(false);

      // Realizar cualquier acción adicional que desees después de agregar el producto
      // por ejemplo, actualizar la tabla con los nuevos datos
    } catch (error) {
      console.error("Error al crear el producto:", error.message);
    }
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <button
        onClick={() => openModal()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Agregar Producto
      </button>

      <Modal className="p-5" show={modal} onClose={closeModal}>
        {/* Contenido del modal */}
        <h2 className="text-lg text-center mt-2 font-medium ">
          Nuevo Producto
        </h2>

        <form onSubmit={store}>
          {/* Campos del formulario */}
          <div className="flex justify-center gap-10">
            <div className="w-60 text-gray-900">
              <InputLabel htmlFor="product_name" value="Producto" />
              <TextInput
                id="product_name"
                name="product_name"
                type="text"
                value={nuevoProducto.product_name}
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
                value={nuevoProducto.product_presentation}
                onChange={handleInputChange}
                className="mt-1 block w-full"
                autoComplete="off"
                isFocused={true}
              />
            </div>
            <div className="mt-3">
              <InputLabel htmlFor="category_name" value="category_name" />
              <TextInput
                id="category_name"
                name="category_name"
                type="text"
                value={category.category_name}
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
                <InputLabel htmlFor="product_buy_price" value="Precio compra" />
                <TextInput
                  id="product_buy_price"
                  name="product_buy_price"
                  type="number"
                  value={nuevoProducto.product_buy_price}
                  onChange={handleInputChange}
                  className="mt-1 block w-full"
                  autoComplete="off"
                  isFocused={true}
                />
              </div>
              <div className="mt-3">
                <InputLabel htmlFor="product_sell_price" value="Precio Venta" />
                <TextInput
                  id="product_sell_price"
                  name="product_sell_price"
                  type="number"
                  value={nuevoProducto.product_sell_price}
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
                  value={nuevoProducto.product_quantity}
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
                value={nuevoProducto.product_date_in}
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
                value={nuevoProducto.product_date_caducity}
                onChange={handleInputChange}
                className="mt-1 block w-full"
                autoComplete="off"
                isFocused={true}
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-4 ">
            <PrimaryButton type="submit" className="" onClick={closeModal}>
              Guardar
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

export default CrearProducto;
