export const OurValues = () => {
  const our_values = [
    { title: "Empathy", desc: "We listen, we care, and we act." },
    {
      title: "Integrity",
      desc: "We are transparent, accountable, and honest in everything we do.",
    },
    {
      title: "Collaboration",
      desc: "We believe in the power of partnerships and community-driven solutions.",
    },
    {
      title: "Innovation",
      desc: "We embrace creativity and adaptability to address challenges effectively.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-bold text-gray-700 text-xl uppercase text-center md:text-start">
          <span className="text-green-400">Our</span> Values
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 xl:gap-20 mt-14 @container/main">
          <div className="md:col-span-4 @container">
            <div className="grid grid-cols-1 @md:grid-cols-2 gap-8">
              {our_values.map(({ desc, title }, i) => (
                <div key={i} className="flex items-start gap-4 shrink-0">
                  <div className="text-7xl xs:text-8xl font-extrabold text-gray-400/50 border-r pr-2">
                    {i + 1}
                  </div>
                  <div className="space-y-1">
                    <strong className="mt-2 block text-gray-700">
                      {title}
                    </strong>
                    <p className="text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 mt-20 md:mt-0 md:border-l md:pl-6 lg:pl-10 @container">
            <div
              className="md:col-span-2 bg-no-repeat bg-cover bg-center relative p-8 px-5 text-center text-white rounded-md overflow-hidden text-sm h-full place-items-center"
              style={{
                backgroundImage: 'url("/assets/img/value-and-strength.jpg")',
              }}
            >
              <div className="absolute inset-0 bg-black/35" />
              <div className="isolate flex items-center justify-center flex-col">
                <strong className="block mb-1 text-xl">
                  Become a Volunteer
                </strong>
                <p>
                  We believe that every hand can help, and every heart can
                  inspire. Join us today and be a part of something truly
                  meaningful.
                </p>

                <button className="mt-10 py-2 px-4 bg-green-600 rounded-md font-semibold uppercase shadow-lg hover:bg-green-500 text-xs whitespace-nowrap">
                  Volunteer Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
