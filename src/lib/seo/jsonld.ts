import { WithContext, Organization } from "schema-dts";

import { BASE_URL } from "../constants";

export const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zita-Onyeka Foundation",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "The Zita-Onyeka Foundation is dedicated to empowering women and youth, promoting gender equality, and fostering sustainable community development in Nigeria. Join us in creating a brighter future for all.",
  image: `${BASE_URL}/og-image.png`,
  foundingDate: "2020",
  email: "onyekazita@gmail.com",
  telephone: "+234 803 786 4683",
  address: {
    "@type": "PostalAddress",
    streetAddress: " 16, Nkwere Street, Garki Area 11 FCT, Abuja Nigeria.",
    addressLocality: "Abuja",
    addressRegion: "Abuja",
    postalCode: "900247",
    addressCountry: "Nigeria",
  },
  sameAs: [
    "https://facebook.com/zitaonyekafoundation",
    "https://twitter.com/zitaonyekafdn",
    "https://instagram.com/zitaonyekafoundation",
  ],
  keywords: [
    "Zita-Onyeka Foundation",
    "Empower women",
    "Youth development",
    "Community development",
    "Gender equality",
    "Sustainable development",
    "NGO in Nigeria",
    "Women empowerment programs",
    "Youth skill training",
    "Community resilience",
    "Education for women",
    "Economic empowerment",
    "Healthcare access",
    "Poverty alleviation",
    "Non-profit organization",
    "Social impact",
    "Sustainable communities",
    "Women leadership",
    "Youth mentorship",
    "Community initiatives",
    "Nigeria NGO",
    "Empowerment programs",
    "Social development",
    "Sustainable livelihoods",
    "Women and youth support",
  ],
  foundingLocation: {
    "@type": "Place",
    name: "Abuja, Nigeria",
  },
  slogan: "Reaching out to the world.",
  areaServed: "Nigeria",
  contactPoint: {
    "@type": "ContactPoint",
    email: "onyekazita@gmail.com",
    telephone: "+234 803 786 4683",
    contactType: "Customer Support",
  },
  memberOf: {
    "@type": "NGO",
    name: "Global Network for Community Development",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Programs and Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Youth Empowerment Program",
        description:
          "Providing education, mentorship, and skill-building opportunities for young people.",
      },
      {
        "@type": "Offer",
        name: "Women’s Education Initiative",
        description:
          "Supporting women with access to education, vocational training, and resources.",
      },
      {
        "@type": "Offer",
        name: "Community Development Projects",
        description:
          "Improving access to healthcare, clean water, and sustainable livelihoods.",
      },
    ],
  },
};
