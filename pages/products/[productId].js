import { useRouter } from "next/router";
function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <h2>
        {product.id} {product.title} {product.price}
        <p>{product.description}</p>
      </h2>
    </>
  );
}
export default Product;

//Inform Next JS about the possible values we have so it can generate pre-rendered pages once we BUILD our application for production
export async function getStaticPaths() {
  return {
    // paths,
    paths: [{ params: { productId: "1" } }],
    // paths: paths,
    fallback: true,
  };
}
// Call the api with the parameter given to our sub page [postId].js and fetch some data which will be used to generate
// a pre-rendered page
export async function getStaticProps(context) {
  const { params } = context;
  console.log(`Regenerating product ${params.productId}`);
  const response = await fetch(`http://localhost:4000/products/${params.productId}`);
  const data = await response.json();

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
