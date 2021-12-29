import { Typography, Box } from "@mui/material";
import React, { Component } from "react";
import { Container, Row, Card, Col, Figure } from "react-bootstrap";
import "../Style/Skills.scss";
import web from "../images/web.jpg";
import js from "../images/js.jpg";
import nodejs from "../images/nodejs.jpg";
import hc from "../images/hc.jpg";
import rr from "../images/rr.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    document.title = "Skills";
  }
  render() {
    return (
      <>
        <Container fluid className="no-gutters">
          <Row>
            <Container fluid className="bg-dark   h-100 d-inline-block ">
              <Typography variant="h3">
                <Box
                  sx={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "medium",
                  }}
                >
                  Assemble all idea & create innovative things
                </Box>
              </Typography>
            </Container>
          </Row>
          <Container className="fluid">
            <Row className="mt-5">
              <Card>
                <Row className="mt-5">
                  <Col>
                    <Card style={{ border: "none" }}>
                      <Card.Body>
                        <Card.Title>Web Scrapping</Card.Title>
                        <Card.Text>
                          Web scraping refers to the extraction of data from a
                          website. This information is collected and then
                          exported into a format that is more useful for the
                          user. Be it a spreadsheet or an API. I collect data
                          and store those data on my database .
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <div className="float-end m-2" style={{ width: 200, height: 200 }}>
                      <CircularProgressbar value={80} text={'80%'}/>
                    </div>
                    {/* <Figure className="float-end">
                      <Figure.Image width={200} height={200} src={web} />
                    </Figure> */}
                  </Col>
                </Row>
              </Card>
            </Row>
            <Row className="mt-5">
              <Card>
                <Row className="mt-5">
                  <Col>
                    <Card style={{ border: "none" }}>
                      <Card.Body>
                        <Card.Title>Java Script</Card.Title>
                        <Card.Text>
                          JavaScript, often abbreviated as JS, is a programming
                          language that conforms to the ECMAScript
                          specification. JavaScript is high-level, often
                          just-in-time compiled and multi-paradigm. It has
                          dynamic typing, prototype-based object-orientation and
                          first-class functions.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                  <div className="float-end m-2" style={{ width: 200, height: 200 }}>
                      <CircularProgressbar value={90} text={'90%'}/>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Row>
            <Row className="mt-5">
              <Card>
                <Row className="mt-5">
                  <Col>
                    <Card style={{ border: "none" }}>
                      <Card.Body>
                        <Card.Title>Node JS</Card.Title>
                        <Card.Text>
                          Node.js is an open-source, cross-platform, back-end
                          JavaScript runtime environment that runs on the V8
                          engine and executes JavaScript code outside a web
                          browser. Node.js lets developers use JavaScript to
                          write command line tools and for server-side
                          scripting—running scripts server-side to produce
                          dynamic web page content before the page is sent to
                          the user's web browser. Consequently, Node.js
                          represents a "JavaScript everywhere" paradigm,
                          unifying web-application development around a single
                          programming language, rather than different languages
                          for server-side and client-side scripts.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                  <div className="float-end m-2" style={{ width: 200, height: 200 }}>
                      <CircularProgressbar value={80} text={'80%'}/>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Row>
            <Row className="mt-5">
              <Card>
                <Row className="mt-5">
                  <Col>
                    <Card style={{ border: "none" }}>
                      <Card.Body>
                        <Card.Title>HTML & CSS</Card.Title>
                        <Card.Text>
                          <b> HTML: </b>
                          <br /> <hr />
                          HTML stands for Hyper Text Markup Language. HTML is
                          the standard markup language for creating Web pages.
                          HTML describes the structure of a Web page. HTML
                          consists of a series of elements. HTML elements tell
                          the browser how to display the content. <br /> <br />{" "}
                          <br />
                          <b> CSS:</b> <br /> <hr />
                          Cascading Style Sheets, fondly referred to as CSS, is
                          a simply designed language intended to simplify the
                          process of making web pages presentable. CSS allows
                          you to apply styles to web pages. More importantly,
                          CSS enables you to do this independent of the HTML
                          that makes up each web page. CSS is easy to learn and
                          understand, but it provides powerful control over the
                          presentation of an HTML document.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                  <div className="float-end m-2" style={{ width: 200, height: 200 }}>
                      <CircularProgressbar value={80} text={'80%'}/>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Row>
            <Row className="mt-5">
              <Card>
                <Row className="mt-5">
                  <Col>
                    <Card style={{ border: "none" }}>
                      <Card.Body>
                        <Card.Title>React & React Native</Card.Title>
                        <Card.Text>
                          <b> React: </b>
                          <br /> <hr />
                          ReactJS is an open-source JavaScript library used to
                          build the user interface for Web Applications. It is
                          responsible only for the view layer of the
                          application. It provides developers to compose complex
                          UIs from a small and isolated piece of code called
                          "components." ReactJS made of two parts first is
                          components, that are the pieces that contain HTML code
                          and what you want to see in the user interface, a nd
                          the second one is HTML document where all your
                          components will be rendered.
                          <br /> <br /> <br />
                          <b> React Native:</b> <br /> <hr />
                          React Native is an open-source JavaScript framework
                          used for developing a mobile application for iOS
                          Android, and Windows. It uses only JavaScript to build
                          a cross-platform mobile app. React Native is same as
                          React, but it uses native components instead of using
                          web components as building blocks. It targets mobile
                          platforms rather than the browser.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                  <div className="float-end m-2" style={{ width: 200, height: 200 }}>
                      <CircularProgressbar value={75} text={'75%'}/>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}
