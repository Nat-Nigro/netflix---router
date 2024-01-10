import { Container, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import { useEffect, useState } from "react";

const MyGallery = (props) => {
  // state = {
  //   filmData: [],
  // };

  const [filmaData, setFilmData] = useState([]);

  filmDataFetch = async () => {
    const apiKey = "967961a2";

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${props.searchValue}&apikey=${apiKey}`);

      if (!response.ok) {
        throw new Error("ERROR");
      }
      const filmDataObj = await response.json();
      setFilmData({ filmData: filmDataObj.Search });
    } catch (error) {
      console.error("Errore dati", error.message);
    }
  };
  useEffect(() => {
    filmDataFetch();
  }, []);

  return (
    <Container className="my-2" fluid>
      <h3 className="text-white">{props.searchValue.toUpperCase()}</h3>
      <Row className="row-cols-md-3 row-cols-xl-6  gy-2">
        {setFilmDatailmData.slice(0, 6).map((movie, index) => (
          <SingleMovie key={index} imageUrl={movie.Poster} />
        ))}
      </Row>
    </Container>
  );
};
export default MyGallery;
