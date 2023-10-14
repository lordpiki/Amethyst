const tabGroup = document.querySelector("tab-group");
  
tabGroup.setDefaultTab({
    title: "New tab",
    src: "default.html",
    active: true,
    ready: function(tab) {
        tab.element.classList.add("amethyst-tab");
        tab.on("closing", (tab, abort) => { 
            console.log("here");
            tab.element.classList.toggle('end');
        });
    }
})

    
addTabFunc()
tabGroup.getTabByPosition(0).element.classList.toggle('end');


tabGroup.on("tab-added", (tab, tabGroup) => { 
    tab.element.classList.toggle('end');
    });


function addTabFunc() {

    tabGroup.addTab({
        title: "New tab",
        src: "default.html",
        active: true,
        ready: function(tab) {
          tab.element.classList.add("amethyst-tab");
        }
    });

    
}