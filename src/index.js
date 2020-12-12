import React from "react";
import ReactDom from "react-dom";
import "./index.css";

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
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg"
        alt="rich dad poor dad"
      />
      <h1>
        Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That the
        Poor and Middle Class Do Not!
      </h1>
      <h4>Robert T. Kiyosaki</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
