/**
 * This view is an example list of people.
 */
Ext.define('gNetClientGUI.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'gNetClientGUI.store.ClientList'
    ],

    title: 'Klientų sąrašas',

    store: {
        type: 'clientlist'
    },

    columns: [
        { text: 'Identifikacijos Nr.',  dataIndex: 'id' },
        { text: 'Srities pavadinimas', dataIndex: 'domain' },
        { text: 'Kompiuterio vardas', dataIndex: 'pcname' },
        { text: 'Naudotojo vardas', dataIndex: 'username' }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
