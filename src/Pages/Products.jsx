import PrimaryButton from "../Components/PrymaryButton";
import AuthenticatedLayout from "../Layouts/Menu";

export default function Inicio(props) {
  /* const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [operation, setOperation] = useState(1);
  const openModal = (op) => {
    setModal(true);
    setOperation(op);
    if (op == 1) {
      setTitle("Nuevo Producto");
    } else {
      setTitle("Editar Producto");
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const save = () => {
    setModal(false);
  }; */
  return (
    <>
      <AuthenticatedLayout
        header={
          <h2 className="font-semibold text-2xl text-black dark:text-[#404750] leading-tight">
            Lista de Productos
          </h2>
        }
      >
        
        
        <form>
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-lime-400 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-00" type="button">Categorias <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-lime-50 rounded-r-lg border-l-lime-400 border-l-2 border border-lime-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Producto, Presentacion, Marca, Stock..." required/>
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-lime-400 rounded-r-lg border border-lime-400-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-4">
              
              <PrimaryButton onClick={() => openModal(1)}>
                <i className="fa-solid fa-plus-circle"></i>
                +Crear Producto
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div className="bg-white grid max-w-full mx-auto place-items-center p-6">
          <table className="table-auto border gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-2">#SKU</th>
                <th className="px-2 py-2">Producto</th>
                <th className="px-2 py-2">Presentacion</th>
                <th className="px-2 py-2">Marca</th>
                <th className="px-2 py-2">Precio unitatio</th>
                <th className="px-2 py-2">Stock</th>
                <th className="px-2 py-2">Lote</th>
                <th className="px-2 py-2">Caducidad</th>
                <th className="px-2 py-2">Fecha de compra</th>
                <th className="px-2 py-2">Categoria</th>
                <th className="px-2 py-2">Categoria</th>
                
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Editar
                </button>

                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Eliminar
                </button>
              </tr>
            </thead>
          </table>
        </div>

       
        
        {/* <Modal show={modal} onClose={closeModal}>
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
                  <InputLabel forInput="name" value="SKU" />
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
                  <InputLabel forInput="name" value="SubCategoría" />
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
                    <InputLabel forInput="name" value="Precio unitario" />
                    <TextInput
                      name="name"
                      type="text"
                      className="mt-1 block w-full"
                      autoComplete="name"
                      isFocused={true}
                    />
                  </div>
                  <div className='mt-3'>
                    <InputLabel forInput="name" value="Cantidad" />
                    <TextInput
                      name="name"
                      type="number"
                      className="mt-1 block w-full"
                      autoComplete="name"
                      isFocused={true}
                    />
                  </div>
                  <div className='mt-3'>
                    <InputLabel forInput="name" value="Lote" />
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
                  <InputLabel forInput="name" value="Fecha de caducidad" />
                  <TextInput
                    name="name"
                    type="date"
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                  />
                </div>
                <div className='mt-3'>
                  <InputLabel forInput="name" value="Tipo de movimiento" />
                  <TextInput
                    name="name"
                    type="text"
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                  />
                </div>
                <div className='mt-3'>
                  <InputLabel forInput="name" value="Fecha de movimiento" />
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
        </Modal> */}
      </AuthenticatedLayout>
    </>
  );
}
