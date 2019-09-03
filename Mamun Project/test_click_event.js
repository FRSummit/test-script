$(document).ready(function(){
	var vehicleNo = $('#vehicleNo').val();
	var income = $('#income').val();
	var remark = $('#remark').val();
	var expendature = $('#expendature').val();
	$(".submit-data").click(function(){
		//Select the car number and get/set the value
		if($('#vehicleNo').val() == 'Select one') {
			$('.alert-msg').css('display', 'block');
		} else if (($('#vehicleNo').val() == '1506') 
			&& ($('#income').val() != '') 
			&& ($('#remark').val() != '') 
			&& ($('#expendature').val() != '')){
			
			$('.alert-msg').css('display', 'none');
			$('#vehicleNo1, #income1, #remark1, #expendature1').css('display', 'block');
						
			$('#vehicleNo1').val($('#vehicleNo').val());
			$('#income1').val($('#income').val());
			$('#remark1').val($('#remark').val());
			$('#expendature1').val($('#expendature').val());
			$('#vehicleNo').val('');
			$('#income').val('');
			$('#remark').val('');
			$('#expendature').val('');
		} else if (($('#vehicleNo').val() == '8489') 
			&& ($('#income').val() != '') 
			&& ($('#remark').val() != '') 
			&& ($('#expendature').val() != '')){
					
			$('.alert-msg').css('display', 'none');
			$('#vehicleNo2, #income2, #remark2, #expendature2').css('display', 'block');
						
			$('#vehicleNo2').val($('#vehicleNo').val());
			$('#income2').val($('#income').val());
			$('#remark2').val($('#remark').val());
			$('#expendature2').val($('#expendature').val());
			$('#vehicleNo').val('');
			$('#income').val('');
			$('#remark').val('');
			$('#expendature').val('');
		} else if (($('#vehicleNo').val() == '3043') 
			&& ($('#income').val() != '') 
			&& ($('#remark').val() != '') 
			&& ($('#expendature').val() != '')){
						
			$('.alert-msg').css('display', 'none');
			$('#vehicleNo3, #income3, #remark3, #expendature3').css('display', 'block');
						
			$('#vehicleNo3').val($('#vehicleNo').val());
			$('#income3').val($('#income').val());
			$('#remark3').val($('#remark').val());
			$('#expendature3').val($('#expendature').val());
			$('#vehicleNo').val('');
			$('#income').val('');
			$('#remark').val('');
			$('#expendature').val('');
		} else if (($('#vehicleNo').val() == '3044') 
			&& ($('#income').val() != '') 
			&& ($('#remark').val() != '') 
			&& ($('#expendature').val() != '')){
			
			$('.alert-msg').css('display', 'none');
			$('#vehicleNo4, #income4, #remark4, #expendature4').css('display', 'block');
						
			$('#vehicleNo4').val($('#vehicleNo').val());
			$('#income4').val($('#income').val());
			$('#remark4').val($('#remark').val());
			$('#expendature4').val($('#expendature').val());
			$('#vehicleNo').val('');
			$('#income').val('');
			$('#remark').val('');
			$('#expendature').val('');
		} else if (($('#vehicleNo').val() == '3173') 
			&& ($('#income').val() != '') 
			&& ($('#remark').val() != '') 
			&& ($('#expendature').val() != '')){
						
			$('.alert-msg').css('display', 'none');
			$('#vehicleNo5, #income5, #remark5, #expendature5').css('display', 'block');
						
			$('#vehicleNo5').val($('#vehicleNo').val());
			$('#income5').val($('#income').val());
			$('#remark5').val($('#remark').val());
			$('#expendature5').val($('#expendature').val());
			$('#vehicleNo').val('');
			$('#income').val('');
			$('#remark').val('');
			$('#expendature').val('');
		} else if (($('#vehicleNo').val() == '9022') 
			&& ($('#income').val() != '') 
			&& ($('#remark').val() != '') 
			&& ($('#expendature').val() != '')){
						
			$('.alert-msg').css('display', 'none');
			$('#vehicleNo6, #income6, #remark6, #expendature6').css('display', 'block');
						
			$('#vehicleNo6').val($('#vehicleNo').val());
			$('#income6').val($('#income').val());
			$('#remark6').val($('#remark').val());
			$('#expendature6').val($('#expendature').val());
			$('#vehicleNo').val('');
			$('#income').val('');
			$('#remark').val('');
			$('#expendature').val('');
		}
		
		//The calculation
		if($('#vehicleNo1').val() 
			|| $('#vehicleNo2').val() 
			|| $('#vehicleNo3').val() 
			|| $('#vehicleNo4').val() 
			|| $('#vehicleNo5').val() 
			|| $('#vehicleNo6').val()){
			
			var income1 = $('#income1').val();
			var income2 = $('#income2').val();
			var income3 = $('#income3').val();
			var income4 = $('#income4').val();
			var income5 = $('#income5').val();
			var income6 = $('#income6').val();
			var totalIncome = parseInt(income1) + parseInt(income2) + parseInt(income3) 
							+ parseInt(income4) + parseInt(income5) + parseInt(income6);
			$('#totalIncome').val(totalIncome);
			
			var expendature1 = $('#expendature1').val();
			var expendature2 = $('#expendature2').val();
			var expendature3 = $('#expendature3').val();
			var expendature4 = $('#expendature4').val();
			var expendature5 = $('#expendature5').val();
			var expendature6 = $('#expendature6').val();
			var totalExpendature = parseInt(expendature1) + parseInt(expendature2) + parseInt(expendature3) 
							+ parseInt(expendature4) + parseInt(expendature5) + parseInt(expendature6);
			$('#totalCost').val(totalExpendature);
			
			$('#netIncome').val(totalIncome - totalExpendature);
			
		} else {
			console.log('no calculation');
		}
		//make button enable
		if(isNaN(parseInt($('#vehicleNo1').val())) 
			|| isNaN(parseInt($('#vehicleNo2').val())) 
			|| isNaN(parseInt($('#vehicleNo3').val())) 
			|| isNaN(parseInt($('#vehicleNo4').val())) 
			|| isNaN(parseInt($('#vehicleNo5').val())) 
			|| isNaN(parseInt($('#vehicleNo6').val()))){
			console.log('NaN');
		} else {
			console.log('Digit');
			$('.submit-all-data').removeAttr('disabled');
		}
		var date = new Date();
		var dayParts = date.toString().split(" ");
	});
});
			
function insert_all_value() {
	
	//Get date
	var date = new Date();
	var todate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
	//var todate = "31/8/2019";
	var today = date.toString().split(" ");
	today = today[0];
	console.log(todate);
	
	//Get all vehicles
	var vehicleNo1 = parseInt($('#vehicleNo1').val());
	var vehicleNo2 = parseInt($('#vehicleNo2').val());
	var vehicleNo3 = parseInt($('#vehicleNo3').val());
	var vehicleNo4 = parseInt($('#vehicleNo4').val());
	var vehicleNo5 = parseInt($('#vehicleNo5').val());
	var vehicleNo6 = parseInt($('#vehicleNo6').val());
	
	var vehicleNoString = vehicleNo1 + "-split-" + vehicleNo2 + "-split-" + vehicleNo3 + "-split-" 
												+ vehicleNo4 + "-split-" + vehicleNo5 + "-split-" + vehicleNo6;
	console.log(vehicleNoString);
	
	//Get all incomes
	var income1 = parseInt($('#income1').val());
	var income2 = parseInt($('#income2').val());
	var income3 = parseInt($('#income3').val());
	var income4 = parseInt($('#income4').val());
	var income5 = parseInt($('#income5').val());
	var income6 = parseInt($('#income6').val());
	
	var incomeString = income1 + "-split-" + income2 + "-split-" + income3 + "-split-" + income4 + "-split-" + income5 + "-split-" + income6;
	console.log(incomeString);
	
	//Get all remarks
	var remark1 = parseInt($('#remark1').val());
	var remark2 = parseInt($('#remark2').val());
	var remark3 = parseInt($('#remark3').val());
	var remark4 = parseInt($('#remark4').val());
	var remark5 = parseInt($('#remark5').val());
	var remark6 = parseInt($('#remark6').val());
	
	var remarkString = remark1 + "-split-" + remark2 + "-split-" + remark3 + "-split-" + remark4 + "-split-" + remark5 + "-split-" + remark6;
	console.log(remarkString);
	
	//Get all expendatures
	var expendature1 = parseInt($('#expendature1').val());
	var expendature2 = parseInt($('#expendature2').val());
	var expendature3 = parseInt($('#expendature3').val());
	var expendature4 = parseInt($('#expendature4').val());
	var expendature5 = parseInt($('#expendature5').val());
	var expendature6 = parseInt($('#expendature6').val());
	
	var expendatureString = expendature1 + "-split-" + expendature2 + "-split-" + expendature3 + "-split-" 
													+ expendature4 + "-split-" + expendature5 + "-split-" + expendature6;
	console.log(expendatureString);
	
	//Get total income, total cost and net income
	var totalIncome = parseInt($('#totalIncome').val());
	var totalCost = parseInt($('#totalCost').val());
	var netIncome = parseInt($('#netIncome').val());
	
	var script_url = "https://script.google.com/macros/s/AKfycbwXUkC81ZrRntVkP_6TTIDCwbacFw4AzSswKG0Y819TPRD0XEk/exec";
	var url = script_url + "?callback=ctrlq&myDate=" + todate + 
											"&day=" + today + 
											
											"&vehicleNo1=" + vehicleNo1 + 
											"&vehicleNo2=" + vehicleNo2 + 
											"&vehicleNo3=" + vehicleNo3 + 
											"&vehicleNo4=" + vehicleNo4 + 
											"&vehicleNo5=" + vehicleNo5 + 
											"&vehicleNo6=" + vehicleNo6 + 
											
											"&income1=" + income1 + 
											"&income2=" + income2 + 
											"&income3=" + income3 + 
											"&income4=" + income4 + 
											"&income5=" + income5 + 
											"&income6=" + income6 + 
											
											"&remark1="+ remark1 + 
											"&remark2="+ remark2 + 
											"&remark3="+ remark3 + 
											"&remark4="+ remark4 + 
											"&remark5="+ remark5 + 
											"&remark6="+ remark6 + 
											
											"&expendature1=" + expendature1 +
											"&expendature2=" + expendature2 +
											"&expendature3=" + expendature3 +
											"&expendature4=" + expendature4 +
											"&expendature5=" + expendature5 +
											"&expendature6=" + expendature6 +
											
											"&totalIncome="+ totalIncome + 
											"&totalCost="+ totalCost +
											"&netIncome="+ netIncome +
											
											"&action=insert";
	
	var request = jQuery.ajax({
		crossDomain: true,
		url: url,
		method: "GET",
		dataType: "jsonp"
	});
	console.log(url);
}

// print the returned data
function ctrlq(e){
  console.log("THis is parameter e : " + e);
  $("#re").html(e.result);
  $("#re").css("visibility", "visible");
  //read_value();
}

function getDayName(dayName) {
	switch(dayName) {
		case 0:
			dayName = "Sun";
			break;
		case 1:
			dayName = "Mon";
			break;
		case 2:
			dayName = "Tue";
			break;
		case 3:
			dayName = "Wed";
			break;
		case 4:
			dayName = "Thu";
			break;
		case 5:
			dayName = "Fri";
			break;
		case 6:
			dayName = "Sat";
			break;
		default:
			break;
	}
}