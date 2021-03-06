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

    title: 'Užmegztų ryšių su manimi sąrašas',
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
          text: 'Kliento numeris',  dataIndex: 'clientid', flex: 1, filter: {
              type: 'number'
        }},{
          text: 'Nutolęs prievadas', dataIndex: 'dport', flex: 1, filter: {
              type: 'number'
        }},{
          text: 'Vietinis prievadas', dataIndex: 'sport', flex: 1, filter: {
              type: 'number'
        }},{
          text: 'Kliento SOCKET', dataIndex: 'clientSocket', flex: 1, filter: {
              type: 'number'
        }},{
          text: 'Sujungimo statusas', dataIndex: 'status', flex: 1, filter: {
              type: 'number'
        }},{
           xtype:'actioncolumn',
           flex: 0.5,
           align: 'left',
           items:[{
             // RDP jungtis
             icon: 'resources/icons/closeConnection.png',
             tooltip: 'Nutraukti sujungimą',
             handler: 'closeTunnel'
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
