
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import LanguageToggle from "../ui/LanguageToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<"ar" | "en">("ar"); // Default to Arabic

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLang(lang === "ar" ? "en" : "ar");
    document.documentElement.classList.toggle("rtl");
  };

  const navLinks = [
    { name: lang === "ar" ? "الرئيسية" : "Home", path: "/" },
    { name: lang === "ar" ? "دخول السيرفر" : "Join Server", path: "/server-connection" },
    { name: lang === "ar" ? "القوانين" : "Rules", path: "/rules" },
    { name: lang === "ar" ? "الوظائف" : "Jobs", path: "/jobs" },
    { name: lang === "ar" ? "صناع المحتوى" : "Content Creators", path: "/content-creators" },
    { name: lang === "ar" ? "المتجر" : "Store", path: "https://store.delmonrp.com", external: true },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-gradient">Delmon RP</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors hover:text-delmon ${
                      link.name === (lang === "ar" ? "المتجر" : "Store")
                        ? "text-delmon font-semibold"
                        : ""
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="transition-colors hover:text-delmon"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
            <LanguageToggle language={lang} toggleLanguage={toggleLanguage} />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle language={lang} toggleLanguage={toggleLanguage} />
            <button
              onClick={toggleMenu}
              className="p-2 text-white focus:outline-none focus:ring-0"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg shadow-lg animate-fade-in">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 hover:text-delmon transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block py-2 hover:text-delmon transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
