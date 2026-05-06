import { portfolioData } from "@/data/portfolio";
import chinmayPhoto from "@/assets/chinmay.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 reveal space-y-6">
            <div>
              <div className="mono-label mb-3">// 01 — about</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                A bit about me.
              </h2>
            </div>
            <div className="relative w-48 sm:w-56 md:w-full max-w-xs">
              <div className="absolute inset-0 translate-x-2 translate-y-2 border border-border rounded-md" aria-hidden="true" />
              <img
                src={chinmayPhoto}
                alt="Portrait of Chinmay Gurav"
                className="relative w-full h-auto rounded-md border border-border object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-4 reveal">
            {portfolioData.about.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}

            <div className="pt-6 mt-6 border-t border-border">
              <div className="mono-label mb-4">// experience</div>
              <ul className="space-y-6">
                {portfolioData.experience.map((e) => (
                  <li key={e.role + e.company} className="grid sm:grid-cols-3 gap-2">
                    <div className="mono text-xs text-muted-foreground">{e.period}</div>
                    <div className="sm:col-span-2">
                      <div className="font-medium">
                        {e.role} <span className="text-muted-foreground">· {e.company}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{e.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
