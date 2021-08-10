$(function(){  
    var oDataContext = new DevExpress.data.ODataContext({
        url: "https://services.odata.org/Northwind/Northwind.svc",
        errorHandler: function (error) {
            alert(error.message);
        },
        entities: {
            Products: { key: "ProductID" }
        }
    });
    $("#dataGrid").dxDataGrid({
        columns:["ProductID","ProductName","Category.CategoryID","Category.CategoryName"]
        })
    });
});
