require.config({
	baseUrl : 'js',//包含RequireJS的那个HTML页面的所属目录
	paths : {
		jquery : 'lib/jquery/jquery-1.12.3.min',
		jquery2 : 'lib/jquery/jquery-2.2.3.min',
		backbone : 'lib/backbone/backbone-min',
		underscore : 'lib/underscore/underscore-min'
	},
	shim : {
		backbone : {
			deps : ['underscore'],
			exports : 'Backbone'
		},
		underscore : {
			exports : '_'
		},
		jquery : {
			exports : '$'
		}
	}
});
