import React from "react";
import styles from "./styles.css";
import img from "./indexgs.jpg";

function Wishlist(){
  return(
    <>
    <section className={styles["about-us"]}>
      <h2>About Us</h2>
      <div className={styles["about-us-container"]}>
      <img src={img} alt="reading a book"></img>
    </div>
    </section>
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
