import applePieImageImport from "./diliara-garifullina-D7X-GMeTV7U-unsplash.jpg";
import blueberryPieImageImport from "./olga-kudriavtseva-JJwG_9s2NY8-unsplash.jpg";
import pecanPieImageImport from "./keighla-exum-wnn9GuvXIZ4-unsplash.jpg"

function menuItem(name, description, price, image, image_description, image_attr) {
    let itemContainer = document.createElement("div");
    itemContainer.id = "menu-container";
    
    let itemHeader = document.createElement("h2");
    itemHeader.textContent = name;

    let itemDesc = document.createElement("p");
    itemDesc.textContent = description;

    let itemPrice = document.createElement("p");
    itemPrice.textContent = price;

    let imageContainer = document.createElement("div");
    imageContainer.id = "image-container";
    let itemImage = document.createElement("img");
    let imageAttr = document.createElement("p");
    itemImage.src = image;
    itemImage.alt = image_description;
    imageAttr.innerHTML = image_attr;
    imageContainer.append(itemImage);
    imageContainer.append(imageAttr);

    itemContainer.append(itemHeader);
    itemContainer.append(itemDesc);
    itemContainer.append(itemPrice);
    itemContainer.append(imageContainer);

    return {itemContainer};
}

function menuContent() {
    let divContainer = document.getElementById("content");

    let applePieTitle = "Apple Pie";
    let applePieDesc = "This is our apple pie. It's a modern take on a classic recipe! You won't be disappointed. WARNING! CONTAINS APPLES.";
    let applePiePrice = "$10.99";
    let applePieImage = applePieImageImport;
    let applePieImageDesc = "A slice of our apple pie";
    let applePieImageAttr = 'Photo by <a href="https://unsplash.com/@dilja96?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Diliara Garifullina</a> on <a href="https://unsplash.com/photos/brown-sliced-cake-on-round-white-ceramic-saucer-D7X-GMeTV7U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';

    let applePieContainer = menuItem(applePieTitle, applePieDesc, applePiePrice, applePieImage, applePieImageDesc, applePieImageAttr).itemContainer;
    divContainer.append(applePieContainer);

    let blueberryPieTitle = "Blueberry Pie";
    let blueberryPieDesc = "Do you like the color blue? Do you like berries? Then you'll love our blueberry pie! This combination of the color blue and berries is sure to please the blueberry fan in your family!";
    let blueberryPiePrice = "$9.99";
    let blueberryPieImage = blueberryPieImageImport;
    let blueberryPieImageDesc = "A slice of our blueberry pie"
    let blueberryPieImageAttr = 'Photo by <a href="https://unsplash.com/@smakoladka?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Olga Kudriavtseva</a> on <a href="https://unsplash.com/photos/blueberry-cake-JJwG_9s2NY8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';

    let blueberryPieContainer = menuItem(blueberryPieTitle, blueberryPieDesc, blueberryPiePrice, blueberryPieImage, blueberryPieImageDesc, blueberryPieImageAttr).itemContainer;
    divContainer.append(blueberryPieContainer);

    let pecanPieTitle = "Pecan Pie";
    let pecanPieDesc = "Stop buying this pie. We hate making it but you people keep buying it. STOP!"
    let pecanPiePrice = "$49.99";
    let pecanPieImage = pecanPieImageImport;
    let pecanPieImageDesc = "A slice of our pecan pie";
    let pecanPieImageAttr = 'Photo by <a href="https://unsplash.com/@kexum96?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Keighla Exum</a> on <a href="https://unsplash.com/photos/brown-pie-on-white-ceramic-plate-wnn9GuvXIZ4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';

    let pecanPieContainer = menuItem(pecanPieTitle, pecanPieDesc, pecanPiePrice, pecanPieImage, pecanPieImageDesc, pecanPieImageAttr).itemContainer;
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