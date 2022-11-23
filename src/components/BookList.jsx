import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <Row>
      {props.cathegory.map((book) => (
        <Col key={book.asin}>
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
