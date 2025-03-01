export const CTABanner = () => {
  return (
    <section className="py-20 px-6 md:px-14">
      <div
        className="max-w-7xl mx-auto px-10 sm:px-20 text-center sm:text-start p-20 relative bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/together.jpg')" }}
      >
        <div className="absolute inset-0 bg-red-500/65" />
        <div className="text-white isolate">
          <div>
            <h2 className="font-semibold text-2xl uppercase mb-4">Join Us</h2>
            <p className="max-w-2xl">
              Change begins with you. Whether you’re a volunteer, donor, or
              partner, your support can help us create a brighter future for
              countless individuals. Together, we can empower youth, uplift
              women, and build stronger communities.
            </p>
          </div>
          <div className="flex gap-y-4 gap-x-8 flex-col sm:flex-row mt-10">
            <button className="font-semibold bg-white text-gray-800 py-2 px-8 rounded-lg hover:bg-white/80 transition-all duration-200">
              Become A Volunteer
            </button>
            <button
              className="font-semibold text-white py-2 px-8 bg-center bg-cover"
              style={{
                backgroundImage: 'url("/assets/img/button-stroke.svg")',
              }}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
