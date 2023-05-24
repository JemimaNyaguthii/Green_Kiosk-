// Change document background color to
// silver
document.getElementById("body").style.backgroundColor="silver";
// Change the font color for h1 title tag to
// green
document.getElementById("title").style.color="green";
// Change the font case for h3 title tags to
// uppercase

document.getElementById("fruTitle").style.textTransform="upperCase"
document.getElementById("vegTitle").style.textTransform="upperCase"

// Add one more fruit to the fruits list
let fruits= document.createElement("li");
fruits.innerHTML="Apples";
document.getElementById("fruList").appendChild(fruits);
// Add one more vegetable to the vegetables
// list
let veges= document.createElement("li");
veges.innerHTML="Cabbages";
document.getElementById("vegList").appendChild(veges);