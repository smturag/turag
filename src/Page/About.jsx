import React, { Component } from "react";
import { Container, Row, Col, Figure, Card ,Image } from "react-bootstrap";
import { Box, Grid, Typography } from "@mui/material";
import phakal from "../images/phakal.png";
import diu from "../images/diu-logo.png"
import rgc from "../images/rgc.jpg"
import gis from "../images/gis.jpg"
import myPic from '../images/myPic.jpg'
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    document.title = "About";
  }
  render() {
    return (
      <>
        <Container>
          <Grid>
            <Row className="">
              <Col>
                <Typography variant="h2">
                  <Box sx={{ fontFamily: "courier", fontWeight: "Bold" }}>
                    Who am I??
                  </Box>
                </Typography>
                <hr />
                <Typography variant="h6">
                  <Box sx={{ fontFamily: "sans-serif" }}>
                    I am a Full stack web and cross platform developer.
                  </Box>
                </Typography>
                <hr />
                <Typography variant="p">
                  <Box sx={{ fontFamily: "cursive" }}>
                    My name is S M Turag. You can call me Turag. I build full
                    stack application using JavaScript. As I full stack
                    developer from FrontEnd side I using React JS and React
                    Native JS framework. On the other hand from BackEnd side I
                    using Node JS , Express JS. <br />I don’t fit into most
                    boxes. I’m a creative working in tech with one of the most
                    people-focused roles in the industry—user research. I love
                    helping others grow and do their best work. Much of my
                    inspiration comes from my life experience — I tend to cover
                    topics in professional and personal development and share
                    learnings I think will be helpful for others. Beyond that,
                    I’m probably spending time with family and friends,
                    strolling, podcasting, or tinkering on my next side project.
                  </Box>
                </Typography>
              </Col>
              <Col xs={8} md={4} sm={2}  className="m-5"> <Figure>
                            <Figure.Image
                              width={300}
                              height={300}
                              alt="171x180"
                              src={myPic}
                            />
                            </Figure>
                            </Col>
            </Row>
            <hr />
            <hr />
            <Row>
              
                <Typography variant="h2">
                  <Box sx={{ fontFamily: "courier", fontWeight: "Bold" }}>
                    Academic Status
                  </Box>
                </Typography>
                <hr />
                <Row className="p-2">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col>
                          <ul>
                            <li>
                              <Typography variant="h5">
                                <Box sx={{ fontFamily: "fantasy" }}>
                                  {" "}
                                  School
                                </Box>
                              </Typography>
                            </li>
                            <Typography variant="h6">
                              <Box sx={{ fontFamily: "cursive" }}>
                                Asim Uddin Standard kinder garden. <br />
                                Session: 2001-2006 <br />
                                Place: Burir Bazar, Mohendranagor, Lalmonirhat<br />
                                <br />
                              </Box>
                            </Typography>
                          </ul>
                        </Col>
                        <Col xs={8} md={4} sm={2}>
                          <Figure>
                            <Figure.Image
                              width={300}
                              height={300}
                              alt="171x180"
                              src={phakal}
                            />
                            <figcaption> Asim Uddin Standard kinder garden</figcaption>
                          </Figure>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>

                <Row className="p-2">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col>
                          <ul>
                            <li>
                              <Typography variant="h5">
                                <Box sx={{ fontFamily: "fantasy" }}>
                                  {" "}
                                  School
                                </Box>
                              </Typography>
                            </li>
                            <Typography variant="h6">
                              <Box sx={{ fontFamily: "cursive" }}>
                                PHaKAL Police lines school.<br />
                                Session: 2007-2010 <br />
                                Group: Science <br />
                                Place: Lalmonirhat<br />
                              </Box>
                            </Typography>
                          </ul>
                        </Col>
                        <Col xs={8} md={4}>
                          <Figure>
                            <Figure.Image
                              width={300}
                              height={300}
                              alt="171x180"
                              src={phakal}
                            />
                            <figcaption>PHaKAL police lines School</figcaption>
                          </Figure>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>

                <Row className="p-2">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col>
                          <ul>
                            <li>
                              <Typography variant="h5">
                                <Box sx={{ fontFamily: "fantasy" }}> S.S.C</Box>
                              </Typography>
                            </li>
                            <Typography variant="h6">
                              <Box sx={{ fontFamily: "cursive" }}>
                                Giash Uddin high school. Lalmonirhat <br />
                                Session: 2010-2012 <br/>
                                Group: Science <br/>
                                Place: Lalmonirhat <br/>
                              </Box>
                            </Typography>
                          </ul>
                        </Col>
                        <Col xs={8} md={4} sm={2}>
                          <Figure>
                            <Figure.Image
                              width={300}
                              height={300}
                              alt="171x180"
                              src={gis}
                            />
                            <figcaption>Giash Uddin high school</figcaption>
                          </Figure>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="p-2">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col>
                          <ul>
                            <li>
                              <Typography variant="h5">
                                <Box sx={{ fontFamily: "fantasy" }}> H.S.C</Box>
                              </Typography>
                            </li>
                            <Typography variant="h6">
                              <Box sx={{ fontFamily: "cursive" }}>
                                Rangpur Govt. College. <br />
                                Session: 2012-2014 <br/>
                                Group: Science <br/>
                                Place: Rangpur <br/>
                              </Box>
                            </Typography>
                          </ul>
                        </Col>
                        <Col xs={8} md={4} sm={2}>
                          <Figure>
                            <Figure.Image
                              width={300}
                              height={300}
                              alt="171x180"
                              src={rgc}
                            />
                            <figcaption>Rangpur Govt. College</figcaption>
                          </Figure>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>
                <Row className="p-2">
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col>
                          <ul>
                            <li>
                              <Typography variant="h5">
                                <Box sx={{ fontFamily: "fantasy" }}>
                                  {" "}
                                  BSc In CSE
                                </Box>
                              </Typography>
                            </li>
                            <Typography variant="h6">
                              <Box sx={{ fontFamily: "cursive" }}>
                                Daffodil International university <br />
                                Session: 2016-2020 <br/>
                                Department: Computer Science and engineering <br/>
                                Place: Dhaka <br/>
                              </Box>
                            </Typography>
                          </ul>
                        </Col>
                        <Col xs={8} md={4} sm={2}>
                        <Figure>
                            <Figure.Image
                              width={300}
                              height={300}
                              alt="171x180"
                              src={diu}
                            />
                            <figcaption>Daffodil International university</figcaption>
                          </Figure>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Row>
              
            </Row >
            <hr />
            <Row>
              <Col>
                <Typography variant="h2">
                  <Box sx={{ fontFamily: "courier" }}>Personal Information</Box>
                </Typography>
              </Col>
              <hr />
            </Row>
            <Row>
              <Col>
                <Typography variant="p">
                  <Box sx={{ fontFamily: "cursive" }}>
                    Name: S M Turag <br />
                    Father's Name: Dr. Momtaz Hossain. <br />
                    Mother's Name: Miss. Sumsunnahar Begum <br />
                    Village: Satpatki <br />
                    U.P: Mohendronagar <br />
                    Thana & District: Lalmonirhat
                  </Box>
                </Typography>
              </Col>
            </Row>
          </Grid>
        </Container>
      </>
    );
  }
}
export default About;
