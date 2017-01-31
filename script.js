$(function () {
// after refreshing diplay same page
render(decodeURI(window.location.hash));
// An event handler with calls the render function on every hashchange.
	// The render function will show the appropriate content of out page.
	$(window).on('hashchange', function(){
		render(decodeURI(window.location.hash));
		});
		// render the page according to the url content
	function render(url) {
console.log("calling");
		// Get the keyword from the url.
		var temp = url.split('/')[0];

		var	map = {
			// The "Homepage".
			'': function() {
        $(".mycontent").html('');
    putFirstContent();
			},
			// Single TEAM page.
			'#team': function() {
        var id = url.split('#team/')[1].trim();
        $(".mycontent").html('');
				putTeamContent(id);
			},
		};
		// Execute the needed function depending on the url keyword (stored in temp).
		if(map[temp]){
			map[temp]();
		}
		// If the keyword isn't listed in the above - render the error page.
		else {
window.location.href = '/#';
		}
	}
});
