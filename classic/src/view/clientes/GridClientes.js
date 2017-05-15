Ext.define('app.view.clientes.GridClientes', {
  extend: 'Ext.grid.GridPanel',

  xtype: 'gridclientes',

  initComponent: function(){

    var mistore = Ext.create('app.store.clientes.StoreClientes', {
      autoLoad: true
    })

    Ext.apply(this, {

      store: mistore,

      columns:[
        {text:'Nombre', dataIndex: 'nombre', flex: 1,
          renderer: function (val,meta,rec){
            return rec.nombreToHTML();
          }
        },
        {text:'Email', dataIndex: 'email', width:160, menuDisabled: true},
        {text:'Fecha nacimiento', dataIndex: 'fecha_nacimiento',
          width:160, menuDisabled: true,
          renderer: Ext.util.Format.dateRenderer('d-m-Y')
        },
        {text:'Estatus', dataIndex: 'estatus',
          width:100, menuDisabled: true,
          renderer: function (val, mett, rec){
            if(rec.data.estatus == 0)
                  return '<span style="color:#F00;">Inactivo</span>';
                return '';
          }
        },{
                xtype:'actioncolumn',
                width:50,
                items: [{
                    icon: 'resources/img/img_24/edit_icon.png',  // Use a URL in the icon config
                    tooltip: 'Edit',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        alert("Edit " + rec.get('nombre'));
                    }
                },{
                    icon: 'resources/img/img_24/delete_icon.png',
                    tooltip: 'Delete',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        Ext.Msg.confirm( 'Eliminar cliente', 'Esta completamente seguro de querer '+
                          ' eliminar a <b>'+rec.get('nombre')+' '+rec.data.apellido_paterno+'</b>?',
                          function (respuesta){
                            if(respuesta=='yes'){
                              grid.store.remove(rec);
                            }
                          }
                        );
                    }
                }]
            }
      ],
      dockedItems: [{
        xtype:'pagingtoolbar',
        store: mistore,
        dock: 'bottom',
        displayInfo: true
      }]


    });
    this.callParent();
  }

})
