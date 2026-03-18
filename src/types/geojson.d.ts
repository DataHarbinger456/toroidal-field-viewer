// GeoJSON type declarations (RFC 7946)
declare namespace GeoJSON {
  interface Position extends Array<number> {
    0: number;
    1: number;
    2?: number;
  }

  interface FeatureCollection {
    type: "FeatureCollection";
    features: Feature[];
  }

  interface Feature {
    type: "Feature";
    geometry: Geometry;
    properties: Record<string, unknown> | null;
  }

  type Geometry =
    | Point
    | MultiPoint
    | LineString
    | MultiLineString
    | Polygon
    | MultiPolygon
    | GeometryCollection;

  interface Point {
    type: "Point";
    coordinates: number[];
  }

  interface MultiPoint {
    type: "MultiPoint";
    coordinates: number[][];
  }

  interface LineString {
    type: "LineString";
    coordinates: number[][];
  }

  interface MultiLineString {
    type: "MultiLineString";
    coordinates: number[][][];
  }

  interface Polygon {
    type: "Polygon";
    coordinates: number[][][];
  }

  interface MultiPolygon {
    type: "MultiPolygon";
    coordinates: number[][][][];
  }

  interface GeometryCollection {
    type: "GeometryCollection";
    geometries: Geometry[];
  }
}
