document.addEventListener("DOMContentLoaded", function() {
  runProgram();
});

async function runProgram() {
  let selected;
  let selectedId;
  let color;
  let active;
  let infoboks;

  //1. load svg
  let mySvg = await fetch("infographic/Infografik_tegning11.svg");
  /*svg skal tolkes som tekst*/
  let svg = await mySvg.text();

  //document.querySelector("#map").innerHTML = svg;
  document.querySelector("#map").insertAdjacentHTML("afterbegin", svg);
  //2. find infobokse og skjul dem

  let tekst_1 = document.querySelector("#map #tekstboks1");
  let tekst_2 = document.querySelector("#map #tekstboks2");
  let tekst_3 = document.querySelector("#map #tekstboks3");
  let tekst_4 = document.querySelector("#map #tekstboks4");

  tekst_1.style.visibility = "hidden";
  tekst_2.style.visibility = "hidden";
  tekst_3.style.visibility = "hidden";
  tekst_4.style.visibility = "hidden";

  //3. skift farve ved klik, og vis tekst
  document.querySelector("#map #dot").addEventListener("click", function(evt) {
    clicked(evt);
  });
  //3.1 function clicked
  function clicked(obj) {
    //	console.log(obj.target);
    // skjul infoboks hvis den er defineret
    if (infoboks != undefined) {
      infoboks.style.visibility = "hidden";
    }

    //3.a find det klikkede element
    selected = obj.target;

    //3.b find det klikkede elements id
    selectedId = selected.getAttribute("id");
    //console.log(selectedId);

    //3.c find det klikkede elements fillfarve
    color = selected.getAttribute("fill");
    //	console.log(color);

    //3.d vis infobokse
    if (selectedId === "dot1") {
      tekst_1.style.visibility = "visible";
      infoboks = tekst_1;
      console.log(infoboks);
    }
    if (selectedId === "dot2") {
      tekst_2.style.visibility = "visible";
      infoboks = tekst_2;
    }
    if (selectedId === "dot3") {
      tekst_3.style.visibility = "visible";
      infoboks = tekst_3;
    }
    if (selectedId === "dot4") {
      tekst_4.style.visibility = "visible";
      infoboks = tekst_4;
    }

    // hvis der tidligere har været klikket skal det forige element skifte farve til original
    if (active != undefined) {
      active.setAttribute("fill", color);
    }
    // gør det klikkede til det aktive
    active = selected;
    //	console.log(selected);

    //skift farve på det valgte
    if (color === "#46757d") {
      document.querySelector("#" + selectedId).setAttribute("fill", "#8bb27a");
    }

    //reset farve og skjul tekst hvis valgte element allerede er aktivt
    else {
      document.querySelector("#" + selectedId).setAttribute("fill", "#46757d");
      infoboks.style.visibility = "hidden";
    }
  }
}
