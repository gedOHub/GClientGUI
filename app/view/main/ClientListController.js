/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('gNetClientGUI.view.main.ClientListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.clientlist',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure???? ClientList', 'onConfirm', this);
    },

    connectClient: function (clientID, clientPort){
      Ext.Ajax.request({
        url: host,
        method: 'GET',
        params: {
          command: 'connectClient',
          id: clientID,
          port: clientPort
        }
      })
    },

    onStoreRefresh: function(){
      //Ext.getCmp('clientListStatus').text = "Kraunasi...";
      Ext.getCmp('clientlist').getStore().reload();
    },
    // Veiksmai vygdant RDP jungti
    rdpConnect: function (view, rowIdx, colIdx, item, e, record, row) {
      this.connectClient(record.data.id, 3389);
      console.log("RDP | ClientID: " + record.id + " ConnectPort: 3389" );
    },
    // Veiksmai vygdant VNC jungti
    vncConnect: function (view, rowIdx, colIdx, item, e, record, row){
      this.connectClient(record.data.id, 5900);
      console.log("VNC | ClientID: " + record.id + " ConnectPort: 5900" );
    },
    // Veiksmai inicijuojant neparuosta jungti
    connect: function (view, rowIdx, colIdx, item, e, record, row){
      Ext.Msg.prompt('Prievado įvedimas',
      'Įveskite norimo jungtis prievado numerį:', function(btn, text){
        if (btn == 'ok'){
            this.connectClient(record.data.id, text);
        }
      }, this);
    }

});
