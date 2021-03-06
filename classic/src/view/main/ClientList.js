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
    id: 'clientlist',

    requires: [
        'gNetClientGUI.store.ClientList',

        'gNetClientGUI.view.main.ClientListController',
        'gNetClientGUI.view.main.ClientListModel'
    ],

    title: 'Aktyvių klientų sąrašas',
    tools:[{
      type: 'refresh',
      listeners: {
          click: 'onStoreRefresh'
      }

    }],
    controller: 'clientlist',
    viewModel: 'clientlist',

    store: {
        type: 'clientListStore'
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
        }},{
           xtype:'actioncolumn',
           align: 'center',
           width: 50,
           items:[{
             // RDP jungtis
             icon: 'resources/icons/rdp.png',
             tooltip: 'Įnicijuoti RDP sujungimą',
             handler: 'rdpConnect'
           }]
         }, {
           xtype:'actioncolumn',
           align: 'center',
           width: 50,
           items:[{
             // VNC jungtis
             icon: 'resources/icons/vnc.png',
             tooltip: 'Įnicijuoti VNC sujungimą',
             handler: 'vncConnect'
           }]
         },{
           xtype:'actioncolumn',
           align: 'center',
           width: 50,
           items:[{
             // Bendra jungtis
             icon: 'resources/icons/connect.png',
             tooltip: 'Įnicijuoti sujungimą',
             handler: 'connect'
           }]
         }],
        fbar:{
          align: 'rigth',
          items:[{
            id: 'clientListStatus',
            xtype: 'label',
            text: 'Kraunasi...'
          }]
        }
});
