/* eslint-disable @next/next/no-img-element */
import testimonials from "../lib/testimonials";
import Connect from "./Connect";

export default function Testimonials() {
  return (
    <div className="pt-20 relative w-full h-full overflow-hidden">
      <img
        src="./Group41.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10">
        <div>
          <h1 className="text-center md:text-6xl text-4xl font-bold">
            What <span className="text-green-400/90">People</span> Say
          </h1>
          <p className="md:max-w-[60vw] text-center mx-auto md:text-xl mt-4">
            Discover what our satisfied builders have to say about their
            experiences with BuddyFi
          </p>
        </div>
        <section className="py-16 md:px-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 justify-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-zinc-800 rounded-xl md:px-6 px-4 md:py-8 py-2  flex flex-col glass-morphism shadow-lg"
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

        <div className="pt-20 mx-auto flex justify-center  md:text-2xl font-semibold">
          <div>
            “Real stories from developers who found their perfect teammates and
            built amazing things together.”
          </div>
        </div>

        <Connect />
      </div>
    </div>
  );
}
