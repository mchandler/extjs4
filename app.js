Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: 'SE',
	
	requires: [
		'SE.view.MainView',
		'SE.store.GridStore'
	],
	
	controllers: [
		'SE.controller.SessionController'
	],

	views: [
		'LameGrid'
	],

	stores: [
		'GridStore'
	],

	models: [
		'Title'
	],


	launch: function() {
		Ext.create('SE.view.MainView');
	}
});