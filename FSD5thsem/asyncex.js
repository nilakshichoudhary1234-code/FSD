function register() {
  setTimeout(() => {
    console.log("register here");
  }, 10000);
}
function login() {
  setTimeout(() => {
    console.log("login here");
  }, 5000);
}
function getdata() {
  setTimeout(() => {
    console.log("fetch here");
  }, 4000);
}
function displayData() {
  setTimeout(() => {
    console.log("display here");
  }, 6000);
}

register();
login();
getdata();
displayData();
console.log("call another Application");
