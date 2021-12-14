// Hero Javascript

// Animated background


function scrollHero() {
  if ($('#hero').css("opacity") == 0) {
    $("#hero").animate({
      height: "100vh",
      opacity: 1
    }, 800);
  } else {
    $("#hero").animate({
      height: "0px",
      opacity: 0
    }, 800)
  }

}
$("#home").click(function () {
  scrollHero();
})
$("#callOut").click(function () {
  scrollHero();
  $("#showLandingLi").removeClass("d-none ");
})
//ToDo: Add Tool tips to courses I am learning -- [ data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" ]



// IF ELEMENT IS SCROLLED INTO VIEW
const languages = [
  { name: "html", val: "95" },
  { name: "css", val: "87" },
  { name: "javascript", val: "70" },
  { name: "jquery", val: "70" },
  { name: "react", val: "35" },
  { name: "php", val: "95" },
  { name: "python", val: "0" },
  { name: "node", val: "45" },
  { name: "express", val: "40" },
  { name: "mysql", val: "85" },
  { name: "mongodb", val: "40" },
  { name: "bootstrap", val: "85" },
  { name: "tailwind", val: "40" },
  { name: "laravel", val: "0" }

];
function animateProgress(name) {
  languages.forEach(function (lang) {
    if (lang.name === name) {

      if ($("#" + name).css("width") != "0px") {
        return false;
      } else {
        $("#" + name).animate({
          width: lang.val + "%"
        }, 1500);
        if (lang.val < 50 && lang.val > 30) {
          $("#" + name).attr("data-bs-toggle", "tooltip");
          $("#" + name).attr("data-bs-placement", "top");
          $("#" + name).attr("title", "Fairly Comfortable with " + name);
          $("#" + name).addClass("bg-warning")
        }
        else if (lang.val <= 30 && lang.val > 0) {
          $("#" + name).attr("data-bs-toggle", "tooltip");
          $("#" + name).attr("data-bs-placement", "top");
          $("#" + name).attr("title", "Learning " + name);
          $("#" + name).addClass("bg-danger")
        }
      }

    }
  });
}

// Register IntersectionObserver
const io = new IntersectionObserver(function (e) {
  e.forEach(function (val) {
    const name = val.target.id;
    if (val.intersectionRatio > 0) {
      animateProgress(name);
    }
  });
});

// Declares what to observe, and observes its properties.
const boxElList = document.querySelectorAll('.progress-bar');
boxElList.forEach((el) => {
  io.observe(el);
});

//Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


//dynamic background changer for about us 
//?background-image: url("https://www.transparenttextures.com/patterns/gplay.png");

function changeBg() {
  if ($('#aboutme').css("backgroundImage") === 'url("https://www.transparenttextures.com/patterns/gplay.png")') {

    $('#aboutme').css("backgroundImage", 'url("https://www.transparenttextures.com/patterns/cubes.png")');
  } else {
    $('#aboutme').css("backgroundImage", 'url("https://www.transparenttextures.com/patterns/gplay.png")');
  }
}

// setInterval(() => { changeBg() }, 10000);