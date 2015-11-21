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
  		// Make AJAX GET request to specified URL
  		$.ajax({
    		url: '/data/'+ name + '.json'
  		})
  		.done(function(json) { // When GET request is completed, the anonymous function will be called
  			// The anonymous function's available data is specified according to http://api.jquery.com/jQuery.ajax/#jqXHR
  			// i.e. jqXHR.done(function( data, textStatus, jqXHR ) {});
  			// Here jqXHR is the object returned by $.ajax method
  			// So, the .done method is chained here (Google "method chaining" for more on this concept)
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



  		
