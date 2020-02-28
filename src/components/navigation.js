import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const NavBar = () => (
  <section className="navigation d-flex align-items-center">
    <Container className="navigation__container" fluid={true}>
      <Row className="navigation__row">
        <Col
          className="navigation__column"
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <div className="navigation__logo item">fintrack</div>
          <div className="navigation__button item">Sign In</div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default NavBar
