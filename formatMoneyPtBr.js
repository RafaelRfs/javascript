function formatMoney(valorxy){
		var valorxy =  valorxy.val().split(',');
			valorxy = valorxy[0] !== undefined ? valorxy[0]  : 0;
			valorxy = valorxy.replace(/[^\d]+/gi,'') ;
			valorxy = addPoint(valorxy);
			valorxy += ',00';
		return valorxy;
	}

function addPoint(camp) {
    if(!camp)
    	return camp     
    var nvalue = Number(RemovePoint(camp)).toLocaleString('pt-BR');
    return nvalue;
   }

function RemovePoint(camp){	
		campo = camp.split(".").join("");
		return camp;
	}
