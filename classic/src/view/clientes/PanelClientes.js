Ext.define('app.view.clientes.PanelClientes', {
  extend: 'Ext.Panel',

  xtype: 'panelclientes',

  layout: 'border',

  tbar: [{ // TOOLBAR
    //xtype: 'button', //por default contiene botones a no ser q especifiquemos lo contrario.
    text: 'Agregar cliente',
    iconCls: 'x-fa fa-plus',
    handler: function(){
      var window = Ext.create('Ext.Window',{
        modal: true,
        title: 'Agregar un nuevo cliente',
        height: 300,
        width: 400,
        layout: 'fit',

        items: [{
          xtype: 'formcliente'
        }],

        buttons: [{
          text: 'Cerrar',
          handler: function(){
            window.close();
          }
        }]
      });

      window.show();

    }
  },'->',{
    xtype: 'textfield',
    emptyText: 'Buscar cliente',
    width: 300
  }],

  items: [{
    region: 'center',
    layout: 'fit',

    xtype: 'tabpanel',

    bodyStyle: 'background-color: blue; font-size: 30px; color: #FFF',
    items:[{
      title: 'Listado de clientes',
      html: 'COLUMNAS PARA SER SELECCIONADAS',
      bodyStyle: 'background-color: #FEA; font-size: 30px; color: #F0F'
    },{

    }],

    bbar: ['Bottom bar (zona baja)', '-', {
      text: 'Agregar un nuevo contenido',
      scale: 'large',
      handler: function(){
        var num = Ext.id(),
            panel = Ext.create('Ext.Panel', {
            // confuguraciones
            title: 'Detalle cliente' + num,
            html: 'Info cliente' + num,
            closable: true,
            layout: {
              type: 'hbox',
              align: 'stretch'
            },
            //layout: 'hbox', tambien se puede definir de esta forma

            items: [{
              title: 'detalle del cliente' + num,
              xtype: 'panel',
              flex: 3,
              layout: 'card',
              items: [{
                bodyStyle: 'background-color: #ABC; font-size: 30px; color: #345',
                html: 'detalle 1'
              },{
                bodyStyle: 'background-color: #BCA; font-size: 30px; color: #345',
                html: 'detalle 2'
              }],
              buttons: [{
                text: 'Panel 1',
                scale: 'large',
                handler: function(){
                  this.up('panel').layout.setActiveItem(0);
                }
              },{
                text: 'Panel 2',
                scale: 'large',
                handler: function(){
                  this.up('panel').layout.setActiveItem(1);
                }
              }]
            },{
              title: 'al seleccionar panel 2' + num,
              flex: 1,
              bodyStyle: 'background-color: #DEF; font-size: 30px; color: #345'
            }]

        })
        this.up('tabpanel').add(panel);
        this.up('tabpanel').setActiveItem(panel);
      }
    }]
  },{
    height: 100,
    region: 'south',
    html: 'border sur',
    bodyStyle: 'background-color: red; font-size: 30px; color: #FFF'
  }]
})
