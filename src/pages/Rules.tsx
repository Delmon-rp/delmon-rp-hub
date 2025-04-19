
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertCircle } from "lucide-react";

const Rules = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generalRules = [
    {
      title: "احترام اللاعبين",
      content: "يجب احترام جميع اللاعبين واستخدام لغة مناسبة في جميع قنوات التواصل. أي إساءة أو تنمر أو تحرش سيؤدي إلى حظر فوري."
    },
    {
      title: "منع الخروج من الشخصية",
      content: "يجب الالتزام بلعب الشخصية في جميع الأوقات. ممنوع التحدث خارج نطاق الشخصية (OOC) في اللعبة إلا في القنوات المخصصة لذلك."
    },
    {
      title: "منع استغلال الثغرات",
      content: "يمنع استغلال أي ثغرات في اللعبة أو السكربتات. في حال العثور على ثغرة، يجب الإبلاغ عنها للإدارة فوراً."
    },
    {
      title: "منع استخدام برامج الغش",
      content: "يمنع منعاً باتاً استخدام أي برامج أو أدوات غش. اكتشاف أي لاعب يستخدم الغش سيؤدي إلى حظر دائم."
    },
    {
      title: "احترام قرارات الإدارة",
      content: "يجب احترام قرارات الإدارة والمشرفين. إذا كان لديك اعتراض، يمكنك تقديم تذكرة في الديسكورد."
    }
  ];

  const roleplayRules = [
    {
      title: "الواقعية في لعب الدور",
      content: "حافظ على الواقعية في لعب الدور. تصرف كما تتصرف في الحياة الواقعية مع مراعاة أن شخصيتك لديها خوف طبيعي من الموت والإصابة."
    },
    {
      title: "حالة الحياة والموت",
      content: "إذا قُتلت شخصيتك، فعليك نسيان الأحداث التي أدت إلى الوفاة. هذا ما يسمى بقاعدة New Life Rule."
    },
    {
      title: "منع Meta Gaming",
      content: "يُمنع استخدام معلومات حصلت عليها خارج اللعبة داخل السيرفر (مثل معلومات من الديسكورد أو البث المباشر)."
    },
    {
      title: "منع Power Gaming",
      content: "يُمنع فرض الأفعال على اللاعبين الآخرين أو القيام بأفعال غير واقعية مثل حمل أوزان كبيرة أو الهروب من المواقف الخطرة بشكل غير منطقي."
    },
    {
      title: "منع RDM و VDM",
      content: "يُمنع القتل العشوائي (RDM) أو الدهس العشوائي (VDM) دون سبب منطقي أو تفاعل لعب دور كاف."
    }
  ];

  const jobRules = [
    {
      title: "قوانين الشرطة",
      content: "يجب على أفراد الشرطة التصرف بمهنية واتباع تسلسل القوة المناسب. ممنوع استغلال السلطة أو المعدات الشرطية لأغراض شخصية."
    },
    {
      title: "قوانين الإسعاف",
      content: "يجب على الإسعاف الاستجابة لجميع حالات الطوارئ وإعطاء الأولوية للحالات الحرجة. ممنوع رفض علاج أي شخص مهما كانت الظروف."
    },
    {
      title: "قوانين الميكانيكي",
      content: "يجب على الميكانيكي تقديم الخدمات بأسعار معقولة والالتزام بساعات العمل المحددة. ممنوع سرقة قطع غيار من السيارات."
    },
    {
      title: "قوانين التاجر",
      content: "يجب الالتزام بالأسعار المحددة من قبل الإدارة. ممنوع احتكار السلع أو التلاعب بالأسعار."
    },
    {
      title: "قوانين العصابات",
      content: "يجب أن يكون لكل عصابة منطقة محددة ولا يُسمح بالسيطرة على أكثر من منطقة واحدة. ممنوع شن هجمات عشوائية ضد المدنيين أو الوظائف الرسمية."
    }
  ];

  const crimeRules = [
    {
      title: "قوانين السرقة",
      content: "يجب أن يكون هناك سبب منطقي لكل عملية سرقة، ولا يُسمح بسرقة الأشخاص في المناطق الآمنة أو عند نقاط الظهور."
    },
    {
      title: "قوانين السطو",
      content: "يجب التخطيط المسبق لعمليات السطو الكبيرة والتنسيق مع الإدارة. لا يُسمح بتنفيذ أكثر من عملية سطو كبيرة كل ساعتين."
    },
    {
      title: "قوانين الخطف",
      content: "لا يُسمح بخطف نفس الشخص أكثر من مرة في اليوم. يجب أن يكون هناك سبب منطقي للخطف ولا يُسمح بإبقاء الرهينة لأكثر من 30 دقيقة."
    },
    {
      title: "قوانين المداهمات",
      content: "المداهمات بين العصابات يجب أن تتم بإنذار مسبق وتنسيق مع الإدارة. لا يُسمح بشن أكثر من مداهمة واحدة كل 12 ساعة."
    },
    {
      title: "قوانين الأسلحة",
      content: "ممنوع حمل الأسلحة بشكل ظاهر في المناطق المأهولة. الأسلحة الثقيلة مخصصة للعمليات الكبيرة فقط وتتطلب إذناً من الإدارة."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">قوانين مقاطعة دلمون</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                يجب على جميع اللاعبين الالتزام بهذه القوانين لضمان تجربة لعب ممتعة وعادلة للجميع.
                عدم الالتزام بالقوانين قد يؤدي إلى عقوبات تصل للحظر الدائم.
              </p>
            </div>

            <div className="bg-secondary/30 rounded-xl p-6 md:p-8 border border-white/5 mb-8">
              <div className="flex items-center gap-3 p-4 bg-delmon/10 border border-delmon/20 rounded-lg mb-6">
                <AlertCircle className="h-6 w-6 text-delmon" />
                <p className="text-sm">
                  الجهل بالقوانين لا يعفي من المسؤولية. تأكد من قراءة وفهم جميع القوانين قبل الدخول إلى السيرفر.
                </p>
              </div>

              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                  <TabsTrigger value="general">القوانين العامة</TabsTrigger>
                  <TabsTrigger value="roleplay">قوانين لعب الدور</TabsTrigger>
                  <TabsTrigger value="jobs">قوانين الوظائف</TabsTrigger>
                  <TabsTrigger value="crime">قوانين الجرائم</TabsTrigger>
                </TabsList>

                <TabsContent value="general">
                  <Accordion type="multiple" className="w-full">
                    {generalRules.map((rule, index) => (
                      <AccordionItem key={index} value={`general-rule-${index}`}>
                        <AccordionTrigger className="font-semibold">
                          {rule.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {rule.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="roleplay">
                  <Accordion type="multiple" className="w-full">
                    {roleplayRules.map((rule, index) => (
                      <AccordionItem key={index} value={`roleplay-rule-${index}`}>
                        <AccordionTrigger className="font-semibold">
                          {rule.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {rule.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="jobs">
                  <Accordion type="multiple" className="w-full">
                    {jobRules.map((rule, index) => (
                      <AccordionItem key={index} value={`job-rule-${index}`}>
                        <AccordionTrigger className="font-semibold">
                          {rule.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {rule.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="crime">
                  <Accordion type="multiple" className="w-full">
                    {crimeRules.map((rule, index) => (
                      <AccordionItem key={index} value={`crime-rule-${index}`}>
                        <AccordionTrigger className="font-semibold">
                          {rule.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {rule.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rules;
