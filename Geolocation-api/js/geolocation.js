(function(){
	var divMapa=document.getElementById('divMapa');
	var divCoordenadas=document.getElementById('divCoordenadas');
		if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(objPosicion){
			var iLongitude=objPosicion.coords.longitude, iLatitude=objPosicion.coords.latitude;
			divCoordenadas.innerHTML='Latitude: '+iLatitude+' - Longitude: '+iLongitude;
			var objCoordenadas=new google.maps.LatLng(iLatitude,iLongitude);
			var objOpciones={
				mapTypeId:		google.maps.MapTypeId.ROADMAP,	
				zoom: 			14,								
				mapTypeControl:	true,							
				center: 		objCoordenadas					
			};
			var objMapa=new google.maps.Map(divMapa,objOpciones);
			var objPunto=new google.maps.Marker({
				title:		'I\'m right here',	
				position:	objCoordenadas,						
				map:		objMapa								
			});
		},function(objError){
			switch(objError.code){
				case objError.POSITION_UNAVAILABLE:
					divMapa.innerHTML='Your position is unavaible';
				break;
				case objError.TIMEOUT:
					divMapa.innerHTML='Timeout expired';
				break;
				case objError.PERMISSION_DENIED:
					divMapa.innerHTML='Access denied.';
				break;
				case objError.UNKNOWN_ERROR:
					divMapa.innerHTML='Unknown Error';
				break;
			}
		});
	}else{
		divCoordenadas.innerHTML='Your internet browser does not support HTML5 Geolocation API';
	}
})();