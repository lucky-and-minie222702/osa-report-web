function toggleView() {
	const btn = document.getElementById("toggle-view");
	btn.addEventListener("click", () => {
		const elePages = document.getElementsByClassName("report-pages");
		const eleContainer = document.getElementById("pdf-container");

		if (btn.textContent == "View horizontally") {
			for (var i = 0; i < elePages.length; i++) {
				elePages[i].style.marginLeft = "15px";
				elePages[i].style.marginRight = "15px";
			}
			eleContainer.style.flexDirection = "row";
			eleContainer.style.alignItems = "normal";
		} else {
			for (var i = 0; i < elePages.length; i++) {
				elePages[i].style.marginRight = "0px";
				elePages[i].style.marginLeft = "0px";
			}
			eleContainer.style.flexDirection = "column";
			eleContainer.style.alignItems = "center";
		}

		if (btn.textContent == "View horizontally")
			btn.textContent = "View vertically";
		else btn.textContent = "View horizontally";
	});
}

function toggleAppearance() {
	const btn = document.getElementById("toggle-appearance");
	btn.addEventListener("click", () => {
		const elePages = document.getElementsByClassName("report-pages");
		const eleBtn = document.getElementsByClassName("btn");
		const app = document.getElementById("app");

		if (btn.textContent == "Dark mode") {
			for (var i = 0; i < elePages.length; i++) {
				elePages[i].style.filter = "invert(1)";
			}
			for (var i = 0; i < eleBtn.length; i++) {
				eleBtn[i].classList.add("btn-dark");
			}
			app.style.backgroundColor = "black";
		} else {
			for (var i = 0; i < elePages.length; i++) {
				elePages[i].style.filter = "inherit";
			}
			for (var i = 0; i < eleBtn.length; i++) {
				eleBtn[i].classList.remove("btn-dark");
			}
			app.style.backgroundColor = "white";
		}

		if (btn.textContent == "Dark mode") btn.textContent = "Light mode";
		else btn.textContent = "Dark mode";
	});
}

toggleView();
toggleAppearance();