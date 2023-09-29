import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import trending1Image from "../assets/images/trending/trending1.jpg";
import trending3Image from "../assets/images/trending/trending3.jpg";
import trending4Image from "../assets/images/trending/trending4.jpg";
import trending5Image from "../assets/images/trending/trending5.jpg";
import trending6Image from "../assets/images/trending/trending6.jpg";
import trending2Image from "../assets/images/trending/trending2.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white">Trending Movies</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className=" movieImage">
              <Image src={trending4Image} alt="Avatar Movie" className="images" />
              <div className="bg-dark">
                <div className=" p-2 m-1 text-white">
                  <Card.Title className=" text-center">AVATAR</Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={trending1Image} alt="Avatar Movie" className="images" />
              <div className="bg-dark">
                <div className=" p-2 m-1 text-white">
                  <Card.Title className=" text-center">AVATAR</Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={trending3Image} alt="Avatar Movie" className="images"/>
              <div className="bg-dark">
                <div className=" p-2 m-1 text-white">
                  <Card.Title className=" text-center">AVATAR</Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={trending5Image} alt="Avatar Movie" className="images" />
              <div className="bg-dark">
                <div className=" p-2 m-1 text-white">
                  <Card.Title className=" text-center">AVATAR</Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={trending6Image} alt="Avatar Movie" className="images" />
              <div className="bg-dark">
                <div className=" p-2 m-1 text-white">
                  <Card.Title className=" text-center">AVATAR</Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={trending2Image} alt="Avatar Movie" className="images" />
              <div className="bg-dark">
                <div className=" p-2 m-1 text-white">
                  <Card.Title className=" text-center">AVATAR</Card.Title>
                  <Card.Text className=" text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
