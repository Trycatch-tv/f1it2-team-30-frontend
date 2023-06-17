import React, {useState} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';
import AuthenticatedLayout from "../Layouts/Menu";


function Categories() {
  return (
    <>
      <AuthenticatedLayout
        header={
          <h2 className="font-semibold text-2xl text-gray-800 dark:text-[#404750] leading-tight">
            Lista de Categorias
          </h2>
        }
      >
        
        <div className="py-12">
      <div className="max-w-3xl mx-auto sm:px-7 lg:px-8">
        <div className="bg-[#FDEFCE] overflow-hidden shadow-sm sm:rounded-lg flex justify-center">
          <div className="p-6 text-gray-900 dark:text-gray-100">
            <table className="border table-auto gray-400">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-2 py-2 border border-gray-400">
                    <h6 className="text-black" style={{ fontFamily: 'Roboto Slab' }}>ID</h6>
                  </th>
                  <th className="px-2 py-2 border border-gray-400">
                    <h6 className="text-black" style={{ fontFamily: 'Roboto Slab' }}>Nombre</h6>
                  </th>
                  <th className="px-2 py-2 border border-gray-400">
                    <h6 className="text-black" style={{ fontFamily: 'Roboto Slab' }}>Activo</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-2 py-2 border border-gray-400">
                    <h6 className="text-black" style={{ fontFamily: 'Roboto Slab' }}>1</h6>
                  </td>
                  <td className="px-2 py-2 border border-gray-400">
                    <h6 className="text-black" style={{ fontFamily: 'Roboto Slab' }}></h6>
                  </td>
                  <td className="px-2 py-2 border border-gray-400">
                    <h6 className="text-black" style={{ fontFamily: 'Roboto Slab' }}>Activo</h6>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="px-2 py-2 border border-gray-400">
                    <h6 className="text-black" style={{ fontFamily: 'Roboto Slab' }}>2</h6>
                  </td>
                  <td className="px-2 py-2 border border-gray-400">
                    <h6 className="text-black" style={{ fontFamily: 'Roboto Slab' }}></h6>
                  </td>
                  <td className="px-2 py-2 border border-gray-400">
                    <h6 className="text-black" style={{ fontFamily: 'Roboto Slab' }}>Activo</h6>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="bg-white">
                  <td className="px-2 py-2 border border-gray-400">
                    <h6 className="text-black" style={{ fontFamily: 'Roboto Slab' }}>3</h6>
                  </td>
                  <td className="px-2 py-2 border border-gray-400">
                    <h6 className="text-black" style={{ fontFamily: 'Roboto Slab' }}></h6>
                  </td>
                  <td className="px-2 py-2 border border-gray-400">
                    <h6 className="text-black" style={{ fontFamily: 'Roboto Slab' }}>Activo</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      </AuthenticatedLayout>
    </>
  );
}

export default Categories;
