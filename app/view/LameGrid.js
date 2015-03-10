Ext.define('SE.view.LameGrid', {
	extend: 'Ext.grid.Panel',

	requires: [
		'SE.store.GridStore'
	],

	alias: 'widget.lamegrid',

	title: 'Lame Grid',

	store: 'GridStore',

	columns: [
		{text: 'ID', dataIndex: 'id'},
		{text: 'Title', dataIndex: 'title'},
		{text: 'Approved?', dataIndex: 'approved'}
	],

	listeners: {
		itemdblclick: function(grid, record, item, index, e) {
			var newWindow = Ext.create('Ext.window.Window', {
				title: 'Record Editor',
				width: 600,
				padding: 5,
				modal: true,
				items: [
					{
						xtype: 'form',
						bodyPadding: 10,
						title: '',
						defaults: {
							anchor: '90%'
						},
						items: [
							{
								fieldLabel: 'Title',
								xtype: 'textfield',
								name: 'title',
								allowBlank: false
							},{
								fieldLabel: 'Approved',
								xtype: 'checkboxfield',
								name: 'approved',
								allowBlank: true

							},{
								xtype: 'container',
								padding: '10 10 10 10',
								layout: {
									type: 'hbox',
									align: 'middle',
									pack: 'center'
								},
								items: [
									{
										xtype: 'button',
										text: 'Save',
										margin: '5 5 5 5',
										handler: function(button) {
											button.up('form').updateRecord();
											button.up('window').destroy();
										}
									},{
										xtype: 'button',
										text: 'Cancel',
										margin: '5 5 5 5',
										handler: function(button) {
											button.up('window').destroy();
										}
									}
								]
							}
						]
					}
				]
			})
			
			var form = newWindow.down('form');
			form.loadRecord(record);

			newWindow.show();
		}
	}
});