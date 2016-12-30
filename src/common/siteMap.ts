import * as uuid from "uuid";
import * as React from "react";

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
    home: new Page("Magic: the Convergence", "home.html"),
    visualSpoiler: new Page("Visual Spoiler", "visualSpoiler.html"),
    primer: new Page("Draft Primer", "primer.html"),
    draftSim: new Page("Draft Simulator (WIP)", "draftSim.html"),
    powerRankings: new Page("Power Rankings", "powerRankings.html")
};

export const siteMapArray = [
    siteMapDictionary.home,
    siteMapDictionary.visualSpoiler,
    siteMapDictionary.primer,
    siteMapDictionary.draftSim,
    siteMapDictionary.powerRankings
];
