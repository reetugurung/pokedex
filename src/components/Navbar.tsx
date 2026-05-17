import { useState, useEffect } from "react";

const Navbar = () => {
  // 1. Track which section is currently in view
  const [activeSection, setActiveSection] = useState("#home");

  const links = [
    { path: "#home", label: "Home" },
    { path: "#battle", label: "Battle" },
    { path: "#history", label: "History" },
    { path: "#pokedex", label: "Pokedex" },
    { path: "#about", label: "About" },
  ];

  // 2. Logic to detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const offset = 150; // Detect section slightly before it hits the top
      const scrollPosition = window.scrollY + offset;

      links.forEach((link) => {
        const section = document.querySelector(link.path) as HTMLElement;
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(link.path);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* Added 'sticky' so the navbar stays at the top while you scroll */
    <nav className="sticky top-4 z-50 bg-white/90 backdrop-blur-md shadow-lg py-2 px-6 mx-auto rounded-xl flex justify-between items-center mt-4 max-w-6xl">
      <img src="/Pokemon-logo.png" alt="Pokemon" className="h-12 md:h-16" />

      <ul className="flex gap-8 md:gap-12">
        {links.map((link) => (
          <li key={link.path} className="flex items-center gap-2">
            <a
              href={link.path}
              className={`font-semibold transition-colors duration-300 flex items-center gap-2 ${
                activeSection === link.path ? "text-blue-500 scale-110" : "text-gray-600 hover:text-blue-400"
              }`}
            >
              {/* Optional: Your Pokeball icon logic here */}
              {activeSection === link.path && (
                <img src="/pokeball.png" alt="active" className="w-5 h-5 animate-bounce" />
              )}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;