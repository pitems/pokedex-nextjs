import { useRouter } from "next/router";
function Post({ post }) {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <h1>Loading ...</h1>;
  // }

  return (
    <>
      <h2>
        {post.id} {post.title}
        <p>{post.body}</p>
      </h2>
    </>
  );
}
export default Post;

//Inform Next JS about the possible values we have so it can generate pre-rendered pages once we BUILD our application for production
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post) => {
    return { params: { postId: `${post.id}` } };
  });
  return {
    // paths,
    paths: [{ params: { postId: "1" } }, { params: { postId: "2" } }, { params: { postId: "3" } }],
    // paths: paths,
    fallback: "blocking",
  };
}
// Call the api with the parameter given to our sub page [postId].js and fetch some data which will be used to generate
// a pre-rendered page
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
