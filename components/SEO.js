import Head from 'next/head';

export default function SEO({
  title = "Tast of Asia | Premium Indian Dining Newport",
  description = "Experience premium Indian dining at Tast of Asia in Newport. Authentic flavors, modern elegance, and award-winning service. Reserve your table today for an unforgettable culinary journey.",
  keywords = "Indian restaurant Newport, fine dining, Tast of Asia, authentic Indian cuisine, luxury dining, Newport restaurants, best indian food newport, BYOB restaurant",
  image = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  url = "https://tasteofasia.com",
  type = "website",
  noindex = false,
  schema = null,
}) {
  const siteName = "Tast of Asia";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = url.startsWith('http') ? url : `https://tasteofasia.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://tasteofasia.com${image}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Tast of Asia" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="US-RI" />
      <meta name="geo.placename" content="Newport" />
      <meta name="geo.position" content="41.490;-71.312" />
      <meta name="ICBM" content="41.490, -71.312" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      <meta name="twitter:site" content="@TastOfAsiaNewport" />
      <meta name="twitter:creator" content="@TastOfAsiaNewport" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#D4A32B" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="application-name" content={siteName} />
      <meta name="msapplication-TileColor" content="#D4A32B" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Alternate Languages (if needed) */}
      <link rel="alternate" hrefLang="en" href={fullUrl} />
      
      {/* Schema.org Structured Data */}
      {schema && (
        <>
          {Array.isArray(schema) ? (
            schema.map((item, index) => (
              <script
                key={index}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
              />
            ))
          ) : (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          )}
        </>
      )}
    </Head>
  );
}

