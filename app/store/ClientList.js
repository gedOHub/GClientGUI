Ext.define('gNetClientGUI.store.ClientList', {
    extend: 'Ext.data.Store',

    alias: 'store.clientlist',

    fields: [
        'id', 'domain', 'pcname', "username"
    ],

    data: { items: [
        { id: '1', domain: 'GMC.LOCAL', pcname: 'GMC-GEDO',     username: 'gedas' },
        { id: '2', domain: 'GMC.LOCAL', pcname: 'GMC-TADO',     username: 'tadas' },
        { id: '3', domain: 'GMC.LOCAL', pcname: 'GMC-RAMO',     username: 'ramas' },
        { id: '4', domain: 'GMC.LOCAL', pcname: 'GMC-ROLANDO',  username: 'rolkis' },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
