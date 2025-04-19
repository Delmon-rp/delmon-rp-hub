
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Youtube, Twitch, Instagram, CheckCircle2, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ContentCreators = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const creators = [
    {
      name: "يوسف القحطاني",
      handle: "@DelmonYoussef",
      avatar: "https://i.pravatar.cc/150?img=1",
      description: "صانع محتوى رئيسي في مقاطعة دلمون، محتوى يومي عن الحياة في المدينة.",
      subscribers: "120K",
      type: "youtube",
      verified: true,
      admin: true,
      socialLinks: {
        youtube: "https://youtube.com/delmon-youssef",
        instagram: "https://instagram.com/delmon-youssef",
        twitch: "https://twitch.tv/delmon-youssef",
      },
    },
    {
      name: "خالد العتيبي",
      handle: "@DelmonKhaled",
      avatar: "https://i.pravatar.cc/150?img=2",
      description: "محتوى ترفيهي ومقالب في مقاطعة دلمون. بث مباشر أسبوعي.",
      subscribers: "75K",
      type: "youtube",
      verified: true,
      admin: false,
      socialLinks: {
        youtube: "https://youtube.com/delmon-khaled",
        instagram: "https://instagram.com/delmon-khaled",
      },
    },
    {
      name: "سارة السعيد",
      handle: "@DelmonSarah",
      avatar: "https://i.pravatar.cc/150?img=5",
      description: "صانعة محتوى متخصصة في مغامرات السباقات والسيارات داخل المقاطعة.",
      subscribers: "50K",
      type: "twitch",
      verified: true,
      admin: false,
      socialLinks: {
        twitch: "https://twitch.tv/delmon-sarah",
        instagram: "https://instagram.com/delmon-sarah",
      },
    },
    {
      name: "فهد المطيري",
      handle: "@DelmonFahad",
      avatar: "https://i.pravatar.cc/150?img=4",
      description: "محتوى حصري من الشرطة والعمليات الأمنية في مقاطعة دلمون.",
      subscribers: "30K",
      type: "youtube",
      verified: true,
      admin: false,
      socialLinks: {
        youtube: "https://youtube.com/delmon-fahad",
      },
    },
  ];

  const renderSocialIcons = (links: any) => {
    return (
      <div className="flex space-x-3">
        {links.youtube && (
          <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-delmon">
            <Youtube size={18} />
          </a>
        )}
        {links.twitch && (
          <a href={links.twitch} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            <Twitch size={18} />
          </a>
        )}
        {links.instagram && (
          <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <Instagram size={18} />
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">صناع المحتوى</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                تعرف على صناع المحتوى المعتمدين في مقاطعة دلمون. شاهد محتواهم وانضم إلى مجتمعنا.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {creators.map((creator, index) => (
                <Card key={index} className="bg-secondary/30 border-white/5 overflow-hidden">
                  <div className="h-24 bg-gradient-to-r from-delmon-900 to-delmon-700"></div>
                  <div className="px-6 pb-6">
                    <div className="relative -mt-12 flex justify-center">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="h-24 w-24 rounded-full border-4 border-background object-cover"
                      />
                    </div>
                    <CardHeader className="text-center p-0 pt-4">
                      <div className="flex items-center justify-center space-x-1">
                        <CardTitle className="text-xl">{creator.name}</CardTitle>
                        {creator.verified && <CheckCircle2 size={16} className="text-delmon" />}
                        {creator.admin && <Shield size={16} className="text-delmon" />}
                      </div>
                      <CardDescription className="text-sm">{creator.handle}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center text-sm text-muted-foreground pt-2 px-0">
                      <p>{creator.description}</p>
                      <div className="mt-4 flex items-center justify-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {creator.subscribers} مشترك
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            creator.type === "youtube"
                              ? "text-red-500 border-red-500/20"
                              : "text-purple-500 border-purple-500/20"
                          }`}
                        >
                          {creator.type === "youtube" ? "YouTube" : "Twitch"}
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 px-0 flex justify-center">
                      {renderSocialIcons(creator.socialLinks)}
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-secondary/30 rounded-xl p-8 border border-white/5">
                <h2 className="text-2xl font-semibold mb-4 text-center">انضم إلى فريق صناع المحتوى</h2>
                <p className="text-muted-foreground mb-6 text-center">
                  هل أنت صانع محتوى وترغب في الانضمام إلى مجتمعنا؟ نحن نرحب بمحتوى جديد ومميز يعكس الحياة في مقاطعة دلمون.
                </p>

                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-medium">المتطلبات:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>حساب يوتيوب أو تويتش نشط مع محتوى ألعاب.</li>
                    <li>ما لا يقل عن 1000 مشترك/متابع.</li>
                    <li>التزام بنشر محتوى عن مقاطعة دلمون بانتظام.</li>
                    <li>الالتزام بقوانين السيرفر وسياسة المحتوى.</li>
                    <li>عمر لا يقل عن 18 عامًا.</li>
                  </ul>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-medium">المزايا:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>دور خاص في الديسكورد الرسمي.</li>
                    <li>دعم من إدارة السيرفر للمحتوى.</li>
                    <li>إمكانية المشاركة في الفعاليات الحصرية.</li>
                    <li>باقات وامتيازات خاصة داخل اللعبة.</li>
                  </ul>
                </div>

                <div className="text-center">
                  <Button asChild size="lg" className="bg-delmon text-black hover:bg-delmon-400">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      تقديم طلب الانضمام
                    </a>
                  </Button>
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

export default ContentCreators;
