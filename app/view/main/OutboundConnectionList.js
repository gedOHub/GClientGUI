Ext.define('gNetClientGUI.view.main.OutboundConnectionListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.outboundconnectionlist',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure???? ConnectionList', 'onConfirm', this);
    },

    onStoreRefresh: function(){
      //Ext.getCmp('connectionListStatus').text = "Kraunasi...";
      Ext.getCmp('connectionlist').getStore().reload();
    },
    // Sujungimo nutraukimas
    closeConnection: function(view, rowIdx, colIdx, item, e, record, row){
      console.log("Nutraukiamas sujungimas su " + record.data.clientNumber + " klientu");
    }
})
