function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
        var stars = "*".repeat(2 * i + 1);
        var space = " ".repeat(nFloors - i - 1);
        tower.push(space + stars + space);
    }
    return tower.join('\n');
}

function buildTower() {
    var nFloors = document.getElementById("floorInput").value;
    displayStars(parseInt(nFloors, 10)); // Parse the input as an integer
}

function displayStars(nFloors) {
    var starTower = towerBuilder(nFloors);
    var container = document.getElementById("starTower");
    container.innerHTML = ''; // Clear previous content

    var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    var lines = starTower.split('\n');

    for (var i = 0; i < lines.length; i++) {
        var lineElement = document.createElement("div");
        lineElement.textContent = lines[i];
        lineElement.style.color = colors[i % colors.length]; // Apply rainbow colors
        container.appendChild(lineElement);
    }
}

