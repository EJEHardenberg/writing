document.addEventListener('DOMContentLoaded',function(){
	var backButton = document.getElementById("back")
	if(backButton) backButton.onclick = function(){ window.history.back(); return false; }		
})

/* Analytics */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-43866715-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
