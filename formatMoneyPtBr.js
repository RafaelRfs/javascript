function formataDinheiro(valorxy){
		var valorxy =  valorxy.val().split(',');
			valorxy = valorxy[0] !== undefined ? valorxy[0]  : 0;
			valorxy = valorxy.replace(/[^\d]+/gi,'') ;
			valorxy = adicionarPonto(valorxy);
			valorxy += ',00';
		return valorxy;
	}

function adicionarPonto(campo) {
    if(!campo)
    	return campo      
    var nvalue = Number(RemoverPonto(campo)).toLocaleString('pt-BR')
    return nvalue;
   }
	
	
	function RemoverPonto(campo)
	{	
		campo = campo.split(".").join("");
		return campo;
	}
