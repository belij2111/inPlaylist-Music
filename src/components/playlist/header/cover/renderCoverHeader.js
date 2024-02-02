export function renderCoverHeader(coverForRendering) {
	const coverContainerElement = document.createElement("div")
	coverContainerElement.className = "container-cover-header"

	const coverElement = document.createElement("img")
	coverElement.className = "cover-header"
	coverElement.src = coverForRendering.coverImageUrl
	coverContainerElement.append(coverElement)
	document.body.append(coverContainerElement)
}
