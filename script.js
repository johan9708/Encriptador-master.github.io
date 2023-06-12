function encriptar(){
    let mensaje = document.getElementById("texto1").value;
    let resultado = "";

    for(i=0 ;i < mensaje.length; i ++ ){
        if(mensaje[i] == "a")
            resultado += "ai";
            else if(mensaje[i] == "e")
            resultado += "enter";
            else if(mensaje[i] == "i")
            resultado += "imes";
            else if(mensaje[i] == "o")
            resultado += "ober";
            else if(mensaje[i] == "u")
            resultado += "ufat";
            else if(mensaje[i] == " ")
            resultado += " ";
            else{
                resultado += mensaje[i];
            }
        }
        document.getElementById("texto2").innerHTML = resultado;
        //oculto elementos
        document.getElementById("imagen").style.display = 'none';
        document.getElementById("inicial").style.display = 'none';
        //muestro elementos
        document.getElementById("texto2").style.display = 'inherit';
        document.getElementById("copiar").style.display = 'block';
}
// no funciona bien
function desencriptar(){
    var texto = document.getElementById('texto1').value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas -- e else{
    //g es para toda lalinea u oracion
    //m es para qie afecte a multiples lineas o parrafo
    var textoEncriptado = texto.replace(/enter/igm,'e');
    textoEncriptado = textoEncriptado.replace(/imes/igm,'i');
    textoEncriptado = textoEncriptado.replace(/ai/igm,'a');
    textoEncriptado = textoEncriptado.replace(/ober/igm,'o');
    textoEncriptado = textoEncriptado.replace(/ufat/igm,'u');

    document.getElementById("texto2").innerHTML = textoEncriptado;
    //oculto elementos
    document.getElementById("imagen").style.display = 'none';
    document.getElementById("inicial").style.display = 'none';
    //muestro elementos
    document.getElementById("texto2",).style.display = 'block';
    document.getElementById("copiar").style.display = 'block';

}

//Boton de copiar 
function read(){
    let text = document.querySelector('#texto2').value;
    return text
}
async function copiar(){
    let txt = read();
    await navigator.clipboard.writeText(txt);
    alert("Copia Exitosa");
    
}
/*let btn = document.querySelector('#copiar');
btn.addEventListener('click',copy);*/



