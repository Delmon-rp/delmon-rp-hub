import { Link } from "react-router-dom";
import { LayoutGrid, Instagram, Youtube } from "lucide-react";  // Replace Discord with a generic icon

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <Link to="/" className="mb-4">
              <h1 className="text-2xl font-bold text-gradient">Delmon RP</h1>
            </Link>
            <p className="text-muted-foreground">
              سيرفر مقاطعة دلمون للعب الأدوار على منصة FiveM. انضم إلينا واستمتع بتجربة لعب فريدة في عالم GTA V.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-muted-foreground hover:text-delmon transition-colors">الرئيسية</Link>
              <Link to="/server-connection" className="text-muted-foreground hover:text-delmon transition-colors">دخول السيرفر</Link>
              <Link to="/rules" className="text-muted-foreground hover:text-delmon transition-colors">القوانين</Link>
              <Link to="/jobs" className="text-muted-foreground hover:text-delmon transition-colors">الوظائف</Link>
              <Link to="/content-creators" className="text-muted-foreground hover:text-delmon transition-colors">صناع المحتوى</Link>
              <a href="https://store.delmonrp.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-delmon transition-colors">المتجر</a>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <div className="flex space-x-4">
              <a href="https://discord.gg/delmonrp" target="_blank" rel="noopener noreferrer" className="hover:text-delmon transition-colors">
                <LayoutGrid size={24} />  {/* Replaced Discord icon */}
              </a>
              <a href="https://instagram.com/delmonrp" target="_blank" rel="noopener noreferrer" className="hover:text-delmon transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://youtube.com/delmonrp" target="_blank" rel="noopener noreferrer" className="hover:text-delmon transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} مقاطعة دلمون. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
