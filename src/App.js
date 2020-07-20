import React from "react";
import styles from "./styles.css";
import img from "./indexgs.jpg";
import { Row, Col } from "react-bootstrap";

function WishList() {
  return (
    <>
      <section className={styles["about-us"]}>
        <h2>About Us</h2>
        <hr />
        <div className={styles["about-us-container"]}>
          <img src={img} alt="reading a book" />
        </div>
      </section>
    </>
  );
}
function Goals() {
  return (
    <>
      <section>
        <Row>
          <Col>
            <img src={img} alt="something" />
          </Col>
          <Col>
            <img src={img} alt="soething"/>
          </Col>
        </Row>
      </section>
    </>
  );
}
export default function App(){
  return(
    <>
      <WishList/>
      <Goals/>
    </>
  );
}
