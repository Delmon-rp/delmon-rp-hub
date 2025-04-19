
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, ChevronRight, ShieldAlert, Stethoscope, Flame, Car, Briefcase, Store } from "lucide-react";

const Jobs = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const officialJobs = [
    {
      title: "وزارة الداخلية",
      icon: <ShieldAlert className="h-10 w-10 text-delmon" />,
      description: "انضم إلى صفوف رجال الشرطة للحفاظ على أمن واستقرار المقاطعة.",
      requirements: ["العمر 18+", "سجل نظيف", "اجتياز المقابلة", "اجتياز التدريب"],
      slots: "20/30",
      status: "متاح",
      applyLink: "#",
    },
    {
      title: "الهلال الأحمر",
      icon: <Stethoscope className="h-10 w-10 text-delmon" />,
      description: "ساعد في إنقاذ حياة المواطنين وتقديم الرعاية الصحية الضرورية.",
      requirements: ["العمر 18+", "سجل طبي نظيف", "اجتياز الاختبار الطبي", "القدرة على العمل تحت الضغط"],
      slots: "15/20",
      status: "متاح",
      applyLink: "#",
    },
    {
      title: "الدفاع المدني",
      icon: <Flame className="h-10 w-10 text-delmon" />,
      description: "ساهم في إخماد الحرائق وإنقاذ الأرواح في حالات الطوارئ.",
      requirements: ["اللياقة البدنية", "اجتياز التدريب", "القدرة على العمل في الظروف الصعبة", "روح الفريق"],
      slots: "10/15",
      status: "متاح",
      applyLink: "#",
    },
    {
      title: "المحاماة",
      icon: <Briefcase className="h-10 w-10 text-delmon" />,
      description: "قدم الاستشارات القانونية ودافع عن المواطنين في المحكمة.",
      requirements: ["المعرفة بقوانين المقاطعة", "مهارات الخطابة", "اجتياز امتحان نقابة المحامين"],
      slots: "5/8",
      status: "متاح",
      applyLink: "#",
    },
  ];

  const civilianJobs = [
    {
      title: "سائق تاكسي",
      icon: <Car className="h-10 w-10 text-delmon" />,
      description: "قم بنقل المواطنين حول المقاطعة وكسب المال مقابل خدماتك.",
      howToGet: "يمكنك الحصول على وظيفة سائق تاكسي من مكتب النقل العام في وسط المدينة. تحتاج لدفع رسوم رخصة قدرها $500.",
      income: "متوسط",
      difficulty: "سهلة",
    },
    {
      title: "بائع متجر",
      icon: <Store className="h-10 w-10 text-delmon" />,
      description: "أدر متجرك الخاص وبيع المنتجات للمواطنين.",
      howToGet: "يمكنك شراء متجر من خلال تطبيق العقارات في هاتفك داخل اللعبة. تكلفة المتجر تبدأ من $10,000.",
      income: "عالي",
      difficulty: "متوسطة",
    },
    {
      title: "صياد",
      icon: <Store className="h-10 w-10 text-delmon" />,
      description: "اصطد الأسماك وبيعها للمطاعم والمواطنين.",
      howToGet: "توجه إلى ميناء الصيد واستأجر قارب صيد، ثم اشتر معدات الصيد من متجر الصيد.",
      income: "متوسط",
      difficulty: "متوسطة",
    },
    {
      title: "عامل توصيل",
      icon: <Store className="h-10 w-10 text-delmon" />,
      description: "قم بتوصيل الطلبات من المطاعم والمتاجر إلى المنازل.",
      howToGet: "توجه إلى أي مطعم أو متجر وتحدث مع المدير للحصول على وظيفة عامل توصيل.",
      income: "منخفض",
      difficulty: "سهلة",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">الوظائف في مقاطعة دلمون</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                استكشف العديد من الوظائف المتاحة في المقاطعة واختر ما يناسب أسلوب لعبك.
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 bg-delmon/10 border border-delmon/20 rounded-lg mb-8">
              <AlertCircle className="h-6 w-6 text-delmon flex-shrink-0" />
              <p className="text-sm">
                الوظائف الرسمية تتطلب تقديم طلب وإجراء مقابلة. الوظائف المدنية متاحة للجميع داخل اللعبة مباشرة.
              </p>
            </div>

            <Tabs defaultValue="official" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8 w-full max-w-md mx-auto">
                <TabsTrigger value="official">الوظائف الرسمية</TabsTrigger>
                <TabsTrigger value="civilian">الوظائف المدنية</TabsTrigger>
              </TabsList>

              <TabsContent value="official">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {officialJobs.map((job, index) => (
                    <Card key={index} className="bg-secondary/30 border-white/5 overflow-hidden">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col">
                            <CardTitle className="mb-2">{job.title}</CardTitle>
                            <CardDescription>{job.description}</CardDescription>
                          </div>
                          <div>{job.icon}</div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">المتطلبات:</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {job.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex justify-between">
                          <div>
                            <h4 className="text-sm font-medium mb-1">الأماكن الشاغرة:</h4>
                            <p className="text-sm text-muted-foreground">{job.slots}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-1">الحالة:</h4>
                            <Badge variant={job.status === "متاح" ? "outline" : "secondary"}>
                              {job.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter>
                        <Button asChild className="w-full bg-delmon text-black hover:bg-delmon-400">
                          <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                            تقديم طلب
                            <ChevronRight className="mr-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="civilian">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {civilianJobs.map((job, index) => (
                    <Card key={index} className="bg-secondary/30 border-white/5 overflow-hidden">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col">
                            <CardTitle className="mb-2">{job.title}</CardTitle>
                            <CardDescription>{job.description}</CardDescription>
                          </div>
                          <div>{job.icon}</div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">كيفية الحصول على الوظيفة:</h4>
                          <p className="text-sm text-muted-foreground">{job.howToGet}</p>
                        </div>

                        <div className="flex justify-between">
                          <div>
                            <h4 className="text-sm font-medium mb-1">الدخل:</h4>
                            <Badge variant="outline">{job.income}</Badge>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-1">الصعوبة:</h4>
                            <Badge variant="outline">{job.difficulty}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
