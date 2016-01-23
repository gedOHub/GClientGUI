/**
 * This view is an example list of people.
 */
Ext.define('gNetClientGUI.view.main.InboundConnectionList', {
    extend: 'Ext.grid.Panel',
    xtype: 'inboundconnectionlist',

/**
  * Sis pluginas atsako uz filtravima
  * Placiau: https://docs.sencha.com/extjs/6.0/6.0.0-classic/#!/api/Ext.grid.filters.Filters
  */
    plugins: 'gridfilters',
    id: 'inboundconnectionlist',

    requires: [
        'gNetClientGUI.store.InboundConnectionList',
        'gNetClientGUI.view.main.InboundConnectionListController',
        'gNetClientGUI.view.main.InboundConnectionListModel'
    ],

    title: 'Aktyvių sujungimų sąrašas',
    tools:[{
      type: 'refresh',
      listeners: {
          click: 'onStoreRefresh'
      }

    }],
    controller: 'inboundconnectionlist',
    viewModel: 'inboundconnectionlist',

    store: {
        type: 'inboundconnectionlist'
    },

    columns: [{
          text: "Srauto numeris", dataIndex: 'tag', flex: 1, filter: {
              type: 'number'
        }},{
          text: 'Kliento numeris',  dataIndex: 'clientNumber', flex: 1, filter: {
              type: 'number'
        }},{
          text: 'Nutolęs prievadas', dataIndex: 'connectedPort', flex: 1, filter: {
              type: 'number'
        }},{
          text: 'Vietinis prievadas', dataIndex: 'localPort', flex: 1, filter: {
              type: 'number'
        }},{
           xtype:'actioncolumn',
           flex: 0.5,
           align: 'left',
           items:[{
             // RDP jungtis
             icon: 'resources/icons/closeConnection.png',
             tooltip: 'Nutraukti sujungimą',
             handler: 'closeConnection'
           }]
        }],
    fbar:{
      align: 'rigth',
      items:[{
        id: 'inboundConnectionListStatus',
        xtype: 'label',
        text: 'Kraunasi...'
      }]
    }
});
