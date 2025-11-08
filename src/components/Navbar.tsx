import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/battle", label: "Battle" },
    { path: "/history", label: "History" },
    { path: "/pokedex", label: "Pokedex" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="top-2 bg-white shadow-lg py-2 px-6 mx-auto rounded-xl flex justify-between items-center  mt-4 ">
      <img src="/Pokemon-logo.png" alt="Pokemon" style={{ height: "100px" }} />

      <ul className="flex gap-15">
        {links.map((link) => (
          <li key={link.path} className="flex items-center gap-2">
            <Link
              to={link.path}
              className={`font-semibold flex items-center gap-2 ${
                pathname === link.path ? "text-blue-500" : "text-gray-600"
              }`}
            >
              
              {pathname === link.path && (
                <img
                  src="/pokeball.png"
                  alt="active"
                  className="w-5 h-5"
                  style={{ verticalAlign: "middle" }}
                />
              )}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;