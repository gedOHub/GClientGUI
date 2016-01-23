/**
 * This view is an example list of people.
 */
Ext.define('gNetClientGUI.view.main.OutboundConnectionList', {
    extend: 'Ext.grid.Panel',
    xtype: 'outboundconnectionlist',

/**
  * Sis pluginas atsako uz filtravima
  * Placiau: https://docs.sencha.com/extjs/6.0/6.0.0-classic/#!/api/Ext.grid.filters.Filters
  */
    plugins: 'gridfilters',
    id: 'outboundconnectionlist',

    requires: [
        'gNetClientGUI.store.OutboundConnectionList',
        'gNetClientGUI.view.main.OutboundConnectionListController',
        'gNetClientGUI.view.main.OutboundConnectionListModel'
    ],

    title: 'Mano inicijuotų sujungimų sąrašas',
    tools:[{
      type: 'refresh',
      listeners: {
          click: 'onStoreRefresh'
      }

    }],
    controller: 'outboundconnectionlist',
    viewModel: 'outboundconnectionlist',

    store: {
        type: 'outboundconnectionlist'
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
          text: 'Serverio SOCKET', dataIndex: 'serverSocket', flex: 1, filter: {
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
        id: 'outboundConnectionListStatus',
        xtype: 'label',
        text: 'Kraunasi...'
      }]
    }
});
