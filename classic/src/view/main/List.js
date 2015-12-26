/**
 * This view is an example list of people.
 */
Ext.define('gNetClientGUI.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'gNetClientGUI.store.ClientList'
    ],

    title: 'Klientų sąrašas',

    store: {
        type: 'clientlist'
    },

    columns: [
        { text: 'Identifikacijos nr.',  dataIndex: 'id' },
        { text: 'Srities pavadinimas', dataIndex: 'domain', flex: 1 },
        { text: 'Kompiuterio pavadinimas', dataIndex: 'pcname', flex: 1 },
        { text: 'Naudotojo vardas', dataIndex: 'username', flex: 1}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
