//Ispis jahti
var divJahte=document.getElementById("jahte");
var ispisJahte=""

var jahteElementi=["Carver C34", "Monterey 295", "Cranchy E52", "Monterey 378"];
var srcJahte=["images/carverc34.jpg", "images/monterey295.jpg", "images/cranchie52.jpg", "images/monterey378.jpg"];
var altJahte=["Carver C34", "Monterey 295", "Cranchy E52", "Monterey 378"];

var jahteSpec=["Pramačni pomoćni elektromotor „bow thruster“, 7.0KW Kohler generator Diesel- 50Hz, 25.000BTU Klima uređaj, Sistem za izbacivanje otpadnih voda, Tank za otpadne vode, Displej za praćenje nivoa otpadne i tehničke vode, Sistem za spiranje sa svežom vodom, na krmi, Elektronski paket - E127 navigacioni paket opreme na komandnom mostu",
"Želkot bočna linija iznad trupa (drugacija od Arctic Ice), Želkot bočna linija na trupu (drugačija od Arctic Ice), Želkot akcentna linija na trupu (drugačija od Arctic Ice), Sidreno vitlo sa sidrom, kanapom i lancem, Priprema instalacije za sidreno vitlo, Sidro od nerdjajućeg čelika, Reflektor sa daljinskom kontrolom, Rol Bar nadogradnja, električno sklapanje, sa osvetljenjem iznad",
"Rezervoar za otpadne vode, Sidro 35kg Ultramarine nerđajući čelik, Antialgin zaštita - crna boja (korito, propeleri i pogon IPS), dva premaza, Klima uređaj 60.000 BTU sistem hladne vode, sa toplotnom pompom, Bimini Top tenda na komandnom mostu sa nosačima od nerđajućeg čelika i prigušenim osvetljenjem, Bimini Top tenda na pramcu, Krmena \"skiper\" kabina sa tušem - wc - lavabo – dušek, Krmena komplet cirada sa bočnim zastorima i prolazima",
"Sidreno vitlo sa sidrom, kanapom i lancem, Priprema instalacije za sidreno vitlo, Nadogradnja užeta sidra (sve lanac umesto kanapa i lanca), Sidro od nerdjajućeg čelika, Bočna linija iznad trupa u boji (drugacija od Arctic Ice), Bočna linija na trupu u boji (drugacija od Arctic Ice), Želkot akcentna linija, 'Cone'' vodootporni zvučnici za Rol Bar sa 4-kan. poj. (zahteva Rol Bar i Stereo paket)"];

for(let i=0;i<jahteElementi.length;i++){
    ispisJahte+=`<div class="plovilo">
                    <h4 class="align-center">${jahteElementi[i]}</h4>
                    <a href="${srcJahte[i]}" class="group1" title="${jahteElementi[i]}"><img src="${srcJahte[i]}" alt="${altJahte[i]}"/></a>
                    <p>${jahteSpec[i]}</p>
                </div>`
}
divJahte.innerHTML=ispisJahte;

var divGliseri=document.getElementById("gliseri");
var ispisGliseri=""

//Ispis glisera
var gliseriElementi=["Monterey 238 SS", "Tracker V-175", "Sea Ray Slx 400", "Regal LS 4C"];
var srcGliseri=["images/monterey238ss.jpg", "images/tracker.jpg", "images/searay.jpg", "images/regal.jpg"];
var altGliseri=["Monterey 238 SS", "Tracker V-175", "Sea Ray Slx 400", "Regal LS 4C"]

var gliseriSpec=["Krmeni tuš sa vodom pod pritiskom (samo hladna voda), Dno trupa u boji (drugačije od Artic Ice), Želkot akcentna linija na trupu, Super Sport Grafika, Wakeboard Rol Bar beli ili crni (uključuje Wakeboard Bimini), 'Cone'' vodootporni zvučnici za Rol Bar sa 4-kan. poj. (zahteva Rol Bar i Stereo paket), Produžena krmena platforma popločana SeaDek-om (braon ili sivi), Podvodna LED svetla",
"Vinil nadogradnja, Sedište \"Caddy\", VERSATRACK® držač za čaše, VERSATRACK® držač alata, VERSATRACK® prostor za pribor, VERSATRACK® daska za sečenje, VERSATRACK® komplet držača za 4 šipke, VERSATRACK® donji montažni držač",
"Materijal: 0.100 5052 marin aluminijum, NEMA PRIKOLICU, Plovnost čamca prevazilazi najrigoroznije NMMA® standard i zahteve Američke obalske straže, Uške za vezivanje na pramcu i krmi, Bitve 4 komada, Čamac je napravljen ceo od aluminijuma, bez korišćenja drvene konstrukcije, Aluminijumski pod je duple debljine (4,83 mm) za dodatnu krutost i tihu vožnju, Kompletno zavareno V korito sa uglom od 7° za bolju upravljivost i mirnu vožnju",
"Bokovi plovila Sand Stone (bež) boji, Bočna linija na koritu u Black (crna) boji, Dno korita u Sand Stone (bež) boji, Enterijer plovila - Pebble Beach (braon / bež nijanse enterijera), Punjač za akumulatore, Prekidač za dva akumulatora, Tuš na krmi sa vodom pod pritiskom, Prekrivač pramca - Black (crna) boja"];

for(let i=0;i<gliseriElementi.length;i++){
    ispisGliseri+=`<div class="plovilo">
                    <h4 class="align-center">${gliseriElementi[i]}</h4>
                    <a href="${srcGliseri[i]}" class="group2" title="${gliseriElementi[i]}"><img src="${srcGliseri[i]}" alt="${altGliseri[i]}"/></a>
                    <p>${gliseriSpec[i]}</p>
                </div>`
}

divGliseri.innerHTML=ispisGliseri;

//Dodavanje jQuery Plugin-a Colorbox
$(".plovilo .group1").colorbox({rel:'group1',transition:'fade'});
$(".plovilo .group2").colorbox({rel:'group2',transition:'fade'});