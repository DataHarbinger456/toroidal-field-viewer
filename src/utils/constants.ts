// Horn torus parameters
// Parametric: x = R(1+cosV)cosU, y = R·sinV, z = R(1+cosV)sinU
// R = major radius (tube center to torus center = tube radius for horn torus)
// For a horn torus: major radius = minor radius, so tube passes through center
export const TORUS_R = 1.0;

// Wireframe resolution
export const MERIDIAN_COUNT = 64; // lines running pole-to-pole (U divisions)
export const PARALLEL_COUNT = 48; // rings around the tube (V divisions)

// Disc
export const DISC_RADIAL_SEGMENTS = 96;
export const DISC_RING_SEGMENTS = 64;

// Map grid
export const LAT_LINES = [
  -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80,
];
export const LON_LINES = [
  0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285,
  300, 315, 330, 345,
];

// Camera
export const CAMERA_FOV = 45;
export const CAMERA_NEAR = 0.01;
export const CAMERA_FAR = 100;
export const CAMERA_DISTANCE = 5;

// Export
export const EXPORT_SCALE = 3; // multiplier for PNG resolution
