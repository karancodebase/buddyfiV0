/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import testimonials from "../lib/testimonials";

export default function Testimonials() {
  return (
    <section className="py-4 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-zinc-800 rounded-xl p-6 flex flex-col items-center text-center shadow-lg">
              <img
                src={t.avatar || "/favicon.svg"}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-blue-500 object-cover"
              />
              <p className="text-zinc-200 text-base mb-3">"{t.quote}"</p>
              <span className="font-semibold text-white">{t.name}</span>
              <span className="text-xs text-zinc-400">{t.role}</span>
            </div>
          ))}
        </div>
      
    </section>
  );
}
