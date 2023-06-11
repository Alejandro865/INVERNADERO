var estado ="";
var temperatura= Math.round(Math.random()*(40-15)+parseInt(15));
var humedad=Math.round(Math.random()*(100-10)+parseInt(10));
var pH=Math.round(Math.random()*(14-1)+parseInt(1));

if (14<temperatura<=20){
    t="Temperatura Baja";
}
if (20<temperatura<=35)
{
    t="Temperatura Normal";
}
if (temperatura>35)
{
    t="Temperatura Alta";
}

if (10<humedad<=40){
    h="Humedad Baja";
}
if (40<humedad<=80)
{
    h="Humedad Normal";
}
if (humedad>80)
{
    h="Humedad Alta";
}

if (pH<4.6)
{
    p="pH Acido";
}

if (4.6<pH<=8.2)
{
    p="pH Neutro";
}

if (8.2<pH<=14)
{
    p="pH Alcalino";
}

document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value);
});

document.getElementById('datos').addEventListener("click",()=>{
    leer_datos(temperatura,humedad,pH);
    
});


function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

function leer_datos(temperatura, humedad){
    document.getElementById('temp').value=temperatura;
    document.getElementById('hume').value=humedad;
    document.getElementById('pH').value=pH;
    document.getElementById('texto').value="El invernadero tiene "+" "+t+" "+","+" "+h+" "+"y"+" "+p;
}

