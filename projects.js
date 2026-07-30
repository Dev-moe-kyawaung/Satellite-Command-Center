<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projects | Mission Logs</title>
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/components.css">
</head>
<body>
  <div class="bg-grid"></div>
  <div class="stars"></div>

  <header class="header">
    <div class="logo">
      <div class="logo-icon"></div>
      <div class="logo-text">Mission Logs</div>
    </div>
    <nav class="nav">
      <a href="index.html" class="nav-link">Mission Control</a>
      <a href="projects.html" class="nav-link active">Projects</a>
      <a href="about.html" class="nav-link">About</a>
      <a href="skills.html" class="nav-link">Skills</a>
      <a href="experience.html" class="nav-link">Experience</a>
      <a href="contact.html" class="nav-link">Contact</a>
    </nav>
    <div class="status-bar">
      <div class="status-item">
        <div class="status-indicator"></div>
        <span>SYSTEMS ONLINE</span>
      </div>
    </div>
  </header>

  <main class="container">
    <section class="section-header">
      <h2 class="section-title">Mission Logs</h2>
      <p class="section-subtitle">Complete project deployment history and engineering operations</p>
    </section>

    <div class="tabs">
      <button class="tab active">All Missions</button>
      <button class="tab">Android</button>
      <button class="tab">Web</button>
      <button class="tab">Open Source</button>
    </div>

    <section class="grid-3">
      <div class="project-card">
        <div class="project-icon">📱</div>
        <h3 class="project-title">FinTech Mobile App</h3>
        <p class="project-description">
          Secure banking application with biometric authentication, real-time transactions, and encrypted data storage.
        </p>
        <div class="project-tech">
          <span class="tech-tag">Kotlin</span>
          <span class="tech-tag">MVVM</span>
          <span class="tech-tag">Room</span>
          <span class="tech-tag">Retrofit</span>
        </div>
        <div class="project-links">
          <a href="#" class="btn">View Code</a>
          <a href="#" class="btn btn-primary">Live Demo</a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-icon">🛰️</div>
        <h3 class="project-title">IoT Dashboard</h3>
        <p class="project-description">
          Real-time IoT device monitoring system with data visualization, alerts, and remote control capabilities.
        </p>
        <div class="project-tech">
          <span class="tech-tag">React</span>
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">MQTT</span>
          <span class="tech-tag">MongoDB</span>
        </div>
        <div class="project-links">
          <a href="#" class="btn">View Code</a>
          <a href="#" class="btn btn-primary">Live Demo</a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-icon">🌍</div>
        <h3 class="project-title">E-Commerce Platform</h3>
        <p class="project-description">
          Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.
        </p>
        <div class="project-tech">
          <span class="tech-tag">Next.js</span>
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">Stripe</span>
          <span class="tech-tag">PostgreSQL</span>
        </div>
        <div class="project-links">
          <a href="#" class="btn">View Code</a>
          <a href="#" class="btn btn-primary">Live Demo</a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-icon">🎮</div>
        <h3 class="project-title">Gaming App</h3>
        <p class="project-description">
          Multiplayer mobile game with real-time matchmaking, in-app purchases, and social features.
        </p>
        <div class="project-tech">
          <span class="tech-tag">Unity</span>
          <span class="tech-tag">C#</span>
          <span class="tech-tag">Photon</span>
          <span class="tech-tag">Firebase</span>
        </div>
        <div class="project-links">
          <a href="#" class="btn">View Code</a>
          <a href="#" class="btn btn-primary">Live Demo</a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-icon">🏥</div>
        <h3 class="project-title">Healthcare App</h3>
        <p class="project-description">
          Telemedicine platform with video consultations, appointment scheduling, and health records management.
        </p>
        <div class="project-tech">
          <span class="tech-tag">Flutter</span>
          <span class="tech-tag">Dart</span>
          <span class="tech-tag">WebRTC</span>
          <span class="tech-tag">AWS</span>
        </div>
        <div class="project-links">
          <a href="#" class="btn">View Code</a>
          <a href="#" class="btn btn-primary">Live Demo</a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-icon">📊</div>
        <h3 class="project-title">Analytics Platform</h3>
        <p class="project-description">
          Business intelligence dashboard with custom reports, data visualization, and automated insights.
        </p>
        <div class="project-tech">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Django</span>
          <span class="tech-tag">D3.js</span>
          <span class="tech-tag">Redis</span>
        </div>
        <div class="project-links">
          <a href="#" class="btn">View Code</a>
          <a href="#" class="btn btn-primary">Live Demo</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Command Center</h4>
        <p>Moe Kyaw's Satellite Command Center Portfolio</p>
        <p>London, England, GB</p>
      </div>
      <div class="footer-section">
        <h4>Communication</h4>
        <a href="contact.html">Contact</a>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </div>
      <div class="footer-section">
        <h4>System Status</h4>
        <p>All systems operational</p>
        <p>Last update: <span id="current-date"></span></p>
      </div>
    </div>
    <div class="footer-bottom">
      © 2026 Moe Kyaw | All Systems Nominal
    </div>
  </footer>

  <script src="js/main.js"></script>
  <script src="js/ai-operator.js"></script>
  <script>
    document.getElementById('current-date').textContent = new Date().toLocaleDateString();
  </script>
</body>
</html>
