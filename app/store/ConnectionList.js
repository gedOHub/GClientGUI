Ext.define('gNetClientGUI.store.ConnectionList', {
    extend: 'Ext.data.Store',

    alias: 'store.connectionlist',

    controller: 'connectionlist',

    fields: [
        'tag', 'clientNumber', 'connectedPort', 'localPort'
    ],
    pageSize: 20,
    // Automatinis uzkrovimas
    autoLoad: true,
    // Automatinis objekto sunaikinimas
    autoDestroy: true,
    // Kur bus ieskoma informacijos
    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:3000',
        // Parametras nurodantis, kad bus prasomas klientu sarasas
        pageParam: 'connectionList',
        reader:{
            // Skaitytuvo tipas
            type: 'json',
            // Nuo kur prasideda duomenys
            rootProperty: 'items',
            // Elementas rodantis kiek duomenu atsiusta
            totalProperty: 'itemCount',
            // Indikatorius ar pavyko gauti
            successProperty: 'success'
        }
    },
    listeners:{
      // Veiksmai uzrovus veiksmus
      load: function(me, records, successful, eOpts){
          if(successful != true){
              Ext.MessageBox.alert('Klaida', 'Nepavyko gauti sujungimų sąrašo', null);
          }
      }
    }
});
