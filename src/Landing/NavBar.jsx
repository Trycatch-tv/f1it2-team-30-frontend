import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="w-full flex items-center justify-evenly bg-[#58B3D0] h-16 ">
        <Link className="w-56 " to="/">
          <h1 className="font-sans text-2xl font-bold text-white ">
            Products <span className="text-[#FCE690]">+</span>
          </h1>
        </Link>

        <div className="w-72 flex items-center px-3 rounded-md border bg-white ">
          <input
            className="w-60 h-9 rounded-md outline-none"
            type="text"
            placeholder="Buscar"
          />
          <span>🔍</span>
        </div>
        <div className="w-96">
          <ul className="flex items-center gap-9 text-white font-medium">
            <li>
              <NavLink to="/cursos">pro</NavLink>
            </li>
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li className="rounded-lg border-yellow-300 border text-black bg-yellow-200 hover:bg-yellow-300 p-2">
              <NavLink to="/register">Crear cuenta</NavLink>
            </li>
            <li>
              <NavLink to="/logout">Salir</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
