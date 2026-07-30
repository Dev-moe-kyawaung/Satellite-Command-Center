/* ============================================
   SATELLITE COMMAND CENTER - ORBIT SYSTEM
   ============================================ */

class OrbitSystem {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (this.container) {
      this.init();
    }
  }

  init() {
    this.createOrbitPaths();
    this.createSatellites();
  }

  createOrbitPaths() {
    const paths = 3;
    for (let i = 1; i <= paths; i++) {
      const path = document.createElement('div');
      path.className = `orbit-path orbit-path-${i}`;
      this.container.appendChild(path);
    }
  }

  createSatellites() {
    const satellites = [
      { class: 'satellite-1', orbit: 75 },
      { class: 'satellite-2', orbit: 125 },
      { class: 'satellite-3', orbit: 175 }
    ];

    satellites.forEach(sat => {
      const satellite = document.createElement('div');
      satellite.className = `satellite ${sat.class}`;
      this.container.appendChild(satellite);
    });
  }
}
