/*Store elements in a variable */
var pizzaSect = document.getElementById("pizza-sect");
var pastrySect = document.getElementById("pastry-sect");
var bakedSect = document.getElementById("baked-sect");
var beverageSect = document.getElementById("beverage-sect");
var burritoSect = document.getElementById("burrito-sect");
var quicheSect = document.getElementById("quiche-sect");
var breadSect = document.getElementById("bread-sect");
var satSect = document.getElementById("sat-sect");

/*Add event for every element */
pizzaSect.addEventListener("click", sectLink);
pastrySect.addEventListener("click", sectLink);
bakedSect.addEventListener("click", sectLink);
beverageSect.addEventListener("click", sectLink);
burritoSect.addEventListener("click", sectLink);
quicheSect.addEventListener("click", sectLink);
breadSect.addEventListener("click", sectLink);
satSect.addEventListener("click", sectLink);

function sectLink() {
    var allSection = document.querySelectorAll("section");
    for(var i = 0; i < allSection.length; i++) {
        allSection[i].className = "hide";
    }

    var sectId = this.attributes["data-section"].value;
    var sect = document.getElementById(sectId);
    
    if (sect.className === "hide") {
        sect.className = "";
    } else {
        sect.className = "hide";
    }
}
