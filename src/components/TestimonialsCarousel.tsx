import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    category: "Seniors & Caregivers",
    quote:
      "The emotional companionship sessions brought comfort, confidence, and meaningful connection to our family during a difficult time.",
    name: "Placeholder Name",
  },
  {
    category: "Students & Teachers",
    quote:
      "Our students became more mindful, emotionally aware, and supportive of one another through the MindWell Club.",
    name: "Placeholder Name",
  },
  {
    category: "Cancer Caregivers",
    quote:
      "Having a safe space to share emotions and receive compassionate support made an incredible difference in our journey.",
    name: "Placeholder Name",
  },
  {
    category: "Program Facilitators",
    quote:
      "The training empowered me with practical skills and confidence to support emotional well-being within my community.",
    name: "Placeholder Name",
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
          {testimonials.map((t, i) => (
            <CarouselItem
              key={i}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-lg flex flex-col animate-fade-in">
                <span className="self-start inline-flex items-center rounded-full bg-teal-light px-3 py-1 text-xs font-medium text-foreground mb-5">
                  {t.category}
                </span>
                <Quote
                  className="text-primary/40 mb-3"
                  size={28}
                  aria-hidden="true"
                />
                <p className="text-base leading-relaxed text-muted-foreground text-balance flex-1">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                  <div
                    className="h-11 w-11 rounded-full bg-gradient-to-br from-teal-light to-coral-light flex items-center justify-center text-sm font-semibold text-foreground/70"
                    aria-hidden="true"
                  >
                    {t.name
                      .split(" ")
                      .map((s) => s[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.category}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
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
