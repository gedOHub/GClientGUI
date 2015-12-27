/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('gNetClientGUI.view.main.ConnectionListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.connectionlist',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure???? ConnectionList', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
        }
    }
});