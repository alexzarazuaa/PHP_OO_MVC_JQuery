$(document).ready(function () {
    console.log("ENTRA LIKE");
    //alert("AVISO HA ENTRADO ");


    var url = "module/like_datatable/controller/controller_like.php?op=datatable";  
    // prepare the data
    var source =
    {
        dataType: "json",
        dataFields: [
           // { name: 'codref', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'sport', type: 'string' },
            { name: 'date_birthday', type: 'string' }
        ],
        id: 'id',
        url: url
    };

    //console.log(source);
    
    var dataAdapter = new $.jqx.dataAdapter(source);
    console.log(dataAdapter);
    $("#like_datatable").jqxDataTable(
    {
        width: getWidth("like_datatable"),
        pageable: true,
        pagerButtonsCount: 10,
        source: dataAdapter,
        sortable: true,
        pageable: true,
        altRows: true,
        filterable: true,
        columnsResize: true,
        pagerMode: 'advanced',
        columns: [
          //{ text: 'User Code', dataField: 'codref'},
          { text: 'Name', dataField: 'name' },
          { text: 'Sport', dataField: 'sport'},
          { text: 'Date Birthday', dataField: 'date_birthday' }
      ]
    }); 
 
});