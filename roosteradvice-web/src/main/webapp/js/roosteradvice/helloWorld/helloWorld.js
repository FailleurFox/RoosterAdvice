/**
 * Displays "Hello World !"
 */
helloWorld = function(){
    $.get("rest/helloworld/"+1, function(data){
		$('#hello-world-label').text(data);
    });
};