import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "HVAC-R Services and Repairs",
    subtitle: "At An Affordable Price.",
    image: "/cards/Image1.jpg", // Swap for a proper banner-style image when available
  },
  {
    id: 2,
    title: "Maintenance Contracts",
    subtitle: "Innovative Solutions.",

    image: "/cards/Image2.jpg", // Swap for a proper banner-style image when available
  },
];

export default function Services() {
  return (
    <section>
      <div className="container mx-auto text-center py-5">
        <h2 className="text-3xl font-bold mb-10">
          We Are High-Quality HVAC-R Services And Energy Solutions
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-center">
          {services.map((card) => (
            <Card
              key={card.id}
              className="relative flex-1 h-[260px] p-0 overflow-hidden group border-none shadow-lg rounded-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.image})` }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/10"
                aria-hidden="true"
              />
              <div className="relative h-full flex flex-col justify-end p-6 text-left text-white">
                <h3 className="text-xl font-semibold mb-2 drop-shadow-sm">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-white/90 mb-4 leading-snug max-w-prose">
                  {card.subtitle}
                </p>
                <div>
                  <Button
                    asChild
                    variant="secondary"
                    className="bg-white/90 text-gray-900 hover:bg-white"
                  >
                    <a href="tel:(431)-557-4253">Contact Me: (431)-557-4253</a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
