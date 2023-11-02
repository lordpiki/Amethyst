// script.js
document.getElementById("toggleSidebar").addEventListener("click", function () {
    const retractableSidebar = document.querySelector(".retractable-sidebar");
    const fixedSidebar = document.querySelector(".fixed-sidebar");
    const filler = document.querySelector(".filler");
    const fileListContainer = document.getElementById('file-list-container');

    filler.style.borderColor = "#303030";
    filler.style.borderStyle = "solid";
    filler.style.borderWidth = "0 1px 0 1px";
    
    

    
    
    if (retractableSidebar.style.width === "200px") {
        
        retractableSidebar.style.width = "1px";
        fileListContainer.style.width = "0px";
        filler.style.borderWidth = "0 1px 0 0px";
        
        // waiting 0.1s for the effect to look clean
        setTimeout(function() {
            fixedSidebar.style.backgroundColor = "transparent";
        }, 100);
    } 
    else {
        retractableSidebar.style.width = "200px";
        fileListContainer.style.width = "200px";
        fixedSidebar.style.backgroundColor = "#262626";
        
    }

});
  