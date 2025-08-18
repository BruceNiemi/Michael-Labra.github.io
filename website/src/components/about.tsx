import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutInformation() {
  return (
    <section
      className="relative mx-auto px-6 py-12"
      aria-labelledby="about-heading"
    >
      <header className="mb-10">
        <h1 id="about-heading" className="text-3xl font-bold tracking-tight">
          About Us
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-center text-base text-muted-foreground leading-relaxed">
          We are{" "}
          <strong className="font-semibold text-foreground">
            High Quality HVAC-R Energy Services and Solutions
          </strong>
          , committed to delivering reliable, efficient and cost-effective
          service around the clock.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-5 items-start">
        <div className="md:col-span-5 flex justify-center">
          <Card className="hover:shadow-md transition w-full max-w-3xl">
            <CardHeader className="pb-2 text-center">
              <CardTitle className="text-2xl font-semibold">
                Why Clients Choose Us
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 text-base">
                <li className="group relative flex items-start gap-3 rounded-lg p-3 bg-muted/40 hover:bg-muted/70 transition">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white text-[10px] font-bold text-black border border-gray-300 shadow">
                    $
                  </span>
                  <p>
                    <span className="font-semibold">Flat hourly rate:</span>{" "}
                    <strong>$90.00 / hour</strong>
                  </p>
                </li>
                <li className="group relative flex items-start gap-3 rounded-lg p-3 bg-muted/40 hover:bg-muted/70 transition">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white text-[10px] font-bold text-black border border-gray-300 shadow">
                    ✓
                  </span>
                  <p>No time-and-a-half or double-time charges</p>
                </li>
                <li className="group relative flex items-start gap-3 rounded-lg p-3 bg-muted/40 hover:bg-muted/70 transition">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white text-[10px] font-bold text-black border border-gray-300 shadow">
                    24
                  </span>
                  <p>
                    Available <strong>24 / 7</strong>
                  </p>
                </li>
                <li className="group relative flex items-start gap-3 rounded-lg p-3 bg-muted/40 hover:bg-muted/70 transition">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white text-[10px] font-bold text-black border border-gray-300 shadow">
                    ✔
                  </span>
                  <p>
                    Work guaranteed for one year (up to 10 years on select
                    manufacturer parts)
                  </p>
                </li>
                <li className="group relative flex items-start gap-3 rounded-lg p-3 bg-muted/40 hover:bg-muted/70 transition">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white text-[10px] font-bold text-black border border-gray-300 shadow">
                    %
                  </span>
                  <p>No tax on labour until the $30,000 ceiling is reached</p>
                </li>
                <li className="group relative flex items-start gap-3 rounded-lg p-3 bg-muted/40 hover:bg-muted/70 transition">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white text-[10px] font-bold text-black border border-gray-300 shadow">
                    RT
                  </span>
                  <p>
                    No lift required to access your rooftop unit – safe ladder
                    setup from lower roof access
                  </p>
                </li>
              </ul>
              <div className="flex justify-center">
                <Button className="mt-6" asChild>
                  <a href="tel:(431)-557-4253">Contact Me: (431)-557-4253</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
