import React from "react";

import "./styles.css";
const WishItem={
  item:"Kindle",
  link:"https://xyz.com/kindle"
}
function Wishlist(){
  return(
    <>
      <h3>{WishItem.item}</h3>
      <a href={WishItem.link}>Buy</a>
    </>

  
  )
}
export default function App() {
  return (
    <div className="App">
      <h1>Karanth's Wishlist</h1>
      <h2>A react demo</h2>
      <Wishlist/>
    </div>
  );
}
