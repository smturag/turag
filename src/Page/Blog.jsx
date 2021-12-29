import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, postPosts } from "../redux/item";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Typography,
  Card,
  TextField,
  Box,
  TextareaAutosize,
  Button,
} from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import "../Style/Blog.scss";
import { fontFamily } from "@mui/system";

export default function Blog() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.entities);
  const [Name, setName] = useState("");
  const [Mail, setMail] = useState("");
  const [Opinion, setOpinion] = useState("");
  const reload=()=>setTimeout(() => {
    window.location.reload(true);
  }, 5000);

  const onCreatePost = function(){
    
    const postData = {
      Name,
      Mail,
      Opinion,
    };
    if (!!Name && !!Mail && !!Opinion) {
      
      if (/@gmail\.com$/.test(Mail)) {
        setName('')
        setOpinion('')
        setMail('')
        dispatch(postPosts(postData));
        toast("Thanks for your opinion ");
        reload()
        
    }else{
      alert('Please enter valid mail')

    }      
    }else{
      toast("Please fill the all blanks");
    }
  }

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
    <>
      <Container className="header mt-5">
        <Typography variant="h3" component="h6">
          Write something about for me...
        </Typography>
        ;
      </Container>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card>
              <Box sx={{ p: 3, mt: 3 }}>
                <Box sx={{ p: 2 }}>
                  <Row>
                    <TextField
                      id="standard-basic"
                      label="Name"
                      variant="standard"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Row>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Row>
                    <TextField
                      id="standard-basic"
                      label="xxx@gmail.com"
                      variant="standard"
                      value={Mail}
                      onChange={(e) => setMail(e.target.value)}
                    />
                  </Row>
                </Box>

                <Box sx={{}}>
                  <TextareaAutosize
                    aria-label="maximum height"
                    minRows={3}
                    placeholder="Write something for me "
                    style={{ width: 500 }}
                    value={Opinion}
                    onChange={(e) => setOpinion(e.target.value)}
                  />
                </Box>
                <Box>
                  <Button
                    onClick={onCreatePost}
                    sx={{ display: "flex", mx: "auto" }}
                    variant="contained"
                  >
                    Submit
                  </Button>
                  <ToastContainer />
                </Box>
                
              </Box>
            </Card>
          </Col>
          <Col>
            {posts.map((post) => (
              <Row key={post._id} className="m-3">
                <Box>
                  {" "}
                  <Card className="bg-dark">
                    <Row>
                      {" "}
                      <Box>
                        <Typography
                          style={{
                            color: "#00adb5",
                            fontFamily: "sans-serif",
                            margin: 5,
                          }}
                          variant="h5"
                        >
                          {post.Name}
                        </Typography>
                      </Box>
                    </Row>{" "}
                    <br />
                    <Row>
                      <Typography
                        style={{
                          color: "#ffffff",
                          fontFamily: "sans-serif",
                          margin: 5,
                          wordBreak: "break-all",
                        }}
                        variant="p"
                      >
                        {post.Opinion}
                      </Typography>
                    </Row>
                  </Card>
                </Box>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
