var hasla=["Bez pracy nie ma kołaczy", "kto pod kim dołki kopie sam w nie wpada", "W marcu jak w garncu", "Fortuna kołem się toczy", "cukier krzepi", "Nie chwal dnia przed zachodem słońca", "Lepszy wróbel w garści niż gołąb na dachu", "Apetyt rośnie w miarę jedzenia", "Co ma wisieć, nie utonie", "Dzieci i ryby głosu nie mają", "Darowanemu koniowi w zęby się nie zagląda", "Łaska pańska na pstrym koniu jeździ", "Grosz do grosza a będzie kokosza", "Czego Jaś się nie nauczy tego Jan nie będzie umiał", "Czym chata bogata tym gościom rada", "Dla chcącego nic trudnego", "Wolnoć Tomku w swoim domku"];

var hasloI=Math.floor(Math.random()*17);

var password=hasla[hasloI];
password=password.toUpperCase();
var ile_skuch=0;
var passwordLength=password.length;
var letters=["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ż","Ź"];

var yes=new Audio("yes.wav");
var no=new Audio("no.wav");

var passwordOne="";
for (i=0; i<passwordLength; i++) {
    if (password.charAt(i)==" ") 
    passwordOne=passwordOne+" ";
    else passwordOne=passwordOne+"-";
}

function start() {
    var zawartoscDiva="";

    for (i=0; i<35; i++) {
        var element="lit"+i;
        zawartoscDiva=zawartoscDiva+'<div class="litera" id="'+element+'" onclick="check('+i+')">'+letters[i]+'</div>'; 
       
        if ((i+1)%7==0) zawartoscDiva=zawartoscDiva+"<div class=\"clear\"></div>";  
    }
    document.getElementById("alfabet").innerHTML=zawartoscDiva;

    writePass();
}

function writePass() {
    document.getElementById("plansza").innerText=passwordOne;
}

String.prototype.ustawZnak=function(miejsce, znak) {
    if (miejsce>this.length-1)
    return this.toString();
    else return this.substr(0, miejsce)+znak+this.substr(miejsce+1);
}

function check(nr) {
    var trafiona=false;
    for (i=0; i<passwordLength; i++) {
        if (password.charAt(i)===letters[nr]) {
            passwordOne=passwordOne.ustawZnak(i,letters[nr]);
            trafiona=true;
        }
    }
    yes.play();
    if (trafiona==true) {
        var element="lit"+nr;
        document.getElementById(element).style.background="#030";
        document.getElementById(element).style.color="#00C000";
        document.getElementById(element).style.border="3px solid #00C000";
        document.getElementById(element).style.cursor="default";
        writePass();
    } else {
        no.play();
        var element="lit"+nr;
        document.getElementById(element).style.background="#330000";
        document.getElementById(element).style.color="#C00000";
        document.getElementById(element).style.border="3px solid #C00000";
        document.getElementById(element).style.cursor="default";
        document.getElementById(element).setAttribute("onclick",";");

        ile_skuch++;
        var obraz="images/s"+ile_skuch+".jpg";
        document.getElementById("szubienica").innerHTML="<img src="+obraz+" alt=\"\">";
    }
    if (password==passwordOne) {
        document.getElementById("alfabet").innerHTML='Brawo! to jest poprawne hasło!<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';   
    }
    if (ile_skuch>=9) {
        document.getElementById("alfabet").innerHTML='Niestety przegrałes! Poprawne hasło to <br>'+password+'<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    } 
}

window.onload=start;