// PreLoader
let loadr = document.getElementById("loadr");
window.addEventListener("load", function () {
  loadr.style.display = "none";
});
// ------------------- //

// HEADER FUNCTION
let headr = document.getElementById("header");
let initialscrl = 0;
window.addEventListener("scroll", function () {
  var scrlYval = window.scrollY;
  if (scrlYval > initialscrl) {
    headr.style.top = "-90000px";
  } else {
    headr.style.top = "0px";
  }
  initialscrl = scrlYval;
});
// -------------------------- //

// PARALLAX FUNCTION

// First
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

let box1top = parseInt(
  window.getComputedStyle(box1).getPropertyValue("top"),
  10
);
let box2top = parseInt(
  window.getComputedStyle(box2).getPropertyValue("top"),
  10
);
let box3top = parseInt(
  window.getComputedStyle(box3).getPropertyValue("top"),
  10
);
let box4top = parseInt(
  window.getComputedStyle(box4).getPropertyValue("top"),
  10
);
let box5top = parseInt(
  window.getComputedStyle(box5).getPropertyValue("top"),
  10
);

window.addEventListener("scroll", function () {
  var scrlYval = window.scrollY;

  box1.style.top = -scrlYval * 1.2 + box1top + "px";
  box2.style.top = -scrlYval * 1.05 + box2top + "px";
  box3.style.top = -scrlYval * 0.55 + box3top + "px";
  box4.style.top = -scrlYval * 1.7 + box4top + "px";
  box5.style.top = -scrlYval * 0.4 + box5top + "px";
});

// Second

let tbox1 = document.getElementById("tbox1");
let tbox2 = document.getElementById("tbox2");
let tbox3 = document.getElementById("tbox3");
let tbox4 = document.getElementById("tbox4");

let tbox1top = parseInt(
  window.getComputedStyle(tbox1).getPropertyValue("top"),
  10
);
let tbox2top = parseInt(
  window.getComputedStyle(tbox2).getPropertyValue("top"),
  10
);
let tbox3top = parseInt(
  window.getComputedStyle(tbox3).getPropertyValue("top"),
  10
);
let tbox4top = parseInt(
  window.getComputedStyle(tbox4).getPropertyValue("top"),
  10
);

let tbox2rect = tbox2.getBoundingClientRect().top + 100;

let onScroll1 = function () {
  var scrlYval = window.scrollY - tbox2rect;

  tbox1.style.top = -scrlYval * 0.8 + tbox1top + "px";
  tbox2.style.top = -scrlYval * 0.9 + tbox2top + "px";
  tbox3.style.top = -scrlYval * 1 + tbox3top + "px";
  tbox4.style.top = -scrlYval * 1.8 + tbox4top + "px";
};

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.addEventListener("scroll", onScroll1);
      observer1.unobserve(tbox2);
    } else {
      document.removeEventListener("scroll", onScroll1);
    }
  });
});

const mediaQuery = window.matchMedia("(max-width: 640px)");

function addMediaQ(e) {
  if (e.matches) {
  } else {
    observer1.observe(tbox2);
  }
}

addMediaQ(mediaQuery);
mediaQuery.addEventListener("change", addMediaQ);

// -------------//

// IMAGE GRID FUNCTION
let iGrid = document.getElementById("bts-Simg");
function createIGrid() {
  for (let i = 1; i <= 16; i++) {
    const img = document.createElement("img");
    img.src = `img/bts-img${i}.webp`;
    img.alt = `bts-img${i}`;
    iGrid.appendChild(img);
  }
}
createIGrid();

let iGrid2 = document.getElementById("testmnl-sub");
function createIGrid2() {
  for (let i = 1; i <= 31; i++) {
    const img = document.createElement("img");
    img.src = `img/testmnl1.svg`;
    img.alt = `img/testmnl${i}.svg`;
    iGrid2.appendChild(img);
  }
}
createIGrid2();

// -------------------//

// IMAGE CARDS FUNCTION

// Calling the elements
document.querySelector("#bts-Simg img:nth-child(4)").id = `bts-Simg0`;

const btsbigimg = document.getElementById("bts-bigimg");
const btsbigimg1 = document.getElementById("bts-bigimg1");
const btsbigimg2 = document.getElementById("bts-bigimg2");
const btsbigimg3 = document.getElementById("bts-bigimg3");
const btsbigimg4 = document.getElementById("bts-bigimg4");
const btsSimg0 = document.getElementById("bts-Simg0");
const btssub1 = document.getElementById("bts-sub1");
const btsSimg = document.getElementById("bts-Simg");

let heightVal = parseFloat(window.getComputedStyle(btsbigimg1).height);

// Relative position function
// function getRelativePosition2(ele1, ele2) {
//   const ele1Rect = ele1.getBoundingClientRect();
//   const ele2Rect = ele2.getBoundingClientRect();
//   let relativeTop = 0;

// function addMediaQ2(e) {
//   if (e.matches) {
//     relativeTop = ele1Rect.top - ele2Rect.top + heightVal;
//   } else {
//     relativeTop = ele1Rect.top - ele2Rect.top;
//   }
// }

// addMediaQ2(mediaQuery);
// mediaQuery.addEventListener("change", addMediaQ2);

//   const relativeLeft = ele1Rect.left + ele1Rect.width * 0.3 - ele2Rect.left;

//   return { top: relativeTop, left: relativeLeft };
// }

function getRelativePosition(ele1, ele2) {
  const ele1Rect = ele1.getBoundingClientRect();
  const ele2Rect = ele2.getBoundingClientRect();

  const relativeTop = ele1Rect.top - ele2Rect.top;
  const relativeLeft = ele1Rect.left + ele1Rect.width * 0.3 - ele2Rect.left;

  return { top: relativeTop, left: relativeLeft };
}

function getRelativePosition2(ele1, ele2) {
  const ele1Rect = ele1.getBoundingClientRect();
  const ele2Rect = ele2.getBoundingClientRect();
  let relativeTop = 0;
  function addMediaQ2(e) {
    if (e.matches) {
      relativeTop = ele1Rect.top - ele2Rect.top + heightVal;
    } else {
      relativeTop = ele1Rect.top - ele2Rect.top;
    }
  }
  addMediaQ2(mediaQuery);

  const relativeLeft = ele1Rect.left + ele1Rect.width * 0.3 - ele2Rect.left;

  return { top: relativeTop, left: relativeLeft };
}

const position = getRelativePosition(btsbigimg, btssub1);
const newposition = getRelativePosition2(btsbigimg, btssub1);
const position1 = getRelativePosition(btsSimg, btsbigimg1);
const position2 = getRelativePosition(btsSimg, btsbigimg2);
const position3 = getRelativePosition(btsSimg, btsbigimg3);
const position4 = getRelativePosition(btsSimg, btsbigimg4);

btsbigimg1.style.transform = `translate(${position1.left}px,-${position.top}px)`;
btsbigimg2.style.transform = `translate(${position2.left}px,-${position.top}px) rotate(13deg)`;
btsbigimg3.style.transform = `translate(${position3.left}px,-${newposition.top}px) rotate(-13deg)`;
btsbigimg4.style.transform = `translate(${position4.left}px,-${newposition.top}px) rotate(13deg)`;

let btssub1Rect = btssub1.getBoundingClientRect().top;

// Scroller function
function onScroll_pseudo() {
  const scrollPosition = window.scrollY;

  const scrollPercentage = (scrollPosition - btssub1Rect) / position.top;

  let newX1 = position1.left - scrollPercentage * position1.left;
  let newX2 = position2.left - scrollPercentage * position2.left;

  let newY = scrollPosition - btssub1Rect - position.top;

  if (newY > 0 || scrollPosition - btssub1Rect < 0) {
    return;
  }

  const angle = 13 - 13 * scrollPercentage;
  btsbigimg1.style.transform = `translate(${newX1}px,${newY}px) rotate(0deg)`;
  btsbigimg2.style.transform = `translate(${newX2}px,${newY}px ) rotate(${angle}deg)`;
}

function onScroll_pseudo2() {
  const scrollPosition = window.scrollY;

  const scrollPercentage = (scrollPosition - btssub1Rect) / newposition.top;

  let newX3 = position3.left - scrollPercentage * position3.left;
  let newX4 = position4.left - scrollPercentage * position4.left;

  let newY = 0;

  function addMediaQ3(e) {
    if (e.matches) {
      newY = scrollPosition - btssub1Rect - newposition.top;
    } else {
      newY = scrollPosition - btssub1Rect - newposition.top;
    }
  }
  addMediaQ3(mediaQuery);

  if (newY > 0 || scrollPosition - btssub1Rect < 0) {
    return;
  }

  const angle = 13 - 13 * scrollPercentage;
  btsbigimg3.style.transform = `translate(${newX3}px,${newY}px) rotate(-${angle}deg)`;
  btsbigimg4.style.transform = `translate(${newX4}px,${newY}px) rotate(${angle}deg)`;
}

// Smooth scroller

let ticking = false;
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      onScroll_pseudo();
      ticking = false;
    });

    ticking = true;
  }
}

let ticking2 = false;
function onScroll2() {
  if (!ticking2) {
    window.requestAnimationFrame(function () {
      onScroll_pseudo2();
      ticking2 = false;
    });

    ticking2 = true;
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.addEventListener("scroll", onScroll);
        observer.unobserve(btsbigimg1);
        observer.unobserve(btsbigimg2);
      } else {
        document.removeEventListener("scroll", onScroll);
      }
    });
  },
  { rootMargin: "0px 0px -100% 0px" }
);

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.addEventListener("scroll", onScroll2);
        observer2.unobserve(btsbigimg3);
        observer2.unobserve(btsbigimg4);
      } else {
        document.removeEventListener("scroll", onScroll2);
      }
    });
  },
  { rootMargin: "0px 0px -100% 0px" }
);

observer.observe(btsbigimg1);
observer.observe(btsbigimg2);
observer2.observe(btsbigimg3);
observer2.observe(btsbigimg4);
// -------------------//

// ||FORM VALIDATION

let button = document.getElementById("send");
let buttonval = button.getAttribute("value");
let inputs = document.querySelectorAll(".input-data");
let errors = document.querySelectorAll(".error");
button.addEventListener("click", function () {
  var signal = 0;
  inputs.forEach((ele, index) => {
    if (ele.value === "") {
      errors[index].style.opacity = "1";
    } else {
      errors[index].style.opacity = "0";
      signal += 1;
    }
  });
  if (signal == 4 && buttonval == "en")
    window.open("https://wpwa.pro/en/thank-you");
  if (signal == 4 && button == "de") window.open("https://wpwa.pro/de/danke");
});

// ---------------------//

let btfix = document.getElementById("bt-fix");
let menufix = document.getElementById("menu-fix");
let closemenu = document.getElementById("close-menu");

btfix.addEventListener("click", function () {
  menufix.classList.toggle("active");
  menufix.classList.toggle("hidden");
});

closemenu.addEventListener("click", function () {
  menufix.classList.toggle("active");
  menufix.classList.toggle("hidden");
});

// ||BOX CLOSER
boxcloser = document.getElementById("box-closer");
cookiefix = document.getElementById("cookie-fix");
bottomfix = document.getElementById("bottom-fix");
changeconsent = document.getElementById("change-consent");
closer = document.getElementsByClassName("close-menu2");
cookiemanager = document.getElementById("cookie-manager");
menusub1 = document.getElementById("menu-sub1");
menusub2 = document.getElementById("menu-sub2");
menusub3 = document.getElementById("menu-sub3");
consent = document.getElementById("consent");
about = document.getElementById("about");

boxcloser.addEventListener("click", function () {
  cookiefix.classList.toggle("active2");
  cookiefix.classList.toggle("hidden");
});
bottomfix.addEventListener("click", function () {
  cookiefix.classList.toggle("active2");
  cookiefix.classList.toggle("hidden");
});
function boxopener() {
  cookiemanager.classList.toggle("active");
  cookiemanager.classList.toggle("hidden");
}
changeconsent.addEventListener("click", function () {
  cookiefix.classList.toggle("active2");
  cookiefix.classList.toggle("hidden");
  boxopener();
});

for (let i = 0; i < closer.length; i++) {
  closer[i].addEventListener("click", boxopener);
}

menusub1.addEventListener("click", function () {
  menusub2.classList.remove("border");
  menusub3.classList.remove("border");
  menusub1.classList.add("border");
  consent.classList.remove("hidden");
  about.classList.add("hidden");
});
menusub2.addEventListener("click", function () {
  menusub1.classList.remove("border");
  menusub2.classList.add("border");
  menusub3.classList.remove("border");
});
menusub3.addEventListener("click", function () {
  menusub3.classList.add("border");
  menusub2.classList.remove("border");
  menusub1.classList.remove("border");
  about.classList.remove("hidden");
  consent.classList.add("hidden");
});

let label2 = document.getElementById("label2");
label2.addEventListener("click", function () {
  label2.classList.toggle("translate");
});

let label3 = document.getElementById("label3");
label3.addEventListener("click", function () {
  label3.classList.toggle("translate");
});

let label4 = document.getElementById("label4");
label4.addEventListener("click", function () {
  label4.classList.toggle("translate");
});

let label1 = document.getElementById("label1");
label1.addEventListener("click", function () {
  alert(
    "Mandatory - can not be deselected. Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies."
  );
});
let allowall = document.getElementById("allowall");
allowall.addEventListener("click", function () {
  label2.classList.add("translate");
  label3.classList.add("translate");
  label4.classList.add("translate");
});
let allownone = document.getElementById("allowsel");
allownone.addEventListener("click",function(){
  label2.classList.remove("translate");
  label3.classList.remove("translate");
  label4.classList.remove("translate");
})
