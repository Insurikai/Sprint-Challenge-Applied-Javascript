// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.querySelector(".header-container").appendChild(document.createElement("div"));
    header.classList.add("header");
    const date = header.appendChild(document.createElement("span"));
    date.classList.add("date");
    date.textContent = "SMARCH 28, 2019";
    header.appendChild(document.createElement("h1")).textContent = "Lambda Times";
    console.log(header);
}
Header();