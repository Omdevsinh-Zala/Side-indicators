const main = document.getElementsByClassName("content-wrap");
const list = document.getElementsByClassName("link-list");
const times = 11;
function load() {
  for (let x = 1; x < times; x++) {
    let ele = document.createElement("div");
    ele.className = "high-class";
    ele.id = `s-${x}`;
    ele.innerText = `Section ${x}`;
    main[0].append(ele);
    let innerList = document.createElement("li");
    innerList.className = "link-items";
    let div = document.createElement("div");
    div.className = "link-item";
    let link = document.createElement("a");
    link.href = `#s-${x}`;
    link.className = "link";
    link.innerText = `Section ${x}`;
    div.append(link);
    innerList.append(div);
    list[0].append(innerList);
  }
}
load();
const sections = document.querySelectorAll(".high-class");
const links = document.querySelectorAll(".link");
function updateLinks() {
  sections.forEach((section) => {
    let x = section.getClientRects();
    if(window.innerWidth < 767) {
      if (x[0].y + x[0].height > 0 && x[0].y <= 100) {
        let link = document.querySelector(`a[href="#${section.id}"]`);
        links.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    } else {
      if (x[0].y + x[0].height > 0 && x[0].y <= 15) {
        let link = document.querySelector(`a[href="#${section.id}"]`);
        links.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");
      }
    }
  });
}
window.addEventListener("load", updateLinks);
window.addEventListener("scroll", updateLinks);
