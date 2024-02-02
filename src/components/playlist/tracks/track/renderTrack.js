export function renderTrack(TrackForRendering) {
	const trackElement = document.createElement("div")
	trackElement.className = "track"

	const coverElement = document.createElement("img")
	coverElement.className = "imgTrack"
	coverElement.src = TrackForRendering.coverImageUrl
	trackElement.append(coverElement)

	const nameElement = document.createElement("span")
	nameElement.className = "name"

	if (TrackForRendering.isTrend) {
		trackElement.append("🔥")
	}

	nameElement.append(TrackForRendering.artistName + " - ")
	trackElement.append(nameElement)

	const nameTitleElement = document.createElement("span")
	nameTitleElement.className = "nameTitle"
	nameTitleElement.append(TrackForRendering.title)
	trackElement.append(nameTitleElement)

	const audioElement = document.createElement("audio")
	audioElement.className = "audioTrack"
	audioElement.src = TrackForRendering.fileUrl
	audioElement.controls = true
	trackElement.append(audioElement)
	document.body.append(trackElement)
}
