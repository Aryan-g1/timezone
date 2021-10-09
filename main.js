let btn = document.getElementById("getTimeZone");

function Timezone(){
    let time = document.getElementById("showTimeZone");
    time.innerHTML = Date();
}

if(btn !=null){
    btn.addEventListener("click", Timezone);
}