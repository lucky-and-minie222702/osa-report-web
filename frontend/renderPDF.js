const url = "report.pdf";
const pdfjsLib = window["pdfjs-dist/build/pdf"];
pdfjsLib.GlobalWorkerOptions.workerSrc =
	"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

const container = document.getElementById("pdf-container");

function renderPage(page, scale) {
	const viewport = page.getViewport({ scale });

	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	canvas.width = viewport.width;
	canvas.height = viewport.height;
	canvas.setAttribute("class", "report-pages");
	container.appendChild(canvas);

	const renderContext = {
		canvasContext: ctx,
		viewport: viewport,
	};
	return page.render(renderContext).promise;
}

pdfjsLib
	.getDocument(url)
	.promise.then((pdf) => {
		const scale = 1.5;
		for (let i = 1; i <= pdf.numPages; i++) {
			pdf.getPage(i).then((page) => renderPage(page, scale));
		}
	})
	.catch((error) => {
		console.error("Error loading PDF:", error);
	});
