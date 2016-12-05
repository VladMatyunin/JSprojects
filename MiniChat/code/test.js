/**
 * Created by Vlad.M on 05.12.2016.
 */
function test() {
    alert("ssss");
    $.ajax({
        type: "GET",
        url: 'http://localhost:8888/messages/load',
        dataType: 'json',
        success: function(data){
            alert(data);
        }
    });
}
