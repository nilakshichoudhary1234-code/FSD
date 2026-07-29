function register(cb) {
  setTimeout(() => {
    console.log("register now");
    cb();
  }, 10000);
}
function login(cb) {
  setTimeout(() => {
    console.log("login now");
    cb();
  }, 5000);
}
function getData(cb) {
  setTimeout(() => {
    console.log("get data now");
    cb();
  }, 4000);
}
function displayData() {
  setTimeout(() => {
    console.log("display data now");
  }, 6000);
}
//callback hell
register(() => {
  // callback function
  login(() => {
    getData(() => {
      displayData();
    });
  });
});

console.log("call another Application");
