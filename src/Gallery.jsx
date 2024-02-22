import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const URL = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
console.log(import.meta.env.VITE_API_KEY);
const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${URL}=${searchTerm}`);
      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>+
      </section>
    );
  }
  if (response.isError) {
    //toasting
    <section className="image-container">
      <h4>There was an error...</h4>
    </section>;
  }
  const resuts = response.data.results;
  if (resuts.length < 1) {
    return (
      <section className="image-container">
        <h4>No elements ...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {resuts.map((item) => {
        const url = item?.urls?.regular; //if item existe dive me urls ,if urls existe give me regular
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_descpription}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
