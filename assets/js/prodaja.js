//Ispis tabele
var tabela=document.getElementById("tabela");

var ispisTabela="<thead><tr>";

var thElementi=["Ime", "Tip", "Cena"];

for(let i=0;i<thElementi.length;i++){
    ispisTabela+=`<th>${thElementi[i]}</th>`;
}

ispisTabela+="</tr></thead><tbody><tr>";

var imeElementi=["Carver C34", "Monterey 295", "Monterey 378", "Cranchy E52", "Monterey 238", "Tracker V-175", "Sea Ray SLX 400", "Regal LS 4C"];
var tipElementi=["Jahta", "Jahta", "Jahta", "Jahta", "Gliser", "Gliser", "Gliser", "Gliser"];
var cenaElementi=["199.000", "138.970", "337.446", "904.000", "60.605", "15.555", "18.900", "83.900"];

for(let i=0;i<imeElementi.length;i++){
    cenaElementi[i]+="€";
    ispisTabela+=`<td>${imeElementi[i]}</td><td>${tipElementi[i]}</td><td>${cenaElementi[i]}</td></tr></tbody>`;
}

tabela.innerHTML=ispisTabela;

//Efekat zebre na tabeli
$(document).ready(function(){
    $('#tabela tbody tr:even').css('background-color','#dddddd');
});

$(document).ready(function(){
    $('#tabela tbody tr:odd').hover(function(){
        $(this).css('background-color','#f0f0f0');},
        function(){
        $(this).css('background-color','#fff');})
});

//Ispis slika
var divImage=document.getElementById("divImage");

var srcImage=["images/carverc34.jpg", "images/monterey295.jpg", "images/cranchie52.jpg", "images/monterey378.jpg"];
var srcImageInterior=["images/carverc34interior.jpg", "images/monterey295interior.jpg", "images/cranchie52interior.jpg", "images/monterey378interior.jpg"];

var ispisImage=""

for(let i=0;i<srcImage.length;i++){
    ispisImage+=`<span class="fader">
                    <img src="${srcImage[i]}" alt=""/>
                    <img class="to" src="${srcImageInterior[i]}"/>
                </span>`
}

divImage.innerHTML=ispisImage;


$(document).ready(function(){

    $('.fader').hover(function() {
      $(this).find('img:eq(1)').stop(true,true).fadeIn();
    }, function() {
      $(this).find('img:eq(1)').fadeOut();
    })
});    
        
//Ispis dropdown liste tip
var divSelectTip=document.getElementById("divSelectTip");

var ispisSelectTip=`<select name="selectTip" id="selectTip">`;
var optionsElementiTip=["- Izaberite tip -", "Jahta", "Gliser"];

for(let i=0;i<optionsElementiTip.length;i++){
    ispisSelectTip+=`<option value="${i}">${optionsElementiTip[i]}</option>`;
}

ispisSelectTip+="</select>";

divSelectTip.innerHTML=ispisSelectTip;

//Ispis dropdown liste plovilo
var ddlTip=document.getElementById("selectTip");
var divSelectPlovilo=document.getElementById("divSelectPlovilo");
divSelectPlovilo.innerHTML=`<select name="selectPlovilo" id="selectPlovilo"></select>`;
divSelectPlovilo.style.display="none";

ddlTip.addEventListener("change", proveraTipa);

function proveraTipa(){
    var vrednost=ddlTip.options[ddlTip.selectedIndex].value;
    if(vrednost==1){
        var ispisSelectPlovilo=`<select name="selectPlovilo" id="selectPlovilo">`;

        var optionsElementiPlovilo=["- Izaberite jahtu -", "Carver C34", "Monterey 295", "Monterey 378", "Cranchy E52"];
        for(let i=0;i<optionsElementiPlovilo.length;i++){
            ispisSelectPlovilo+=`<option value="${i}">${optionsElementiPlovilo[i]}</option>`;
        }
        ispisSelectPlovilo+="</select>";
        divSelectPlovilo.innerHTML=ispisSelectPlovilo;
        divSelectPlovilo.style.display="block";
    }
    else if(vrednost==2){
        var ispisSelectPlovilo=`<select name="selectPlovilo" id="selectPlovilo">`;

        var optionsElementiPlovilo=["- Izaberite gliser -", "Monterey 238", "Tracker V-175", "Sea Ray SLX 400", "Regal LS 4C"];
        for(let i=0;i<optionsElementiPlovilo.length;i++){
            ispisSelectPlovilo+=`<option value="${i}">${optionsElementiPlovilo[i]}</option>`;
        }
        ispisSelectPlovilo+="</select>";
        divSelectPlovilo.innerHTML=ispisSelectPlovilo;
        divSelectPlovilo.style.display="block";
    }
    else{
        divSelectPlovilo.innerHTML=`<select name="selectPlovilo" id="selectPlovilo"></select>`;
        divSelectPlovilo.style.display="none";
    }
}

//Ispis radio button novosti
var divNovosti=document.getElementById("divNovosti");

var ispisNovosti="";

var novostiElementi=["Da", "Ne"];

for(let i=0;i<novostiElementi.length;i++){
    ispisNovosti+=`<span>
                    <input type="radio" id="rbNovosti${novostiElementi[i]}" name="rbNovosti"/>
                    <label for="rbNovosti${novostiElementi[i]}">${novostiElementi[i]}</label>
                </span>`;
}

ispisNovosti+=`<p class="greska" id="novostiGreska"></p>`;

divNovosti.innerHTML=ispisNovosti;

//Provera forme
document.getElementById("btnPosalji").addEventListener("click", provera);

function provera(){
    let validno=true;
    
    let ime, prezime, brojTelefona, email, datum, tipPlovila, plovilo, novosti, dodatniZahtevi, uslovi;
    ime=document.getElementById("tbIme").value.trim();
    prezime=document.getElementById("tbPrezime").value.trim();
    brojTelefona=document.getElementById("tbBroj").value.trim();
    email=document.getElementById("tbEmail").value.trim();
    datum=document.getElementById("tbDatum").value.trim();
    tipPlovila=document.getElementById("selectTip").value;
    plovilo=document.getElementById("selectPlovilo").value;
    novosti=document.getElementsByName("rbNovosti");
    dodatniZahtevi=document.getElementById("tbDodatni").value.trim();
    uslovi=document.getElementById("cbUslovi");

    let reImePrezime, reBroj, reEmail, reDatum;
    reImePrezime=/^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})*$/;
    reBroj=/^06[01234569]\/[\d]{3}\-[\d]{3,4}$/;
    reEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    reDatum=/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;

    let imeGreska, prezimeGreska, brojGreska, emailGreska, datumGreska, tipPlovilaGreska, ploviloGreska, novostiGreska, dodatniZahteviGreska, usloviGreska, uspesnoP;
    imeGreska=document.getElementById("imeGreska");
    prezimeGreska=document.getElementById("prezimeGreska");
    brojGreska=document.getElementById("brojGreska");
    emailGreska=document.getElementById("emailGreska");
    datumGreska=document.getElementById("datumGreska");
    tipPlovilaGreska=document.getElementById("tipGreska");
    ploviloGreska=document.getElementById("ploviloGreska");
    novostiGreska=document.getElementById("novostiGreska");
    dodatniZahteviGreska=document.getElementById("dodatniGreska");
    usloviGreska=document.getElementById("usloviGreska");
    uspesnoP=document.getElementById("uspesno");

    if (ime == ""){
        validno = false;
        imeGreska.innerHTML = "Molimo unesite ime";
    }
    else if (!reImePrezime.test(ime)){
            validno = false;
            imeGreska.innerHTML = "Ime nije u ispravnom formatu";
    }
    else{
            imeGreska.innerHTML = "";
    }

    if (prezime == ""){
        validno = false;
        prezimeGreska.innerHTML = "Molimo unesite prezime";
    }
    else if (!reImePrezime.test(prezime)){
            validno = false;
            prezimeGreska.innerHTML = "Prezime nije u ispravnom formatu";
    }
    else{
        prezimeGreska.innerHTML = "";
    }

    if (brojTelefona == ""){
        validno = false;
        brojGreska.innerHTML = "Molimo unesite broj telefona";
    }
    else if (!reBroj.test(brojTelefona)){
            validno = false;
            brojGreska.innerHTML = "Broj telefona nije u ispravnom formatu";
    }
    else{
        brojGreska.innerHTML = "";
    }

    if (email == ""){
        validno = false;
        emailGreska.innerHTML = "Molimo unesite email";
    }
    else if (!reEmail.test(email)){
            validno = false;
            emailGreska.innerHTML = "Email nije u ispravnom formatu";
    }
    else{
        emailGreska.innerHTML = "";
    }

    if (datum == ""){
        validno = false;
        datumGreska.innerHTML = "Molimo unesite datum posete";
    }
    else if (!reDatum.test(datum)){
            validno = false;
            datumGreska.innerHTML = "Datum posete nije u ispravnom formatu";
    }
    else{
        datumGreska.innerHTML = "";
    }

    if(tipPlovila == "0"){
        validno = false;
        tipPlovilaGreska.innerHTML = "Niste izabrali tip plovila";
    }
    else{
        tipPlovilaGreska.innerHTML = "";
    }

    if(plovilo == "0"){
        validno = false;
        ploviloGreska.innerHTML = "Niste izabrali model plovila";
    }
    else{
        ploviloGreska.innerHTML = "";
    }

    let novostiIzbor = "";
    for(let i=0;i<novosti.length;i++){
        if(novosti[i].checked){
            novostiIzbor = novosti[i].value;
            break;
        }
    }

    if(novostiIzbor == ""){
        validno = false;
        novostiGreska.innerHTML = "Niste izabrali pol";
    }
    else{
        novostiGreska.innerHTML = "";
    }

    if (dodatniZahtevi.length>1000){
        validno = false;
        dodatniZahteviGreska.innerHTML = "Maksimalan broj karaktera je 1000";
    }
    else{
        dodatniZahteviGreska.innerHTML = "";
    }

    if(!uslovi.checked){
        validno = false;
        usloviGreska.innerHTML = "Morate čekirati uslove korišćenja";
    }
    else{
        usloviGreska.innerHTML = "";
    }
    if(validno){
        uspesnoP.innerHTML="Uspesno ste poslali zahtev";
    }
    else{
        uspesnoP.innerHTML="";
    }
}