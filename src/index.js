import "./styles.css";

document.getElementById("app").append(createWidget());
let starList = document.querySelectorAll(".box");
let selectedStars = -1;

function createWidget() {
  let total = 5;
  let widget = "";
  widget = document.createElement("ul");
  for (let i = 0; i < total; i++) {
    let ele = document.createElement("li");
    ele.classList.add("box", "grey");
    ele.addEventListener("mouseover", starFocus);
    ele.addEventListener("click", starClick);
    ele.addEventListener("mouseout", starBlur);
    ele.starValue = i;
    widget.appendChild(ele);
  }
  return widget;
}

function starClick(ev) {
  let clicked = ev.currentTarget.starValue;
  selectedStars = clicked;
  starList.forEach((star, index) => {
    if (index <= selectedStars) {
      star.classList.add("gold");
      star.classList.remove("grey");
    } else {
      star.classList.remove("gold");
      star.classList.add("grey");
    }
  });
}

function starFocus(ev) {
  let focus = ev.currentTarget.starValue;
  starList.forEach((star, index) => {
    if (index > selectedStars && index <= focus) {
      star.classList.add("gold");
      star.classList.remove("grey");
    }
  });
}

function starBlur(ev) {
  let blur = ev.currentTarget.starValue;
  starList.forEach((star, index) => {
    if (index > selectedStars && index <= blur) {
      star.classList.add("grey");
      star.classList.remove("gold");
    }
  });
}
