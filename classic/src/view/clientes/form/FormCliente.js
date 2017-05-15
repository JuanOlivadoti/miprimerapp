Ext.define('app.view.clientes.form.FromCliente',{
  extend: 'Ext.form.Panel',

  xtype: 'formcliente',

  bodyPadding: 10,

  //layout: 'anchor' // Sin especificar poruqe es por defecto.

  initComponent: function(){

    Ext.apply(this, {

      fieldDefaults: {
        labelAlign: 'right', //alineación a la derecha
        labelWidth: 110, // ancho de etiqueta
        msgTarget: 'under', //mensaje de error por debajo
        anchor: '100%', // ancho de 100%
        allowBlank: false //obligatorio
      },

      defaultType: 'textfield',

      items: [{
        fieldLabel: '* Nombre',
        emptyText: 'Este campo es obligatorio...',
        name: 'txt_nombre'
      },{
        fieldLabel: '* Correo',
        vtype: 'email',
        emptyText: 'ejemplo@email.com',
        name: 'txt_correo'
      },{
        xtype: 'displayfield',
        fieldLabel: 'Apodo',
        name: 'home_score',
        value: 'Por asignar'
      },{
        fieldLabel: 'Edad',
        xtype: 'numberfield',
        maxValue: 99,
        minValue: 0,
        allowDecimals: false,
        name: 'txt_edad'
      },{
        fieldLabel: 'Fecha nacimiento',
        xtype: 'datefield',
        maxValue: new Date(),
        format: "d-m-Y",
        allowBlank: true,
        name: 'txt_fnacimiento'
      },{
        xtype: 'radiogroup',
        fieldLabel: 'Género',
        vertical: true,
        items: [{
          boxLabel: 'Hombre',
          name: 'txt_genero',
          inputValue: '1'
        },{
          boxLabel: 'Mujer',
          name: 'txt_genero',
          inputValue: '2',
          checked: true
        }]
      },{
        xtype: 'checkboxgroup',
        fieldLabel: 'Idiomas',
        columns: 2,
        vertical: true,
        items: [{
          boxLabel: 'Frances',
          name: 'txt_idioma',
          inputValue: '1'
        },{
          boxLabel: 'Italiano',
          name: 'txt_idioma',
          inputValue: '2',
          checked: true
        },{
          boxLabel: 'Aleman',
          name: 'txt_idioma',
          inputValue: '3'
        },{
          boxLabel: 'Ingles',
          name: 'txt_idioma',
          inputValue: '4',
          checked: true
        }]
      }]
    })

    this.callParent();

  },

  doSubmit: function(){
    this.getForm().submit({
      url: 'server/doformpost.json',
      success: function(form, result){
        console.info(result);
      },
      failure: function(form, result){
        console.info(result);
      }
    });
  },

  doLoad: function(){
    this.getForm().load({
      url: 'server/doformload.json',
      success: function(form, result){
        console.info(result.result)
      }
    });
  }

})
