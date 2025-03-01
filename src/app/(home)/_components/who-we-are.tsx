import Link from "next/link";

export const WhoWeAre = () => {
  return (
    <section className="p-6 md:px-14 bg-gray-50 pb-24">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl xs:text-3xl font-semibold text-center bg-center bg-no-repeat mt-16 mb-10 text-gray-900 px-6 py-2 capitalize whitespace-nowrap"
          style={{ backgroundImage: 'url("/assets/img/button-stroke.svg")' }}
        >
          Who we are
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto">
          At the Zita-Onyeka Foundation, we believe in the power of community,
          the potential of youth, and the strength of women. Founded with a
          vision to create lasting change, we are a non-profit organization
          dedicated to empowering individuals and transforming communities. Our
          mission is simple yet profound: to provide opportunities, resources,
          and support that enable youth and women to thrive. We focus on
          education, skill development, and community initiatives that foster
          growth, equality, and sustainability.
          <Link
            href="/who-we-are"
            className=" text-red-600 hover:text-blue-600 underline ml-4 underline-offset-2 whitespace-nowrap"
          >
            READ MORE
          </Link>
        </p>
      </div>
    </section>
  );
};
