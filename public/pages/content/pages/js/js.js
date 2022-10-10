//TODO: unify all content page functions into single function

const contentDiv = document.getElementById("content")

fakeDB.forEach(piece => {
    if (piece.type === "js") {
        const titleDiv = document.createElement("h2");
        const bodyDiv = document.createElement("p");
        titleDiv.innerText = piece.title;
        bodyDiv.innerText = piece.body;
    
        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(bodyDiv);

        if (piece.img !== undefined) {
            const img = document.createElement("img");
            img.src = piece.img;
            img.alt = piece.title;
            img.style= "display: block;margin:auto;"
            contentDiv.append(img)
        }
    } 
})
