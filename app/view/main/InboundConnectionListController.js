/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('gNetClientGUI.view.main.InboundConnectionListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.inboundconnectionlist',

    onStoreRefresh: function(){
      //Ext.getCmp('connectionListStatus').text = "Kraunasi...";
      Ext.getCmp('inboundconnectionlist').getStore().reload();
    },
    // Sujungimo nutraukimas
    closeTunnel: function(view, rowIdx, colIdx, item, e, record, row){
      //console.log("Nutraukiamas sujungimas su " + record.data + " klientu");
      Ext.Ajax.request({
        url: host,
        params:{
          'command': 'closeTunnel',
          'tag' : record.data.tag
        },
        method : "GET",
        // 0.1s
        timeout: 1000
      });
      this.onStoreRefresh();
    }
})
