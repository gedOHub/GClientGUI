Ext.define('gNetClientGUI.store.ConnectionList', {
    extend: 'Ext.data.Store',

    alias: 'store.connectionlist',

    controller: 'connectionlist',

    fields: [
        'id', 'domain', 'pcname', "username"
    ],

    data: { items: [
        { tag: '1', clientNumber: '1', connectedPort: '3389' },
        { tag: '2', clientNumber: '1', connectedPort: '5900' },
        { tag: '3', clientNumber: '1', connectedPort: '80' },
        { tag: '4', clientNumber: '2', connectedPort: '80' }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
