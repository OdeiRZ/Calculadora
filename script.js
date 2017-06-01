var acu=0;
var sw=false;
var debug=true;
var operPendiente="";
function mostrar() {
	numero.value=location.search.substring(1);
}
function lupa(pantalla,pagina) {
	var ventana=window.open(pagina,"ventana","width=500,height=200");
	ventana.moveTo((screen.width-500)/2,(screen.height-200)/2);
	ventana.location.href=pagina+"?"+pantalla.value;
	ventana.focus;
}
function meteNum(pantalla,numero) {			
	if(sw) {
		pantalla.value = numero;
		sw = false;
	} else
		if(pantalla.value == "0")
			pantalla.value = numero;
		else
			pantalla.value += numero;
}
function meteOperador(pantalla,operador) {
	if (!sw || operPendiente == "=") {	//cadena = parseFloat(eval(pantalla.value)).toFixed(2);
		sw = true;
		switch(operPendiente) {	
			case '/':	pantalla.value!=0 ? acu/=parseFloat(pantalla.value) : alert("No puedes dividir entre 0");	break;														
			case '*':	acu*=parseFloat(pantalla.value);	break;
			case '-':	acu-=parseFloat(pantalla.value);	break;
			case '+':	acu+=parseFloat(pantalla.value);	break;
			default :	acu =parseFloat(pantalla.value);
		}	//redondear si se divide
		pantalla.value = acu;
		operPendiente = operador;
	}
}