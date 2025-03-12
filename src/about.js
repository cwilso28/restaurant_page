function loadAbout () {
    let aboutContainer = document.getElementById("content");

    let header = document.createElement("h1");
    header.textContent = "About Us";

    aboutContainer.append(header);
}

export { loadAbout };