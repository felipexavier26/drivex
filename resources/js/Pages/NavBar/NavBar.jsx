import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import img from "../../../../public/build/assets/img/images.jpeg";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="py-2 max-w-screen-2xl h-28 mx-auto mt-7">
        <div className="flex justify-between items-center px-4">
          <div className="flex-1 text-center md:text-left">
            <img src={img} alt="logo" className="mx-auto max-w-xs" />
          </div>

          <div className="hidden md:flex space-x-4 text-white">
            <Link
              href="/"
              target="_blank"
              className="bg-red-700 border-2 border-white p-2 rounded-full hover:bg-red-800 transition-all"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="bg-red-700 border-2 border-white p-2 rounded-full hover:bg-red-800 transition-all"
            >
              <FaInstagramSquare size={24} />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="bg-red-700 border-2 border-white p-2 rounded-full hover:bg-red-800 transition-all"
            >
              <FaTwitter size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-red-800 h-24">
        <nav className="py-2 max-w-screen-2xl mx-auto px-4">
          <div className="container mx-auto flex justify-between items-center mt-3 space-x-4">
            <ul className="hidden md:flex space-x-10 text-white font-medium text-xl mx-auto">
              <li>
                <Link href="/" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/estoque" className="hover:text-gray-200">
                  Estoque
                </Link>
              </li>
              <li>
                <Link href="/financiamento" className="hover:text-gray-200">
                  Financiamento
                </Link>
              </li>
              <li>
                <Link href="/empresa" className="hover:text-gray-200">
                  Empresa
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-gray-200">
                  Contato
                </Link>
              </li>
            </ul>

            <div className="hidden md:flex items-center w-full max-w-xs md:w-1/4">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="p-2 rounded-md text-black w-full"
              />
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <ul
              className="md:hidden bg-red-800 text-white flex flex-col items-start space-y-4 p-4 absolute top-48 left-0 w-full"
              style={{ zIndex: 50 }} 
            >
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/estoque" onClick={() => setMenuOpen(false)}>
                  Estoque
                </Link>
              </li>
              <li>
                <Link href="/financiamento" onClick={() => setMenuOpen(false)}>
                  Financiamento
                </Link>
              </li>
              <li>
                <Link href="/empresa" onClick={() => setMenuOpen(false)}>
                  Empresa
                </Link>
              </li>
              <li>
                <Link href="/contato" onClick={() => setMenuOpen(false)}>
                  Contato
                </Link>
              </li>

              <li className="flex items-center w-full">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="p-2 rounded-md text-black w-full"
                />
              </li>
            </ul>
          )}
        </nav>
      </div>
    </>
  );
}

export default NavBar;
