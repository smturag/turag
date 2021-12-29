import React, { Component } from "react";
import "../Style/Home.scss";
import { Box, Grid, Typography} from "@mui/material";
import { Container,Row,Col } from "react-bootstrap";
import Typing from 'react-typing-animation';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:""
    };
  }
  componentDidMount() {
    document.title= 'Home'
   
  }
  componentDidUpdate(){
    

  }

 shouldComponentUpdate(){
   return true
 }

  render() {
    return (
      <>
        <Container className="main">
          <Grid container spacing={2}>
           <Row className=" d-flex align-content-center name"  >
              <Col>
              <Typing>
              <div>
              <Box
                sx={{fontFamily:'monospace'}}>
                <h1 >Hi, I'm S M Turag</h1>
              <Typing.Delay ms={1000} />
                <h1>  Full stack web developer</h1>
              </Box>
              </div>
              </Typing>
              <div className="intro">
              <Typography variant="h6">
                <Box
                sx={{fontFamily:'roboto'}}
                >
                   Making full stack web-developing apps. Also  making native apps. <br />
                I Like Programming, Gaming, Travelling <br />
                Inventing the world through the skill. <a href="About">Learn More</a>

                </Box>
               
              </Typography>
              </div>              
              </Col>

            </Row>
          </Grid>
        </Container>
      </>
    );
  }
}
export default Home;
