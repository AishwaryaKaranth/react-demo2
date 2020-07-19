import React from "react";
import styles from "./styles.css";
import img from "./indexgs.jpg";
import {Bootstrap,Grid,Row,Col} from "react-bootstrap";

function Wishlist(){
  return(
    <>
    <section className={styles["about-us"]}>
      <h2>About Us</h2>
      <hr></hr>
      <div className={styles["about-us-container"]}>
      <img src={img} alt="reading a book"></img>
      </div>
    </section>
    </>
  )
}
function Goals(){
  return(
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>

    </>
  )
}
export default function App() {
  return (
    <div className="App">
      <Wishlist/>
    </div>
  );
}
