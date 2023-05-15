import { useState } from "react";
import { useRouter } from "next/router";
function EventList({ eventList }) {
  //Setting up a variable event for the page to use
  const [events, setEvents] = useState(eventList);
  //We will use the router to push to the route a query parameter
  const router = useRouter();

  const fetchSportEvents = async () => {
    //calling the endpoint
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    //Setting the value to the variable
    setEvents(data);
    //updating the value on the app route using the query
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportEvents}>Sports Events</button>
      <h1>List of Events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.data} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context; //Extracting querry from context
  const { category } = query; //Extracting parameter category from query
  const queryString = category ? `category=${category}` : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  console.log(`Response is ${response}` );
  const data = await response.json();
  return {
    props: {
      eventList: data,
    },
  };
}
