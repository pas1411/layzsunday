var xmlDoc;
var xmlloaded = false;
var _finalUrl;

/*
 * input: none
 * output: none
 * gets zipcode from the zipcode text field
 */
function createURL() {
    var zip = document.getElementById("zipcode").value;
    var format = "&format=xml"
    var _clientId = "&client_id=MjUyNjgyOHwxNDU5MDIzOTAx";
    var _url = "https://api.seatgeek.com/2/recommendations?events.id=1162104&postal_code=";
    _finalUrl = _url + zip + _clientId + format;
    // document.getElementById("displayURL").innerHTML = _finalUrl; // debugging

}


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        // ready states 1-4 & status 200 = okay
        // 0: uninitialized
        // 1: loading
        // 2: loaded
        // 3: interactive
        // 4: complete
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            myFunction(xhttp);
        }
    };
    xhttp.open("GET", _finalUrl, true);
    xhttp.send();
}

function myFunction(xml) {
    var buyTickets,
    	// xml document
    	xmlDoc = xml.responseXML,
    	// genres of music
    	rock = document.getElementById("rock"),
    	pop = document.getElementById("pop"),
    	rap = document.getElementById("rap"),
    	country = document.getElementById("country"),
    	alt = document.getElementById("altern");
    	x = xmlDoc.getElementsByTagName("recommendations");

    for (i = 0; i < x.length; i++) {
        buyTickets = x[i].getElementsByTagName("url")[2].childNodes[0].nodeValue;
    }
    document.getElementById("demo").innerHTML = window.open(buyTickets);

}
