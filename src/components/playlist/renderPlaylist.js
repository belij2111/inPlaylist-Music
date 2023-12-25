import { renderPlaylistHeader } from "./header/renderPlaylistHeader.js";
import { renderPlaylistTracks } from "./tracks/renderPlaylistTracks.js";

export function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);
    renderPlaylistTracks(playlistForRendering);
}