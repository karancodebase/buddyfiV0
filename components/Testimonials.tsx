/* eslint-disable @next/next/no-img-element */
import testimonials from "../lib/testimonials";
import Connect from "./Connect";

export default function Testimonials() {
  return (
    <div className="py-20 relative">
      <div>
        <div className="bg-custom-overlay"></div>
        <img src="./Group41.svg" alt="" className="w-[100vw] " />
      </div>
      <div className="absolute top-[5%] left-[8%]">
        <div>
          <h1 className="text-center md:text-6xl text-4xl font-bold">
            What <span className="text-green-400/90">People</span> Say
          </h1>
          <p className="md:max-w-[60vw] text-center mx-auto md:text-xl mt-4">
            Discover what our satisfied builders have to say about their
            experiences with BuddyFi
          </p>
        </div>
        <section className="py-16 px-10">
          <div className="flex gap-6 justify-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-zinc-800 rounded-xl px-6 py-8 max-w-[15vw] flex flex-col glass-morphism shadow-lg"
              >
                <img
                  src={t.avatar || "/placeholder.jpeg"}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <div className="mb-4 flex flex-col">
                  <span className="font-semibold text-white">{t.name}</span>
                  <span className="text-xs text-zinc-400">{t.role}</span>
                </div>

                <p className="text-zinc-200 text-base mb-3">{t.quote}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="py-20 flex justify-center text-2xl font-semibold">
          <div className="max-w-[40vw] text-center">
            “Real stories from developers who found their perfect teammates and
            built amazing things together.”
          </div>
        </div>

        <Connect />
      </div>
    </div>
  );
}
