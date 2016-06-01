// JavaScript Document
var tl,
    clicktag,
    size = "300x600",
    imagesLoaded = false,
    backup = false;

function politeInit() {

    Enabler.setProfileId(1080399);
    var devDynamicContent = {};

    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1 = [{}];
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0]._id = 0;
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].id = 1;
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].reporting = "00418|QF|Airline|Flash Sales|Red Planet|Jun-16|SG1|DBM|Display|160x600|SYD-HKG-price";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].city_pair = "SYD-HKG";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].start = {};
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].start.RawValue = "03/06/2016";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].start.UtcValue = 1457251200000;
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].end = {};
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].end.RawValue = "06/06/2016";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].end.UtcValue = 1465196400000;
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].version = "price";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].region = "NSW";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].is_default = true;
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].show_price = false;
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].show_countdown = false;
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].JSON = "https:\/\/qantasflightdeals.herokuapp.com\/api\/search?&dealTypeCode=A&cheapestDealPerDistinctAirportPair=true&travelClass=ECO&tripType=R&quantity=1&marketingRegionCode=au&departureAirportCodes=SYD&arrivalAirportCodes=HKG&callback=callbackFunction";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].URL = {};
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].URL.Url = "https://www.qantas.com/au/en/flight-deals/city-pairs.html/SYD/HKG/economy/lowest";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].bkgd_160x600_1 = {};
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].bkgd_160x600_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/SYD-160x600.jpg";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].bkgd_300x250_1 = {};
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].bkgd_300x250_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/SYD-300x250.jpg";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].bkgd_300x600_1 = {};
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].bkgd_300x600_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/SYD-300x600.jpg";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].bkgd_728x90_1 = {};
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].bkgd_728x90_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/SYD-728x90.jpg";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].bkgd_970x250_1 = {};
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].bkgd_970x250_1.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/SYD-970x250.jpg";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame1_text_160x600 = "Qantas fly away sale";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame1_text_300x250 = "Qantas fly away sale";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame1_text_300x600 = "Qantas fly away sale";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame1_text_728x90 = "Qantas fly away sale";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame1_text_970x250 = "Qantas fly away sale";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame2_text_160x600 = "Fly away to now";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame2_text_300x250 = "Fly away to now";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame2_text_300x600 = "Fly away to Hong Kong now";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame2_text_728x90 = "Fly away to now";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame2_text_970x250 = "Fly away to now";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame3_text_160x600 = "show JSON price";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame3_text_300x250 = "show JSON price";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame3_text_300x600 = "show JSON price";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame3_text_728x90 = "show JSON price";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].frame3_text_970x250 = "show JSON price";
    devDynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].short_terms = "*Prices based on payment at qantas.com by BPAY or POLi. Sale ends 23:59 (AEST) 6 June 2016, unless sold out prior. Selected travel dates and conditions apply.";
    Enabler.setDevDynamicContent(devDynamicContent);


    clicktag = dynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].URL.Url;

    $(".terms").html(dynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].short_terms);
    $("#f1-copy").html(dynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0]['frame1_text_' + size]);
    $("#f2-copy").html(dynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0]['frame1_text_' + size]);
    $("#f3-copy").html(dynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0]['frame2_text_' + size]);
    $("#f4-copy").html(dynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0]['frame2_text_' + size]);

    preloadAssets();

    if (dynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].is_default || !dynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].show_price)
        backupAnimation();
    else
        loadFeed();

}

function exit() {
    Enabler.exitOverride('clickthrough', clicktag);
}

function preloadAssets() {
    var i = [
        "close.gif",
        "shape-blue.svg",
        "shape-mask.svg",
        "shape-red-end-frame.svg",
        "shape-red-end-frame2.svg",
        "shape-red.svg",
        "shape-white.svg"
    ];

    preloadimages(i).done(function(images) {

        imagesLoaded = true;

        // TERMS & CONDITIONS FUNCTIONALITY / COMMENT OUT IF NOT NEEDED
        $(".overlay-close").click(function() {
            $(".overlay").hide();
            $(".terms-wrapper").show();
        });

        $(".overlay-trigger").click(function() {
            $(".terms-wrapper").hide();
            $(".overlay").show();
        });
    })
}
function backupAnimation() {
    backup = true;
    countdown();


    if (imagesLoaded) {
        initBanner();
    } else {
        si = setInterval(function() {
            if (imagesLoaded) {
                initBanner();
                clearInterval(si);
            }
        }, 250)
    }
}
function countdown() {

    var now = new Date();

    var eventTime =  dynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].end.UtcValue;
    var currentTime = now.getTime();

    var diffTime = eventTime - currentTime; //better to handle this in Controller to avoid timezone problem
    var duration = moment.duration(diffTime, 'milliseconds');
    var interval = 1000;

    setInterval(function(){
      duration = moment.duration(duration - interval, 'milliseconds');
      // console.log( (duration.days()+ "d:" + duration.hours() + "h:" + duration.minutes() + "m:" + duration.seconds() + "s") )

      //Update ountdown timer
      var daysLeft    = duration.days(),
          hoursLeft   = duration.hours(),
          minutesLeft = duration.minutes(),
          secondsLeft = duration.seconds();

      //To make into double digits
      if(secondsLeft.toString().length === 1) {
        secondsLeft = "0" + secondsLeft
      }
      if(minutesLeft.toString().length === 1) {
        minutesLeft = "0" + minutesLeft
      }
      if(hoursLeft.toString().length === 1) {
        hoursLeft = "0" + hoursLeft
      }
      if(daysLeft.toString().length === 1) {
        daysLeft = "0" + daysLeft
      }

      $(".days-left").html(daysLeft)
      $(".hours-left").html(hoursLeft)
      $(".min-left").html(minutesLeft)
      $(".sec-left").html(secondsLeft)

    }, interval);
}
function loadFeed() {
    $.ajax({
        type: 'GET',
        url: dynamicContent.SFID00418QFAirlineFlash_SalesRed_PlanetJun16_Sheet1[0].JSON,
        async: false,
        contentType: "application/json",
        dataType: 'json',
        success: function(json) {

            if (json.error) {
                backupAnimation();
                return;
            }

            deal = json.dealQueryResult.result.deals.deal;

            if (json.dealQueryResult.result.deals.numberOfDeals == "0") {
                backupAnimation();
                return;
            }

            var dest = deal.arrivalAirport.airport.displayName;

            if (dest.indexOf("(") > -1){
              dest = dest.split(" ")
              var a = dest[0]
              var b = dest[1]
              dest = a + "<br />" + b
              // $("#destination").css({fontSize:'50px', lineHeight:'47px'})
            }

            $("#from").html("From " + deal.departureAirport.airport.displayName + " to");
            $("#destination").html(dest);
            $("#price").html(deal.price.currencySymbol + deal.price.value + "<span id='asterix-char'>*</span>");

            if (dest.length > 25) {
                $("#destination").css("fontSize", "16px");
            }

            if (dest.indexOf("(") > -1) {

                if (dest.length <= 22) {
                  $("#destination").css({fontSize:'50px', lineHeight:'43px'})
                }

                if (dest.length > 22) {
                    $("#destination").css("fontSize", "20px");
                } else if (dest.indexOf("(") > -1 && dest.length > 22) {
                    $("#destination").css("fontSize", "20px");
                } else {
                    $("#destination").css("fontSize", "34px");
                }
            }

            var rightcopy = "<br />";

            if (deal.travelClass.indexOf("ECO") > -1)
                rightcopy += "Economy ";

            if (deal.travelClass.indexOf("BUS") > -1)
                rightcopy += "Business ";

            if (deal.travelClass.indexOf("PRE") > -1)
                rightcopy += "Premium Economy ";

            if (deal.travelClass.indexOf("FIR") > -1)
                rightcopy += "First class ";

            if (deal.tripType.value == "O")
                rightcopy += "One-way";
            else
                rightcopy += "return";

            $("#price-right-copy").html(rightcopy);


            if (imagesLoaded) {
                initBanner();
            } else {
                si = setInterval(function() {
                    if (imagesLoaded) {
                        initBanner();
                        clearInterval(si);
                    }
                }, 250)
            }
        },
        error: function(e) {
            console.log("ERROR");
            console.log(e);
            backupAnimation();
        }

    });
}

function initBanner() {

    if (!Enabler.isVisible())
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, initAnimation);
    else
        initAnimation();
}

function initAnimation() {

    initCSS();
    adjustCopyLayout();

    setTimeout(function() {
        startAnimation();
    }, 240)
}

function initCSS() {
    // SET STARTING POSITIONS FOR ELEMENTS
    TweenLite.set($("#blue-shape"), {alpha: .9, rotation: 50, scaleX: 0.4, scaleY: 0.4, x: 60, y: 80, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape"), {alpha: .8, rotation: -20, scaleX: 0.2, scaleY: 0.2, x: 140, y: 83, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.3, scaleY: 0.3, x: -2235, y: -1270, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 160, transformOrigin: "50% 50%", overwrite: "none", force3D: false});

    TweenLite.set($("#red-shape-end-frame"), {x: 0, y: 100, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape-end-frame2"), {autoAlpha:0, rotation:100, x:100, y:-200, scaleX:.3, scaleY:.5});

    TweenLite.set($(".terms-wrapper"), {alpha:0})
    TweenLite.set($(".button"), {alpha:0, scale:.5})
    TweenLite.set($(".logos"), {alpha:0})
}

function adjustCopyLayout() {
  // IF THE DESTINATION TEXT IS TOO LONG TO FIT ON ONE LINE, WE REDUCE THE FONT SIZE
  if($("#destination").text().length > 12){
      $("#destination").css("fontSize","50px");
      $("#destination").css("lineHeight","47px");
  }

  //RE-POSITION CTA BUTTON DEPENDING ON HEIGHT OF TEXT LOCKUP
  var f3CopyHeight = $('#f5-copy').outerHeight(true);
  var ctaBtnOffset = 64 + f3CopyHeight + 20;
  $(".button").css("top",ctaBtnOffset);
}

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
  // if(priceOnlyNumbers.indexOf(",") > -1) {
  //   var res = priceOnlyNumbers.split(",")
  //   var a = res[0]
  //   var b = res[1]
  //   res = a+b
  // }

  // Adjusting asterix character
  var str = lastCharOfPrice[0].style.left
  if(str.length >= 5) {
    str = str.substring(0, str.length - 2)
    str = str - 5
    str = str + "px"
  } else {
    str = str.substring(0, str.length - 2)
    str = str - 2
    str = str + "px"
  }
  lastCharOfPrice.css({
    top: '-14px',
    fontSize: '20px',
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

    tl.to(shapes, 2, {rotation: -10, transformOrigin: "50% 50%"}, "0")
    tl.from(redShape, .5, {rotation: 200, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut}, "0")

    tl.to(maskShape, 1.5, {rotation: 0, scaleX: 1.5, scaleY: 1.5, x: -2070, y: -1315,  ease: Sine.easeInOut}, "0")
    tl.to(redShape, 1, {rotation: -20, scaleX: 2, scaleY: 2, x: 211, y: -20, ease: Sine.easeInOut}, ".3")
    tl.to(blueShape, 1, {rotation: -10, scaleX: 1.5, scaleY: 1.5, x: 13, y: 177, ease: Sine.easeInOut}, ".3")

    tl.to(maskShape, .7, {rotation: 0, scaleX: 3, scaleY: 5, x: -1850, y: -1315, ease: Back.easeIn}, "1.1")
    tl.to(blueShape, .6, {rotation: -70, scaleX: 3, scaleY: 3, x: -160, y: 385, ease: Sine.easeInOut}, "1.4")
    tl.to(redShape, .6, {rotation: -100, scaleX: 4, scaleY: 4.5, x: 340, y: -195, ease: Sine.easeInOut}, "1.4")

    //FRAME 01
    tl.add(f1CopyAnimation, "0")
    tl.add(fadeF1OutText, "4.5")

    //FRAME 02
    tl.add(f2CopyAnimation, "0")
    tl.add(fadeF2OutText, "9")

    tl.to(blueShape, 1.5, {x:-220, y:555, ease:Back.easeIn}, "8.3")
    tl.to(redShape, 1.5, {x:330, y:-390, ease:Back.easeIn}, "8.3")

    //FRAME 03
    tl.to(bgImage, 1, {alpha:0, ease:Sine.easeOut}, "9.5")
    tl.to(logos, 1, {alpha: 1, ease: Sine.easeOut}, "9.7")

    tl.from(f5Copy, 1, {alpha:0, y:-10, ease: Sine.easeOut}, "9.9")
    tl.from(price, 1.4, {alpha:0, y:-10, ease: Sine.easeOut}, "9.9")
    tl.to(terms, 1, {alpha:1, ease: Sine.easeOut}, "9.9")
    tl.to(ctaBtn, 1, {alpha:1, scale:1, ease: Sine.easeOut}, "9.7")

    if(backup){
      tl.from(".countdown-container", .4, {autoAlpha:0, ease:Sine.easeOut}, "10.2")
      $("#price-left-copy").hide()
      $("#price").hide()
      $("#price-right-copy").hide()
      $("#destination").html("Hong Kong<br />& Shanghai").css({fontSize:'42px', lineHeight:'48px', fontWeight:'700', marginTop:'37px'})
      $("#sub-text").html("Until 6 June")
      $("#from").html("THE FLY AWAY SALE").css({width: '300px', fontWeight: '700', fontSize:'25px'})
      $(".button").css({top:'336px'})
    } else {
      TweenLite.set($(".countdown-container"), {alpha:0})
      TweenLite.set($(".from-line-01"), {alpha:0})
      TweenLite.set($(".from-line-02"), {alpha:0})
    }

    tl.to(redShapeEndFrame02, 2.5, {autoAlpha:0, rotation:30, scaleX: 1.6, scaleY: 1.6, x:150, y:-70, ease: Sine.easeOut}, "5.7")

    tl.to(redShapeEndFrame01, 3, {autoAlpha:.5, scaleX:.6, scaleY:.6, x:-290, y:10, rotation:-220, ease:Sine.easeOut}, "8.6")
    tl.to(redShapeEndFrame02, 3, {autoAlpha:.4, rotation:100, scaleX: 1.4, scaleY:1.4, x:20, y:160, ease:Sine.easeInOut}, "8.6")

    tl.add(f3CopyAnimation, "0")
    // tl.pause(3)
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
    tl.to([f1Copy, f2Copy], .6, {alpha:0, scrambleText:{text:" ", chars: "lowerCase", revealDelay:0, speed:0.3}, ease:Sine.easeOut}, index*0.1)
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
