Ext.define('SE.store.GridStore', {
	extend: 'Ext.data.Store',
	
	model: 'SE.model.Title',

	data: {'items': [
		{'id': 1, 'title': 'JavaScript for Dummies', 'approved': true},
		{'id': 2, 'title': 'C# for Dummies', 'approved': false},
		{'id': 3, 'title': 'ColdFusion for Douchebags', 'approved': true}
	]}
});