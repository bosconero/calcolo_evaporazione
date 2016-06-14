function controllo(){
if(document.getElementById('temperaturaaria').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire la temperatura dell'aria</span>" ;
document.getElementById('temperaturaaria').focus();
} else{
controllo1()}
}
function controllo1(){
if(document.getElementById('temperaturacls').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire la temperatura del calcestruzzo</span>" ;
document.getElementById('temperaturacls').focus();
} else{
controllo2()}
}
function controllo2(){
if(document.getElementById('umidita').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire l'umidit$agrave; relativa</span>" ;
document.getElementById('umidita').focus();
} else{
controllo3()}
}
function controllo3(){
if(document.getElementById('velvento').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire la velocit&agrave; del vento </span>" ;
document.getElementById('velvento').focus();
} else{
controllo4()}
}
function controllo4(){
if(document.getElementById('quantcem').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire il quantitativo di cemento per mc di calcestruzzo</span>" ;
document.getElementById('quantcem').focus();
} else{
controllo5()}
}
function controllo5(){
if(document.getElementById('spesspav').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi lo spessore del pavimento</span>" ;
document.getElementById('spesspav').focus();
} else{
evaporation()}
}

function evaporation(){
document.getElementById('pinserimento').style.display="none";
document.getElementById('risultati').style.display="block";
var tempair=document.getElementById('temperaturaaria').value;
var tempcls=document.getElementById('temperaturacls').value;
var ur=document.getElementById('umidita').value;
var velwind=document.getElementById('velvento').value;
var qcem=document.getElementById('quantcem').value;
var spesscls=document.getElementById('spesspav').value;

ktempcls=(tempcls*1)+18;
fattempcls=Math.pow(ktempcls,2.5);


ktempair=(tempair*1)+18;
fattempair=Math.pow(ktempair,2.5);
rateur=(fattempair*(ur*1))/100;
diffcla=fattempcls-rateur;
kdiffcla=diffcla*5;
velocitaven=velwind*1;
kwind=(velwind*1)+4;
fkwind=Math.pow(10,-6)*kwind;
rateevap=kdiffcla*fkwind;
ratevap=Math.round(rateevap*Math.pow(10,2))/Math.pow(10,2);
if(ratevap < 0.5){
alertfess="<span style='font:normal 14px arial; color:#006600'>Alle attuali condizioni atmosferiche, i litri di acqua evaporata ogni ora al mq saranno pari a <br /></span><span style='display:block;margin:0 auto;font:bold 24px arial;color:#006600;text-align:center;'> "+ratevap+"</span><br /><span style='font:bold 20px arial;color:#006600;text-align:center;'> NON SUSSISTE PERICOLO DI FESSURAZIONE</span>";
}else if(ratevap > 1 ){
alertfess="<span style='font:normal 14px arial; color:#aa2200'>Alle attuali condizioni atmosferiche, i litri di acqua evaporata ogni ora al mq saranno pari a <br /></span><span style='display:block;margin:0 auto;font:bold 24px arial;color:#aa2200;text-align:center;'> "+ratevap+"</span><br /><span style='font:bold 20px arial;color:#aa2200;text-align:center;'> E' CERTA LA POSSIBILITA' DI FESSURAZIONE</span>";
}else{
alertfess="<span style='font:normal 14px arial; color:#222'>Alle attuali condizioni atmosferiche, i litri di acqua evaporata ogni ora al mq saranno pari a <br /></span><span style='display:block;margin:0 auto;font:bold 24px arial;color:#222;text-align:center;'> "+ratevap+"</span><br /><span style='font:bold 20px arial;color:#222;text-align:center;'> E' CERTA LA POSSIBILITA' DI FESSURAZIONE</span>";
}
boxalert.innerHTML=alertfess;

//formula acqua da evaporare
aacqua=0.4*qcem;
bacqua=170-aacqua;
cacqua=(spesscls/100)*bacqua;
acquaevap=cacqua-2;       ;

//calcolo tempo
tempfratt=acquaevap-ratevap;
tempfr=Math.round(tempfratt*Math.pow(10,2))/Math.pow(10,2);
htempfr=Math.floor(tempfr);
ktempfr=tempfr-Math.floor(tempfr);
minktempfr=ktempfr*60;
minuti=Math.floor(minktempfr);
if((minuti-15)<0){
minuti_ante=60+(minuti-15);
}else {minuti_ante=minuti-15}
if((minuti-15)<0){
ore_ante=htempfr-1;
}else{
ore_ante=htempfr;}
if((minuti+15)>60)   {
minuti_post=(minuti+15)-60;
}else{
minuti_post=minuti+15;}
if((minuti+15)>60){
ore_post=htempfr+1;
}else{
ore_post=htempfr;}



tempo.innerHTML="<span style='font:normal 14px arial; color:#333;'>Perche l'acqua evapori tutta bisogna attendere una finestra temporale compresa tra</span> <br/><span style='display:block; margin-left:auto; font:bold 18px arial; color:#aa2222;text-align:center;'>"+ore_ante+" ore  e  "+minuti_ante+" minuti</span><span style='font:normal 14px arial; color:#333;display:block;margin:0 auto; text-align:center;' >e   </span><br /><span style='display:block;margin-left:auto;font:bold 18px arial;color:#aa2222;text-align:center;'>"+ore_post+" ore e "+minuti_post+" minuti </span><span style='font:normal 14px arial; color:#333;text-align:center;'> prima di iniziare la frattazzatura.</span>";



}
function init(){
document.getElementById('intro').style.display="block";
document.getElementById('risultati').style.display="none";
document.getElementById('pinserimento').style.display="none";
}
function fineintro(){
document.getElementById('intro').style.display="none";
document.getElementById('pinserimento').style.display="block";
}
function esci(){
 window.close();
}
function ripeti(){
window.location="index.html";
}
function gocalcolo(){
 window.location = "calcolo_evap.html";

}

