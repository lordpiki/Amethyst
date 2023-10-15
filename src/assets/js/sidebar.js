// script.js
document.getElementById("toggleSidebar").addEventListener("click", function () {
    const retractableSidebar = document.querySelector(".retractable-sidebar");
    const fixedSidebar = document.querySelector(".fixed-sidebar");
    const filler = document.querySelector(".filler");
    filler.style.borderColor = "#303030";
    filler.style.borderStyle = "solid";
    filler.style.borderWidth = "0 1px 0 1px";

    const hoverArea = document.getElementById("testId");
    console.log("Initial width:", hoverArea.offsetWidth);

    // Add this code where you suspect the width change is happening

    
    
    if (retractableSidebar.style.width === "200px") {
        
        retractableSidebar.style.width = "1px";
        
        // waiting 0.1s for the effect to look clean
        setTimeout(function() {
            fixedSidebar.style.backgroundColor = "transparent";
        }, 100);
    } 
    else {
        retractableSidebar.style.width = "200px";
        fixedSidebar.style.backgroundColor = "#262626";
        
    }

    setTimeout(function() {
        console.log("Updated width:", hoverArea.offsetWidth);
    }, 500);
});
  