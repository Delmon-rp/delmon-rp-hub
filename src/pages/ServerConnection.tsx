
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ServerConnection = () => {
  const { toast } = useToast();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyServerAddress = () => {
    navigator.clipboard.writeText("connect play.delmonrp.com");
    toast({
      title: "تم النسخ!",
      description: "تم نسخ عنوان السيرفر إلى الحافظة.",
    });
  };

  const steps = [
    {
      title: "تحميل FiveM",
      description:
        "قم بتحميل وتثبيت منصة FiveM من الموقع الرسمي. تأكد من امتلاكك للعبة GTA V الأصلية.",
      action: (
        <Button asChild variant="outline" className="mt-4">
          <a href="https://fivem.net/download" target="_blank" rel="noopener noreferrer">
            تحميل FiveM <Download className="mr-2 h-4 w-4" />
          </a>
        </Button>
      ),
    },
    {
      title: "الانضمام إلى الديسكورد",
      description:
        "انضم إلى سيرفر الديسكورد الخاص بنا للبقاء على اطلاع بكل جديد والتواصل مع مجتمع اللاعبين.",
      action: (
        <Button asChild className="mt-4 bg-[#5865F2] hover:bg-[#4752C4]">
          <a href="https://discord.gg/delmonrp" target="_blank" rel="noopener noreferrer">
            انضم للديسكورد <ExternalLink className="mr-2 h-4 w-4" />
          </a>
        </Button>
      ),
    },
    {
      title: "أداء اختبار القوانين",
      description: "قبل الدخول إلى السيرفر، عليك اجتياز اختبار القوانين الأساسية لضمان فهمك لقواعد اللعب.",
      action: (
        <Button asChild variant="secondary" className="mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            بدء الاختبار <ExternalLink className="mr-2 h-4 w-4" />
          </a>
        </Button>
      ),
    },
    {
      title: "الدخول إلى السيرفر",
      description: "بعد تثبيت FiveM واجتياز الاختبار، يمكنك الدخول إلى السيرفر باستخدام عنوان الاتصال التالي:",
      action: (
        <div className="mt-4 flex items-center">
          <code className="p-2 bg-black/20 rounded-lg border border-white/10">
            connect play.delmonrp.com
          </code>
          <Button variant="ghost" size="icon" onClick={copyServerAddress}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">كيفية الانضمام إلى السيرفر</h1>
              
              <div className="bg-secondary/30 rounded-xl p-8 border border-white/5">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">شاهد الفيديو التوضيحي</h2>
                  <div className="aspect-video bg-black/50 rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="شرح الانضمام لسيرفر مقاطعة دلمون" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-6">خطوات الانضمام للسيرفر</h2>
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div 
                      key={index} 
                      className="relative pl-8 border-r-4 border-delmon pr-4 py-2"
                    >
                      <div className="absolute right-[-14px] top-0 bg-delmon text-black w-6 h-6 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-2">{step.description}</p>
                      {step.action}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServerConnection;
