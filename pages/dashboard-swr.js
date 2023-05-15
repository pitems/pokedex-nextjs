import useSWR from "swr";
import axios from "axios";
// const fetcher = async () => {
//   const response = await fetch("http://localhost:4000/dashboard");
//   const data = await response.json();
//   return data;
// };

// const fetcher = async (url) => {
//     console.log("url = " + url);
//     return await axios
//       .get(url)
//       .then((res) => res.data)
//       .catch((error) => {
//         if (error.response.status !== 409) throw error;
//       });
//   };

const fetcher = (url) => axios.get(url).then((res) => res.data);

function DashboardSWR() {
  const { data, error } = useSWR("http://localhost:4000/dashboard", fetcher);

  if (error) return "An error has ocurred";
  if (!data) return "Loading";

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
}

export default DashboardSWR;
