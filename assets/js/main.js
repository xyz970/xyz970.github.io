// import "./animation.js";
var toogle = $("#toogle");
toogle.click(function (e) {
  var hidden = $("#navbar-default").toggleClass("hidden");
  if (!$("#navbar-default").is(":hidden")) {
    $("#icon").removeClass("fa-bars").addClass("fa-xmark");
  } else {
    $("#icon").removeClass("fa-xmark").addClass("fa-bars");
  }
  // console.log( $("#navbar-default").is(":hidden"));
});


$(document).ready(function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: true,
  });

  $("#x-animate").removeClass("translate-y-[150%]");
  $("#x-animate").addClass("translate-y-0");
  if ($(window).width() < 1200) {
    //   alert("Less than 960");
    if ($("#responsive-dialog").length < 1) {
      $("#home").addClass("hidden");
      $("#about").addClass("hidden");
      $("#mywork").addClass("hidden");
      $("#navbar").addClass("hidden");
      $("#navbar").after(
        `
    <div class=" fixed z-[99] w-screen h-screen bg-black m-auto flex justify-center flex-col overflow-x-hidden overflow-y-hidden" id="responsive-dialog">
        <div class="">
            <h1 class="glitch text-center text-8xl font-extrabold font-[Pixelify_Sans] text-white" data-text="Ooppss, Didn't Find Anything?">Ooppss, Didn't Find Anything?</h1>
          </div>
          <div class="pt-3.5">
            <h2 class="text-center text-3xl font-[Pixelify_Sans] text-white">Please use desktop version to continue</h2>
          </div>
    </div>`
      );
    }
  } else {
    //   alert("More than 960");
    $("#responsive-dialog").remove();
    $("#home").removeClass("hidden");
    $("#title").remove();
    $("#home").append(
      `
        <div class="flex flex-col mb-20" id="title">
            <h1 class="text-4xl font-extrabold text-slate-500">I'm a</h1>
            <h1 class="text-8xl font-extrabold">Software</h1>
            <h1 class="text-8xl font-extrabold">Developer <span id="point">.</span></h1>
        </div>`
    );
    $("#about").removeClass("hidden");
    $("#mywork").removeClass("hidden");
    $("#navbar").removeClass("hidden");
    sr.reveal(`#home, #about`, {
      interval: 400,
    });
  }
});

$(window).resize(function () {
  if ($(window).width() < 1200) {
    //   alert("Less than 960");
    if ($("#responsive-dialog").length < 1) {
      $("#home").addClass("hidden");
      $("#about").addClass("hidden");
      $("#mywork").addClass("hidden");
      $("#navbar").addClass("hidden");
      $("#navbar").after(
        `
        <div class=" fixed z-[99] w-screen h-screen bg-black m-auto flex justify-center flex-col overflow-x-hidden overflow-y-hidden" id="responsive-dialog">
            <div class="">
                <h1 class="glitch text-center text-8xl font-extrabold font-[Pixelify_Sans] text-white" data-text="Ooppss, Didn't Find Anything?">Ooppss, Didn't Find Anything?</h1>
              </div>
              <div class="pt-3.5">
                <h2 class="text-center text-3xl font-[Pixelify_Sans] text-white">Please use desktop version to continue</h2>
              </div>
        </div>`
      );
    }
  } else {
    //   alert("More than 960");
    $("#responsive-dialog").remove();
    $("#home").removeClass("hidden");
    if ($("#title").length < 1) {
      $("#home").append(
        `
            <div class="flex flex-col mb-20" id="title">
                <h1 class="text-4xl font-extrabold text-slate-500">I'm a</h1>
                <h1 class="text-8xl font-extrabold">Software</h1>
                <h1 class="text-8xl font-extrabold">Developer <span id="point">.</span></h1>
            </div>`
      );
    }
    $("#about").removeClass("hidden");
    $("#mywork").removeClass("hidden");
    $("#navbar").removeClass("hidden");
  }
});

cursor = $("#cursor");
$(document).mousemove(function (event) {
  cursor.css({
    left: event.clientX + "px",
    top: event.clientY + "px",
  });
});
$("a").mouseover(function () {
  cursor.css({
    width: "70px",
    height: "70px",
  });
});
$("a").mouseout(function () {
  cursor.css({
    width: "120px",
    height: "120px",
  });
});

$("img").mouseover(function () {
  cursor.css({
    width: "-10px",
    height: "-10px",
  });
});
$("img").mouseout(function () {
  cursor.css({
    width: "120px",
    height: "120px",
  });
});

$("button").mouseover(function () {
  cursor.css({
    width: "-10px",
    height: "-10px",
  });
});
$("button").mouseout(function () {
  cursor.css({
    width: "120px",
    height: "120px",
  });
});
$("#canvas").mouseover(function () {
  cursor.css({
    width: "-10px",
    height: "-10px",
  });
});
$("#canvas").mouseout(function () {
  cursor.css({
    width: "120px",
    height: "120px",
  });
});

$("card").mouseover(function () {
  cursor.css({
    width: "-10px",
    height: "-10px",
  });
});
$("card").mouseout(function () {
  cursor.css({
    width: "120px",
    height: "120px",
  });
});

$("#console").mouseover(function () {
  cursor.css({
    width: "0px",
    height: "0px",
  });
});
$("#console").mouseout(function () {
  cursor.css({
    width: "120px",
    height: "120px",
  });
});
