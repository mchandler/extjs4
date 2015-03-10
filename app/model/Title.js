Ext.define('SE.model.Title', {
	extend: 'Ext.data.Model',

	fields: ['id', 'title', 'approved'],

	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			root: 'items'
		}
	}
});