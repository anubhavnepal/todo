//Selectors
const alertMsg = document.querySelector(".alert-msg");
const clearMsg = document.querySelector(".clear-msg");
const plusBtn = document.getElementById("plusbtn");
const addBtn = document.getElementById("addbtn");
const clearBtn = document.getElementById("clrbtn");
const inputVal = document.getElementById("inpval");
const userName = document.getElementById("usr");
const userTxt = document.querySelector(".user-name");
const welcomeTxt = document.querySelector(".welcome");
const ulEl = document.querySelector(".list");

//Event Listners
plusBtn.addEventListener("click", unveil);
addBtn.addEventListener("click", updateList);
clearBtn.addEventListener("click", clearAll);
inputVal.addEventListener("keyup", press);
userName.addEventListener("keyup", greet);
ulEl.addEventListener("click", unorderedLists);

//Functions
function updateList() {
  //Create list
  let liEl = document.createElement("li");
  liEl.setAttribute("class", "items");
  //Create span
  let spanEl = document.createElement("span");
  spanEl.setAttribute("class", "txt");
  //Create div
  let divEl = document.createElement("div");
  divEl.setAttribute("class", "icons");
  //Create icon
  let iconElTimes = document.createElement("i");
  iconElTimes.setAttribute("class", "far fa-times-circle cross text-danger");
  //Create Text
  let txtInclude = document.createTextNode(inputVal.value);
  //Add elements together
  liEl.appendChild(spanEl);
  spanEl.appendChild(txtInclude);
  liEl.appendChild(divEl);
  divEl.appendChild(iconElTimes);

  if (inputVal.value === "") {
    alertMsg.style.display = "block";
  } else {
    ulEl.appendChild(liEl);
    clearBtn.style.display = "inline";
    alertMsg.style.display = "none";
    clearMsg.style.display = "none";
  }

  inputVal.value = "";

  const hide = document.querySelectorAll(".cross");
  for (i = 0; i < hide.length; i++) {
    hide[i].onclick = (e) => {
      e.target.closest("li").classList.toggle("invisible");
    };
  }
}
function unveil() {
  setTimeout(function () {
    inputVal.style.display = "inline";
    addBtn.style.display = "inline";
    plusBtn.style.display = "none";
    userName.style.display = "none";
  }, 500);
}
function press(e) {
  if (e.keyCode === 13) {
    updateList();
  }
}
function greet(e) {
  if (e.keyCode === 13) {
    setTimeout(() => {
      userTxt.innerHTML = `${userName.value}!`;
      welcomeTxt.style.display = "inline";
      userName.style.display = "none";
    }, 170);
  }
}
function unorderedLists(e) {
  e.target.closest("li").classList.toggle("completed");
}
function clearAll() {
  const removeItems = ulEl;
  if (removeItems.innerHTML == "") {
    clearMsg.style.display = "inline";
  } else {
    removeItems.innerHTML = "";
    clearMsg.style.display = "none";
  }
}

//Created By Anubhav Nepal
