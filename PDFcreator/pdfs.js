
function textoChange(){
    texto = document.getElementById("texto").value;
}

function textoChange2(){
    texto2 = document.getElementById("texto2").value;
}



function createPDF(){
    const doc = new jsPDF();
    doc.text(texto, 10, 10);
    doc.text(texto2, 10, 30);
    doc.save("primer_ejemplo.pdf");
}