//Uređivanje bannera
$(document).ready(function(){
    $('#slikaBanner').css({'borderRadius':'100%', 'display':'none'});
    $('#slikaBanner').slideDown(1000);

    $('#bannerPocetna p').css({'display':'none'}).delay(1000).slideDown(2000);
});

//Pokretanje slajdera
$(document).ready(function(){
    slideShow();
});
  
  function slideShow() {
    var current = $('#slide .show');
    var next = current.next().length ? current.next() : current.parent().children(':first');
    
    current.hide().removeClass('show');
    next.fadeIn().addClass('show');
    
    setTimeout(slideShow, 3000);
}

//Ispis slajdera
var divSlide=document.getElementById("slide");

var slideSrcElementi=["images/monterey238.jpg", "images/carverc34.jpg", "images/monterey295.jpg", "images/cranchie52.jpg", "images/monterey238ss.jpg", "images/tracker.jpg", "images/searay.jpg", "images/regal.jpg"];
var slideAltElementi=["Monterey 238", "Carver C34", "Monterey 295", "Cranchi E52", "Monterey 238 SS", "Tracker V-175", "Sea Ray SLX 400", "Regal LS 4C"];

var ispisSlide="";

for(let i=0;i<slideSrcElementi.length;i++){
    ispisSlide+=`<img src="${slideSrcElementi[i]}" alt="${slideAltElementi[i]}"/>`
}

divSlide.innerHTML=ispisSlide;

$(document).ready(function(){
    $("#slide img:first").addClass("show");
});

//Ispis div-a features
var divFeatures=document.getElementById("features");

var featuresSrcElementi=["images/iznajmljivanje.jpg", "images/marina.jpg", "images/servis.jpg", "images/zimovnik.jpg"];
var featuresAltElementi=["Iznajmljivanje", "Marina", "Servis", "Zimovnik"];
var featuresH4Elementi=["Iznajmljivanje plovila", "Marina", "Servis plovila", "Zimovnik"];
var featuresHeaderPElementi=["Iznajmite plovilo po povoljnim cenama", "Raskomotite se", "Servisirajte Vaše plovilo povoljno", "Neka Vaše plovilo prezimi kod nas"];
var featuresPElementi=["Kompanija Barmen Yachting nudi svim potencijalnim klijentima mogućnost iznajmljivanja plovila po čarter principu.", "Ekskluzivni brod-marina na dva nivoa smešten je na jednom od najlepših delova Zemunskog keja, sa pogledom na Veliko ratno ostrvo.", "Kompanija Barmen Yachting poseduje savremeni servisni prostor koji zadovoljava sve standarde plovila različitih dimenzija i brendova.", "Kapacitet dva zatvorena zimovnika, koja se nalaze u sklopu kompanije Barmen Yachting, obuhvata 1260 m² moderno i funkcionalno uređenog enterijera."];

var ispisFeatures="";


for(let i=0;i<featuresSrcElementi.length;i++){
    ispisFeatures+=`<div class="feature">
                        <div class="image rounded"><img src="${featuresSrcElementi[i]}" alt="${featuresAltElementi[i]}" /></div>
                        <div class="content">
                            <header>
                                <h4>${featuresH4Elementi[i]}</h4>
                                <p>${featuresHeaderPElementi[i]}</p>
                            </header>
                            <p>${featuresPElementi[i]}</p>
                        </div>
                    </div>`
}

divFeatures.innerHTML=ispisFeatures;