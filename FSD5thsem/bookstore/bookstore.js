function Book() {

    const div = document.createElement("div");
    div.setAttribute("class", "book");
    const image = document.createElement("img");
    image.setAttribute(
        "src",
        "https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX258_BO1,204,203,200_.jpg",
    );
    image.setAttribute("height", "200px");
    image.setAttribute("width", "200px");
    const h2 = document.createElement("h2");
    h2.innerText = "Price: $345";
    h2.style.color = "blue";
    const bt = document.createElement("button");
    bt.innerText = "Add to Cart";
    bt.style.backgroundColor = "green";
    const parent = document.getElementById("book");
    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(bt);
}
//parent.appendChild(div);
const 
