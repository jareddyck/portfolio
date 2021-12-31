var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.querySelectorAll(".delete");
var liList = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

for ( index = 0; index < deleteBtns.length; index++) {
	deleteBtns[index].addEventListener("click", removeParent)
}

for ( index = 0; index < liList.length; index++) {
	liList[index].addEventListener("click", toggleClass)
}

// adapted from https://github.com/NickPax/shopping-list/blob/master/script.js
function removeParent(param) {
	param.target.removeEventListener("click", removeParent);
	param.target.removeEventListener("click", toggleClass);
	param.target.parentNode.remove();
  }

  function toggleClass(param) {
	param.target.classList.toggle("completed");
  }


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var deleteBtn = document.createElement("button");
	var deleteBtnText = document.createTextNode("X");
	deleteBtn.appendChild(deleteBtnText);
	deleteBtn.className = "delete";
	deleteBtn.addEventListener("click", removeParent)
	li.addEventListener("click", toggleClass)
	li.appendChild(deleteBtn);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);





// function toggleDone(params) {
// 	var toggleWeed = document.querySelector("li.bold red")
// }

//image pinboard idea

function addImage(url) {
		var newImg = document.createElement("img");
		var childDest = document.querySelector(".container");
		newImg.src = url;
		newImg.style.width = "100px"
		newImg.style.height = "100px"
		// document.body.appendChild(newImg);
		childDest.appendChild(newImg);
}

// addImage("https://cpmr-islands.org/wp-content/uploads/sites/4/2019/07/test.png");