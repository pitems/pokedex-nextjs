import HeaderDesign from "@/components/header";
import User from "@/components/user";

function UserList({ users }) {
  return (
    <>
    <HeaderDesign></HeaderDesign>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return { props: { users: data } };
}
