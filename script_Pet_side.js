var Data = data;

const queryString = window.location.search;
console.log(queryString);
var Variable = queryString.replace("?Number=","")
console.log(Variable);

var list_Video = [2,4,22,25,27,34,38,39,47,51,54,57]


let Wegmarke_func = document.getElementById("Wegmarken_id");
Wegmarke_func.onclick = function(evt){
  evt = window.event;
  let elem = evt.target
  navigator.clipboard.writeText(Data[Variable].Wegmarken_id);
  alert("Wegmarken Id wurde in die Zwischenablage Kopiert");
}


get_Name = document.getElementById("Name").innerHTML = Data[Variable].Name;
document.getElementById("Karte").innerHTML = "Map:" + Data[Variable].Karte;
document.getElementById("Gebiet").innerHTML = "Gebiet:" + Data[Variable].Gebiet;
document.getElementById("Wegmarke").innerHTML = "Wegmarke:" + Data[Variable].Wegmarke;
document.getElementById("Wegmarken_id").innerHTML = "Wegmarken_id:" + Data[Variable].Wegmarken_id;
if (Data[Variable].Bild_Direct != " "){
  document.getElementById("Bild_Direct").src = Data[Variable].Bild_Direct;
};
if (Data[Variable].Bild_Map != " "){
  document.getElementById("Bild_Map").src = Data[Variable].Bild_Map;
};
console.log(Variable);
console.log(list_Video.includes(parseInt(Variable)));

if (list_Video.includes(parseInt(Variable))) {
  var yt_Video = document.createElement("iframe");
  yt_Video.src = Data[Variable].Video;
  yt_Video.setAttribute('allowFullScreen', '')
  yt_Video.classList.add("Video");
  document.getElementById("Video").appendChild(yt_Video);
};
