Ext.define('gNetClientGUI.store.ClientList', {
    extend: 'Ext.data.Store',

    alias: 'store.clientListStore',
    requires: [
        'gNetClientGUI.view.main.ClientListController'
    ],
    controller: 'clientlist',
    fields: [
        'id', 'domain', 'pcname', "username"
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
        pageParam: 'clientList',
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
        // Tirkinu kokia duomenu stadija
          if(successful != true){
            // Veiksmai gavus kalida
              Ext.MessageBox.alert('Klaida', 'Nepavyko gauti klientų sąrašo', null);
              Ext.getCmp('clientListStatus').setText("Nepavyko gauti lientų sąrašo");
          } else {
              // Tirkinu as gauta
              if(me.getCount() < 1){
                // Gauta daugiau nei 0 įrašų
                Ext.getCmp('clientListStatus').setText("Klientų sąrašas tuščias");
                return;
              }
              // Gautas sąrašas su įrašais
              Ext.getCmp('clientListStatus').setText("Gauti " + me.getCount() + " įrašai");
            }
          }
      }
});
