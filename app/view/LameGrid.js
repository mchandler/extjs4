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
	]
});