var script_url = "https://script.google.com/macros/s/AKfycbwXUkC81ZrRntVkP_6TTIDCwbacFw4AzSswKG0Y819TPRD0XEk/exec";

function read_value() {
	console.log('working');
	var carCode = $('#vehicleNo').val();
	if(carCode != "Select one"){
		var url = script_url + "?action=" + carCode;
	
		console.log('This is car code : ' + url);

		$.getJSON(url, function(json) {
			// Set the variables from the results array
			// CREATE DYNAMIC TABLE.
			var table1 = document.createElement("table");
			var header = table1.createTHead();
			var row = header.insertRow(0);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			var cell6 = row.insertCell(5);
			var cell7 = row.insertCell(6);
			
			cell1.innerHTML = "<b>Id</b>";
			cell2.innerHTML = "<b>Date</b>";
			cell3.innerHTML = "<b>Day</b>";
			cell4.innerHTML = "<b>Income</b>";
			cell5.innerHTML = "<b>Expendature</b>";
			cell6.innerHTML = "<b>Net Income</b>";
			cell7.innerHTML = "<b>Remarks</b>";

			// ADD JSON DATA TO THE TABLE AS ROWS
			for (var i = 0; i < json.records.length; i++) {
				console.log(json);
				tr = table1.insertRow(-1);
				var tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].ID;
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].Date;
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].Day;
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].Income;
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].Expendature;
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].Net_Income;
				tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json.records[i].Remarks;
			}
			
			// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
			var divContainer1 = document.getElementById("show-data");
			divContainer1.innerHTML = "";
			divContainer1.appendChild(table1);
			$('.text-sec').css("display", "none");
		});
		console.log('Done');
	}
	else {
		$('.text-sec').text("Select one car");
	}
}