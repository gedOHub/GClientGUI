Ext.define('gNetClientGUI.store.ClientList', {
    extend: 'Ext.data.Store',

    alias: 'store.clientlist',

    controller: 'clientlist',

    fields: [
        'id', 'domain', 'pcname', "username"
    ],

/*
    data: { items: [
        { id: '1', domain: 'GMC.LOCAL', pcname: 'GMC-GEDO',     username: 'gedas' },
        { id: '2', domain: 'GMC.LOCAL', pcname: 'GMC-TADO',     username: 'tadas' },
        { id: '3', domain: 'GMC.LOCAL', pcname: 'GMC-RAMO',     username: 'ramas' },
        { id: '4', domain: 'GMC.LOCAL', pcname: 'GMC-ROLANDO',  username: 'rolkis' }
    ]},
*/
    // Automatinis uzkrovimas
    autoLoad: true,
    // Kur bus ieskoma informacijos
    proxy: {
        type: 'ajax',
        //url: 'list',
        url: 'http://127.0.0.1:3000',
        pageParam: 'clientCount',
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
    }
});
