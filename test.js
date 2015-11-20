var people = [
	"antoinette",
	"ben",
	"ashley",
	"chris",
	"clayton",
	"connor",
	"kyra",
	"sam",
	"adia",
	"brandi",
	"keisha"];

$(document).ready(function() {

	var datalistTemplate = Handlebars.compile($('#list').html());
	renderDataList(people);
  
  	var personTemplate = Handlebars.compile($('#person').html());

  	$('main').on('click', '.dropdown', function(e) {
  		e.preventDefault();
  		getPerson($(this).parents('form').find('select').val());
  	});


  	/** AJAX FUNCTIONS **/
  	function getPerson(name) {
  		$.ajax({
    		url: '/data/'+ name + '.json'
  		})
  		.done(function(json) {
    		renderPerson(json);
  		});
  	}
  	//** RENDER FUNCTIONS **/
	function renderDataList(array) {
		var compiledHtml = datalistTemplate({persons: array});
  		$('main').html(compiledHtml);
	}
	function renderPerson(object) {
		var compiledHtml = personTemplate({person: object});
  		$('article').html(compiledHtml);
	}

});



  		
