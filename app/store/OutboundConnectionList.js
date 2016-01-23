Ext.define('gNetClientGUI.store.OutboundConnectionList', {
    extend: 'Ext.data.Store',

    alias: 'store.outboundconnectionlist',

    controller: 'outboundconnectionlist',

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
        url: host,
        // Parametras nurodantis, kad bus prasomas klientu sarasas
        pageParam: 'outboundConnectionList',
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
            // Veiskmai gavus klaida
              Ext.MessageBox.alert('Klaida', 'Nepavyko gauti sujungimų sąrašo', null);
              Ext.getCmp('outboundConnectionListStatus').setText("Nepavyko gauti sujungimų sąrašo");
          } else {
            // Tirkinu as gauta
            if(me.getCount() > 0){
              // Gauta daugiau nei 0 įrašų
              Ext.getCmp('outboundConnectionListStatus').setText("Sėkmingai gauti " + me.getCount() + " įrašai");
            } else {
              // Gautas sąrašas tuščias
              Ext.getCmp('outboundConnectionListStatus').setText("Sujungimų sąrašas tuščias");
            }
          }
      }
    }
});
