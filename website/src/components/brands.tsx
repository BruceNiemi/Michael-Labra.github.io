import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const brands = [
  {
    name: "Rheem",
    logo: "/brands/rheem.svg",
  },
  {
    name: "Ducane",
    logo: "/brands/ducane.png",
  },
  {
    name: "Samsung",
    logo: "/brands/samsung.png",
  },
  {
    name: "Allied Commercial",
    logo: "/brands/allied-commercial.png",
  },
  {
    name: "Fresh-AirUV",
    logo: "/brands/fresh-air-uv.png",
  },
  {
    name: "AO Smith",
    logo: "/brands/ao-smith.png",
  },
  {
    name: "Comfort-Aire",
    logo: "/brands/comfort-aire.png",
  },
  {
    name: "Daikin",
    logo: "/brands/daikin.png",
  },
  {
    name: "Danfoss",
    logo: "/brands/danfoss.svg",
  },
  {
    name: "Electrohome",
    logo: "/brands/electrohome.png",
  },
  {
    name: "Engineered Air",
    logo: "/brands/engineered-air.png",
  },
  {
    name: "G.E",
    logo: "/brands/ge.png",
  },
  {
    name: "Honeywell",
    logo: "/brands/honeywell.png",
  },
  {
    name: "Johnson Controls",
    logo: "/brands/johnson-controls.png",
  },
  {
    name: "KeepRite",
    logo: "/brands/keeprite.png",
  },
  {
    name: "Lennox",
    logo: "/brands/lennox.png",
  },
  {
    name: "Liebert",
    logo: "/brands/liebert.png",
  },
  {
    name: "Modine",
    logo: "/brands/modine.png",
  },
  {
    name: "Nailor",
    logo: "/brands/nailor.png",
  },
  {
    name: "Payne",
    logo: "/brands/payne.jpg",
  },
  {
    name: "Reznor",
    logo: "/brands/reznor.png",
  },
];

export default function Brands() {
  return (
    <section className="py-12">
      <div className="mt-4 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Trusted Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {brands.map((brand) => (
            <Card key={brand.name} className="w-full max-w-sm">
              <CardHeader className="flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-32 object-contain"
                />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle>{brand.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
