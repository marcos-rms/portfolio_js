let count = 0;

// MENU HAMBURGUER

document.getElementById("menu_hamburguer").addEventListener("click", function() {
  document.getElementById("menu_hamburguer").style.display = "none";
  document.getElementById("menu_openned").style.display = "block";
});

// MENU OPENNED

document.getElementById("close_btn").addEventListener("click", function() {
  document.getElementById("menu_openned").style.display = "none";
  document.getElementById("menu_hamburguer").style.display = "flex";
});

// HOME SECTION -> CAROUSEL

for (let i = 1; i < 7; i++) {
document.getElementById("item" + i).addEventListener("click", () => changeItem(i));
}
function changeItem(x) {
  let moveHeight = (x - 1) * -100 + "vh";

  if (x == 1) {
    for (let i = 0; i < 6; i++) {
      document.getElementById(`item${i + 1}`).setAttribute("class", "diamondYellow");
    }
    document.getElementById("item" + x).setAttribute("class", "squareYellow");
  } else {
    for (let i = 0; i < 6; i++) {
      document.getElementById(`item${i + 1}`).setAttribute("class", "diamond");
    }
    document.getElementById("item" + x).setAttribute("class", "square");
  }

  if (x == 1) {
    document.getElementById("my_name").style.opacity = 1;
    document.getElementById("my_name").style.transition = "opacity .6s ease-in .3s";
    document.getElementById("form1").style.fill = "#033a3b";
    document.getElementById("form2").style.stroke = "#5a7f7f";
    document.getElementById("form3").style.stroke = "#5a7f7f";
  } else {
    document.getElementById("my_name").style.opacity = 0;
    document.getElementById("my_name").style.transition = "opacity .2s linear 0s";
    document.getElementById("form1").style.fill = "#fcfcc0";
    document.getElementById("form2").style.stroke = "#b1bd93";
    document.getElementById("form3").style.stroke = "#b1bd93";
  }

  if (x == 1) {
    document.querySelectorAll("#menu_hamburguer div")[0].style.borderColor = "var(--yellow)";
    document.querySelectorAll("#menu_hamburguer div")[1].style.borderColor = "var(--yellow)";
  } else if (x == 6) {
    document.querySelectorAll("#menu_hamburguer div")[0].style.borderColor = "var(--yellow)";
    document.querySelectorAll("#menu_hamburguer div")[1].style.borderColor = "var(--yellow)";
  } else {
    document.querySelectorAll("#menu_hamburguer div")[0].style.borderColor = "var(--blue)";
    document.querySelectorAll("#menu_hamburguer div")[1].style.borderColor = "var(--blue)";
  }

  let titles_classes;
  let about_classes;
  let svg_classes;

  switch (x) {
    case 2:
      titles_classes = document.querySelectorAll("#description_container h1");
      about_classes = document.querySelectorAll("#description_container p");
      svg_classes = document.querySelectorAll("#description_container svg");

      for (let i = 0; i < titles_classes.length; i++) {
        titles_classes[i].style.animation = "title_about_anime .7s ease .2s forwards";
        about_classes[i].style.animation = "title_about_anime .7s ease .2s forwards";
      };
      break;
    case 3:
      document.querySelector("#experience_container h1").style.animation = "title_about_anime .7s ease .2s forwards";
      document.querySelector("#experience_content div").style.animation = "title_about_anime .7s ease .2s forwards";
      break;
    case 4:
      document.querySelectorAll("#projects_container h1")[0].style.animation = "title_about_anime .7s ease .2s forwards";
      document.querySelectorAll("#projects_container h1")[1].style.animation = "title_about_anime .7s ease .2s forwards";
      document.querySelectorAll("#projects_container p")[0].style.animation = "title_about_anime .7s ease .2s forwards";
      document.querySelectorAll("#projects_container p")[1].style.animation = "title_about_anime .7s ease .2s forwards";
      break;
    case 5:
      document.querySelector("#contacts_container h1").style.animation = "title_about_anime .7s ease .2s forwards";
      document.querySelector("#contacts_container p").style.animation = "title_about_anime .7s ease .2s forwards";
      break;
    case 6:
      document.querySelector("#footer_wrapper > div:nth-child(1)").style.animation = "title_about_anime .7s ease .2s forwards";
      document.querySelector("#footer_wrapper > div:nth-child(2)").style.animation = "title_about_anime .7s ease .4s forwards";
      break;
  }

  document.getElementById("app_container").style.transform = `translate(0, ${moveHeight})`;
}

// TRANSITIONS INTO PAGES

function myFunc1(event) {
  let z = event.deltaY;
  event.preventDefault();
  
  if (z > 0) {
    document.getElementById("item2").click();
  }
}

function myFunc2(event) {
  let z = event.deltaY;
  event.preventDefault();
  
  if (z > 0) {
    document.getElementById("item3").click();
  } else {
    document.getElementById("item1").click();
  }
}

function myFunc3(event) {
  let z = event.deltaY;
  event.preventDefault();
  
  if (z > 0) {
    document.getElementById("item4").click();
  } else {
    document.getElementById("item2").click();
  }
}

function myFunc4(event) {
  let z = event.deltaY;
  event.preventDefault();
  
  if (z > 0) {
    document.getElementById("item5").click();
  } else {
    document.getElementById("item3").click();
  }
}

function myFunc5(event) {
  let z = event.deltaY;
  event.preventDefault();
  
  if (z > 0) {
    document.getElementById("carousel").style.visibility = "hidden";
    document.getElementById("item6").click();
  } else {
    document.getElementById("item4").click();
  }
}

function myFunc6(event) {
  let z = event.deltaY;
  event.preventDefault();
  
  if (z < 0) {
    document.getElementById("carousel").style.visibility = "visible";
    document.getElementById("item5").click();
  }
}

