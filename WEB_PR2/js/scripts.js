var flag = 0;

function add_button(){
    var primary = document.getElementById("button");
    var secondary = document.getElementById("button2");
    var tertiary = document.getElementById("button3");
    if(flag == 1){
        primary.style.backgroundColor = "#222020";
        primary.style.color = "#FF4500";
        secondary.style.backgroundColor = "#222020";
        secondary.style.color = "#FF4500";
        tertiary.style.backgroundColor = "#222020";
        tertiary.style.color = "#FF4500";
        flag = 0;
    }else{
        primary.style.backgroundColor = "#FF4500";
        primary.style.color = "#222020";
        secondary.style.backgroundColor = "#222020";
        secondary.style.color = "#FF4500";
        tertiary.style.backgroundColor = "#222020";
        tertiary.style.color = "#FF4500";
       flag = 1;
    }
}
function search_button(){
    var primary = document.getElementById("button2");
    var secondary = document.getElementById("button");
    var tertiary = document.getElementById("button3");
    if(flag == 2){
        primary.style.backgroundColor = "#222020";
        primary.style.color = "#FF4500";
        secondary.style.backgroundColor = "#222020";
        secondary.style.color = "#FF4500";
        tertiary.style.backgroundColor = "#222020";
        tertiary.style.color = "#FF4500";
        flag = 0;
    }else{
        primary.style.backgroundColor = "#FF4500";
        primary.style.color = "#222020";
        secondary.style.backgroundColor = "#222020";
        secondary.style.color = "#FF4500";
        tertiary.style.backgroundColor = "#222020";
        tertiary.style.color = "#FF4500";
       flag = 2;
    }
}
function profile_button(){
    var primary = document.getElementById("button3");
    var secondary = document.getElementById("button2");
    var tertiary = document.getElementById("button");
    if(flag == 3){
        primary.style.backgroundColor = "#222020";
        primary.style.color = "#FF4500";
        secondary.style.backgroundColor = "#222020";
        secondary.style.color = "#FF4500";
        tertiary.style.backgroundColor = "#222020";
        tertiary.style.color = "#FF4500";
        flag = 0;
    }else{
        primary.style.backgroundColor = "#FF4500";
        primary.style.color = "#222020";
        secondary.style.backgroundColor = "#222020";
        secondary.style.color = "#FF4500";
        tertiary.style.backgroundColor = "#222020";
        tertiary.style.color = "#FF4500";
       flag = 3;
    }
}



function add_div() {
    var primary = document.getElementById("add");
    var secondary = document.getElementById("search");
    var tertiary = document.getElementById("profile");
    secondary.style.display = "none";
    tertiary.style.display = "none";
    if (flag == 1) {
      primary.style.display = "flex";
    } else {
      primary.style.display = "none";
    }
  }
  function search_div() {
    var primary = document.getElementById("search");
    var secondary = document.getElementById("add");
    var tertiary = document.getElementById("profile");
    secondary.style.display = "none";
    tertiary.style.display = "none";
    if (flag == 2) {
      primary.style.display = "flex";
    } else {
      primary.style.display = "none";
    }
  }
  function profile_div() {
    var primary = document.getElementById("profile");
    var secondary = document.getElementById("search");
    var tertiary = document.getElementById("add");
    secondary.style.display = "none";
    tertiary.style.display = "none";
    if (flag == 3) {
      primary.style.display = "flex";
    } else {
      primary.style.display = "none";
    }
  }