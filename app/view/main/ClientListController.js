/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
var openPort = -1;

Ext.define('gNetClientGUI.view.main.ClientListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.clientlist',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure???? ClientList', 'onConfirm', this);
    },

    connectClient: function(clientID, clientPort){
      Ext.Ajax.request({
        url: host,
        method: 'GET',
        params: {
          command: 'connectClient',
          id: clientID,
          port: clientPort
        },
        success: function(response, opts){
          alert(response.responseText);
          // Ieskau grazinto porto
          /*
          Sujungimas sekmingai sukurtas su 5 klientu
          Pas Jus atverta 52789 prievadas, kuri sujungta su kliento 5900 prievadu
          Jungimos duomenys: 127.0.0.1:52789
          */
          var port = response.responseText;
          var start = port.lastIndexOf(":")+1;
          // Salinu viska iki : ir nepaimu /n simbolio
          openPort = port.substr(start, port.length-start-1);
        },
        failure: function(response, opts){
          alert(response.responseText);
        }
      });
    },

    onStoreRefresh: function(){
      //Ext.getCmp('clientListStatus').text = "Kraunasi...";
      Ext.getCmp('clientlist').getStore().reload();
    },

    // Veiksmai vygdant RDP jungti
    rdpConnect: function (view, rowIdx, colIdx, item, e, record, row) {
      console.log("RDP | ClientID: " + record.id + " ConnectPort: 3389" );
      this.connectClient(record.data.id, 3389);
      if(openPort != -1){
          // Generuoju programos ijungima is WEB
          var element = document.createElement('a');
          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("[Connection]\nHost=127.0.0.1:"+openPort));
          element.setAttribute('download', "connect.vnc");
          element.style.display = 'none';
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
          // Grazinu i pradine padeti
          openPort = -1;
      }
    },

    // Veiksmai vygdant VNC jungti
    vncConnect: function (view, rowIdx, colIdx, item, e, record, row){
      console.log("VNC | ClientID: " + record.id + " ConnectPort: 5900" );
      this.connectClient(record.data.id, 5900);
      if(openPort != -1){
          // Generuoju programos ijungima is WEB

          // Grazinu i pradine padeti
          openPort = -1;
      }
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
