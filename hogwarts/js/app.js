// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!')
// };


 $(() => {
	// put jQuery in here
	const $container = $('#container');

	const $h1 = $('<h1></h1>');
	$h1.text('Hogwarts');
	$container.append($h1);

	const $h2 = $('<h2></h2>')
	$h2.text('Amanda');
	$container.append($h2);

	const $h3 = $('<h3></h3>');
	$h3.text('Gryffindor');
	$container.append($h3);

	const $h4 = $('<h4></h4>');
	$h4.text('Leo');
	$h4.addClass('owl');
	$container.append($h4);

	$container.append('<h4>Hornbeam Wand with Dragon Heartstring Core</h4>');

});