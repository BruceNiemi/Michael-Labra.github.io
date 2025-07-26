import { Button } from "./ui/button";

export default function Hero() {
  return (
    //className="bg-gray-900
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto h-[90vh] max-w-[1300px] px-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-t from-pink-500 to-orange-300 bg-clip-text text-transparent">
            JAGUAR HEATING
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-t from-purple-500 to-cyan-400 bg-clip-text text-transparent mt-4">
            & COOLING MECHANICAL CO.
          </h2>
          <p className="text-black text-lg md:text-xl font-semibold mt-4">
            See What Makes Us Different
          </p>
          <Button className="mt-6" asChild>
            <a href="tel:(431)-557-4253">Contact Me: (431)-557-4253</a>
          </Button>
        </div>
        <div className="flex justify-center">
          <img
            src="Jaguar Heating And Cooling Mechanical Co..png"
            alt="pic"
            className="h-3/5 w-3/5"
          />
        </div>
      </div>
    </section>
  );
}
