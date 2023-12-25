export function renderTitleHeader(titleForRendering) {
    const titleContainerElement = document.createElement("div");
    titleContainerElement.className = "container-header";

    const commonNameElement = document.createElement("h2");
    commonNameElement.className = "common-name";
    commonNameElement.append(titleForRendering.commonName);

    const titleElement = document.createElement("h2");
    titleElement.className = "title-header";
    titleElement.append(titleForRendering.title);

    const totalTracks = document.createElement("span");
    totalTracks.className = "total-tracks";
    totalTracks.append(titleForRendering.tracks.length + " tracks,");

    const totalDuration = document.createElement("span");
    totalDuration.className = "total-duration";
    totalDuration.append(titleForRendering.info.totalTracksDurationInSeconds + " (make a function)");

    const listOfArtists = document.createElement("h2");
    listOfArtists.className = "list-of-artists";
    listOfArtists.append("(make a function)");

    const commentForList = document.createElement("span");
    commentForList.className = "comment-for-List";
    commentForList.append("and others");

    titleContainerElement.append(commonNameElement, titleElement, totalTracks, totalDuration, listOfArtists, commentForList);
    document.body.append(titleContainerElement);
}