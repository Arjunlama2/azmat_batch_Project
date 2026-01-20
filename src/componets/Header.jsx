import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router";

const navilinks = [
  { name: "Home", link: "/" },
  { name: "Pages", link: "/pages" },
  { name: "Products", link: "/products" },
  { name: "Blog", link: "/blog" },
  { name: "Shop", link: "/shop" },
  { name: "Contact", link: "/contact" },
];

function Header() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
     
      <div className="bg-purple-600 text-white text-sm">
        <div className="container mx-auto px-4 flex justify-between h-10 items-center">
          <div className="flex gap-6">
            <span>📧 mhhasanul@gmail.com</span>
            <span>📞 (12345) 67890</span>
          </div>
          <div className="hidden md:flex gap-4">
            <span>English</span>
            <span>USD</span>
            <Link to="/login">Login</Link>
            <Link to="/wishlist">Wishlist</Link>
          </div>
        </div>
      </div>

     
      <header className="bg-white shadow relative">
        <div className="container mx-auto px-6 flex justify-between items-center h-16">

          
          <h1 className="text-2xl font-bold text-purple-600">
            Hekto
          </h1>

        
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {navilinks.map((el, index) => (
                <li key={index}>
                  <Link
                    to={el.link}
                    className="text-gray-700 hover:text-pink-500"
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          
          <div className="hidden md:flex">
            <input
              type="text"
              placeholder="Search"
              className="border px-3 py-1 outline-none"
            />
            <button className="bg-pink-500 px-4 text-white">
              🔍
            </button>
          </div>

        
          <div className="md:hidden text-purple-600">
            <div className="relative w-6 h-6">
              <RxCross1
                className={`absolute text-xl transition-all
                ${isToggled ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                onClick={() => setIsToggled(false)}
              />
              <CiMenuBurger
                className={`absolute text-xl transition-all
                ${isToggled ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
                onClick={() => setIsToggled(true)}
              />
            </div>
          </div>

        </div>
      </header>


      <div
        className={`${isToggled ? "block" : "hidden"} fixed inset-0 bg-black/60 z-40`}
        onClick={() => setIsToggled(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-2/3 bg-white z-50 p-6
          transition-transform duration-500
          ${isToggled ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col gap-6 text-lg">
            {navilinks.map((el, index) => (
              <li key={index}>
                <Link
                  to={el.link}
                  onClick={() => setIsToggled(false)}
                  className="text-gray-700 hover:text-pink-500"
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      
      <ul className="flex flex-col gap-6 text-lg">
            {navilinks.map((el, index) => (
              <li key={index}>
                <Link
                  to={el.link}
                  onClick={() => setIsToggled(false)}
                  className="text-gray-700 hover:text-pink-500"
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </>
  )
}

export default Header