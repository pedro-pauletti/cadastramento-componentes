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