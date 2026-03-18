import * as topojson from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";

export interface CountryFeature {
  id: string; // ISO 3166-1 numeric
  name: string;
  geometry: GeoJSON.Geometry;
}

/**
 * Load 50m resolution country data with names and borders.
 * Returns individual country features for per-country highlighting.
 */
export async function loadCountryData(): Promise<CountryFeature[]> {
  const topoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

  const response = await fetch(topoUrl);
  const topo = (await response.json()) as Topology;

  const countries = topojson.feature(
    topo,
    topo.objects.countries as GeometryCollection,
  ) as unknown as GeoJSON.FeatureCollection;

  return countries.features.map((f) => ({
    id: (f as unknown as { id: string }).id ?? "",
    name: f.properties?.name ?? "Unknown",
    geometry: f.geometry,
  }));
}

/**
 * Load merged land boundaries (for the base coastline layer).
 */
export async function loadLandData(): Promise<GeoJSON.FeatureCollection> {
  const topoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

  const response = await fetch(topoUrl);
  const topo = (await response.json()) as Topology;

  const land = topojson.feature(
    topo,
    topo.objects.land as GeometryCollection,
  );

  if (land.type === "FeatureCollection") {
    return land as unknown as GeoJSON.FeatureCollection;
  }
  return {
    type: "FeatureCollection",
    features: [land as unknown as GeoJSON.Feature],
  };
}
