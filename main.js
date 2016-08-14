jQuery(document).ready(function($) {

	var volvoCarsObj = [{
		priceS40: '15000',
		priceS60: '20000',
		priceS80: '25000',
		priceXc60: '25000',
		priceXc70: '3000',
		priceXc90: '50000'
	}];

	var saabCarsObj = [{
		saab93: '15000',
		saab95: '20000'
	}];

	var mercedesCarsObj = [{
		aClass: '20000',
		eClass: '30000',
		dClass: '40000',
		cClass: '50000'
	}];
	
	var volvoBtn = $('#volvoBtn');
	var rowVolvo = $('#rowVolvo');

	var sabbBtn = $('#sabbBtn');
	var rowSaab = $('#rowSaab');

	var rowMercedes = $('#rowMercedes');
	var mercedesBtn = $('#mercedesBtn');

	
	var volvoTbody = $('#volvoTbody');
	var saabTbody = $('#saabTbody');
	var mercedesTbody = $('#mercedesTbody');

	var showCarsBtn = $('#showCarsBtn');

	$(showCarsBtn).on('click',function(){
		var result1 = $('input[id="volvoBtn"]:checked');
		var result2 = $('input[id="sabbBtn"]:checked');
		var result3 = $('input[id="mercedesBtn"]:checked');
		if( result1.length>0 ){
			rowVolvo.show();
			rowSaab.hide();
			rowMercedes.hide();
		}else if( result2.length>0 ){
			rowVolvo.hide();
			rowMercedes.hide();
			rowSaab.show();
		}else if( result3.length>0 ){
			rowVolvo.hide();
			rowSaab.hide();
			rowMercedes.show();
		}
	})


	
	volvoTbodyFunc();
	saabTbodyFunc();
	mercedesTbodyFunc();


	function volvoTbodyFunc(){
		$.each(volvoCarsObj,function(i,obj){
		volvoTbody.append('<tr><td>'+obj.priceS40+'</td><td>'+obj.priceS60+'</td><td>'+obj.priceS80+'</td><td>'+obj.priceXc60+'</td><td>'+obj.priceXc70+'</td><td>'+obj.priceXc90+'</td></tr>')
			
		})
	}

	function saabTbodyFunc(){
		$.each(saabCarsObj,function(i,obj){
		saabTbody.append('<tr><td>'+obj.saab93+'</td><td>'+obj.saab95+'</td></tr>')
			
		})
	}

	function mercedesTbodyFunc(){
		$.each(mercedesCarsObj,function(i,obj){
		mercedesTbody.append('<tr><td>'+obj.aClass+'</td><td>'+obj.eClass+'</td><td>'+obj.dClass+'</td><td>'+obj.cClass+'</td></tr>')
			
		})
	}








































});