var requireArr = [
	
];
var baseRequire = ['jquery','underscore','backbone']
requireArr = requireArr.concat(baseRequire);
define(requireArr,function (jquery,underscore,backbone) {
	'use strict';
	var date = new Date();
	var opts = [
		{name : 'years' , begin : date.getFullYear , length : 5 },
		{name : 'months' , begin : 1 , length : 12 },
		{name : 'days' , begin : 1 , length : 31 },
		{name : 'hours' , begin : 1 , length : 12 },
		{name : 'minutes' , begin : 0 , length : 60 }
	];

	var backView = backbone.View.extend({
		model : opts ,
		initialize : function () {
			var that = this;
			
		},
		show : function () {
			return this.model;
		},

	})
	var date = new backView();
	console.log(date.show());
});
