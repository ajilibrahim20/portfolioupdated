let loadingScreen  = document.getElementById("loading-screen");
let  mainWrapper = document.getElementById("main-wrapper");
console.log(mainWrapper)

function loader()
{
  mainWrapper.style.display="block";
  loadingScreen.style.display = "none"
}
setTimeout(loader,3000)