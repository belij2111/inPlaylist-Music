import { renderPlaylist } from "./playlist/renderPlaylist.js";

export function renderPlaylists(inputPlaylists) {
    for (let i = 0; i < inputPlaylists.length; i++) {
        renderPlaylist(inputPlaylists[i]);
    }
}