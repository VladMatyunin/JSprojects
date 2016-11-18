function add() {
	var name = document.getElementById('ac_name').value;
	var surname = document.getElementById('ac_sname').value;
	var phone = document.getElementById('ac_num').value;
	if (name.length>2 && surname.length>2 && phone.length>3) {
		var id = DATA.length;
		var person = {u_id: id, u_name: name, u_sname: surname, u_phone: phone};
		DATA.push(person);
	}
	else alert("fill correctly all fields");
}
function deleteById(id) {
	DATA.splice(id,1);
}
function getAll() {
	for (var i=0; i < DATA.length; i++){
		alert(DATA[i].u_name + DATA[i].u_phone);
	}
}


	function my_f() {
		$("div#all").html(" ");
		for (var i = 0; i < DATA.length; i++){
			$("div#all").append("<br><div class='row' style='border-bottom: groove gainsboro 2px;'><div class='col-lg-3'><img src='img/x.jpg' style='width: 60px;height: 60px;' class='img-circle'></div><div class='col-lg-8'><strong>"+DATA[i].u_name+"  "+ DATA[i].u_sname+"</strong><br><div class='input-group'><span class='input-group-addon btn-success' onclick='alert()'><span class='glyphicon glyphicon-earphone'></span></span>"+
				"<input type='text' class='form-control' style='width: 120px; height: 70%; color: black' placeholder='"+DATA[i].u_phone+"' readonly></div><br></div></div>");
		}

	}

$(document).ready(function () {
	$("button#add").click(function () {
		my_f();
	});
	$("#contacts").click(function () {
		$("#contacts").attr("class","active");
		$("#create").attr("class","");
		$("#form").hide();
		$("#all").show();
		my_f();
	});
	$("#create").click(function () {
		$("#create").attr("class","active");
		$("#contacts").attr("class","");
		$("#form").show();
		$("#all").hide();
	});
});
