const tabGroup = document.querySelector("tab-group");
  
tabGroup.setDefaultTab({
    title: "New tab",
    src: "default.html",
    active: true,
    ready: function(tab) {
        tab.element.classList.add("amethyst-tab");
    }
})

    
addDefaultTabFunc()
tabGroup.getTabByPosition(0).element.classList.toggle('end');


tabGroup.on("tab-added", (tab, tabGroup) => { 
    tab.element.classList.toggle('end');
    });

tabGroup.on("tab-active", (tab, tabGroup) => { 
    //console.log(tab.file_path);
    localStorage.setItem("active-file", tab.file_path);
 });

function addDefaultTabFunc() {
    tabGroup.addTab({
        title: "New tab",
        src: "default.html",
        active: true,
        ready: function(tab) {
          tab.element.classList.add("amethyst-tab");
        }
    });
}

export function addNewPage(file) {
    tabGroup.addTab({
      title: file.name,
      src: `page.html?file_path=${file.path}`,
      active: true,
      ready: function(tab) {
        tab.element.classList.add("amethyst-tab");
      }
    });
  }
  
