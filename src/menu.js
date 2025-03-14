function menuItem(name, description, price, image, image_description) {
    let itemContainer = document.createElement("div");
    itemContainer.id = "menu-container";
    
    let itemHeader = document.createElement("h2");
    itemHeader.textContent = name;

    let itemDesc = document.createElement("p");
    itemDesc.textContent = description;

    let itemPrice = document.createElement("p");
    itemPrice.textContent = price;

    let itemImage = document.createElement("img");
    itemImage.src = image;
    itemImage.alt = image_description;

    itemContainer.append(itemHeader);
    itemContainer.append(itemDesc);
    itemContainer.append(itemPrice);
    itemContainer.append(itemImage);

    return {itemContainer};
}

function menuContent() {
    let divContainer = document.getElementById("content");

    let applePieTitle = "Apple Pie";
    let applePieDesc = "This is our apple pie. It's a modern take on a classic recipe! You won't be disappointed. WARNING! CONTAINS APPLES.";
    let applePiePrice = "$10.99";
    let applePieImage = "www.example.com";
    let applePieImageDesc = "A slice of our apple pie";

    let applePieContainer = menuItem(applePieTitle, applePieDesc, applePiePrice, applePieImage, applePieImageDesc).itemContainer;
    divContainer.append(applePieContainer);

    let blueberryPieTitle = "Blueberry Pie";
    let blueberryPieDesc = "Do you like the color blue? Do you like berries? Then you'll love our blueberry pie! This combination of the color blue and berries is sure to please the blueberry fan in your family!";
    let blueberryPiePrice = "$9.99";
    let blueberryPieImage = "www.example.com";
    let blueberryPieImageDesc = "A slice of our blueberry pie"

    let blueberryPieContainer = menuItem(blueberryPieTitle, blueberryPieDesc, blueberryPiePrice, blueberryPieImage, blueberryPieImageDesc).itemContainer;
    divContainer.append(blueberryPieContainer);

    let pecanPieTitle = "Pecan Pie";
    let pecanPieDesc = "Stop buying this pie. We hate making it but you people keep buying it. STOP!"
    let pecanPiePrice = "$49.99";
    let pecanPieImage = "www.example.com";
    let pecanPieImageDesc = "A slice of our pecan pie";

    let pecanPieContainer = menuItem(pecanPieTitle, pecanPieDesc, pecanPiePrice, pecanPieImage, pecanPieImageDesc).itemContainer;
    divContainer.append(pecanPieContainer);

    // let itemOneContainer = document.createElement("div");
    // itemOneContainer.id = "menu-container";
    // divContainer.append(itemOneContainer);

    // let itemTwoContainer = document.createElement("div");
    // itemTwoContainer.id = "menu-container";
    // divContainer.append(itemTwoContainer);

    // let itemThreeContainer = document.createElement("div");
    // itemThreeContainer.id = "menu-container";
    // divContainer.append(itemThreeContainer);

    // let itemOneDisc = document.createElement("p");
    // let itemOneHeader = document.createElement("h2");
    // let itemOneImg = document.createElement("img");
    // itemOneHeader.textContent = "Apple Pie"
    // itemOneContainer.append(itemOneHeader);
    // itemOneDisc.textContent = "This is our apple pie. It's a modern take on a classic recipe! You won't be disappointed. WARNING! CONTAINS APPLES.";
    // itemOneContainer.append(itemOneDisc);
    // itemOneImg.src = "www.example.com";
    // itemOneImg.alt = "Apple pie";
    // itemOneContainer.append(itemOneImg);

    // let itemTwoDisc = document.createElement("p");
    // itemTwoDisc.textContent = "Item two placeholder";
    // itemTwoContainer.append(itemTwoDisc);

    // let itemThreeDisc = document.createElement("p");
    // itemThreeDisc.textContent = "Item three placeholder";
    // itemThreeContainer.append(itemThreeDisc);
}

export { menuContent }