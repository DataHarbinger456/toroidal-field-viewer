import * as topojson from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";

/**
 * Load world-atlas TopoJSON and convert to GeoJSON FeatureCollection.
 * Uses the 110m resolution (lightweight) from the world-atlas package.
 */
export async function loadContinentData(): Promise<GeoJSON.FeatureCollection> {
  const topoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  const response = await fetch(topoUrl);
  const topo = (await response.json()) as Topology;

  // Extract the "land" object (merged landmasses)
  const objectKey = topo.objects.land ? "land" : Object.keys(topo.objects)[0];
  const geojson = topojson.feature(
    topo,
    topo.objects[objectKey] as GeometryCollection,
  );

  // topojson.feature returns Feature or FeatureCollection depending on input
  if (geojson.type === "FeatureCollection") {
    return geojson as unknown as GeoJSON.FeatureCollection;
  }
  return {
    type: "FeatureCollection",
    features: [geojson as unknown as GeoJSON.Feature],
  };
}
