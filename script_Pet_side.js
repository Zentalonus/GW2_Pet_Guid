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
}else {
  give_Hint = document.createElement("a");
  give_Hint.classList.add("Hint");
  give_Hint.innerHTML = "Dieses Pet kann man nur durch das Spielen von Guildwars 1 erlangen. Für mehr Infos: \n https://wiki-de.guildwars2.com/wiki/Halle_der_Monumente_(Ruinen).";
  give_Hint.href = "https://wiki-de.guildwars2.com/wiki/Halle_der_Monumente_(Ruinen)";
  document.getElementById("Video").appendChild(give_Hint);
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
