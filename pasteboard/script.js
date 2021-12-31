var imageURL = document.querySelector("input");

function addImage() {
	var newImg = document.createElement("img");
	var childDest = document.querySelector(".container");
	newImg.src = imageURL.value;
	childDest.appendChild(newImg);
	imageURL.value = ""
}

var imageBtn = document.querySelector("button");
imageBtn.addEventListener("click", addImage);