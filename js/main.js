/* ============================================
   SATELLITE COMMAND CENTER - MAIN SCRIPT
   ============================================ */

class SatelliteCommandCenter {
  constructor() {
    this.init();
  }

  init() {
    this.createStars();
    this.initNavigation();
    this.initAnimations();
    this.initTelemetry();
    console.log('[SYSTEM] Command Center Initialized');
  }

  createStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;

    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 2 + 's';
      star.style.opacity = Math.random();
      starsContainer.appendChild(star);
    }
  }

  initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  }

  initAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.panel, .project-card, .stats-card').forEach(el => {
      observer.observe(el);
    });
  }

  initTelemetry() {
    // Simulate telemetry data updates
    setInterval(() => {
      const telemetryElements = document.querySelectorAll('.telemetry-value');
      telemetryElements.forEach(el => {
        if (el.dataset.baseValue) {
          const baseValue = parseFloat(el.dataset.baseValue);
          const variance = (Math.random() - 0.5) * baseValue * 0.1;
          el.textContent = (baseValue + variance).toFixed(2);
        }
      });
    }, 2000);
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('show');
    }, 100);

    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.commandCenter = new SatelliteCommandCenter();
});

// Utility functions
const utils = {
  formatNumber: (num) => {
    return new Intl.NumberFormat().format(num);
  },

  formatDate: (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  },

  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};
