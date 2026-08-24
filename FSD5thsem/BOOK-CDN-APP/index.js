function Book() {
  const image = React.createElement(
    "img",
    { src: "", width: "100px", height: "100px" },
    null,
  );

  const title = React.createElement(
    "h2",
    { style: { color: "red" } },
    "title:ReactJS",
  );

  const price = React.createElement(
    "button",
    { style: { color: "green" } },
    "Price:465",
  );

  const btn = React.createElement(
    "Button",
    { style: { color: "blue" } },
    "AddToCart",
  );

  const div = React.createElement("div", { className: "book" }, [
    image,
    title,
    price,
    btn,
  ]);

  return div;
}
const bookdata = [
  { image: "", title: "ReactJS", price: 465 },
  { image: "", title: "ReactJS", price: 570 },
  { image: "", title: "ExpressJS", price: 555 },
  { image: "", title: "Python", price: 765 },
  { image: "", title: "ReactJS", price: 570 },
  { image: "", title: "ExpressJS", price: 555 },
  { image: "", title: "Python", price: 765 },
];
function App() {
  const bookstore = bookdata.map((b) => {
    Book(b);
  });
  return React.createElement("div", { className: "bookstore" }, [...bookstore]);
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(App());
