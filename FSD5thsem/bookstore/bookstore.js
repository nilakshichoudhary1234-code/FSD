const bookdata = [
  {
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/book/v/v/f/1984-original-imahc9p42zyurth5.jpeg?q=90",
    price: 345,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BLQJZ7SAdsTs4ePG7LLyNXPxxfuDB2_Qu0xp0YqSxw&s=10",
    price: 400,
  },
  {
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1734004864",
    price: 500,
  },
  {
    image:
      "https://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg",
    price: 600,
  },
];
function Book(data) {
  const div = document.createElement("div");
  div.setAttribute("class", "book");
  const image = document.createElement("img");
  image.setAttribute("src", data.image);
  image.setAttribute("height", "200px");
  image.setAttribute("width", "200px");
  const h2 = document.createElement("h2");
  h2.innerText = `price:${data.price}/-`;
  h2.style.color = "blue";
  const bt = document.createElement("button");
  bt.innerText = "Add to cart";
  div.appendChild(image);
  div.appendChild(h2);
  div.appendChild(bt);
  return div;
}
const parent = document.getElementById("bookstore");
bookdata.forEach((data) => {
  parent.appendChild(Book(data));
});
