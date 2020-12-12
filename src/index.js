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
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src="https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg"
      alt="rich dad poor dad"
    />
  );
};

const Title = () => (
  <h1>
    Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That the Poor
    and Middle Class Do Not!
  </h1>
);

const Author = () => <h4>Robert T. Kiyosaki</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
