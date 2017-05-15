Ext.define('app.view.login.WindowLoginController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.windowloginctrl',

  hacerLogin: function(){
      //var datos = this.lookupReference('formulario').getValues(); //DATOS DESDE EL FORULARIO
      var formulario = this.lookupReference('formulario'); // BUSCAMOS EL FORMULARIO COMPLETO

//      Ext.Ajax.request({ //--- LLAMADA AJAX
        formulario.getForm().submit({ // CON EL FORMULARIO COMPLETO HACEMOS UN SUBMIT
        url: 'server/dologin.json',

        scope: this, //same scope

        //params: datos,

        success: function(response, opts) {
          //var obj = Ext.decode(response.responseText); // NO VUELVE EN EL MISMO ORDEN QUE EN LA LLAMADA AJAX
          //console.dir(obj); //RESULTADO DE AJAX
          console.dir(opts.result); // RESULTADO NUEVO

          var obj = opts.result;

          //this.getView().close(); //SE MUEVE DENTRO DE LA ALERTA



          Ext.Msg.alert('Hola', 'Bienvenido de nuevo Usuario: ' + obj.fullname + '!', function(){
            this.getView().close()
          }, this /*SAME SCOPE*/);
        },

        failure: function(response, opts) {
           console.log('server-side failure with status code ' + response.status);
        }
      });

    }

})
