import { renderTrack } from "./track/renderTrack.js"

export function renderPlaylistTracks(inputTracksForRendering) {
	for (let i = 0; i < inputTracksForRendering.tracks.length; i++) {
		renderTrack(inputTracksForRendering.tracks[i])
	}
}
