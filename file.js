let popup = (function () {
  let elems = document.querySelectorAll("[data-popup]");

  if (elems.length == 0) return;

  let create = function (event) {
    event.preventDefault();

    let id = event.target.dataset.popup;

    let content = document.querySelector("#" + id);

    if (!content) return;

    content = content.innerHTML;

    let popupWrapper = document.querySelector(".popup__wrapper");

    if (!popupWrapper) {
      popupWrapper = document.createElement("div");
      popupWrapper.classList.add("popup__wrapper");
    }

    popupWrapper.innerHTML = "";

    let popupOverflow = document.querySelector(".popup__overflow");
    if (popupOverflow) popupOverflow.remove();

    popupOverflow = document.createElement("div");
    popupOverflow.classList.add("popup__overflow");

    let popupElement = document.createElement("div");
    popupElement.classList.add("popup");
    popupElement.innerHTML = content;

    let closeElem = document.createElement("button");
    closeElem.classList.add("close");
    closeElem.innerHTML = "X";

    document.body.appendChild(popupOverflow);
    popupWrapper.appendChild(closeElem);
    popupWrapper.appendChild(popupElement);
    document.body.appendChild(popupWrapper);

    let remove = function () {
      popupWrapper.remove();
      popupOverflow.remove();
    };

    closeElem.addEventListener("click", remove);
  };

  elems.forEach((element) => {
    element.addEventListener("click", create);
  });
})();

window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
  window.scrollTo(0, 0);
};

let btn = document.querySelector(".how__text button");
let Link = function () {
  document.location = "https://liceymes.by/";
};

btn.addEventListener("click", Link);

let school = document.querySelector(".school");
let School = function () {
  document.location = "http://sch143.minsk.edu.by/";
};

school.addEventListener("click", School);

const upBtn = document.querySelector(".upbtn");

upBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
let divgame = document.querySelector(".games");
let show = function () {
  divgame.classList.toggle("show");
};
let btn2 = document.querySelector(".test__text button");
btn2.addEventListener("click", show);

// let nav = document.querySelectorAll(".nav");
// console.log(nav);

let showFire = function () {
  let fire = document.querySelector(".fire");
  fire.classList.toggle("show1");
};

let card1 = document.querySelector(".games .cards .card1");
card1.addEventListener("click", showFire);

let showHelp = function () {
  let fire = document.querySelector(".help");
  fire.classList.toggle("show2");
};

let card2 = document.querySelector(".games .cards .card2");
card2.addEventListener("click", showHelp);

let showNature = function () {
  let fire = document.querySelector(".nature");
  fire.classList.toggle("show3");
};

let card3 = document.querySelector(".games .cards .card3");
card3.addEventListener("click", showNature);

let showDog = function () {
  let fire = document.querySelector(".dog");
  fire.classList.toggle("show4");
};

let card4 = document.querySelector(".games .cards .card4");
card4.addEventListener("click", showDog);

let array1 = [
  "img/Group16.png",
  "img/Group17.png",
  "img/Group18.png",
  "img/Group19.png",
];
let fimg = document.querySelector("#fimg");
fimg.src = array1[0];

let simg = document.querySelector("#simg");
simg.src = array1[1];

let timg = document.querySelector("#timg");
timg.src = array1[2];

let frimg = document.querySelector("#frimg");
frimg.src = array1[3];

let img = document.querySelectorAll(".extra1 img");
console.log(img);

let array2 = [
  "img/Group25.png",
  "img/Group26.png",
  "img/Group32.png",
  "img/Group33.png",
];

let array3 = [
  "img/Group47.png",
  "img/Group46.png",
  "img/Group42.png",
  "img/Group48.png",
];

let array4 = [
  "img/Group49.png",
  "img/Group50.png",
  "img/Group51.png",
  "img/Group52.png",
];

let array5 = [
  "img/Group73.png",
  "img/Group74.png",
  "img/Group75.png",
  "img/Group76.png",
];

let image = function (event) {
  let src_event = event.target.src.split("0/")[1];
  console.log(src_event);
  if (src_event == "img/Group16.png") {
    let fimg = document.querySelector("#fimg");
    fimg.src = array2[0];

    let simg = document.querySelector("#simg");
    simg.src = array2[1];

    let timg = document.querySelector("#timg");
    timg.src = array2[2];

    let frimg = document.querySelector("#frimg");
    frimg.src = array2[3];
  } else if (src_event == "img/Group32.png") {
    let fimg = document.querySelector("#fimg");
    fimg.src = array3[0];

    let simg = document.querySelector("#simg");
    simg.src = array3[1];

    let timg = document.querySelector("#timg");
    timg.src = array3[2];

    let frimg = document.querySelector("#frimg");
    frimg.src = array3[3];
  } else if (src_event == "img/Group47.png") {
    let fimg = document.querySelector("#fimg");
    fimg.src = array4[0];

    let simg = document.querySelector("#simg");
    simg.src = array4[1];

    let timg = document.querySelector("#timg");
    timg.src = array4[2];

    let frimg = document.querySelector("#frimg");
    frimg.src = array4[3];
  } else if (src_event == "img/Group50.png") {
    let fimg = document.querySelector("#fimg");
    fimg.src = array5[0];

    let simg = document.querySelector("#simg");
    simg.src = array5[1];

    let timg = document.querySelector("#timg");
    timg.src = array5[2];

    let frimg = document.querySelector("#frimg");
    frimg.src = array5[3];
  } else if (src_event == "img/Group73.png") {
    alert("Молодец!!! Игра пройдена");
  } else {
    alert("попробуйте еще раз");
  }
};
img.forEach((element) => {
  element.addEventListener("click", image);
});

let array6 = [
  "img/Group131.png",
  "img/Group132.png",
  "img/Group133.png",
  "img/Group134.png",
];
let fimg2 = document.querySelector("#fimg2");
fimg2.src = array6[0];

let simg2 = document.querySelector("#simg2");
simg2.src = array6[1];

let timg2 = document.querySelector("#timg2");
timg2.src = array6[2];

let frimg2 = document.querySelector("#frimg2");
frimg2.src = array6[3];

let img2 = document.querySelectorAll(".extra2 img");
console.log(img2);

let array7 = [
  "img/Group140.png",
  "img/Group141.png",
  "img/Group142.png",
  "img/Group143.png",
];

let array8 = [
  "img/Group136.png",
  "img/Group137.png",
  "img/Group138.png",
  "img/Group139.png",
];

let array9 = [
  "img/Group144.png",
  "img/Group145.png",
  "img/Group146.png",
  "img/Group147.png",
];

let image2 = function (event) {
  let src_event2 = event.target.src.split("0/")[1];
  console.log(src_event2);

  if (src_event2 == "img/Group133.png") {
    let fimg2 = document.querySelector("#fimg2");
    fimg2.src = array7[0];

    let simg2 = document.querySelector("#simg2");
    simg2.src = array7[1];

    let timg2 = document.querySelector("#timg2");
    timg2.src = array7[2];

    let frimg2 = document.querySelector("#frimg2");
    frimg2.src = array7[3];
  } else if (src_event2 == "img/Group142.png") {
    let fimg2 = document.querySelector("#fimg2");
    fimg2.src = array8[0];

    let simg2 = document.querySelector("#simg2");
    simg2.src = array8[1];

    let timg2 = document.querySelector("#timg2");
    timg2.src = array8[2];

    let frimg2 = document.querySelector("#frimg2");
    frimg2.src = array8[3];
  } else if (src_event2 == "img/Group138.png") {
    let fimg2 = document.querySelector("#fimg2");
    fimg2.src = array9[0];

    let simg2 = document.querySelector("#simg2");
    simg2.src = array9[1];

    let timg2 = document.querySelector("#timg2");
    timg2.src = array9[2];

    let frimg2 = document.querySelector("#frimg2");
    frimg2.src = array9[3];
  } else if (src_event2 == "img/Group147.png") {
    alert("Молодец!!! Игра пройдена");
  } else {
    alert("попробуйте еще раз");
  }
};
img2.forEach((element) => {
  element.addEventListener("click", image2);
});

let array10 = [
  "img/Group127.png",
  "img/Group128.png",
  "img/Group129.png",
  "img/Group130.png",
];
let fimg3 = document.querySelector("#fimg3");
fimg3.src = array10[0];

let simg3 = document.querySelector("#simg3");
simg3.src = array10[1];

let timg3 = document.querySelector("#timg3");
timg3.src = array10[2];

let frimg3 = document.querySelector("#frimg3");
frimg3.src = array10[3];

let img3 = document.querySelectorAll(".extra3 img");
console.log(img3);

let array11 = [
  "img/Group176.png",
  "img/Group177.png",
  "img/Group178.png",
  "img/Group179.png",
];

let array12 = [
  "img/Group136.png",
  "img/Group137.png",
  "img/Group138.png",
  "img/Group139.png",
];

let image3 = function (event) {
  let src_event3 = event.target.src.split("0/")[1];
  console.log(src_event3);

  if (src_event3 == "img/Group128.png") {
    let fimg3 = document.querySelector("#fimg3");
    fimg3.src = array11[0];

    let simg3 = document.querySelector("#simg3");
    simg3.src = array11[1];

    let timg3 = document.querySelector("#timg3");
    timg3.src = array11[2];

    let frimg3 = document.querySelector("#frimg3");
    frimg3.src = array11[3];
  } else if (src_event3 == "img/Group176.png") {
    let fimg3 = document.querySelector("#fimg3");
    fimg3.src = array12[0];

    let simg3 = document.querySelector("#simg3");
    simg3.src = array12[1];

    let timg3 = document.querySelector("#timg3");
    timg3.src = array12[2];

    let frimg3 = document.querySelector("#frimg3");
    frimg3.src = array12[3];
  } else if (src_event3 == "img/Group137.png") {
    alert("Молодец!!! Игра пройдена");
  } else {
    alert("попробуйте еще раз");
  }
};
img3.forEach((element) => {
  element.addEventListener("click", image3);
});

let array13 = [
  "img/собаки1.png",
  "img/собаки2.png",
  "img/собаки3.png",
  "img/собаки4.png",
];
let fimg4 = document.querySelector("#fimg4");
fimg4.src = array13[0];

let simg4 = document.querySelector("#simg4");
simg4.src = array13[1];

let timg4 = document.querySelector("#timg4");
timg4.src = array13[2];

let frimg4 = document.querySelector("#frimg4");
frimg4.src = array13[3];

let img4 = document.querySelectorAll(".extra4 img");
console.log(img4);

let array14 = [
  "img/собаки11.png",
  "img/собаки22.png",
  "img/собаки33.png",
  "img/собаки44.png",
];

let image4 = function (event) {
  let src_event4 = event.target.src.split("0/")[1];
  console.log(src_event4);

  if (src_event4 == "img/%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B82.png") {
    let fimg4 = document.querySelector("#fimg4");
    fimg4.src = array14[0];

    let simg4 = document.querySelector("#simg4");
    simg4.src = array14[1];

    let timg4 = document.querySelector("#timg4");
    timg4.src = array14[2];

    let frimg4 = document.querySelector("#frimg4");
    frimg4.src = array14[3];
  } else if (src_event4 == "img/%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B833.png") {
    alert("Молодец!!! Игра пройдена");
  } else {
    alert("попробуйте еще раз");
  }
};
img4.forEach((element) => {
  element.addEventListener("click", image4);
});

let pair1 = document.querySelectorAll("#pair1");
let pair2 = document.querySelectorAll("#pair2");
let pair3 = document.querySelectorAll("#pair3");

const card = () => {
  const cards = document.querySelectorAll(".js-card");
  const cells = document.querySelectorAll(".js__cell");
  let to = null;

  const dragStart = function () {
    setTimeout(() => {
      this.classList.add("hide");
    }, 0);
  };

  const dragEnter = function (evt) {
    // evt.preventDefault();
    this.classList.add("hovered");
    to = this;
  };

  const dragOver = function (evt) {
    evt.preventDefault();
  };

  const dragLeave = function () {
    this.classList.remove("hovered");
  };

  const dragEnd = function () {
    let img = document.querySelector(".hide");

    this.classList.remove("hide");
    if (to) to.append(img);
    to = null;
  };

  cells.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("dragenter", dragEnter);
    cell.addEventListener("dragleave", dragLeave);
  });
  cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
  });
};
card();

// let idImg1 = document.querySelector("#pair1");
// let idImg2 = document.querySelector("#pair2");
// let idImg3 = document.querySelector("#pair2");

let btnWrp = document.querySelector(".wrapper button");

let arrayPull1 = [
  "img/Group59.png",
  "img/Group60.png",
  "img/Group61.png",
  "img/Group62.png",
];
let arrayPull2 = [
  "img/Group38.png",
  "img/Group39.png",
  "img/Group40.png",
  "img/Group41.png",
];

let contPull = [];
contPull.push(arrayPull2);

let pullimg1 = document.querySelector(".pullimg1");
pullimg1.src = arrayPull1[0];

let pullimg2 = document.querySelector(".pullimg2");
pullimg2.src = arrayPull1[1];
console.log(pullimg2);

let pullimg3 = document.querySelector(".pullimg3");
pullimg3.src = arrayPull1[2];

let pullimg4 = document.querySelector(".pullimg4");
pullimg4.src = arrayPull1[3];

let arrayImg1 = [
  "img/Group55.png",
  "img/Group56.png",
  "img/Group57.png",
  "img/Group58.png",
];
let arrayImg2 = [
  "img/Group42.png",
  "img/Group43.png",
  "img/Group44.png",
  "img/Group45.png",
];

let contImg = [];
contImg.push(arrayImg2);

let aImg1 = document.querySelector(".picture1");
aImg1.src = arrayImg1[0];
aImg1.id = "pair1";

let aImg2 = document.querySelector(".picture2");
aImg2.src = arrayImg1[1];
aImg2.id = "pair2";

let aImg3 = document.querySelector(".picture3");
aImg3.src = arrayImg1[2];
aImg3.id = "pair3";

let aImg4 = document.querySelector(".picture4");
aImg4.src = arrayImg1[3];
aImg4.id = "pair4";

let Answer = function (arrBot, arrTop) {
  let imgAll = document.querySelectorAll(".js-card");
  let childImg1 = document.querySelector(".pair1").childNodes[0].id;
  let childImg2 = document.querySelector(".pair2").childNodes[0].id;
  let childImg3 = document.querySelector(".pair3").childNodes[0].id;
  let childImg4 = document.querySelector(".pair4").childNodes[0].id;
  
  
  if (
    (childImg1==='pair4')  &&
    (childImg2==='pair1' ) &&
    (childImg3==='pair2')  &&
    (childImg4==='pair3'  )
  ) {
    
    let divImg = document.querySelector(".rectangle").querySelectorAll("div");
    divImg.forEach((i) => (i.innerHTML = ""));
    let divPic = document.querySelector(".picture");
    for (let i = 1; i <= 4; i++) {
      let img = document.createElement("img");
      img.draggable = "true";
      img.classList.add("js-card", `picture${i}`);
      divPic.appendChild(img);
    }
    let aImg1 = document.querySelector(".picture1");
    aImg1.src = arrBot[0];
    aImg1.id = "pair1";

    let aImg2 = document.querySelector(".picture2");
    aImg2.src = arrBot[1];
    aImg2.id = "pair2";

    let aImg3 = document.querySelector(".picture3");
    aImg3.src = arrBot[2];
    aImg3.id = "pair3";

    let aImg4 = document.querySelector(".picture4");
    aImg4.src = arrBot[3];
    aImg4.id = "pair4";

    let pullimg1 = document.querySelector(".pullimg1");
    pullimg1.src = arrTop[0];

    let pullimg2 = document.querySelector(".pullimg2");
    pullimg2.src = arrTop[1];
    console.log(pullimg2);

    let pullimg3 = document.querySelector(".pullimg3");
    pullimg3.src = arrTop[2];

    let pullimg4 = document.querySelector(".pullimg4");
    pullimg4.src = arrTop[3];
  } else {
    console.log("djipoesj");
  }
  card();
};
let arrCounter = 0;
btnWrp.addEventListener("click", () => {
  if (arrCounter < contImg.length) {
    Answer(contImg[arrCounter], contPull[arrCounter]);
    arrCounter++;
  }
});
