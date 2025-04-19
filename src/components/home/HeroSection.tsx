
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background z-10"></div>
        <div className="bg-[url('https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center h-full w-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            مرحباً بك في
            <span className="block text-gradient">مقاطعة دلمون</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up">
            سيرفر عربي للعب الأدوار على منصة FiveM. عش تجربة لعب فريدة في عالم واقعي وسط مجتمع متكامل من اللاعبين.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up">
            <Button asChild size="lg" className="bg-delmon text-black hover:bg-delmon-400">
              <Link to="/server-connection">
                انضم إلى السيرفر
                <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-delmon/50 hover:bg-delmon/10">
              <a href="https://discord.gg/delmonrp" target="_blank" rel="noopener noreferrer">
                انضم إلى الديسكورد
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
