Ext.define('app.view.login.WindowLoginController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.windowloginctrl',

  hacerLogin: function(){
      var datos = this.lookupReference('formulario').getValues();

      this.getView().close();

      Ext.Msg.alert('Hola', 'Bienvenido de nuevo Usuario: ' + datos.usuario + '!');

    }

})
