const widthChanger = document.getElementById("width");
const inptDis = document.getElementById("search");
const proSearcherDis = document.getElementById("proSearcher");
const imgSatisfy = document.getElementById("img-satisfier");
const tHome = document.getElementById("navHomeTaker");
const tAU = document.getElementById("navAUTaker");
const tFAQ = document.getElementById("navFAQTaker");
let i = j = 0;

tHome.addEventListener("click", () => {
  window.location.href = "location";
});
tAU.addEventListener("click", () => {
  window.location.href = "location";
});
tFAQ.addEventListener("click", () => {
  window.location.href = "location";
});
function complexFun(){
  if(2 % j === 0){
    inptDis.style.display = "inline-Block";
    proSearcherDis.style.display = "inline-block";
    widthChanger.style.width = "525px";
    widthChanger.style.marginLeft = "-180px";
    imgSatisfy.style.float = "right";
    widthChanger.style.zIndex = "100";
    imgSatisfy.style.backgroundImage = 'url("Pictures/SearchCross.png")';
  }else{
    widthChanger.style.width = "45px";
    imgSatisfy.style.float = "center";
    widthChanger.style.zIndex = "1";
    widthChanger.style.marginLeft = "300px";
    inptDis.style.display = "none";
    proSearcherDis.style.display = "none";
    imgSatisfy.style.backgroundImage = 'url("Pictures/Magnifying Glass(optional).png")';
  }
  j++;
}; 

function childDisplayFun(){
  if(2 % i === 0){
    document.getElementById("displayChild").style.display = "block";
    document.getElementById("regisIconId").style.backgroundImage = 'url("Pictures/JUUpArrowBgBlack.png")';
    // document.getElementById("bgColorSatisfya").style.backgroundColor = "rgba(255, 0, 0)";
  }else{
    document.getElementById("displayChild").style.display = "none";
    document.getElementById("regisIconId").style.backgroundImage = 'url("Pictures/JUDownArrow.png")';
    // document.getElementById("bgColorSatisfya").style.backgroundColor = "transparent";
  };
  i++
}
