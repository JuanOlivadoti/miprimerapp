Ext.define('app.view.clientes.form.FromCliente',{
  extend: 'Ext.form.Panel',

  xtype: 'formcliente',

  bodyPadding: 10,

  initComponent: function(){

    this.items = [{
      xtype: 'textfield',
      fieldLabel: 'Nombre'
    },{
      xtype: 'textfield',
      fieldLabel: 'Correo',
      vtype: 'email'
    }]

    this.callParent();

  }
})
