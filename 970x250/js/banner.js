// JavaScript Document
var tl,
    size = "970x250",
    clicktag,
    imagesLoaded = false,
    backupmode = false,
    deal = {};

Enabler.setProfileId(1078746);
var devDynamicContent = {};

devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1 = [{}];
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0]._id = 0;
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].id = 1;
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].reporting = "00405|QF|Airline|SFO Retail|Red Planet|May-16|SG1|DBM|Display|160x600|";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].from = "SYD";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].to = "PVG";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].fare = "ECO";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].JSON = "https:\/\/qantasflightdeals.herokuapp.com\/api\/search?&dealTypeCode=A&cheapestDealPerDistinctAirportPair=true&travelClass=ECO&tripType=R&quantity=1&marketingRegionCode=au&departureAirportCodes=SYD&arrivalAirportCodes=PVG&callback=callbackFunction";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].URL = {};
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].URL.Url = "https://www.qantas.com/travel/airlines/international-flight-specials/global/en?departureAirportCode=BNE&arrivalAirportCode=SFO&travelClass=ECO&alt_cam=au:qf:rp:dcm:banner:sfor:::sg1:";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].show_price = true;
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].is_default = false;
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].bkgd_160x600 = {};
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].bkgd_160x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/SF-160x600.jpg";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].bkgd_300x250 = {};
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].bkgd_300x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/SF-300x250.jpg";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].bkgd_300x600 = {};
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].bkgd_300x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/SFO-300x600.jpg";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].bkgd_728x90 = {};
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].bkgd_728x90.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/SF-728x90.jpg";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].bkgd_970x250 = {};
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].bkgd_970x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0008/SFO-970x250.jpg";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame1_text_160x600 = "Where classic and quirky meet";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame1_text_300x250 = "Where classic and quirky meet";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame1_text_300x600 = "Where classic and quirky meet";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame1_text_728x90 = "Where classic and quirky meet";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame1_text_970x250 = "QANTAS FLY AWAY SALE";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame2_text_160x600 = "The City by the Bay is closer than you think";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame2_text_300x250 = "The City by the Bay is closer than you think";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame2_text_300x600 = "The City by the Bay is closer than you think";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame2_text_728x90 = "The City by the Bay is closer than you think";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame2_text_970x250 = "Fly away to Shanghai now";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame3_text_160x600 = "Now with direct services to SFO";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame3_text_300x250 = "Now with direct services to SFO";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame3_text_300x600 = "Now with direct services to SFO";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame3_text_728x90 = "Now with direct services to SFO";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].frame3_text_970x250 = "Fly Sydney to San Francisco<br>Now with direct services to SFO";
devDynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].short_terms = "*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar nunc vitae rhoncus pellentesque. Sed non ullamcorper elit. Sed feugiat gravida odio a.";
Enabler.setDevDynamicContent(devDynamicContent);

function exit() {
    Enabler.exitOverride('clickthrough', clicktag);
}


function politeInit() {
    clicktag = dynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].URL.Url;

    $('#f1-copy').html(dynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0]['frame1_text_' + size]);
    $('#f2-copy').html(dynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0]['frame1_text_' + size]);
    $('#f3-copy').html(dynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0]['frame2_text_' + size]);
    $('#f4-copy').html(dynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0]['frame2_text_' + size]);
    $('.terms').html(dynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].short_terms);

    preloadAssets();

    if (dynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].show_price)
        loadFeed();

    if (!dynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].show_price || dynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].is_default) {
        initCSS();
        backupAnimation();
        adjustCopyLayout();
    }
}

function preloadAssets() {
    var i = [
      "base-image-01.jpg",
      "base-image-02.jpg",
      "logos-qantas.png",
      "logos-partners.png",
      "shape-mask.svg",
      "shape-red.svg",
      "shape-white.svg",
      "shape-blue.svg",
      "shape-red-end-frame.svg",
      "shape-red-end-frame2.svg"
    ]
    preloadimages(i).done(function(images) {
        console.log("loaded");

        // ONCE IMAGES ARE PRE-LOADED BEGIN ANIMATION
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

function loadFeed() {

    $.ajax({
        type: 'GET',
        url: dynamicContent.SFID00405QFAirlineSFO_RetailRed_PlanetMay16_Sheet1[0].JSON,
        async: true,
        contentType: "application/json",
        dataType: 'json',
        success: function(json) {
            deal = json.dealQueryResult.result.deals.deal;

            if (json.dealQueryResult.result.deals.numberOfDeals == "0") {
                console.log("deals:" + json.dealQueryResult.result.deals.numberOfDeals);
                initCSS();
                backupAnimation();
                adjustCopyLayout();
                return;
            }

            var dest = deal.arrivalAirport.airport.displayName;

            $("#from").html("Fly from " + deal.departureAirport.airport.displayName + " to");
            $("#destination").html(deal.arrivalAirport.airport.displayName);
            $("#price").html(deal.price.currencySymbol + deal.price.value + "<span id='asterix-char'>*</span>");

            var rightcopy = "";

            if (deal.travelClass.indexOf("ECO") > -1)
                rightcopy += "Economy<br />";

            if (deal.travelClass.indexOf("BUS") > -1)
                rightcopy += "Business<br />";

            if (deal.travelClass.indexOf("PRE") > -1)
                rightcopy += "Premium Economy<br />";

            if (deal.travelClass.indexOf("FIR") > -1)
                rightcopy += "First class<br />";

            if (deal.tripType.value == "O")
                rightcopy += "one way";
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
            console.log(e);
            initCSS();
            backupAnimation();
            adjustCopyLayout();
        }
    });
}

function initBanner() {
    initCSS();
    adjustCopyLayout();
    setTimeout(function() {
      startAnimation();
    }, 250)
}

function initCSS() {

    // SET STARTING POSITIONS FOR ELEMENTS
    TweenLite.set($("#blue-shape"), {alpha: .9, rotation: 10, scaleX: 0.4, scaleY: 0.4, x: 60, y: 80, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape"), { alpha: .9, rotation: -20, scaleX: 0.6, scaleY: 0.6, x: 133, y: 73, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), { rotation: 30, scaleX: 0.4, scaleY: 0.4, x: -2245, y: -1270, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), { rotation: 10, transformOrigin: "50% 50%", overwrite: "none", force3D: false});

    TweenLite.set($("#red-shape-end-frame"), {autoAlpha: 0, scaleX: .5, scaleY: .5 ,rotation: 0, x: 400,y: -400,overwrite: "none",force3D: false});
    TweenLite.set($("#red-shape-end-frame2"), {autoAlpha: 0, rotation: -50, y: 290, scaleX: .5,scaleY: .5});

    TweenLite.set($("#red-shape-base"), {scaleX: 2, scaleY: 2, overwrite: "none", force3D: false});
    TweenLite.set($(".terms-wrapper"), {alpha:0})
    TweenLite.set($(".button"), {alpha:0, scale:.5})
}


function adjustCopyLayout() {

    // RE-POSITION TEXT ELEMENTS DEPENDING ON WHAT VALUES ARE ENTERED IN THE HTML

    // IF THE DESTINATION TEXT IS TOO LONG TO FIT ON ONE LINE, WE REDUCE THE FONT SIZE
    if($("#destination").text().length > 10){

        if($("#destination").text().length > 25){
            $("#destination").css("fontSize","50px");
            // $("#destination").css("lineHeight","16px");
            // $("#f5-copy").css("top","20px");
        } else if($("#destination").text().length >= 20){
            $("#destination").css("fontSize","47px");
            // $("#destination").css("lineHeight","18px");
            // $("#f5-copy").css("top","20px");
        }
    }
    
    // var f3CopyWidth = $('#f5-copy').outerWidth(true);
    // var ctaBtnOffset = 30 + f3CopyWidth;
    // $(".button").css("left",ctaBtnOffset);

}



// MAIN ANIMATION --------------------------------------------------------------------


function startAnimation() {
    console.log("Play animation")
    // HIDES PRE-LOADER CIRCLE AND SHOWS BANNER
    $(".container").show();
    $(".loader").hide();

    //RE-POSITION CTA BUTTON DEPENDING ON WIDTH OF TEXT LOCKUP
    var f3CopyWidth = $('#f5-copy').outerWidth(true);
    var ctaBtnOffset = 60 + f3CopyWidth;
    $(".button").css("left",ctaBtnOffset);


    // WE USE GREENSOCK ANIMATION PLATFORM, SEE THIS FOR MORE INFO > http://greensock.com/timelinelite

    tl = new TimelineLite();
    //FRAME 01

    tl.to(".shapes", 2.3, {alpha: 1,rotation: -160, transformOrigin: "50% 50%", ease: Sine.easeOut }, "0")
    tl.from("#red-shape", .5, {alpha:1, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut}, "0")
    tl.from("#blue-shape", .5, {alpha:1, transformOrigin: "50% 50%", x: 98, y: 55, ease: Back.easeOut}, "0")

    tl.to("#mask-shape", 1.5, {rotation: -60, transformOrigin: "50% 50%" , scaleX: 1.7, scaleY: 1.7, x: -2000, y: -1425, ease: Sine.easeInOut}, ".3")
    tl.to("#red-shape", 1, {rotation: -80, scaleX: 1.1, scaleY: 1.1, x: 211, y: 35, ease: Sine.easeInOut}, ".3")
    tl.to("#blue-shape", 1, {rotation: -140, scaleX: 1.1, scaleY: 1.1, x: 13, y: 117, ease: Sine.easeInOut}, ".3")

    tl.to("#mask-shape", .7, { rotation: 0, scaleX: 5.8, scaleY: 5.8, x: -1350, y: -1315, ease: Expo.easeIn}, ".9")
    tl.to("#blue-shape", 1.3, {alpha: 1, rotation: -330, scaleX: 5, scaleY: 5, x: -290, y: 488, ease: Expo.easeInOut}, ".9")
    tl.to("#red-shape", 1.3, {alpha: 1, rotation: -130, scaleX: 13, scaleY: 13, x: 535, y: -492, ease: Expo.easeInOut}, ".9")

    //FRAME 01
    tl.add(f1CopyAnimation, "0")
    tl.add(fadeF1OutText, "4.5")

    //FRAME 02
    tl.add(f2CopyAnimation, "0")
    tl.add(fadeF2OutText, "9")

    tl.to("#blue-shape", 1.4, {rotation: -70, scaleX: 2, scaleY: 2.5, x: -570, y: 268, ease: Sine.easeInOut}, "8.8")
    tl.to("#red-shape", 1.3, {rotation: 20, scaleX: 4, scaleY: 2.5, x: 745, y: -22, ease: Sine.easeInOut}, "8.8")

    tl.to(".bg-image", 1, {alpha:0, ease:Sine.easeOut}, "9")
    tl.from(".logos-qantas", 1.3, {alpha:0, ease: Sine.easeInOut}, "9")

    tl.to("#red-shape-end-frame2", 0, {autoAlpha:0, rotation:50, scaleX: 1.5, scaleY: 1.5, x:530, y:20, ease: Sine.easeOut}, "4")
    tl.to("#red-shape-end-frame2", 2.5, {autoAlpha:.3, rotation:-120, scaleX: 1.5, scaleY: 1.5, x:240, y:-20, ease: Sine.easeOut}, "8.7")
    tl.to("#red-shape-end-frame", 2.5, { autoAlpha: .2, scaleX: .8, scaleY: .8, x:420, y: -250, rotation: 0, ease: Sine.easeOut}, "8.7")


    // tl.from(".terms-wrapper", 1, {alpha: 0, ease: Sine.easeOut}, "11.2")
    // tl.from(".button", 1.7, {alpha: 0, scaleX: .5, scaleY: .5, ease: Expo.easeOut}, "11")

    tl.from("#f5-copy", 1, {alpha:0, y:-10, ease: Sine.easeOut}, "9.9")
    tl.from("#price", 1.4, {alpha:0, y:-10, ease: Sine.easeOut}, "9.9")
    tl.to(".terms", 1, {alpha:1, ease: Sine.easeOut}, "9.9")
    tl.to(".button", 1, {alpha:1, scale:1, ease: Sine.easeOut}, "9.7")

    tl.add(f3CopyAnimation, "0")


    // TESTING - goto specific time of animation
    //tl.seek(8);
    // tl.pause(2)
}

function backupAnimation(){
  console.log("Backup animation")
  // HIDES PRE-LOADER CIRCLE AND SHOWS BANNER
  $(".container").show();
  $(".loader").hide();
  // $("#f1-2-copy").hide();
  // $("#f1-copy").hide();

  // $(".bg-image").hide();

  // WE USE GREENSOCK ANIMATION PLATFORM, SEE THIS FOR MORE INFO > http://greensock.com/timelinelite

  /* tl = new TimelineLite();

  tl.to(".shapes", 2.3, {alpha: 1,rotation: -160, transformOrigin: "50% 50%", ease: Sine.easeOut }, "0")
  tl.from("#red-shape", .5, {alpha:1, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut}, "0")
  tl.from("#blue-shape", .5, {alpha:1, transformOrigin: "50% 50%", x: 98, y: 55, ease: Back.easeOut}, "0")

  tl.to("#mask-shape", 1.5, {rotation: -60, transformOrigin: "50% 50%" , scaleX: 1.7, scaleY: 1.7, x: -2000, y: -1425, ease: Sine.easeInOut}, ".3")
  tl.to("#red-shape", 1, {rotation: -80, scaleX: 1.1, scaleY: 1.1, x: 211, y: 35, ease: Sine.easeInOut}, ".3")
  tl.to("#blue-shape", 1, {rotation: -140, scaleX: 1.1, scaleY: 1.1, x: 13, y: 117, ease: Sine.easeInOut}, ".3")

  tl.to("#mask-shape", .7, { rotation: 0, scaleX: 5.8, scaleY: 5.8, x: -1350, y: -1315, ease: Expo.easeIn}, ".9")
  tl.to("#blue-shape", 1.3, {alpha: 1, rotation: -330, scaleX: 5, scaleY: 5, x:-430, y: 560, ease: Expo.easeInOut}, ".9")
  tl.to("#red-shape", 1.3, {alpha: 1, rotation: -130, scaleX: 13, scaleY: 13, x:530, y:-630, ease: Expo.easeInOut}, ".9")

  tl.from("#f1-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "1.4")
  tl.to("#f1-copy", 1, {alpha: 0, ease: Sine.easeOut}, "3.5")

  tl.from(".bg-image", 2, {alpha: 0, ease: Sine.easeOut}, "0")
  tl.from("#f1-2-copy", 1.5, {alpha: 0,ease: Sine.easeOut}, "4.5")

  //FRAME 02

  //FRAME 03
  tl.from(".bg-image-02", 1.5, {alpha: 0, ease: Sine.easeOut}, "3.5")
  tl.to(".bg-image", 1.5, {alpha: 0, ease: Sine.easeOut}, "7")

  tl.to("#f1-2-copy", 1, {alpha: 0,ease: Sine.easeOut}, "7")


  // tl.to("#red-shape", .7, {x: 895, y: 75, ease: Sine.easeIn}, "7.8")
  tl.to("#f1-copy", .5, {alpha: 0, ease: Sine.easeIn}, "7.5")
  tl.from("#f2-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "7.5")
  tl.from("#f2-sub-line", 1.5, {alpha: 0, ease: Sine.easeOut}, "7.5")
  // tl.to("#red-shape-end-frame2", 2.3, {autoAlpha:.4, rotation:0, scaleX: 1, scaleY: 1, x:-100, y:-304, ease: Sine.easeOut}, "7.3")

  //FRAME 04
  // tl.to("#f2-copy", .5, {alpha: 0, ease: Sine.easeIn}, "11.7")
  // tl.to("#f2-sub-line", .5, {alpha: 0, ease: Sine.easeOut}, "11.7")
  tl.to("#white-shape", 2, {alpha:1, rotation:-10, x:590, y: -170, scaleX:1, scaleY:1, ease: Sine.easeInOut, force3D:false}, "7.1")

  tl.to(".logos-qantas", 1.3, {x:0, y:-50, scaleX:1, scaleY:1, ease: Sine.easeInOut}, "7.1")
  tl.from(".logos-partners", 2, {alpha: 0, y:20, transformOrigin: "100% 50%", scaleX:.5, scaleY:.5, ease: Sine.easeOut}, "7.6")

  tl.to("#red-shape-end-frame2", 2.5, {autoAlpha:.3, rotation:-120, scaleX: 1.5, scaleY: 1.5, x:240, y:-20, ease: Sine.easeInOut}, "7")
  tl.to("#red-shape-end-frame", 2.5, { autoAlpha: .2, scaleX: .8, scaleY: .8, x:420, y: -250, rotation: 0, ease: Sine.easeOut}, "7")

  // tl.from("#f3-copy", 1, {alpha: 0, y: -10, ease: Sine.easeOut}, "12.4")
  tl.from(".terms-wrapper", 1, {alpha: 0, ease: Sine.easeOut}, "8.2")
  tl.from(".button", 1.7, {alpha: 0, scaleX: .5, scaleY: .5, ease: Expo.easeOut}, "9") */

}

// SPLIT TEXT FUNCTION ------------------------------------------------------------
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

  // Adjusting asterix character
  var str = lastCharOfPrice[0].style.left
  if(str.length >= 5) {
    str = str.substring(0, str.length - 2)
    str = str - 8
    str = str + "px"
    lastCharOfPrice.css({
      'top': '-15px',
      'fontSize': '30px',
      'color': '#fff',
      'left': str
    })
  } else {
    str = str.substring(0, str.length - 2)
    str = str - 5
    str = str + "px"
    lastCharOfPrice.css({
      'top': '-15px',
      'fontSize': '30px',
      'color': '#fff',
      'left': str
    })
  }
  var priceOnlyNumbers = price;
  priceOnlyNumbers = priceOnlyNumbers.children.length
  //If the price has a comma e.g. $1,000
  // if(priceOnlyNumbers.indexOf(",") > -1) {
    // var res = priceOnlyNumbers.split(",")
    // var a = res[0]
    // var b = res[1]
    // res = a+b
  // }

  // Animating the price numbers
  var limit = priceOnlyNumbers - 1;
  var lets = shuffleArray(mySplitText.chars);
  var letters = lets;

  console.log(priceOnlyNumbers)
  console.log(limit)

  // Starts at index 1 because we are animating the numbers. index 0 = "$"
  for(var index = 1; index < limit; index++) {
    //Skips the comma character during the price scramble animation
    var priceLength = priceOnlyNumbers;
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

// FADE OUT SPLIT TEXT FUNCTION ------------------------------------------------------------
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

// SHUFFLE LETTERS FUNCTION ------------------------------------------------------------
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
