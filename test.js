(function(){

	'use strict';

	var app = angular.module("test", []);
	app.directive('hzCollapsible', function(){
		return {
			restrict: 'A',
			scope: true,
			link: function(scope, element, attrs, ctrls){
				var icon = element.find('i.fa');
				var panel = element.next();
				scope.expanded = false;
				scope.$watch('expanded', function(){
					icon.toggleClass('fa-plus-square-o', !scope.expanded);
					icon.toggleClass('fa-minus-square-o', scope.expanded);
					panel.toggle();
				});

			}
		};
	});

})();