import React from "react";
import ReactDom from "react-dom";

//css
import "./index.css";
//setup vars
const author = "Robert T. Kiyosaki";
const title =
  "Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!";
const image =
  "https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg";
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <img src={image} alt="rich dad poor dad" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
