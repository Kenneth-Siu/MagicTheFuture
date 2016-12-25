import * as uuid from "uuid";

class Page {
    uuid: string;
    pageName: string;
    url: string;

    constructor(pageName: string, url: string) {
        this.uuid = uuid.v4();
        this.pageName = pageName;
        this.url = url;
    }
}

export const visualSpoiler = new Page("Visual Spoiler", "visualSpoiler.html");

export const primer = new Page("Draft Primer", "primer.html");

export const draftSim = new Page("Draft Simulator (WIP)", "draftSim.html");
