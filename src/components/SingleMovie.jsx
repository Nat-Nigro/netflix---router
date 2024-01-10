import { Col } from "react-bootstrap";

const SingleMovie = (props) => (
  <Col>
    <img className="customImg" src={props.imageUrl} />
  </Col>
);

export default SingleMovie;
