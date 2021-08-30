var pet_ids;
var URL_Pets = "https://api.guildwars2.com/v2/pets?ids=";
var Pet_data;


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          pet_ids = this.responseText;
          //console.log(pet_ids);
          pet_ids = pet_ids.replaceAll("[","").replace("]","").replaceAll(" ","").replaceAll("\n","").split(",");
          //console.log(pet_ids);
          for (var i = 0; i < pet_ids.length; i++) {
            if (i < pet_ids.length-1) {
              URL_Pets = URL_Pets + pet_ids[i] + ",";
              //console.log(URL_Pets);
              }
            else {
              URL_Pets = URL_Pets + pet_ids[i];
            };
          };


          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  Pet_data = this.responseText;
                  Pet_data = JSON.parse(Pet_data);


                  for (var i = 0; i < pet_ids.length; i++) {
                    var Pet_container = document.createElement("Div");
                    Pet_container.classList.add("Container");
                    document.getElementById('Pet_list').appendChild(Pet_container);

                    var Pet_Pic = document.createElement("img");
                    Pet_Pic.src = Pet_data[i]["icon"];
                    Pet_Pic.classList.add("Bilder");

                    var Pet_name = document.createElement("a");
                    Pet_name.innerHTML = Pet_data[i]["name"];
                    Pet_name.href = "Pet_side.html?Number="+Pet_data[i]["id"];
                    Pet_name.classList.add("Pet_Name");

                    Pet_container.appendChild(Pet_Pic);
                    Pet_container.appendChild(Pet_name);

                  };
                };
          };
          xhttp.open("GET", URL_Pets, true);
          xhttp.send();


      };
};
xhttp.open("GET", "https://api.guildwars2.com/v2/pets", true);
xhttp.send();
