import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO of Example Corp",
    testimonial: "This service has transformed our business!",
  },
  {
    name: "John Doe1",
    role: "CEO of Example Corp",
    testimonial: "This service has transformed our business!",
  },
  {
    name: "John Doe2",
    role: "CEO of Example Corp",
    testimonial: "This service has transformed our business!",
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Says</h2>
        <Carousel
          className="w-full max-w-3xl mx-auto"
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((t, index) => (
              <CarouselItem key={index}>
                <Card className="shadow-lg rounded-2xl">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <p className="text-lg italic text-gray-700 mb-4">
                      "{t.testimonial}"
                    </p>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
