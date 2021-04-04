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
compatibilidade("Memórias", "Placas-Mães", "Kingston ValueRAM (Verde)", "Gigabyte B460M GAMING HD")