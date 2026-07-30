/* ============================================
   SATELLITE COMMAND CENTER - TELEMETRY
   ============================================ */

class TelemetrySystem {
  constructor() {
    this.data = {
      cpu: 45,
      memory: 62,
      network: 128,
      storage: 78,
      projects: 24,
      deployments: 156,
      uptime: 99.9
    };
    this.init();
  }

  init() {
    this.startUpdates();
  }

  startUpdates() {
    setInterval(() => {
      this.data.cpu = Math.min(100, Math.max(0, this.data.cpu + (Math.random() - 0.5) * 10));
      this.data.memory = Math.min(100, Math.max(0, this.data.memory + (Math.random() - 0.5) * 5));
      this.data.network = Math.min(1000, Math.max(0, this.data.network + (Math.random() - 0.5) * 50));
      this.updateDisplay();
    }, 2000);
  }

  updateDisplay() {
    const elements = {
      cpu: document.getElementById('telemetry-cpu'),
      memory: document.getElementById('telemetry-memory'),
      network: document.getElementById('telemetry-network')
    };

    if (elements.cpu) elements.cpu.textContent = this.data.cpu.toFixed(1) + '%';
    if (elements.memory) elements.memory.textContent = this.data.memory.toFixed(1) + '%';
    if (elements.network) elements.network.textContent = this.data.network.toFixed(0) + ' MB/s';
  }

  getData() {
    return this.data;
  }
}
