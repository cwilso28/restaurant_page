function loadMenu() {
    let divContainer = document.getElementById("content");

    let itemOneContainer = document.createElement("div");
    divContainer.append(itemOneContainer);

    let itemTwoContainer = document.createElement("div");
    divContainer.append(itemTwoContainer);

    let itemThreeContainer = document.createElement("div");
    divContainer.append(itemThreeContainer);

    let itemOneDisc = document.createElement("p");
    itemOneDisc.textContent = "Item one placeholder";
    itemOneContainer.append(itemOneDisc);

    let itemTwoDisc = document.createElement("p");
    itemTwoDisc.textContent = "Item two placeholder";
    itemTwoContainer.append(itemTwoDisc);

    let itemThreeDisc = document.createElement("p");
    itemThreeDisc.textContent = "Item three placeholder";
    itemThreeContainer.append(itemThreeDisc);
}

export { loadMenu }