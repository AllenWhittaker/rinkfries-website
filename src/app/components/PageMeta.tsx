import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
}

const SITE = "https://rinkfries.com";
const OG_IMAGE = `${SITE}/logo.png`;

export function PageMeta({ title, description, path }: PageMetaProps) {
  const url = `${SITE}${path}`;
  const fullTitle = path === "/" ? title : `${title} | Rink Fries`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Rink Fries" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
