import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) => {
  let res = await axios.get(url);
  //   console.log(res);
  const images = await Promise.all(
    res.data.results.map(async (element) => {
      const response = await fetch(element.url);
      const data = await response.json();
      return data.sprites.front_default;
      //   console.log(response.sprites.front_default);
    })
  );

  //This whole object WILL become the data object on the SWR
  return {
    items: res.data,
    images: images,
  };
};

function getListPokemon(url) {
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data,
    error: error,
  };
}

export default getListPokemon;
