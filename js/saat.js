let userinfo = prompt ("Adınız Nedir ?")
let user = document.querySelector ("#user")

user.innerHTML = `${userinfo[0].toUpperCase()+ userinfo.slice(1).toLowerCase()}`

function Hours() {
    var date = new Date().toLocaleTimeString('tr-TR')
    document.getElementById("saat").innerHTML = date;
}
setInterval (Hours, 3);

let time = new Date ()
let days = time.getDay()
switch(days) {
    case 0:
        document.getElementById ("days").innerHTML="Pazar"
        break;

    case 1:
        document.getElementById ("days").innerHTML="Pazartesi"
        break;
        

    case 2:
        document.getElementById ("days").innerHTML="Salı"
        break;
        

    case 3:
        document.getElementById ("days").innerHTML="Çarşamba"
        break;
        

    case 4:
        document.getElementById ("days").innerHTML="Perşembe"
        break;
        

    case 5:
        document.getElementById ("days").innerHTML="Cuma"
        break;
        

    case 6:
        document.getElementById ("days").innerHTML="Cumartesi"
        break;
    default:
        break;
}