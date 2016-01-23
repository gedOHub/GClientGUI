Ext.define('gNetClientGUI.view.main.OutboundConnectionListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.outboundconnectionlist',

    onStoreRefresh: function(){
      //Ext.getCmp('connectionListStatus').text = "Kraunasi...";
      Ext.getCmp('outboundconnectionlist').getStore().reload();
    },
    // Tunelio nutraukimas
    closeTunnel: function(view, rowIdx, colIdx, item, e, record, row){
      //console.log("Nutraukiamas sujungimas nr. " + record.data.tag);
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
