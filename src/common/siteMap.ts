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

export const siteMapDictionary = {
    visualSpoiler: new Page("Visual Spoiler", "visualSpoiler.html"),
    primer: new Page("Draft Primer", "primer.html"),
    draftSim: new Page("Draft Simulator (WIP)", "draftSim.html"),
    powerRankings: new Page("Power Rankings (WIP)", "powerRankings.html")
};

export const siteMapArray = [
    siteMapDictionary.visualSpoiler,
    siteMapDictionary.primer,
    siteMapDictionary.draftSim,
    siteMapDictionary.powerRankings
];
