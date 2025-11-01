import Head from 'next/head';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function HomePage({ products }) {

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Appscrip Product Collection",
    "itemListElement": products.map((product, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": product.title,
      "image": product.image,
      "url": `/products/${product.id}`, 
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "USD"
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Product Listing Page | Browse Our Collection</title>
        <meta name="description" content="Browse our curated collection of products with advanced filters and search functionality." /> {/* 6.b. Page description */}
        
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} 
        />
      </Head>

      <div className="plp-container">
        <Header />
        
        <main>
            <h1 className="page-title">Shop Our Latest Products</h1> 
            
            <div className="content-layout">
                <Filters products={products} /> 
                
                {products.length > 0 ? (
                    <ProductGrid products={products} />
                ) : (
                    <p className="loading-message">No products could be loaded at this time. Please try again later.</p>
                )}
            </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let products = [];
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    
    if (!res.ok) {
        throw new Error(`API fetch failed with status: ${res.status}`);
    }
    
    products = await res.json();
  } catch (error) {
    console.error('--- SSR Data Fetching Error ---', error);
    products = []; 
  }

  return {
    props: {
      products,
    },
  };
}