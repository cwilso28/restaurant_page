// This module hosts the home page information for the website.

import pieImage from "./hugo-aitken-PqYvDBwpXpU-unsplash.jpg";

function loadHome() {   

    let contentDiv = document.getElementById("content");
    // alert("Home Loaded!")
    

    // let header = document.querySelector("header")
    // let title = document.createElement("h1");
    // title.textContent = "Guy's Pies";
    // header.prepend(title);

    let welcomeText = document.createElement("p");
    welcomeText.textContent = "Welcome to Guy's Pies! These will be the best pies you've ever had, or your money back. We have pies for every occasion or if you're just in the mood for a sweet treat. Stop on in or order online. We deliver!";
    contentDiv.append(welcomeText);

    let imageDiv = document.createElement("div");
    contentDiv.append(imageDiv);
    
    let image = document.createElement("img");
    image.src = pieImage;
    image.alt = "Apple pie with a slice taken out";
    image.id = "home-img";
    imageDiv.append(image);

    let imageAttr = document.createElement("p");
    imageAttr.innerHTML = 'Photo by <a href="https://unsplash.com/@hugoaitken?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hugo Aitken</a> on <a href="https://unsplash.com/photos/apple-pie-on-black-palte-PqYvDBwpXpU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
    imageDiv.append(imageAttr);
}

export { loadHome }