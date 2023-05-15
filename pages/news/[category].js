function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>Showin news for category {category}</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title}
            </h2>
            <p>{article.description}</p>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  //We are going to Filter data by category
  const { params } = context; // destructuring the params value inside context
  const { category } = params; // getting the value of category on our dynamic page
  const response = await fetch(`http://localhost:4000/news?category=${category}`); //fetching data from our json-serve
  const data = await response.json();
  return {
    props: {
      articles: data,
      category,
    },
  };
}
