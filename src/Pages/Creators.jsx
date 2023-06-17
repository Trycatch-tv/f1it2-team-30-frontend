import AuthenticatedLayout from "../Layouts/Menu";
function Creators() {
  return (
    <>
      <AuthenticatedLayout
        header={
          <h2 className="font-semibold text-2xl text-gray-800 dark:text-[#404750] leading-tight">
            Creadores
          </h2>
        }
      >
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 text-gray-900 dark:text-gray-100">
                
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  );
}

export default Creators;
