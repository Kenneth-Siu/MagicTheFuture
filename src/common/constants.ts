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

export const visualSpoiler = new Page("Visual Spoiler", "visualSpoiler");

export const draftSim = new Page("Draft Simulator (WIP)", "draftSim");
