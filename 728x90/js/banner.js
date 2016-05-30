// JavaScript Document
var tl;
$(document).ready(function () {
    var i = [
      "close.gif",
      "shape-blue.svg",
      "shape-mask.svg",
      "shape-red-end-frame.svg",
      "shape-red-end-frame2.svg",
      "shape-red.svg",
      "shape-white.svg"
  ];

    preloadimages(i).done(function (images) {
        initCSS();
        adjustCopyLayout();
        setTimeout(function() {
          startAnimation();
        }, 240)
        // startAnimation();

        // TERMS & CONDITIONS FUNCTIONALITY / COMMENT OUT IF NOT NEEDED
        $(".overlay-close").click(function () {
            $(".overlay").hide();
            $(".terms-wrapper").show();
        });

        $(".overlay-trigger").click(function () {
            $(".terms-wrapper").hide();
            $(".overlay").show();
        });
    })
});

// COPY UPDATES
var f1Copy = 'QANTAS FLY AWAY SALE'
var f2Copy = 'Fly away to Shanghai now'
var price = '1,234'

$("#f1-copy").html(f1Copy)
$("#f2-copy").html(f1Copy)

$("#f3-copy").html(f2Copy)
$("#f4-copy").html(f2Copy)

$("#price-animation").html(price)

// PRELOAD FONT FUNCTION
// function preloadFont(){
//   var anyFont = new Font();
//   anyFont.src = "lineto-brauerneue-regular.ttf";
//   anyFont.onload = function () {
//     console.log("font loaded");
//   }
// }

function initCSS() {
    // SET STARTING POSITIONS FOR ELEMENTS
    TweenLite.set($("#blue-shape"), {alpha: .9, rotation: 50, scaleX: 0.4, scaleY: 0.4, x: 60, y: 80, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape"), {alpha: .8, rotation: -20, scaleX: 0.2, scaleY: 0.2, x: 140, y: 83, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.3, scaleY: 0.3, x: -2235, y: -1270, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 160, transformOrigin: "50% 50%", overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape-end-frame"), {scaleX: .1, x: 20, y: 310, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape-end-frame2"), {autoAlpha:0, rotation:100, x:400, y:-300, scaleX:.3, scaleY:.5});

    TweenLite.set($(".terms-wrapper"), {alpha:0})
    TweenLite.set($(".button"), {alpha:0, scale:.5})
    TweenLite.set($(".logos"), {alpha:0})
}


function adjustCopyLayout() {
    // RE-POSITION TEXT ELEMENTS DEPENDING ON WHAT VALUES ARE ENTERED IN THE HTML
    // IF THE DESTINATION TEXT IS TOO LONG TO FIT ON ONE LINE, WE REDUCE THE FONT SIZE
    // if($("#destination").text().length > 14){
    //     $("#destination").css("fontSize","24px");
    // }

      setTimeout(function(){
        var btnPosition = $("#f5-copy").outerWidth()
        console.log(btnPosition)
        btnPosition = btnPosition + 30
        $(".button").css('left', btnPosition + 'px')
        console.log(btnPosition)
      }, 1000)
}

// function adjustBtn() {
//   var btnPosition = $("#f5-copy").outerWidth()
//   console.log(btnPosition)
//   // btnPosition = btnPosition + 10
//   // $(".button").css('left', btnPosition + 'px')
// }


function f1CopyAnimation() {
  var tl = new TimelineLite();

  var mySplitText = new SplitText("#f1-copy", {type: "chars", absolute:true});
  var mySplitText02 = new SplitText("#f2-copy", {type: "chars", absolute:true});

  var lets = shuffleLetters(mySplitText.chars, mySplitText02.chars);
  var letters = lets[0];
  var letters02 = lets[1];

  var randomChars = "XYZ0123456789";

  for(var index = 0; index < letters.length; index++){
    tl.from([letters[index], letters02[index]], .8, {alpha:0, overwrite:"all",scrambleText:{text:"X", chars:randomChars, revealDelay:1, speed:0.3}, delay:.5}, index*0.1)
  }

}

function f2CopyAnimation() {
  var tl = new TimelineLite();

  var mySplitText = new SplitText("#f3-copy", {type: "chars", absolute:true});
  var mySplitText02 = new SplitText("#f4-copy", {type: "chars", absolute:true});

  var lets = shuffleLetters(mySplitText.chars, mySplitText02.chars);
  var letters = lets[0];
  var letters02 = lets[1];

  var randomChars = "weruioaszxcvnm";

  for(var index = 0; index < letters.length; index++){
    tl.from([letters[index], letters02[index]], .4, {alpha:0, overwrite:"all",scrambleText:{text:"x", chars:randomChars, revealDelay:0, speed:.3}, delay:4.5}, index*0.08)
  }
}

function f3CopyAnimation() {
  var tl = new TimelineLite();

  var mySplitText = new SplitText("#price", {type: "chars", absolute:true});

  var price01 = $("#price")
  var priceChild = $("#price").children()
  var lastCharOfPrice = priceChild.last()

  var priceOnlyNumbers = price;
  //If the price has a comma
  if(priceOnlyNumbers.indexOf(",") > -1) {
    var res = priceOnlyNumbers.split(",")
    var a = res[0]
    var b = res[1]
    res = a+b
  }

  // Adjusting asterix character
  var str = lastCharOfPrice[0].style.left
  if(str.length >= 5) {
    str = str.substring(0, str.length - 2)
    str = str - 8
    str = str + "px"
  } else {
    str = str.substring(0, str.length - 2)
    str = str - 5
    str = str + "px"
  }
  lastCharOfPrice.css({
    top: '3px',
    fontSize: '16px',
    color: '#fff',
    left: str
  })

  // Animating the price numbers
  var limit = priceChild.length - 1;
  var lets = shuffleArray(mySplitText.chars);
  var letters = lets;

  for(var index = 1; index < limit; index++) {
    //Skips the comma character during the price scramble animation
    var priceLength = price.length;
    //If price is 5 characters long eg: 1,000
    if (priceLength >= 5) {
      if(index == 2) {
        index += 1
      }//If price is 6 characters long eg: 10,000
    } else if(priceLength >= 6) {
      if(index == 3) {
        index += 1
      }
    }
    tl.from(priceChild[index], 1, {alpha:0, overwrite:"all", scrambleText:{text:"X", chars:"123456789", revealDelay:0, speed:.3}, delay:10}, "0")
  }
}


// MAIN ANIMATION --------------------------------------------------------------------

function startAnimation() {
    // HIDES PRE-LOADER CIRCLE AND SHOWS BANNER
    $(".container").show();
    $(".loader").hide();

    //Start Animation
    var tl = new TimelineLite(),
        f5Copy = $("#f5-copy"),
        terms = $(".terms-wrapper"),
        ctaBtn = $(".button"),
        bgImage = $(".bg-image"),
        logos = $(".logos"),
        shapes = $(".shapes"),
        redShape = $("#red-shape"),
        blueShape = $("#blue-shape"),
        maskShape = $("#mask-shape"),
        price = $("#price"),
        redShapeEndFrame01 = $("#red-shape-end-frame"),
        redShapeEndFrame02 = $("#red-shape-end-frame2");


    tl.to(".shapes", 2, {rotation: -160, transformOrigin: "50% 50%"}, "0")
    tl.from("#red-shape", .5, {rotation: 200, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut}, "0")

    tl.to("#mask-shape", 1.5, {rotation: 0, scaleX: 1.3, scaleY: 1.3, x: -2100, y: -1315,  ease: Sine.easeInOut}, "0")
    tl.to("#red-shape", 1, {rotation: -80, scaleX: 1.5, scaleY: 1.5, x: 231, y: 55, ease: Sine.easeInOut}, ".3")
    tl.to("#blue-shape", 1, {rotation: -140, scaleX: 1, scaleY: 1, x: -4, y: 117, ease: Sine.easeInOut}, ".3")

    tl.to("#mask-shape", .7, {rotation: 0, scaleX: 4.2, scaleY: 4.2, x: -1650, y: -1315, ease: Back.easeIn}, "1.1")
    tl.to("#blue-shape", .7, {rotation: -230, scaleX: 1.5, scaleY: 1.5, x: -260, y: 120, ease: Sine.easeOut}, "1.45")
    tl.to("#red-shape", .7, {rotation: 0, scaleX: 4, scaleY: 4, x: 565, y: 75, ease: Sine.easeInOut}, "1.45")


    //FRAME 01
    tl.add(f1CopyAnimation, "0")
    tl.add(fadeF1OutText, "4.5")

    //FRAME 02
    tl.add(f2CopyAnimation, "0")
    tl.add(fadeF2OutText, "9")

    tl.to("#blue-shape", .7, {x: -400, y: 80, ease: Sine.easeIn}, "8.3")
    tl.to("#red-shape", .7, {x: 895, y: 75, ease: Sine.easeIn}, "8.3")

    //FRAME 03
    tl.to(bgImage, 1, {alpha:0, ease:Sine.easeOut}, "9.5")
    tl.to(logos, 1, {alpha: 1, ease: Sine.easeOut}, "9.7")

    tl.from(f5Copy, 1, {alpha:0, y:-10, ease: Sine.easeOut}, "9.9")
    tl.from(price, 1.4, {alpha:0, y:-10, ease: Sine.easeOut}, "9.9")
    tl.to(terms, 1, {alpha:1, ease: Sine.easeOut}, "9.9")
    tl.to(ctaBtn, 1, {alpha:1, scale:1, ease: Sine.easeOut}, "9.7")

    tl.to(redShapeEndFrame02, 2.3, {autoAlpha:0, rotation:100, scaleX: 1, scaleY: 1.4, x:-10, y:-140, ease: Sine.easeOut}, "4.6")

    tl.to(redShapeEndFrame01, 3, {autoAlpha:.3, scaleX: .8, scaleY: .8, x: 240, y: 560, rotation:-120, ease: Sine.easeOut}, "8.5")
    tl.to(redShapeEndFrame02, 2, {autoAlpha:.4, rotation:50, scaleX: 1.5, scaleY: 1.5, x:130, y:-10, ease: Sine.easeOut}, "9.2")

    tl.add(f3CopyAnimation, "0")

    // tl.pause(2)
}

function fadeF1OutText() {
  var tl = new TimelineLite(),
      f1Copy = $("#f1-copy div"),
      f2Copy = $("#f2-copy div");
  for(var index = 0; index < f1Copy.length; index++) {
    tl.to([f1Copy, f2Copy], 1, {alpha:0, scrambleText:{text:" ", revealDelay:0, speed:0.3}, ease:Sine.easeOut}, index*0.2)
  }
}

function fadeF2OutText() {
  var tl = new TimelineLite(),
      f1Copy = $("#f3-copy div"),
      f2Copy = $("#f4-copy div");
  for(var index = 0; index < f1Copy.length; index++) {
    tl.to([f1Copy, f2Copy], .6, {alpha:0, scrambleText:{text:" ", chars:"lowerCase", revealDelay:0, speed:0.3}, ease:Sine.easeOut}, index*0.1)
  }
}



//Shuffle Array function
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function shuffleLetters(array1, array2) {
    for (var i = array1.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp1 = array1[i];
        var temp2 = array2[i];

        array1[i] = array1[j];
        array1[j] = temp1;

        array2[i] = array2[j];
        array2[j] = temp2;
    }
    return [array1,array2];
}

// PRE-LOAD IMAGES FUNCTIONALITY ------------------------------------------------------------


function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0
    var postaction = function () {}
    var arr = (typeof arr != "object") ? [arr] : arr

    function imageloadpost() {
        loadedimages++
        if (loadedimages == arr.length) {
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image()
        newimages[i].src = arr[i]
        newimages[i].onload = function () {
            imageloadpost()
        }
        newimages[i].onerror = function () {
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction //remember user defined callback functions to be called when images load
        }
    }
}
