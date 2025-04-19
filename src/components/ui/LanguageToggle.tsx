
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: "ar" | "en";
  toggleLanguage: () => void;
}

const LanguageToggle = ({ language, toggleLanguage }: LanguageToggleProps) => {
  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="flex items-center gap-2 border-delmon/20 hover:bg-delmon/10"
    >
      <Globe size={16} className="text-delmon" />
      <span>{language === "ar" ? "العربية" : "English"}</span>
    </Button>
  );
};

export default LanguageToggle;
