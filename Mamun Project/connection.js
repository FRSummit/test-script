//var script_url = "https://script.google.com/a/cusur.udg.mx/macros/s/AKfycbykw-BsESL_zxpw-vpM7CcANgIe9zko975kE_sQCY-QLzCty4E/exec";
var script_url = "https://script.google.com/macros/s/AKfycbwXUkC81ZrRntVkP_6TTIDCwbacFw4AzSswKG0Y819TPRD0XEk/exec";




// Make an AJAX call to Google Script
function insert_value() {

  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  $('#mySpinner').addClass('spinner');
  //creamos variables con los valores que el usuario ingresa en el formulario
  //Se corresponden con los id de los input
  var row1 = $("#vehicleNo").val();
  var row2 = $("#income").val();
  var row3 = $("#remark").val();
  var row4 = $("#expendature").val();
  var row5 = $("#e3").val();
  var row6 = $("#e4").val();
  var row7 = $("#aula").val();

  var row8 = $("#income").val();

  var url = script_url + "?callback=ctrlq&code=" + row1 + "&carrera=" + row2 + "&e1="+ row3 + "&e2=" + row4 +"&e3=" + row5 + "&e4="+ row6 + "&aula="+ row7 +"&aula2="+ row8 +"&action=insert";
   //"&aula2="+ row8 +
  console.log("here 1 : " + script_url);
  console.log("here 2 : " + url);


  var request = jQuery.ajax({

    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
  console.log("req " + request);
}







function update_value() {
  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";

  var id1 = $("#id").val();
  var name = $("#name").val();
  var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&action=update";


  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });


}

function delete_value() {
  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  $('#mySpinner').addClass('spinner');
  var id1 = $("#id").val();
  var name = $("#name").val();
  var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&action=delete";


  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });

}




// print the returned data
function ctrlq(e){
  console.log(e);
  $("#re").html(e.result);
  $("#re").css("visibility", "visible");
  read_value();
}




function read_value() {

  $("#re").css("visibility", "hidden");

  document.getElementById("loader").style.visibility = "visible";
  var url = script_url + "?action=read";

  $.getJSON(url, function(json) {

    // Set the variables from the results array

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
	
    var header = table.createTHead();
    //Es el correspondiente a una columna en la tabla
    var row = header.insertRow(0);
	
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    //var cell9 = row.insertCell(8);
    // Es el Titulo de cada columna
    cell1.innerHTML = "<b>Date</b>";
    cell2.innerHTML = "<b>Vehicle No</b>";
    cell3.innerHTML = "<b>Income</b>";
    cell4.innerHTML = "<b>Remark</b>";
    cell5.innerHTML = "<b>Expendature</b>";
    cell6.innerHTML = "<b>Total Income</b>";
    cell7.innerHTML = "<b>Total Cost</b>";
    cell8.innerHTML = "<b>Net Income</b>";
    //cell9.innerHTML = "<b>Hora Fin</b>";

    // ADD JSON DATA TO THE TABLE AS ROWS
    //LOS NOMBRES DEBEN CORRESPONDER AL NOMBRE DE LAS COLUMNAS
    //DEL SHEET
  for (var i = 0; i < json.records.length-1; i++)
    {
      tr = table.insertRow(-1);

      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].Date;

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].Vehicle_No;

      tabCell = tr.insertCell(-1);
      console.log(json);
      tabCell.innerHTML = json.records[i].Income;

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].Remark;

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].Expendature;

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].Total_Income;

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].Total_Cost;

      tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json.records[i].Net_Income;
    }


    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    document.getElementById("loader").style.visibility = "hidden";
    $("#re").css("visibility", "visible");
  });
}