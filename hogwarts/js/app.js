2// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!')
// };


 $(() => {
	// put jQuery in here
	
// Year 1
	const $container = $('#container');

	const $school = $('<h1></h1>');
	$school.text('Hogwarts');
	$container.append($school);

// Year 2
	const $name = $('<h2></h2>')
	$name.text('Amanda');
	$container.append($name);

	const $house = $('<h3></h3>');
	$house.text('Gryffindor');
	$container.append($house);

	const $pet = $('<h4></h4>');
	$pet.text('Leo');
	$pet.addClass('owl');
	$container.append($pet);

	// const $h4_2 = $('<h4></h4>');
	// $h4_2.text('Hornbeam Wand	with Dragon Heartstring Core');
	// $container.append($h4_2);

	const $wand = $('<h4></h4>');

	$wand.text('Hornbeam Wand with Dragon Heartstring Core')

	$container.append($wand);

// Year 3
	const $ul = $('<ul storage="trunk"></ul>');
	const $butterBeer = $('<li>butter beer</li>');
	$ul.append($butterBeer);
	const $invisibilityCloak = $('<li class="secret">invisibility cloak</li>');
	$ul.append($invisibilityCloak);
	const $magicMap = $('<li class="secret">magic map</li>');
	$ul.append($magicMap);
	const $timeTurner = $('<li class="secret">time turner</li>');
	$ul.append($timeTurner);
	const $leash = $('<li class="owl">leash</li>');
	$ul.append($leash);
	const $bertieBeans = $("<li>Bertie Bott's Every Flavor Beans</li>");
	$ul.append($bertieBeans);
	$container.append($ul);


// list = ['butter beer', 'invisibility cloak', 'magic map', 'time turner', 'leash', "Bertie Bott's Every Flavor Beans"];

// 	$container.append("<ul storage='trunk'></ul>");
// 	for (i = 0; i < list.length; i++) {
// 		$("#trunk").append("<li>" + list[i]);
// 	};

// Year 4
const $semester = $('<h5></h5>');
$semester.text('Spring 2017');
$container.append($semester);


// Herbology, , , , , , Quidditch practice
$container.append('<table><thead><tr><th>Day</th><th>Classes</th></tr><tr><td>Monday</td><td>Defense Against the Dark Arts, Charms</td></tr></tr><tr><td>Tuesday</td><td>History of Magic, Transfiguration</td></tr></tr><tr><td>Wednesday</td><td>Potions, Divination</td></tr></tr><tr><td>Thursday</td><td>Herbology, Quidditch practice</td></tr></tr><tr><td>Friday</td><td>Defense Against the Dark Arts, Potions</td></tr></thead></table>');


// Year 5

$wand.remove();

$butterBeer.remove();

$wand.text('Holly Wand with Unicorn Hair Core');
$wand.insertAfter($pet);

$wand.css('color', 'indigo');

const myPet = $pet.detach();
myPet.insertAfter($house);



});