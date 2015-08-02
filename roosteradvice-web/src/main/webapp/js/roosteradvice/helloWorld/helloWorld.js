helloWorld = function(){
    $.get("helloworld/"+1, function(data){
		$('#hello-world-label').text(data);
    });
};