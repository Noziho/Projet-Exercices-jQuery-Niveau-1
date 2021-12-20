

$('body').append('<h1></h1>','<a>Mon attribue modifier avec Jquery</a>', '<div id="monDiv"></div>');
$('h1').text('Hello world');
$('a').attr("href", "https://google.fr");


const monDiv = $('#monDiv').width('300px').height('300px');
$('<div></div><div id="deuxiemeDiv"></div><div></div><div></div>').appendTo(monDiv);
monDiv.children('div').next('#deuxiemeDiv').text('test');