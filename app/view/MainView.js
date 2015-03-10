Ext.define('SE.view.MainView', {
	extend: 'Ext.container.Viewport',
	layout: 'fit',

	items: [
		{
			xtype: 'container',
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			items: [
				{
					xtype: 'container',
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					items: [
						{
							xtype: 'lamegrid',
							flex: 1
						},{
							xtype: 'panel',
							title: 'Presenters',
							html: 'Presenters data...',
							flex: 1
						}
					],
					flex: 1
				},{
					xtype: 'panel',
					title: 'Details',
					html: 'Content here...',
					flex: 2
				}
			]
		}
	]

});