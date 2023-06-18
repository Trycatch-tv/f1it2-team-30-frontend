import axios from "axios";
import { useEffect, useState } from "react";
import InputLabel from "../Components/InputLabel";
import Modal from "../Components/Modal";
import PrimaryButton from "../Components/PrymaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import TextInput from "../Components/TextInput";
import AuthenticatedLayout from "../Layouts/Menu";

const url = "https://f1it2-team-30-backend-production.up.railway.app/api";


export default function Inicio(props) {
  const [products, setProducts] = useState([]) 
  const [id, setId] = useState('')
  /* const [presentacion, setPresentacion] = useState('')
  const [marca, setMarca] = useState('')
  const [category, setCategory] = useState('')
  const [proveedor, setProveedor] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [buyprice, setBuyprice] = useState('')
  const [sellprice, setSellprice] = useState('')
  const [fechaing, setFechaing] = useState('')
  const [fechacad, setFechacad] = useState('')
  const [user, setUser] = useState('') */


  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [operation, setOperation] = useState(1);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response1 = await axios.get(url + '/products');
    const response2 = await axios.get(url + '/categories');

    const data1 = response1.data;
  
    const data2 = response2.data;
  

    const data = [...data1, ...data2]
    console.log(data)
    setProducts(data);
  }





  const openModal = (op) => {
    setModal(true);
    setOperation(op);
    if (op == 1) {
      setTitle('Nuevo Producto');
    } else {
      setTitle('Editar Producto');
    }
  }

  const closeModal = () => {
    setModal(false);
  }

  const save = () => {
    setModal(false);
  }
  return (
    <>
      <AuthenticatedLayout
        
        header={<h2 className="font-semibold text-2xl text-black dark:text-[#404750] leading-tight">Lista de Productos</h2>}
      >
  

        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm flex justify-center sm:rounded-lg p-4">
              <PrimaryButton onClick={() => openModal(1)}>
                <i className="fa-solid fa-plus-circle"></i>
                Añadir
              </PrimaryButton>
              
            </div>
          </div>
        </div>
        <div className="bg-white grid max-w-full mx-auto place-items-center p-6">
          <table className="table-auto border gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-2">ID</th>
                <th className="px-2 py-2">Producto</th>
                <th className="px-2 py-2">Presentacion</th>
                <th className="px-2 py-2">Marca</th>
                <th className="px-2 py-2">Categoría</th>
                <th className="px-2 py-2">Proveedor</th>
                <th className="px-2 py-2">Cantidad</th>
                <th className="px-2 py-2">$ compra</th>
                <th className="px-2 py-2">$ Venta</th>
                <th className="px-2 py-2">Ingreso</th>
                <th className="px-2 py-2">Caducidad</th>
                <th className="px-2 py-2">Acción</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, id) => (
                <tr key={product.id}>
                  <td className="border px-2 py-2">{product.id}</td>
                  <td className="border px-2 py-2">{product.product_name}</td>
                  <td className="border px-2 py-2">{product.product_presentation}</td>
                  <td className="border px-2 py-2">{product.id_brand_fk}</td>
                  <td className="border px-2 py-2">{product.id_category_fk}</td>
                  <td className="border px-2 py-2">{product.id_provider_fk}</td>
                  <td className="border px-2 py-2">{product.product_quantity}</td>
                  <td className="border px-2 py-2">{product.product_buy_price}</td>
                  <td className="border px-2 py-2">{product.product_sell_price}</td>
                  <td className="border px-2 py-2">{product.product_date_in}</td>
                  <td className="border px-2 py-2">{product.product_date_caducity}</td>
                  <td className="border px-2 py-2">
                    <div className="flex justify-center gap-2">
                      <PrimaryButton onClick={() => openModal(2)}>
                        <i className="fa-solid fa-pencil">Editar</i>
                      </PrimaryButton>
                      <SecondaryButton>
                        <i className="fa-solid fa-trash">Eliminar</i>
                      </SecondaryButton>
                    </div>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>

        <Modal show={modal} onClose={closeModal}>
          <h2 className="text-lg text-center mt-2 font-medium ">
            {title}
          </h2>
          <form onSubmit={save} className="p-6 ">
            <div className='flex justify-center gap-10'>

              <div className='w-60 text-gray-900'>

                <div className='mt-3 text-gray-900'>
                  <InputLabel forInput="name" value="Producto" />
                  <TextInput
                    name="name"
                    type="text"
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                  />
                </div>
                <div className='mt-3'>
                  <InputLabel forInput="name" value="Usuario" />
                  <TextInput
                    name="name"
                    type="text"
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                  />
                </div>
                <div className='mt-3'>
                  <InputLabel forInput="name" value="Categoría" />
                  <TextInput
                    name="name"
                    type="text"
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                  />
                </div>
                
                <div className='mt-3'>
                  <InputLabel forInput="name" value="Marca" />
                  <TextInput
                    name="name"
                    type="text"
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                  />
                </div>
              </div>

              <div className='w-96'>
                <div className='mt-3'>
                  <InputLabel forInput="name" value="Presentación" />
                  <TextInput
                    name="name"
                    type="text"
                    className="mt-1 block w-full"
                  />
                </div>
                <div className='flex gap-2'>
                  <div className='mt-3'>
                    <InputLabel forInput="name" value="Precio compra" />
                    <TextInput
                      name="name"
                      type="text"
                      className="mt-1 block w-full"
                      autoComplete="name"
                      isFocused={true}
                    />
                  </div>
                  <div className='mt-3'>
                    <InputLabel forInput="name" value="Precio Venta" />
                    <TextInput
                      name="name"
                      type="number"
                      className="mt-1 block w-full"
                      autoComplete="name"
                      isFocused={true}
                    />
                  </div>
                  <div className='mt-3'>
                    <InputLabel forInput="name" value="Cantidad" />
                    <TextInput
                      name="name"
                      type="text"
                      className="mt-1 block w-full"

                      autoComplete="name"
                      isFocused={true}
                    />
                  </div>
                </div>
                <div className='mt-3'>
                  <InputLabel forInput="name" value="Proveedor" />
                  <TextInput
                    name="name"
                    type="text"
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                  />
                </div>
                <div className='mt-3'>
                  <InputLabel forInput="name" value="Fecha de ingreso" />
                  <TextInput
                    name="name"
                    type="date"
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                  />
                </div>
                
                <div className='mt-3'>
                  <InputLabel forInput="name" value="Fecha de caducidad" />
                  <TextInput
                    name="name"
                    type="date"
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                  />
                </div>
              </div>

            </div>


            <div className="mt-6 flex justify-end gap-4 ">
              <PrimaryButton className='' onClick={closeModal}>
                Save
              </PrimaryButton>
              <SecondaryButton className='' onClick={closeModal}>Cancel</SecondaryButton>
            </div>
          </form>
        </Modal>
      </AuthenticatedLayout>
    </>
  );
}
