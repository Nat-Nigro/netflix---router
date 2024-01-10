import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class MyGallery extends Component {
  state = {
    filmData: [],
  };
  filmDataFetch = async () => {
    const apiKey = "967961a2";

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${this.props.searchValue}&apikey=${apiKey}`);

      if (!response.ok) {
        throw new Error("ERROR");
      }
      const filmDataObj = await response.json();
      this.setState({ filmData: filmDataObj.Search });
    } catch (error) {
      console.error("Errore dati", error.message);
    }
  };
  componentDidMount() {
    this.filmDataFetch();
  }
  render() {
    return (
      <Container className="my-2" fluid>
        <h3 className="text-white">{this.props.searchValue.toUpperCase()}</h3>
        <Row className="row-cols-md-3 row-cols-xl-6  gy-2">
          {this.state.filmData.slice(0, 6).map((movie, index) => (
            <SingleMovie key={index} imageUrl={movie.Poster} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default MyGallery;
