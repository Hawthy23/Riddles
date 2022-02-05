var Index = imgArray.length - 1;
startYear = imgArray[0]
lastYear = imgArray[imgArray.length - 1]

function displayUpdate(year) {

    var MapElement = document.querySelector("img");
    src = basePath + year + ".jpg"
    MapElement.src = src
    MapElement.alt = "Map of "+ParkName+" from " + year
    console.log(MapElement.style)
    document.getElementById("nav").style.height = MapElement.style.height
    var nav = document.getElementById("year")
    nav.innerText = year

    if (year == startYear) {
        document.getElementById("BackButton").disabled = true
    } else {
        document.getElementById("BackButton").disabled = false
    }
    if (year == lastYear) {
        document.getElementById("ForwardButton").disabled = true
    } else {
        document.getElementById("ForwardButton").disabled = false
    }

}

function displayUpdateStart() {
    displayUpdate(lastYear)
}
function MapBack() {
    Index = Index - 1
    year = imgArray[Index]
    displayUpdate(year)

}
function MapForward() {
    Index = Index + 1
    year = imgArray[Index]
    displayUpdate(year)

}

