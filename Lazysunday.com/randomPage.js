var lazyLinks,
    activeLinks;
// Array of lazy button links
lazyLinks = [];
lazyLinks[0] = "http://www.koalastothemax.com/";
lazyLinks[1] = "http://just-shower-thoughts.tumblr.com/";
lazyLinks[2] = "http://burymewithmymoney.com/";
lazyLinks[3] = "http://hooooooooo.com/";
lazyLinks[4] = "http://www.trypap.com/";
lazyLinks[5] = "http://ducksarethebest.com/";
lazyLinks[6] = "http://www.fallingfalling.com/";
lazyLinks[7] = "http://www.staggeringbeauty.com/";
lazyLinks[8] = "http://cant-not-tweet-this.com/";
lazyLinks[9] = "http://www.partridgegetslucky.com/";

// Array of Active links
activeLinks = [];
activeLinks[0] = "https://www.tourdefood.com/";
activeLinks[1] = "http://www.milb.com/index.jsp?sid=t494";
activeLinks[2] = "http://usnwc.org/";
activeLinks[3] = "http://www.volunteermatch.org/";
activeLinks[4] = "http://victorylanekarting.com/";
activeLinks[5] = "http://www.charlottemotorspeedway.com/";
activeLinks[6] = "http://charmeck.org/mecklenburg/county/ParkandRec/Parks/ParksByRegion/CentralRegion/Pages/Freedom.aspx";
activeLinks[7] = "http://experiencetheblackout.com/";
activeLinks[8] = "https://www.carowinds.com/";
activeLinks[9] = "http://www.lakenorman.com/";

/*
 *input: id of button that has been clicked (active or lazy)
 *output: none
 *picks webpage based on random number from array of lazy or active links and opens it in a new page
 */
function visitSite(clicked_id) {
    "use strict";
    var a,
        location;
    a = 1 + Math.round(Math.random() * 10);
    if (clicked_id === "activebutton") {
        location = activeLinks[a];
        window.open(location);
    }
    if (clicked_id === "lazybutton") {
        location = lazyLinks[a];
        window.open(location);
    }
}