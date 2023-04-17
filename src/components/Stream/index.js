import React from "react";
import { Row, Col, Container, Carousel, Button } from "react-bootstrap";
import { container, rows, heading, ptag, button, font } from "./stream";
// import { Link } from 'react-router-dom';
import { ethers } from "ethers";
import streamer1 from "../../photos/streamer.jpeg";
import streamer2 from "../../photos/event3.jpeg";
import streamer3 from "../../photos/event1.jpeg";
import streamer4 from "../../photos/event2.jpeg";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Stream() {
  const history = useRouter();

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  async function createStream() {
    // Connect to streamer's wallet
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get account of wallet
    await provider.getSigner();

    history.push("/streamer");
  }

  return (
    <>
      <div style={container} id="stream">
        <Container>
          <Row style={rows}>
            <Col style={heading}>Want to stream your event?</Col>
            <p style={ptag}>
              Ask us how and get pricing or click below to connect your wallet
              to start streaming.
            </p>
            <Carousel fade>
              <Carousel.Item>
                <Image
                  height="600"
                  className="d-block w-100"
                  src={streamer1}
                  alt="Filming Concert"
                />
                <Carousel.Caption>
                  <h3 style={font}>Stream a Concert</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  height="600"
                  className="d-block w-100"
                  src={streamer2}
                  alt="Event Filming"
                />

                <Carousel.Caption>
                  <h3 style={font}>Stream Celebrity Events</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  height="600"
                  className="d-block w-100"
                  src={streamer3}
                  alt="Filming Sports"
                />

                <Carousel.Caption>
                  <h3 style={font}>Stream Major Sports</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  height="600"
                  className="d-block w-100"
                  src={streamer4}
                  alt="Filming Music"
                />
                <Carousel.Caption>
                  <h3 style={font}>Musicians Can Stream Their Shows</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
      <div>
        <Button style={button} onClick={createStream}>
          Click to Stream
        </Button>
      </div>
    </>
  );
}
