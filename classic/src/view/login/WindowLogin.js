Ext.define('app.view.login.WindowLogin', {
  extend: 'Ext.window.Window',

  controller: 'windowloginctrl',

  title: 'Bienvenido usuario',
  width: 300,
  height: 190,
  draggable: false,
  closable: false,
  modal: true,
  buttonAlign: 'center',

  items: [{
      xtype: 'form',
      bodyPadding: 10,

      reference: 'formulario',

      defaults: {
      xtype: 'textfield',
      allowBlank: false
      },
      items: [{
          fieldLabel: 'Usuario',
          name: 'usuario',
          vtype: 'email'
      },{
          fieldLabel: 'Password',
          name: 'pass',
          inputType: 'password'
      }]
  }],

  buttons: [{
      iconCls: 'x-fa fa-user',
      text: 'Ingresar',
      handler: 'hacerLogin'
  }]

})
