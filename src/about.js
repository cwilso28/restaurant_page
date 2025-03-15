function aboutContent () {
    let container = document.getElementById("content");
    let aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";
    let hoursContainer = document.createElement("div");
    hoursContainer.id = "hours-container";

    let header = document.createElement("h1");
    header.textContent = "About Us";

    let aboutDesc = document.createElement("p");
    aboutDesc.textContent = "Our team at Guy's Pies is made up of Guy and Lisa. We started back in 2005 after leaving our corporate jobs to make pies. Guy comes from a long line of pie makers and was taught the art of pie making by his grandparents. Lisa started making pies as a kid as a hobby as just never stopped! Our pies are made with only the best ingredients, and a touch of love and care. Except for the pecan pie.";
    
    aboutContainer.append(header);
    aboutContainer.append(aboutDesc);

    let hoursHeader = document.createElement("h1");
    hoursHeader.textContent = "Hours";

    let sunday = document.createElement("p");
    sunday.textContent = "Sunday: Closed";
    
    let monday = document.createElement("p");
    monday.textContent = "Monday: Closed";

    let tuesday = document.createElement("p");
    tuesday.textContent = "Tuesday: 8:00am - noon";

    let wednesday = document.createElement("p");
    wednesday.textContent = "Wednesday: 1:00pm - 5:00pm"

    let thursday = document.createElement("p");
    thursday.textContent = "Thursday: 8:00am - noon";

    let friday = document.createElement("p");
    friday.textContent = "Friday: 8:00am - noon";

    let saturday = document.createElement("p");
    saturday.textContent = "Saturday: 8:00am - noon";

    hoursContainer.append(hoursHeader);
    hoursContainer.append(sunday);
    hoursContainer.append(monday);
    hoursContainer.append(tuesday);
    hoursContainer.append(wednesday);
    hoursContainer.append(thursday);
    hoursContainer.append(friday);
    hoursContainer.append(saturday);

    container.append(aboutContainer);
    container.append(hoursContainer);    
}

export { aboutContent };