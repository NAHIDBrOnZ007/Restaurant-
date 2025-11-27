import { APP_NAME, ADDRESS, PHONE, EMAIL, MENU_ITEMS, REVIEWS } from './constants';

const BASE_URL = "https://tasteofasia.com";

export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": APP_NAME,
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "@id": BASE_URL,
    "url": BASE_URL,
    "telephone": PHONE,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Ocean Drive",
      "addressLocality": "Newport",
      "addressRegion": "RI",
      "postalCode": "02840",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.490,
      "longitude": -71.312
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "17:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday", "Sunday"],
        "opens": "16:30",
        "closes": "23:00"
      }
    ],
    "servesCuisine": "Indian",
    "priceRange": "$$",
    "acceptsReservations": true,
    "hasMenu": {
      "@type": "Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Starters",
          "hasMenuItem": MENU_ITEMS.filter(item => item.category === 'starter').map(item => ({
            "@type": "MenuItem",
            "name": item.name,
            "description": item.description,
            "offers": {
              "@type": "Offer",
              "price": item.price.replace('$', ''),
              "priceCurrency": "USD"
            }
          }))
        },
        {
          "@type": "MenuSection",
          "name": "Main Courses",
          "hasMenuItem": MENU_ITEMS.filter(item => item.category === 'main').map(item => ({
            "@type": "MenuItem",
            "name": item.name,
            "description": item.description,
            "offers": {
              "@type": "Offer",
              "price": item.price.replace('$', ''),
              "priceCurrency": "USD"
            }
          }))
        },
        {
          "@type": "MenuSection",
          "name": "Desserts",
          "hasMenuItem": MENU_ITEMS.filter(item => item.category === 'dessert').map(item => ({
            "@type": "MenuItem",
            "name": item.name,
            "description": item.description,
            "offers": {
              "@type": "Offer",
              "price": item.price.replace('$', ''),
              "priceCurrency": "USD"
            }
          }))
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": REVIEWS.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": REVIEWS.map((review, index) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.text
    })),
    "award": "TripAdvisor Travellers' Choice Award 2025",
    "foundingDate": "1995",
    "description": "Premium Indian restaurant in Newport, RI. Family-run since 1995, offering authentic Indian cuisine with modern elegance. Newport's only BYOB restaurant with no corkage fee."
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BASE_URL,
    "name": APP_NAME,
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "url": BASE_URL,
    "telephone": PHONE,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Ocean Drive",
      "addressLocality": "Newport",
      "addressRegion": "RI",
      "postalCode": "02840",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.490,
      "longitude": -71.312
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "17:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday", "Sunday"],
        "opens": "16:30",
        "closes": "23:00"
      }
    ],
    "priceRange": "$$"
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": APP_NAME,
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PHONE,
      "contactType": "customer service",
      "email": EMAIL,
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/tasteofasianewport",
      "https://www.instagram.com/tasteofasianewport",
      "https://www.tripadvisor.com/tasteofasia"
    ]
  };
}

