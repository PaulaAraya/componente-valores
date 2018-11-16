/* Funciones para cambio de Tab */

//  funcion activar tab al inicio 
document.getElementById("defaultOpen").click();

// funcion para cambio de tab
function openTab(event, tab) {
    let i, descriptions, btnTab;

    descriptions = document.getElementsByClassName("descriptions");
    for (i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
    }
    btnTab = document.getElementsByClassName("btnTab");
    for (i = 0; i < btnTab.length; i++) {
        btnTab[i].className = btnTab[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    event.currentTarget.className += " active";
}