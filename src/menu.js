// class menuItem {
//     constructor(name, description, image) {
//         this.name;
//         this.description;
//         this.image;
//     }

//     itemDesc = document.createElement("p");
//     itemDesc.textContent = this.description;
// }

function menuItem(name, description, image, image_description) {
    let itemContainer = document.createElement("div");
    itemContainer.id = "menu-container";
    
    let itemHeader = document.createElement("h2");
    itemHeader.textContent = name;

    let itemDesc = document.createElement("p");
    itemDesc.textContent = description;

    let itemImage = document.createElement("img");
    itemImage.src = image;
    itemImage.alt = image_description;

    itemContainer.append(itemHeader);
    itemContainer.append(itemDesc);
    itemContainer.append(itemImage);

    return {itemContainer};
}

function menuContent() {
    let divContainer = document.getElementById("content");

    let itemOneContainer = document.createElement("div");
    itemOneContainer.id = "menu-container";
    divContainer.append(itemOneContainer);

    let itemTwoContainer = document.createElement("div");
    itemTwoContainer.id = "menu-container";
    divContainer.append(itemTwoContainer);

    let itemThreeContainer = document.createElement("div");
    itemThreeContainer.id = "menu-container";
    divContainer.append(itemThreeContainer);

    let itemOneDisc = document.createElement("p");
    let itemOneHeader = document.createElement("h2");
    let itemOneImg = document.createElement("img");
    itemOneHeader.textContent = "Apple Pie"
    itemOneContainer.append(itemOneHeader);
    itemOneDisc.textContent = "This is our apple pie. It's a modern take on a classic recipe! You won't be disappointed. WARNING! CONTAINS APPLES.";
    itemOneContainer.append(itemOneDisc);
    itemOneImg.src = "www.example.com";
    itemOneImg.alt = "Apple pie";
    itemOneContainer.append(itemOneImg);

    let itemTwoDisc = document.createElement("p");
    itemTwoDisc.textContent = "Item two placeholder";
    itemTwoContainer.append(itemTwoDisc);

    let itemThreeDisc = document.createElement("p");
    itemThreeDisc.textContent = "Item three placeholder";
    itemThreeContainer.append(itemThreeDisc);
}

export { menuContent }