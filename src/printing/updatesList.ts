import * as _ from "lodash";

const updatesList = [
    "Comms Disruptor",
    "Cultural Renaissance",
    "Helios Comms Satellite",
    "Heroic Act",
    "Mesosphere Dancer",
    "Wiendahl Carrier",
    "Coordinate Scrambler",
    "W.A.S.P. Advance Prototype",
    "Deprivation Torture",
    "Peacekeeper Satellite",
    "Prototype Evader",
    "State of Disrepair",
    "Warapur Contract",
    "Adopted Wanderer",
    "Al Maham Protector",
    "Cache Acquisition",
    "Chentsov Scylla",
    "Coulomb Chargers",
    "Guerilla Fighters",
    "Hire Artillery",
    "Mindmeld Battlesuit",
    "Walking Furnace",
    "Failed Kushak Subject",
    "Genome Toggle",
    "Kushak Artifact",
    "Unstable Growth",
    "Publicity Officer",
    "Gravitic Collector Alpha",
    "CEO Umida Koto"
];

export default _.map(updatesList, cardName => {
    return `../dist/${require(`../common/resources/images/${cardName}.jpg`)}`;
});