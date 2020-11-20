import { PropTypes, React } from 'libraries';
import { Helmet } from 'react-helmet';



const MetaHeader = ({title, images, category, url}) => {
  return(
    <Helmet>
    <meta name="description" content={`Cobain ${title} Resep ${category} ini dijamin bikin yuk ngiler!`} />

    {/* Google / Search Engine Tags */}
    <meta itemprop="name" content={title}/>
    <meta itemprop="description" content={`Cobain ${title} Resep ${category} ini dijamin bikin yuk ngiler!`} />
    <meta itemprop="image" content={images} />

    {/* Facebook Meta Tags */}
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={`Cobain ${title} Resep ${category} ini dijamin bikin yuk ngiler!`} />
    <meta property="og:image" content={images} />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={`Cobain ${title} Resep ${category} ini dijamin bikin yuk ngiler!`} />
    <meta name="twitter:image" content={images} />
    </Helmet>
  )
}



MetaHeader.propsTypes = {
  title: PropTypes.string,
  images: PropTypes.string,
  category: PropTypes.string,
  url: PropTypes.string
}

export default MetaHeader;
