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

//Call To Action
const cta = document.querySelector("#cta");

cta.addEventListener("click", shrinkButton);
let redirect = false;
function shrinkButton() {
  cta.innerText = "LETS GO!";
  $('#cta').animate({
    width: 0,
    height: 0,
    opacity: 0,
    background: "linear-gradient(to right, #f12711, #f5af19)",

  }, 900, "linear");
  setTimeout(() => {
    cta.innerText = "";
  }, 550);
  shrinkage();
}

// Animate in items
$(window).scroll(function () {
  $('.fadeIn').each(function (i) {

    var top_of_element = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > top_of_element) {
      $(this).animate({ 'opacity': '1' }, 1500);

    }

  });
});




async function shrinkage() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(redirect = true);
    }, 1300);
  });
  await myPromise;
  if (redirect) {
    window.location = "#contact"
    setTimeout(() => {
      $("#cta").animate({
        width: "50%",
        height: "100%",
        opacity: 1
      }, 300)
    })
    cta.innerText = "Learn More";
  } else {
    return false;
  }
  //console.log(myPromise)
}

// Form Control
$('form').on('submit', function (e) {
  const name = document.querySelector("input[name='fName']");
  const email = document.querySelector("input[name='email']");
  const message = document.querySelector("textarea[name='message']");
  // console.log(name.value + " " + email.value + "  " + message.value);
  e.preventDefault();
  $.ajax({
    url: './utils/sendMail.php',
    type: 'POST',
    data: $('form').serialize(),
    success: function () {
      $("#contact_form").animate({
        opacity: 0
      }, 500);
      setTimeout(() => {
        $('#success').slideToggle(900, function () {
          $('#message').fadeIn(200, () => {
            $('#message').append("Successfully sent!")
          })
          setTimeout(() => {
            $('#success').animate({
              opacity: 0,
            }, 500)
          }, 3000)

        });
      }, 600)

      setTimeout(() => {
        name.value = "";
        email.value = "";
        message.value = "";
        $('#success').slideToggle(1000)
        $("#contact_form").animate({
          opacity: 1
        }, 1100);

      }, 4000)



    }
  });
});

// Footer information
const date = new Date().getFullYear();
const footer = document.querySelector("#year");
footer.innerText = date;
