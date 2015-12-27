/**
 * This view is an example list of people.
 */
Ext.define('gNetClientGUI.view.main.ConnectionList', {
    extend: 'Ext.grid.Panel',
    xtype: 'connectionlist',

/**
  * Sis pluginas atsako uz filtravima
  * Placiau: https://docs.sencha.com/extjs/6.0/6.0.0-classic/#!/api/Ext.grid.filters.Filters
  */
    plugins: 'gridfilters',

    requires: [
        'gNetClientGUI.store.ConnectionList',
        
        'gNetClientGUI.view.main.ConnectionListController',
        'gNetClientGUI.view.main.ConnectionListModel'
    ],

    title: 'Sujungimų sąrašas',

    controller: 'connectionlist',
    viewModel: 'connectionlist',

    store: {
        type: 'connectionlist'
    },

    columns: [{
          text: "Srauto numeris", dataIndex: 'tag', flex: 1, filter: {
              type: 'number'
        }},{
          text: 'Kliento numeris',  dataIndex: 'clientNumber', flex: 1, filter: {
              type: 'number'
        }},{
          text: 'Prievadas', dataIndex: 'connectedPort', flex: 1, filter: {
              type: 'number'
        }}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
