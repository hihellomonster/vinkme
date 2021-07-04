/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'vinme\'">' + entity + '</span>' + html;
	}
	var icons = {
		'google-my-business': '&#xe900;',
		'grindr': '&#xe905;',
		'hornet': '&#xe906;',
		'mercado-libre': '&#xe90e;',
		'onlyfans': '&#xe915;',
		'scruff': '&#xe917;',
		'netflix-gayflix': '&#xe923;',
		'netflix-gayflix1': '&#xe924;',
		'tumblr': '&#xe925;',
		'logo-xiiber-2021': '&#xea55;',
		'youtube': '&#xea5c;',
		'logo-tepozspa-2021': '&#xea58;',
		'tripadvisor': '&#xf65e;',
		'google': '&#xea5b;',
		'twitter-bird': '&#xf5a4;',
		'whatsapp': '&#xea5a;',
		'facebook-azul-letra': '&#xf0a1;',
		'gmail': '&#xe926;',
		'tumbrl': '&#xf660;',
		'intagram-camera': '&#xf66c;',
		'pinterest': '&#xe927;',
		'viajes-one': '&#xf5bf;',
		'entradas': '&#xea78;',
		'faq': '&#xea71;',
		'send': '&#xe928;',
		'codepen': '&#xf657;',
		'repliit': '&#xf658;',
		'codesandbox': '&#xf659;',
		'github-logo': '&#xf65b;',
		'github': '&#xf65c;',
		'w3spaces': '&#xf65d;',
		'www': '&#xf65f;',
		'hi5': '&#xf661;',
		'like': '&#xf66a;',
		'twiiter-bird': '&#xf66b;',
		'instagram': '&#xee02;',
		'logo-ciudad-de-mexico': '&#xeb0e;',
		'logo-morelos': '&#xeb0f;',
		'logo-acapulco': '&#xeb10;',
		'logo-puerto-vallarta': '&#xeb11;',
		'avatar-hihello': '&#xec41;',
		'logo-dragvesti-negro': '&#xea4f;',
		'pokebola': '&#xf413;',
		'amazon': '&#xe929;',
		'codepen1': '&#xe92a;',
		'css3': '&#xe92b;',
		'gitpod': '&#xe92c;',
		'html5': '&#xe92d;',
		'mastodon': '&#xe92e;',
		'medium': '&#xe92f;',
		'meetup': '&#xe930;',
		'mega': '&#xe931;',
		'logo-geus-bai-bai-cosmeticos': '&#xec3e;',
		'logo-la-mas-draga-drag-queen': '&#xf25a;',
		'logo-dragvesti': '&#xf257;',
		'logo-dragvesti-blanco': '&#xea4e;',
		'logo-hihello': '&#xea51;',
		'hhm': '&#xea54;',
		'xiiber-logo-horizontal-color': '&#xea57;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
