import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navigation"
import backgroundsmall from "../assets/backgroundsmall.png"
import art from "../assets/art.png"
import macbook from "../assets/macbook.png"
import mobone from "../assets/mobone.png"
import mobtwo from "../assets/mobtwo.png"
import mobthree from "../assets/mobthree.png"
import mockup from "../assets/mockup.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Hileets" />
    <NavBar />
    <section className="header d-flex align-items-center">
      <Container className="header__container">
        <Row className="header__row">
          <Col
            className="header__left d-flex flex-column align-items-start justify-content-center"
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            <h1>collaborative financial tracking</h1>
            <div className="space-2"></div>
            <p className="header__text">
              Keeping track of your organizations finances has never been
              easier.
            </p>
            <div className="space-1"></div>
            <div className="btn btn-default">Get Started</div>
            <div className="space-4"></div>
          </Col>
          <Col className="header__right" sm={12} md={6} lg={6} xl={6}>
            <Image
              className="header__image-one"
              src={backgroundsmall}
              fluid={true}
            />
            <Image className="header__image-two" src={art} fluid={true} />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="features d-flex align-items-center">
      <Container className="features__container">
        <div className="space-2"></div>
        <Row className="features__row ">
          <Col className="features__left" xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="space-4"></div>
            <h2>Some features of the app are</h2>
            <div className="space-1"></div>
            <p>
              Fintrack allows you to track the inflows and ourflows of your
              business, friends group, family or just your personal expenses
            </p>
            <h3>Learn More..</h3>
          </Col>
          <Col className="features__right" xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="features__content-wrapper">
              <div className="features__circle" />
              <div className="features__text">
                Completely customizable books, Organize your expenses in a
                meaningful way.
              </div>
            </div>
            <div className="features__content-wrapper">
              <div className="features__circle" />
              <div className="features__text">
                Comprehensive Reports generated automatically on any time range
                of your choice
              </div>
            </div>
            <div className="features__content-wrapper">
              <div className="features__circle" />
              <div className="features__text">
                Use anytime, from anywhere on any device securely
              </div>
            </div>
            <div className="space-4"></div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="familiar d-flex align-items-center">
      <Container className="familiar__container">
        <Row className="familiar__row">
          <Col className="familiar__left" md={6} lg={6} xl={6}>
            <Image className="familiar__image" src={macbook} fluid />
          </Col>
          <Col className="familiar__right" md={6} lg={6} xl={6}>
            <div className="space-4"></div>
            <h2>The familiar ease of slack but for finances</h2>
            <div className="space-1"></div>
            <p>
              Fintrack gives slack inspired finance management. Your expenses
              are categorized in different books so you can compartmentalize
              your views
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="fintrack d-flex align-items-center">
      <Container className="fintrack__container">
        <div className="space-4"></div>
        <Row className="fintrack__row">
          <Col className="fintrack__left" md={6} lg={6} xl={6}>
            <h2>Fintrack on the go.</h2>
            <div className="space-1"></div>
            <p>
              With Fintrack's Mobile First Design, you can open fintrack.app on
              your mobile browser and use it like any other app on your phone
            </p>
          </Col>
          <Col className="fintrack__right" md={6} lg={6} xl={6}>
            {/* <Image src={mobone} fluid /> */}
            {/* <Image src={mobtwo} fluid /> */}
            <Image src={mobthree} fluid />
          </Col>
        </Row>
        <div className="space-4"></div>
      </Container>
    </section>

    <section className="financial d-flex align-items-center">
      <Container className="financial __container">
        <div className="space-4"></div>
        <Row className="financial__row">
          <Col className="financial__left" md={6} lg={6} xl={6}>
            <Image src={mockup} fluid />
          </Col>
          <Col className="financial__right" md={6} lg={6} xl={6}>
            <h2>We do not analyse your financial data in any way</h2>
            <div className="space-1"></div>
            <p>We understand the value of privacy. Patreon Coming Soon</p>
            <div className="btn btn-default">Get Started</div>
          </Col>
        </Row>
        <div className="space-4"></div>
      </Container>
    </section>

    <section className="ads d-flex align-items-center">
      <Container className="ads__container">
        <Row>
          <Col md={12} lg={12} xl={12}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h2>Free without Ads.</h2>
              <h2>for the first year</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="footer d-flex align-items-center">
      <Container className="footer__container">
        <Row className="footer__row">
          <Col className="footer__left" md={3} lg={3} xl={3}>
            <div className="footer__heading">fintrack</div>
            <div className="space-4"></div>
            <div className="footer__text">developed by</div>
            <div className="space-2"></div>
            <div className="footer__text">hileets.com</div>
            <div className="footer__text">contact@hileets.com</div>
            <div className="footer__icons">
              <div className="footer__item"></div>
              <div className="footer__item"></div>
              <div className="footer__item"></div>
              <div className="footer__item"></div>
            </div>
          </Col>
          <Col className="footer__left" md={3} lg={3} xl={3}>
            <div className="space-4"></div>
            <div className="space-2"></div>
            <div className="footer__text">Contact Us</div>
            <div className="footer__text">Privacy and Terms</div>
            <div className="footer__text">Sign In</div>
          </Col>
          <Col className="footer__right" xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="footer__form-wrapper">
              <div className="space-2"></div>
              <h2>Get In Touch</h2>
              <form className="footer__form">
                <input className="footer__input" placeholder="Name" />
                <input className="footer__input" placeholder="Email" />
                <input
                  className="footer__input--message"
                  placeholder="Message"
                />
              </form>
              <div className="space-1"></div>
              <div className="btn btn-default">Send</div>
            </div>
          </Col>
        </Row>
        <div className="space-2"></div>
        <Row>
          <Col
            className="d-flex flex-column align-items-center justify-content-center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <div className="footer__copyright">
              &copy; Copyright 2020 HILEETS. All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
