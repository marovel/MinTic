function leerClientes(){
    //FUNCION GET
        $.ajax({    
            url : 'https://g753758d201b824-gzl0jbaamzedshe9.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume/id',
            type : 'GET',
            dataType : 'JSON',
            contentType: 'application/json',
    
            success : function(clientes) {
                  /* let cs=clientes.items;
                   $("#listaClientes").empty();
                   for(i=0;i<cs.length;i++){
                       $("#listaClientes").append(cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age);
                       $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");
                   */
                   console.log(clientes.items)
                   
            },
            error : function(xhr, status) {
                alert('ha sucedido un problema');
            }
        });
    }
    
    
    function guardarCliente() {
        let idCliente=$("#idCliente").val();
        let nombre=$("#nombreCliente").val();
        let mailCliente=$("#mailCliente").val();
        let edad=$("#edadCliente").val();
    
        let data={
            id:idCliente,
            name:nombre,
            email:mailCliente,
            age:edad
        };
    
        var dataToSend=JSON.stringify(data);
        console.log(data);
    
    
        $.ajax({    
            url : 'https://gdcbf67e56bd91d-motorent.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'POST',
            dataType : 'JSON',
            data:dataToSend,
            contentType:'application/JSON',
            success : function(pepito) {
                $("#idCliente").val("");
                $("#nombreCliente").val("");
                $("#mailCliente").val("");
                $("#edadCliente").val("");
                console.log("Satisfactorio")
            },
            error : function(xhr, status) {
               alert('ha sucedido un problema');
            },
            complete: function(){
               leerClientes();
            }
        });
    
    
    }
    
    
    function editarCliente(){
        let idCliente=$("#idCliente").val();
        let nombre=$("#nombreCliente").val();
        let mailCliente=$("#mailCliente").val();
        let edad=$("#edadCliente").val();
    
        let data={
            id:idCliente,
            name:nombre,
            email:mailCliente,
            age:edad
        };
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
        $.ajax({    
            url : 'https://gdcbf67e56bd91d-motorent.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'PUT',
         //   dataType : 'json',
            data:dataToSend,
            contentType:'application/json',
            success : function(pepito) {
                $("#idCliente").val("");
                $("#nombreCliente").val("");
                $("#mailCliente").val("");
                $("#edadCliente").val("");
            },
            error : function(xhr, status) {
           //     alert('ha sucedido un problema');
            },
            complete: function(){
                leerClientes();
            }
        });
    
    }
    
    function borrarCliente(idCliente){
        let data={
            id:idCliente
        };
        let dataToSend=JSON.stringify(data);
        //console.log(dataToSend);
        $.ajax({    
            url : 'https://gdcbf67e56bd91d-motorent.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
            type : 'DELETE',
         //   dataType : 'json',
            data:dataToSend,
            contentType:'application/json',
            success : function(pepito) {
                $("#idCliente").val("");
                $("#nombreCliente").val("");
                $("#mailCliente").val("");
                $("#edadCliente").val("");
            },
            error : function(xhr, status) {
           //     alert('ha sucedido un problema');
            },
            complete: function(){
                leerClientes();
            }
        });
    
    }
  