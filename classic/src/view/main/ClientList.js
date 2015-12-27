/**
 * This view is an example list of people.
 */
Ext.define('gNetClientGUI.view.main.ClientList', {
    extend: 'Ext.grid.Panel',
    xtype: 'clientlist',

/**
  * Sis pluginas atsako uz filtravima
  * Placiau: https://docs.sencha.com/extjs/6.0/6.0.0-classic/#!/api/Ext.grid.filters.Filters
  */
    plugins: 'gridfilters',

    requires: [
        'gNetClientGUI.store.ClientList',

        'gNetClientGUI.view.main.ClientListController',
        'gNetClientGUI.view.main.ClientListModel'
    ],

    title: 'Aktyvių klientų sąrašas',

    controller: 'clientlist',
    viewModel: 'clientlist',

    store: {
        type: 'clientlist'
    },

    columns: [
        {
          text: 'Identifikacijos nr.',  dataIndex: 'id', flex: 1, filter: {
              type: 'number'
        }},{
          text: 'Srities pavadinimas', dataIndex: 'domain', flex: 1, filter: {
              type: 'string'
        }},{
          text: 'Kompiuterio pavadinimas', dataIndex: 'pcname', flex: 1, filter: {
              type: 'string'
        }},{
          text: 'Naudotojo vardas', dataIndex: 'username', flex: 1, filter: {
              type: 'string'
        }}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});