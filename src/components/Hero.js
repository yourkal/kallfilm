import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import hero1Image from "../assets/images/hero/hero1.jpg";
import hero3Image from "../assets/images/hero/hero3.jpg";
import hero4Image from "../assets/images/hero/hero4.jpg";
import hero5Image from "../assets/images/hero/hero5.jpg";
import hero6Image from "../assets/images/hero/hero6.jpg";
import hero2Image from "../assets/images/hero/hero2.jpg";

const Hero = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white">Heroes Movies</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" id="hero">
            <Card className=" movieImage">
              <Image src={hero4Image} alt="Avatar Movie" className="images" />
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
              <Image src={hero1Image} alt="Avatar Movie" className="images" />
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
              <Image src={hero3Image} alt="Avatar Movie" className="images"/>
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
              <Image src={hero5Image} alt="Avatar Movie" className="images" />
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
              <Image src={hero6Image} alt="Avatar Movie" className="images" />
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
              <Image src={hero2Image} alt="Avatar Movie" className="images" />
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

export default Hero;
