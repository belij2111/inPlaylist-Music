import { renderCoverHeader } from "./cover/renderCoverHeader.js";
import { renderTitleHeader } from "./title/renderTitleHeader.js";

export function renderPlaylistHeader(headerForRendering) {
    renderCoverHeader(headerForRendering);
    renderTitleHeader(headerForRendering);
}