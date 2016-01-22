var string = 'dma compton';
	htmlString = '<p>Lorem ipsum dolor <b>sit</b> amet, consectetur adipisicing elit. Minus, recusandae.</p>';
console.log(htmlString.removeTags('p'));
console.log(htmlString.stripTags());
console.log(string.capitalize(true));
console.log(string.first(3));
console.log(string.last(7));

console.log(string.parameterize());
console.log(string.reverse());
console.log(string.startsWith('dma'));
console.log(string.startsWith('ma', 1));
console.log('----------------');
console.log('raiders_of_the_lost_ark'.titleize());
console.log('TheManWithoutAPast'.titleize());
console.log('10px'.toNumber());
console.log('10.1px'.toNumber());
console.log(' wasabi '.trim());
console.log('sittin on the dock of the bay'.truncateOnWord(10));
console.log('a-farewell-to-arms'.underscore());
console.log('&lt;p&gt;some text&lt;/p&gt;'.unescapeHTML());
console.log('http%3A%2F%2Ffoo.com%2Fthe%20bar'.unescapeURL());
console.log('http%3A%2F%2Ffoo.com%2Fthe%20bar'.unescapeURL(true));
console.log('broken wear'.words());
'broken wear'.words(function(w) {
	console.log(w)
});

console.log('Welcome, Mr. {name}.'.assign({ name: 'Franklin' }));
console.log('{n} and {r}'.assign({ n: 'Cheech' }, { r: 'Chong' }));
'compton'.chars(function(c) {
	console.log(c);
});
console.log('dmacompton'.each(/[r-z]/));
console.log('jumpy'.has('py'));
console.log('employee_salary'.humanize());
console.log(' '.isBlank());
console.log('wasabi'.pad(10, '/'));