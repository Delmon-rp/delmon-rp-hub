
import { Shield, Users, Trophy } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-delmon" />,
      title: "لعب أدوار واقعي",
      description: "سيرفر يتمحور حول لعب الأدوار الواقعي مع قوانين ونظام يحاكي الواقع.",
    },
    {
      icon: <Users className="h-10 w-10 text-delmon" />,
      title: "مجتمع مميز",
      description: "انضم إلى مجتمع من اللاعبين المميزين ذوي الخبرة في لعب الأدوار.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-delmon" />,
      title: "تطوير مستمر",
      description: "نعمل باستمرار على تطوير السيرفر وإضافة محتوى جديد لتجربة أفضل.",
    },
  ];

  return (
    <section className="py-20 bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">نبذة عن مقاطعة دلمون</h2>
          <div className="h-1 w-20 bg-delmon mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            مقاطعة دلمون هي سيرفر عربي للعب الأدوار على منصة FiveM، نهدف إلى تقديم تجربة لعب متميزة محاكية للواقع
            عبر نظام متكامل من القوانين والوظائف التي تنظم الحياة داخل المقاطعة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-secondary/30 p-8 rounded-lg border border-white/5 transition-transform hover:translate-y-[-5px] hover:shadow-lg hover:shadow-delmon/10"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
