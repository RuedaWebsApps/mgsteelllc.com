export type Locale = 'en' | 'es';

export interface TestimonialSlide {
  quote: string;
  author: string;
}

export interface SiteContent {
  locale: Locale;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  nav: {
    home: string;
    langSwitchLabel: string;
    langSwitchHref: string;
  };
  hero: {
    title: string;
    boxCopy: string;
    ctaText: string;
    ctaHref: string;
    topRightAccent: string;
    bottomLeftAccent: string;
  };
  foundations: {
    heading: string;
    body: string;
    mainPhoto: string;
    overlapPhoto: string;
    geometricAccent: string;
  };
  experienceBridge: {
    heading: string;
    topLeftAccent: string;
  };
  collaborating: {
    heading: string;
    body: string;
    ctaText: string;
    ctaHref: string;
    photo: string;
  };
  specialistVideo: {
    heading: string;
    col1Copy: string;
    col2Copy: string;
    videoSrc: string;
    videoPoster: string;
  };
  trustedLeader: {
    heading: string;
    col2Copy: string;
    col3Copy: string;
    leftPhoto: string;
    leftGeometricAccent: string;
    rightPhoto: string;
  };
  testimonials: {
    topRightAccent: string;
    slides: TestimonialSlide[];
  };
  contact: {
    topLeftAccent: string;
    bottomRightAccent: string;
    heading: string;
    emailLabel: string;
    emailValue: string;
    phoneLabel: string;
    phoneValue: string;
    phoneHref: string;
    addressLabel: string;
    addressValue: string;
    photo1: string;
    photo2: string;
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingText: string;
      tcpaNotice: string;
    };
  };
  footer: {
    credits: string;
  };
}

export const SITE_INFO = {
  name: 'MG STEEL, LLC',
  shortName: 'MG Steel',
  domain: 'mgsteelllc.com',
  siteUrl: 'https://mgsteelllc.com',
  phoneDisplay: '512-839-7206',
  phoneHref: 'tel:+15128397206',
  whatsappHref: 'https://wa.me/15128397206',
  email: 'Molinar@mgsteelatx.com',
  address: '102 Arena Caliente Rd, Elgin, TX 78621',
  logo: '/images/LOGO-DE-MG-NEGRO.png',
};

const EXACT_DIVI_HOME: Omit<SiteContent, 'locale' | 'seo' | 'nav'> = {
  hero: {
    title: 'MG STEEL LLC',
    boxCopy:
      'At MG STEEL, LLC, we are experts in the precise installation of rebar, post-tension cables, and wire mesh, ensuring the strength and longevity of every project. From solid foundations to elevated decks, our expertise is your strongest support.',
    ctaText: 'Contact us',
    ctaHref: 'https://wa.me/15128397206',
    topRightAccent: '/images/civil-engineering-5.png',
    bottomLeftAccent: '/images/civil-engineering-6.png',
  },
  foundations: {
    heading: 'Building Projects with Unyielding Foundations',
    body: 'At MG STEEL, LLC, we are your strategic ally for the structural integrity of every building. We specialize in the precise installation of rebar, post-tension (PT) cable, and wire mesh—crucial elements for the integrity of foundations, panels, elevated decks, piers, and footings. We guarantee the durability and resilience your project demands right from its groundwork.',
    mainPhoto: '/images/civil-engineering-3.jpg',
    overlapPhoto: '/images/IMG_2066-300x233.jpeg',
    geometricAccent: '/images/civil-engineering-9.png',
  },
  experienceBridge: {
    heading: 'Experience That Upholds Grand Projects.',
    topLeftAccent: '/images/civil-engineering-10.png',
  },
  collaborating: {
    heading: 'Collaborating to Define Your Project’s Structural Goals',
    body: 'At MG STEEL, LLC, we work closely with you from the initial stages to understand the unique requirements of your construction project. Our expertise in rebar, PT cable, and wire mesh installation allows us to provide targeted solutions for your foundations, panels, elevated decks, piers, and footings. We assist in determining the optimal approach to achieve the necessary strength, durability, and compliance, ensuring every structural objective is precisely met.',
    ctaText: 'contact us',
    ctaHref: 'https://wa.me/15128397206',
    photo: '/images/IMG_2129.jpeg',
  },
  specialistVideo: {
    heading: 'A Leading Structural Reinforcement Specialist for Modern Infrastructure',
    col1Copy:
      'At MG STEEL, LLC, we are dedicated to providing the foundational strength required for complex infrastructure projects. Our expertise lies in the precise installation of rebar, PT cable, and wire mesh, critical components that ensure the long-term integrity and safety of every structure we touch. We collaborate closely with clients to deliver superior results that stand the test of time.',
    col2Copy:
      'Our commitment to excellence extends to every detail, from robust foundations and resilient panels to secure elevated decks and steadfast piers & footings. We employ industry-leading techniques and a highly skilled team to meet the most stringent technical specifications, making us the trusted partner for civil engineering firms and contractors seeking unwavering structural quality.',
    videoSrc: '/images/VID-20250305-WA0043.mp4',
    videoPoster: '/images/IMG_2129.jpeg',
  },
  trustedLeader: {
    heading: 'A Trusted Leader in Structural Reinforcement',
    col2Copy:
      'MG STEEL, LLC stands as a premier specialist in the vital field of structural reinforcement. Our unwavering commitment to precision and quality in rebar, PT cable, and wire mesh installation makes us the preferred choice for foundational integrity across diverse construction projects. We ensure every element contributes to the long-term strength and stability of your infrastructure.',
    col3Copy:
      'Our expertise extends to a broad range of applications, from critical foundations and robust panels to secure elevated decks and deep piers & footings. We partner with civil engineering firms and contractors to provide solutions that not only meet but exceed rigorous industry standards, solidifying our reputation as a reliable and high-performance partner in every build.',
    leftPhoto: '/images/IMG_4959.jpeg',
    leftGeometricAccent: '/images/civil-engineering-13.png',
    rightPhoto: '/images/IMG_2073.jpeg',
  },
  testimonials: {
    topRightAccent: '/images/civil-engineering-14.png',
    slides: [
      {
        quote:
          '"MG STEEL, LLC exceeded our expectations. Their rebar installation was precise, and their team worked efficiently, keeping our foundation project on schedule. The quality of their work truly sets them apart. Highly recommended for any structural reinforcement needs."',
        author: '— Project Manager, Major Construction Firm',
      },
      {
        quote:
          '"We\'ve partnered with MG STEEL, LLC on several projects involving PT cable and wire mesh for elevated decks. Their attention to detail and commitment to safety are exceptional. They consistently deliver high-quality work that forms the solid backbone of our structures. A reliable and expert partner."',
        author: '— Lead Engineer, Infrastructure Development',
      },
      {
        quote:
          '"For our complex pier and footing work, MG STEEL, LLC provided an outstanding service. Their expertise in structural installations, including precise rebar and wire mesh placement, was evident. They are professional, responsive, and their work ensures the long-term integrity of our buildings. We wouldn\'t hesitate to work with them again."',
        author: '— Site Superintendent, Commercial Builder',
      },
    ],
  },
  contact: {
    topLeftAccent: '/images/civil-engineering-1.png',
    bottomRightAccent: '/images/civil-engineering-2.png',
    heading: 'Contact Us',
    emailLabel: 'Email:',
    emailValue: 'Molinar@mgsteelatx.com',
    phoneLabel: 'Phone:',
    phoneValue: '512-839-7206',
    phoneHref: 'tel:+15128397206',
    addressLabel: 'Address:',
    addressValue: '102 Arena Caliente Rd, Elgin, TX 78621',
    photo1: '/images/20240401_161545-300x225.jpg',
    photo2: '/images/IMG_2059-300x225.jpg',
    form: {
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email Address',
      messagePlaceholder: 'Message',
      submitButton: 'Submit',
      submittingText: 'Sending...',
      tcpaNotice:
        'By submitting this form, you agree to our Privacy Policy and Terms of Use and consent to allow MG STEEL, LLC to contact you regarding your project inquiry.',
    },
  },
  footer: {
    credits: 'Designed by Rueda La Rola Media | 2025©®',
  },
};

export const SITE_CONTENT: Record<Locale, SiteContent> = {
  en: {
    locale: 'en',
    seo: {
      title: 'MG | Steel LLC',
      description:
        'MG STEEL, LLC — Experts in the precise installation of rebar, post-tension cables, and wire mesh in Elgin & Austin, TX. Call 512-839-7206.',
      canonical: 'https://mgsteelllc.com/',
    },
    nav: {
      home: 'Home',
      langSwitchLabel: 'ES',
      langSwitchHref: '/es',
    },
    ...EXACT_DIVI_HOME,
  },
  es: {
    locale: 'es',
    seo: {
      title: 'MG | Steel LLC – Refuerzo Estructural en Texas',
      description:
        'MG STEEL, LLC — Especialistas en instalación de varilla (rebar), cables postensados (PT) y malla electrosoldada en Elgin y Austin, TX. Llama al 512-839-7206.',
      canonical: 'https://mgsteelllc.com/es',
    },
    nav: {
      home: 'Home',
      langSwitchLabel: 'EN',
      langSwitchHref: '/',
    },
    ...EXACT_DIVI_HOME,
  },
};

export function getJsonLdSchema(locale: Locale) {
  const c = SITE_CONTENT[locale];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['GeneralContractor', 'HomeAndConstructionBusiness'],
        '@id': `${SITE_INFO.siteUrl}/#organization`,
        name: SITE_INFO.name,
        alternateName: SITE_INFO.shortName,
        url: SITE_INFO.siteUrl,
        logo: `${SITE_INFO.siteUrl}/images/LOGO-DE-MG-NEGRO.png`,
        image: `${SITE_INFO.siteUrl}/images/og-cover.jpg`,
        description: c.seo.description,
        telephone: '+1-512-839-7206',
        email: SITE_INFO.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '102 Arena Caliente Rd',
          addressLocality: 'Elgin',
          addressRegion: 'TX',
          postalCode: '78621',
          addressCountry: 'US',
        },
        areaServed: [
          { '@type': 'City', name: 'Elgin' },
          { '@type': 'City', name: 'Austin' },
          { '@type': 'State', name: 'Texas' },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_INFO.siteUrl}/#website`,
        url: SITE_INFO.siteUrl,
        name: SITE_INFO.name,
        inLanguage: ['en-US', 'es-US'],
        publisher: {
          '@id': `${SITE_INFO.siteUrl}/#organization`,
        },
      },
    ],
  };
}
