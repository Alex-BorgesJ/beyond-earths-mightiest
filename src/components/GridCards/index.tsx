import { CardHero } from "../CardHero";
import { useGetHeroes } from "../../service/query/useGetHeroes";
import { CardGroup, Col, Row } from "react-bootstrap";

export function GridCards() {
  const { data, isLoading, isError } = useGetHeroes();

  return (
    <Row>
      {data?.data.results.map((heroes) => (
        <Col xl={3} md={6} sm={12}>
          <CardHero
            key={heroes.id}
            id={heroes.id}
            name={heroes.name}
            thumbnail={heroes.thumbnail}
          />
        </Col>
      ))}
    </Row>
  );
}
