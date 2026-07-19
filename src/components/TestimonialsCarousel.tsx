import { useEffect, useState } from "react";
import {
  Quote,
  Ribbon,
  Users,
  GraduationCap,
  Heart,
  School,
  Brain,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type Testimonial = {
  category: string;
  icon: LucideIcon;
  quote: string;
  attribution: string;
};

const testimonials: Testimonial[] = [
  {
    category: "Cancer Warrior",
    icon: Ribbon,
    quote:
      "For the first time since my diagnosis, I felt that someone truly understood what I was going through emotionally. The mindfulness and relaxation sessions helped me sleep better, manage my anxiety, and face each treatment with renewed hope. Sound 'N' Mind reminded me that healing is not only physical—it is emotional too.",
    attribution: "Cancer Warrior, Kolkata",
  },
  {
    category: "Cancer Caregiver",
    icon: Users,
    quote:
      "As parents, we focused so much on our child's treatment that we forgot to care for ourselves. The emotional wellbeing sessions gave us a safe space to breathe, share our fears, and regain our strength. We became calmer caregivers, and our child noticed the difference too.",
    attribution: "Parent of a Child Undergoing Cancer Treatment",
  },
  {
    category: "Schools & Emotional Literacy",
    icon: School,
    quote:
      "MindWell Club has transformed the conversation around emotional wellbeing in our school. Students are more open about their emotions, teachers feel better equipped to support them, and parents appreciate that emotional literacy is becoming part of education.",
    attribution: "Principal, Partner School",
  },
  {
    category: "Emotional Wellbeing",
    icon: Heart,
    quote:
      "Sometimes what we need most is someone who truly listens without judging. The emotional companionship sessions gave me that space. I found clarity, emotional balance, and the confidence to move forward.",
    attribution: "Emotional Wellbeing Participant",
  },
  {
    category: "Academy Graduate",
    icon: GraduationCap,
    quote:
      "This training changed the way I listen to people. I now understand that genuine presence and empathy can be as powerful as advice. The course has transformed both my professional and personal relationships.",
    attribution: "Certified Emotional Companion",
  },
  {
    category: "Dementia Care",
    icon: Brain,
    quote:
      "The dementia caregiver training gave me both knowledge and confidence. The practical demonstrations and compassionate approach made the learning experience truly meaningful.",
    attribution: "Dementia Care Training Participant",
  },
  {
    category: "Partner Organization",
    icon: Handshake,
    quote:
      "The consistent support provided through mindfulness, emotional wellbeing sessions, and guided relaxation has positively impacted the emotional resilience of the families we serve. We value this partnership immensely.",
    attribution: "AGM, Premashraya",
  },
];

export function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 6000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((t, i) => {
            const Icon = t.icon;
            return (
              <CarouselItem
                key={i}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-lg flex flex-col animate-fade-in">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="inline-flex items-center rounded-full bg-teal-light px-3 py-1 text-xs font-medium text-foreground">
                      {t.category}
                    </span>
                    <span
                      className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary"
                      aria-hidden="true"
                    >
                      <Icon size={16} />
                    </span>
                  </div>
                  <Quote
                    className="text-primary/40 mb-3"
                    size={28}
                    aria-hidden="true"
                  />
                  <p className="text-base leading-relaxed text-muted-foreground text-balance flex-1">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm font-semibold text-foreground">
                      {t.attribution}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12" />
        <CarouselNext className="hidden sm:flex -right-4 lg:-right-12" />
      </Carousel>

      <div className="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              selected === i
                ? "w-8 bg-primary"
                : "w-2 bg-border hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
