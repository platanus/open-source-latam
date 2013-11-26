$(document).ready(function(){
    var dataSource = 'osl.json';
    var source   = "{{#each sites}}<tr><td>{{title}}</td><td><a href='{{URL}}'>{{URL}}</a></td><td>{{description}}</td><td class='center'>{{#if verified}}<i title='Verificado por Platanus' class='verified'></i>{{/if}}</td></tr>{{/each}}";
	var template = Handlebars.compile(source);
    $.getJSON(dataSource, function (data) {
		var html    = template(data);
		$(".sites tbody").html(html);
    });
 });