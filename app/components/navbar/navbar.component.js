
angular.module('myApp')
	.component('navbar', {
		templateUrl: 'components/navbar/navbar.html',
		controller: navbarController
	});

function navbarController () {
	console.log('navbar component loaded!!');
}
