var db = firebase.firestore();

function addMemoria(){
    var docData = {
        Nome: document.getElementById('Nome').value,
        Fabricante:	document.getElementById('Fabricante').value,
        Modelo:	document.getElementById("Modelo").value,
        PN:	document.getElementById("PN").value,
        Tipo: document.getElementById("Tipo").value,
        Velocidade:	document.getElementById("Velocidade").value,
        Capacidade:	document.getElementById("Capacidade").value,
        Módulo:	document.getElementById("Módulo").value,
        CasLatency: document.getElementById("CasLatency").value,
        Timing:	document.getElementById("Timing").value,
        Voltagem: document.getElementById("Voltagem").value,
        Dissipador:	document.getElementById("Dissipador").value,
        Ecc: document.getElementById("Ecc").value,
        Registrada:	document.getElementById("Registrada").value,
        Cor: document.getElementById("Cor").value,
        urlImagem: document.getElementById("urlImagem").value,
    };
    

    db.collection("Memórias").add(docData).then(() => {
        console.log("Document successfully written!");
    });
 

    limparCadastroMemoria()
}

function limparCadastroMemoria(){
    document.getElementById('Nome').value = ""
    document.getElementById('Fabricante').value = ""
    document.getElementById("Modelo").value = ""
    document.getElementById("PN").value = "" 
    document.getElementById("Tipo").value = "" 
    document.getElementById("Velocidade").value = "" 
    document.getElementById("Capacidade").value = "" 
    document.getElementById("Módulo").value = "" 
    document.getElementById("CasLatency").value = "" 
    document.getElementById("Timing").value = "" 
    document.getElementById("Voltagem").value = "" 
    document.getElementById("Dissipador").value = "" 
    document.getElementById("Ecc").value = "" 
    document.getElementById("Registrada").value = "" 
    document.getElementById("Cor").value = "" 
    document.getElementById("urlImagem").value = "" 
}


function addPlacaMae(){
    var docData = {
        Nome:	document.getElementById('Nome').value,
        Fabricante:	document.getElementById('Fabricante').value,
        Modelo:	document.getElementById("Modelo").value,
        PN:	document.getElementById("PN").value,
        Formato: document.getElementById("Formato").value,
        Chipset: document.getElementById("Chipset").value,
        SocketProcessador:	document.getElementById("SocketProcessador").value,
        SlotsMemória:	document.getElementById("SlotsMemória").value,
        TipoMemória: document.getElementById("TipoMemória").value,
        VelocidadesMemória:	document.getElementById("VelocidadesMemória").value,
        MemóriaMáxima: document.getElementById("MemóriaMáxima").value,
        SuporteRAID: document.getElementById("SuporteRAID").value,
        SaídaVídeo: document.getElementById("SaídaVídeo").value,
        SuporteSLI:	document.getElementById("SuporteSLI").value,
        SuporteCrossFire: document.getElementById("SuporteCrossFire").value,
        PortasEthernet: document.getElementById("PortasEthernet").value,
        PortasSATAExpress: document.getElementById("PortasSATAExpress").value,
        SATA6Gbs: document.getElementById("SATA6Gbs").value,
        HeaderUSB: document.getElementById("HeaderUSB").value,
        PortasUSBTypeC: document.getElementById("PortasUSBTypeC").value,
        Cor: document.getElementById("Cor").value,
        urlImagem: document.getElementById("urlImagem").value,
    };
    

    db.collection("Placas-Mães").add(docData).then(() => {
        console.log("Document successfully written!");
    });
 

    limparCadastroPlacaMae()
}

function limparCadastroPlacaMae(){
    document.getElementById('Nome').value = ""
    document.getElementById('Fabricante').value = ""
    document.getElementById("Modelo").value = ""
    document.getElementById("PN").value = ""
    document.getElementById("Formato").value = ""
    document.getElementById("Chipset").value = ""
    document.getElementById("SocketProcessador").value = ""
    document.getElementById("SlotsMemória").value = ""
    document.getElementById("TipoMemória").value = ""
    document.getElementById("VelocidadesMemória").value = ""
    document.getElementById("MemóriaMáxima").value = ""
    document.getElementById("SuporteRAID").value = ""
    document.getElementById("SaídaVídeo").value = ""
    document.getElementById("SuporteSLI").value = ""
    document.getElementById("SuporteCrossFire").value = ""
    document.getElementById("PortasEthernet").value = ""
    document.getElementById("PortasSATAExpress").value = ""
    document.getElementById("SATA6Gbs").value = ""
    document.getElementById("HeaderUSB").value = ""
    document.getElementById("PortasUSBTypeC").value = ""
    document.getElementById("Cor").value = ""
    document.getElementById("urlImagem").value = "" 
}

$(function(){
    // bind change event to select
    $('#Componentes').on('change', function () {
        var url = $(this).val(); // get selected value
        if (url) { // require a URL
            window.location = url; // redirect
        }
        return false;
    });
  });



    /* Buscar dados selecionando o Campo
    memorias.where("Nome", "!=", "")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            
            console.log(doc.data().Nome);

        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
*/

 

function mostraBancoDados(collection, tableid) {	
    var memorias = db.collection(collection)
    var html = ""

    memorias.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            html += "<tr><td>" + doc.data().Nome + "</td></tr>"
            
        });
        var dataMemorias = document.getElementById(tableid)
        dataMemorias.innerHTML = html
    });
}


function compatibilidade(collection1, collection2, nomeComponente1, nomeComponente2){

    var componente1 = db.collection(collection1)
    var componente2 = db.collection(collection2)

    //compatibilidade entre MEMÓRIA E PLACA MÃE
    if(collection1 == "Memórias" && collection2 == "Placas-Mães"){
        var info1, info2;
        
        componente1.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().Nome == nomeComponente1)
                    info1 = doc.data().Velocidade
            }); 


            componente2.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().Nome == nomeComponente2)
                        info2 = doc.data().VelocidadesMemória
                }); 
                //Teste de compatibilidade aqui
                console.log("Velocidade da Memória (Memória RAM): " + info1)
                console.log("Velocidades da Memória (Placa-Mãe): " + info2)

                info1= info1.split("-")
                info2 = info2.split("-")
                var velocidades = []
                velocidades.push(info2[0])
                velocidades.push(info2[1].split(" / "))

                if(info1[0] == info2[0]){
                    console.log("Componente 1:" + info1[0] + "\nComponente 2: " + info2[0] + "\nDDR's Compatíveis");
                    if(info1[1] <= velocidades[1][velocidades[1].length - 1] && info1[1] >= velocidades[1][0]){
                        console.log("Velocidade Memória: " +info1[1])
                        console.log("Velocidades Placa-Mãe: " +velocidades[1][0] +"-"+velocidades[1][velocidades[1].length - 1])
                        console.log("Velocidade dentro da Variação da Placa-Mãe")
                    }
                    else
                        console.log("Velocidade da Memória incompatível com a Placa-Mãe")

                } else    
                    console.log("Componente 1:" + info1[0] + "\nComponente 2: " + info2[0] + "\nDDR's Incompatíveis");

                
                /* Nao valido para velocidades iguais ao cadastro
                for(var i = 0; i < velocidades[1].length; i++){
                    if(info1[1].includes(velocidades[1][i]))
                        console.log("Velocidade dentro da Variação da Placa-Mãe")
                }
                */
               
            });


        });

    }


}

//compatibilidade("Memórias", "Placas-Mães", "Corsair Vengeance Pro (RGB)", "Gigabyte B450M DS3H")
//compatibilidade("Memórias", "Placas-Mães", "Kingston ValueRAM (Verde)", "Gigabyte B460M GAMING HD")



function mostraOpcoes(collection, tableid) {	

    var memorias = db.collection(collection)
    var html = ""

    if(collection == "Memórias"){
       html = "<thead><th  scope= 'col' >Memória</th> <th scope='col'>Velocidade</th> <th scope='col'>Tipo</th> <th scope='col'>Módulos</th> <th scope='col'>Capacidade</th> <th scope='col'></th></thead>"
        memorias.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                html += "<tbody><tr><td style='width: 45%;'><img src =" + doc.data().urlImagem + " width=15%>  " + doc.data().Nome + "</td>"
                html += "<td>" + doc.data().Velocidade + "</td>"
                html += "<td>" + doc.data().Tipo + "</td>"
                html += "<td>" + doc.data().Módulo + "</td>"
                html += "<td>" + doc.data().Capacidade + "</td>"
                html += "<td><button onclick = 'addComponente(\""+doc.data().Nome+"\", \""+doc.data().urlImagem+"\")' class='btn btn-primary'>ADD</button></td></tr></tbody>"
            });
            var dataMemorias = document.getElementById(tableid)
            dataMemorias.innerHTML = html
            
        });
    }
    else if(collection == "Placas-Mães"){
            html = "<thead><th  scope= 'col'>Placa-Mãe</th> <th scope='col'>Socket CPU</th> <th scope='col'>Formato</th> <th scope='col'>Slots Memória</th> <th scope='col'>Memória Máx.</th> <th scope='col'></th></thead>"
            memorias.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    html += "<tbody><tr><td style='width: 35%;'><img src =" + doc.data().urlImagem + " width=15%>  " + doc.data().Nome + "</td>"
                    html += "<td>" + doc.data().SocketProcessador + "</td>"
                    html += "<td>" + doc.data().Formato + "</td>"
                    html += "<td>" + doc.data().SlotsMemória + "</td>"
                    html += "<td>" + doc.data().MemóriaMáxima + "</td>"
                    html += "<td><button onclick = 'addComponente(\""+doc.data().Nome+"\", \""+doc.data().urlImagem+"\")' class='btn btn-primary'>ADD</button></td></tr></tbody>"
                });
                var dataMemorias = document.getElementById(tableid)
                dataMemorias.innerHTML = html
            });
        }
}


$("#SelectOpcoes").change(function () {
    if ($(this).val() == "Memórias") {
      mostraOpcoes("Memórias", "opcoes")
    }
    else if($(this).val() == "Placas-Mães"){
        	mostraOpcoes("Placas-Mães", "opcoes")
    }
  });





function addComponente(nomeComponente, urlImagem){

    if(document.getElementById("imgComp1").getAttribute('value') == 0){
        document.getElementById("nomeComp1").innerHTML = nomeComponente
        document.getElementById("imgComp1").src = urlImagem; 
        document.getElementById("imgComp1").style.opacity = 1;
        document.getElementById("imgComp1").setAttribute('value', 1)
       document.getElementById("addComp1").innerHTML = "<img id = 'remove1' src='assets\\remove.png' onclick = 'removeComponente(this.id)'>"
       
        
    }else if(document.getElementById("imgComp2").getAttribute('value') == 0){
        document.getElementById("nomeComp2").innerHTML = nomeComponente
        document.getElementById("imgComp2").src = urlImagem; 
        document.getElementById("imgComp2").style.opacity = 1;
        document.getElementById("imgComp2").setAttribute('value', 1)
        document.getElementById("addComp2").innerHTML = "<img id = 'remove2' src='assets\\remove.png' onclick = 'removeComponente(this.id)'>"
        
    }

    if(document.getElementById("imgComp1").getAttribute('value') == 1 && document.getElementById("imgComp2").getAttribute('value') == 1)
        document.getElementById("verificar").setAttribute('class', 'btn btn-primary')
  
}

function removeComponente(id){
  
    if(id == 'remove1'){
        document.getElementById("nomeComp1").innerHTML = ""
        document.getElementById("imgComp1").src = document.getElementById("imgComp1").getAttribute('srcOriginal')
        document.getElementById("imgComp1").style.opacity = 0.3
        document.getElementById("imgComp1").setAttribute('value', 0)
        document.getElementById("remove1").remove()
    }else{    
        document.getElementById("nomeComp2").innerHTML = ""
        document.getElementById("imgComp2").src = document.getElementById("imgComp2").getAttribute('srcOriginal')
        document.getElementById("imgComp2").style.opacity = 0.3
        document.getElementById("imgComp2").setAttribute('value', 0)
        document.getElementById("remove2").remove()
    }

}

