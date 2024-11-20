function toggleView() {
	const btn = document.getElementById("toggle-view");
	btn.addEventListener("click", () => {
		const elePages = document.getElementsByClassName("report-pages");
		const eleContainer = document.getElementById("pdf-container");

		if (btn.textContent == "View horizontally") {
			eleContainer.setAttribute("style", "transform-origin: top left");
			eleContainer.style.flexDirection = "row";
			eleContainer.style.alignItems = "normal";
		} else {
			eleContainer.setAttribute("style", "transform-origin: top");
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
				elePages[i].setAttribute(
					"style",
					"filter: invert(1) hue-rotate(180deg) brightness(1.2);"
				);
			}
			for (var i = 0; i < eleBtn.length; i++) {
				eleBtn[i].classList.add("btn-dark");
			}
			app.setAttribute("style", "background-color: black !important");
		} else {
			for (var i = 0; i < elePages.length; i++) {
				elePages[i].style.filter = "none";
			}
			for (var i = 0; i < eleBtn.length; i++) {
				eleBtn[i].classList.remove("btn-dark");
			}
			app.setAttribute("style", "background-color: white !important");
		}

		if (btn.textContent == "Dark mode") btn.textContent = "Light mode";
		else btn.textContent = "Dark mode";
	});
}

toggleView();
toggleAppearance();
