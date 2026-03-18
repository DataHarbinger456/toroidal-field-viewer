import type * as THREE from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/** Radians per second for the auto-orbit rotation. */
const ORBIT_SPEED_RAD_S = 0.2;
/** Vertical bob amplitude (world units). */
const BOB_AMPLITUDE = 0.3;
/** Vertical bob frequency (cycles per second). */
const BOB_FREQUENCY = 0.08;

/**
 * Auto-orbit camera animation for demo / presentation mode.
 * Uses OrbitControls' built-in autoRotate for smooth integration.
 */
export class PresentationMode {
  private active = false;
  private controls: OrbitControls | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private baseY = 0;
  private startTime = 0;
  private animFrameId = 0;
  private savedEnableRotate = true;
  private savedEnablePan = true;
  private savedEnableZoom = true;

  get isActive(): boolean {
    return this.active;
  }

  /** Begin auto-orbit. Disables manual interaction. */
  start(controls: OrbitControls, camera: THREE.PerspectiveCamera): void {
    if (this.active) return;

    this.controls = controls;
    this.camera = camera;
    this.active = true;

    // Save current interaction state so we can restore later
    this.savedEnableRotate = controls.enableRotate;
    this.savedEnablePan = controls.enablePan;
    this.savedEnableZoom = controls.enableZoom;

    // Disable manual orbit
    controls.enableRotate = false;
    controls.enablePan = false;
    controls.enableZoom = false;

    // Enable auto-rotate via OrbitControls
    // autoRotateSpeed is in units of "rotations per 60 seconds at 60 fps"
    // 2 * PI per 60 s = ~0.105 rad/s → speed 1.0
    // We want 0.2 rad/s → speed ≈ 1.9
    controls.autoRotate = true;
    controls.autoRotateSpeed = (ORBIT_SPEED_RAD_S / (Math.PI / 30));

    // Capture baseline camera Y and start bobbing
    this.baseY = camera.position.y;
    this.startTime = performance.now() / 1000;
    this.tickBob();
  }

  /** Stop auto-orbit and hand control back to the user. */
  stop(): void {
    if (!this.active || !this.controls) return;

    this.active = false;

    this.controls.autoRotate = false;

    // Restore manual interaction
    this.controls.enableRotate = this.savedEnableRotate;
    this.controls.enablePan = this.savedEnablePan;
    this.controls.enableZoom = this.savedEnableZoom;

    // Stop bob animation
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = 0;
    }

    // Reset camera Y to baseline
    if (this.camera) {
      this.camera.position.y = this.baseY;
    }

    this.controls = null;
    this.camera = null;
  }

  /** Toggle between presentation and interactive mode. */
  toggle(controls: OrbitControls, camera: THREE.PerspectiveCamera): void {
    if (this.active) {
      this.stop();
    } else {
      this.start(controls, camera);
    }
  }

  /** Internal: smooth vertical bob via rAF. */
  private tickBob = (): void => {
    if (!this.active || !this.camera) return;

    const elapsed = performance.now() / 1000 - this.startTime;
    const offset = Math.sin(elapsed * BOB_FREQUENCY * Math.PI * 2) * BOB_AMPLITUDE;
    this.camera.position.y = this.baseY + offset;

    this.animFrameId = requestAnimationFrame(this.tickBob);
  };
}
