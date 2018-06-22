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

const $h5 = $('<h5></h5>');
$h5.text('Spring 2017');
$container.append($h5);


const $table = $('<table></table>');
const $thead = $('<thead></thead>');
const $tr = $('<tr></tr>');
const $th = $('<th></th>');
const $td = $('<td></td>');

// $container.append($table);
// $table.append($thead);
// $thead.append($tr);
// $tr.append('<th>Day</th>');
// $tr.append('<th>Classes</th>');
// $thead.append('<tr></tr>');
// $tr.append('<td>Monday</td>');
// $thead.append('<tr></tr>');
// $thead.append('<tr></tr>');
// $thead.append('<tr></tr>');
// $thead.append('<tr></tr>');


//


});