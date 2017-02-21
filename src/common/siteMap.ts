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
    primer: new Page("Draft Primer", "primer.html"),
    draftSim: new Page("Draft Simulator (WIP)", "draftSim.html"),
    visualSpoiler: new Page("Visual Spoiler", "visualSpoiler.html"),
    powerRankings: new Page("Power Rankings", "powerRankings.html"),
    printing: new Page("Printing", "printing.html")
};

export const siteMapArray = [
    siteMapDictionary.home,
    siteMapDictionary.primer,
    siteMapDictionary.draftSim,
    siteMapDictionary.visualSpoiler,
    siteMapDictionary.powerRankings,
    siteMapDictionary.printing
];
