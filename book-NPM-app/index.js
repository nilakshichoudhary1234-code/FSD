function Book() {
  return (
    <div>
      <img src="" width="100" height="100" alt="book image" />
      <h2>Title:ReactJS</h2>
      <h2>Price:$888</h2>
      <button>AddToCart</button>
    </div>
  );
}
function App() {
  return (
    <div ClassName="app">
      <Book />
    </div>
  );
}
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App/>)