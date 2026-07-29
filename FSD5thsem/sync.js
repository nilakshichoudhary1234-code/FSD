function register() {
    waitfordelay(1000);
  console.log("register here");
}
function login() {
    waitfordelay(5000);
  console.log("login here");
}
function getdata() {
    waitfordelay(4000);
  console.log("fetch here");
}
function displayData() {
    waitfordelay(6000);
  console.log("Display here");
}
function waitfordelay(delay) {
    const mt = Date.now() + delay;
    while (Date.now() < mt) {
        
    }
}
register();
login();
getdata();
displayData();
console.log("call another Application");