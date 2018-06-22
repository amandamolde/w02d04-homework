2// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!')
// };


 $(() => {
	// put jQuery in here
	
// Year 1
	const $container = $('#container');

	const $h1 = $('<h1></h1>');
	$h1.text('Hogwarts');
	$container.append($h1);

// Year 2
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

	// const $h4_2 = $('<h4></h4>');
	// $h4_2.text('Hornbeam Wand	with Dragon Heartstring Core');
	// $container.append($h4_2);

	$container.append('<h4>Hornbeam Wand with Dragon Heartstring Core</h4>');

// Year 3
	const $ul = $('<ul storage="trunk"></ul>');
	$ul.append('<li>butter beer</li>');
	$ul.append('<li class="secret">invisibility cloak</li>');
	$ul.append('<li class="secret">magic map</li>');
	$ul.append('<li class="secret">time turner</li>');
	$ul.append('<li class="owl">leash</li>');
	$ul.append("<li>Bertie Bott's Every Flavor Beans</li>");
	$container.append($ul);


// list = ['butter beer', 'invisibility cloak', 'magic map', 'time turner', 'leash', "Bertie Bott's Every Flavor Beans"];

// 	$container.append("<ul storage='trunk'></ul>");
// 	for (i = 0; i < list.length; i++) {
// 		$("#trunk").append("<li>" + list[i]);
// 	};

// Year 4
const $h5 = $('<h5></h5>');
$h5.text('Spring 2017');
$container.append($h5);

const $table = $('<table></table>');
$container.append('<table><thead><tr><th>Day</th><th>Classes</th></tr><tr><td>Monday</td><td>Classes1</td></tr></tr><tr><td>Tuesday</td><td>Classes2</td></tr></tr><tr><td>Wednesday</td><td>Classes3</td></tr></tr><tr><td>Thursday</td><td>Classes4</td></tr></tr><tr><td>Friday</td><td>Classes5</td></tr></thead></table>');


// Year 5

// $('h4').remove();



// $('#trunk').remove('butter beer');


});