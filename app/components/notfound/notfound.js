angular.module('app.404', [])
	//.component('notfound', NotFoundObj);
	.directive('notfound', NotFoundRoute);

var NotFoundObj = {
	template: 'Page Not Found',
	controller: NotFoundController
};

function NotFoundRoute(){
	return {
		template: 'Page Not Found',
		controller: NotFoundController
	};
}

function NotFoundController() {
	console.log('notfound component');
}
