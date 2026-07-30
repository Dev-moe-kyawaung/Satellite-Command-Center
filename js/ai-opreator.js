/* ============================================
   SATELLITE COMMAND CENTER - AI OPERATOR
   ============================================ */

class AIOperator {
  constructor() {
    this.messages = [
      "Welcome to Mission Control. I'm your AI operator guide.",
      "Scanning your profile... Impressive engineering portfolio detected.",
      "Ready to explore? I'll help you navigate through the systems.",
      "All systems nominal. Your journey begins now.",
      "Satellite networks online. Telemetry streaming active.",
      "Mission logs loaded. Project data accessible.",
      "Orbital mechanics engaged. Navigation systems ready.",
      "Communication arrays active. Standing by for commands."
    ];
    this.currentIndex = 0;
    this.init();
  }

  init() {
    this.createAssistant();
    this.startGuidance();
  }

  createAssistant() {
    const assistant = document.createElement('div');
    assistant.className = 'ai-assistant';
    assistant.id = 'ai-assistant';
    assistant.innerHTML = `
      <div class="ai-header">
        <div class="ai-avatar">🤖</div>
        <div>
          <div class="ai-name">MISSION OPERATOR</div>
          <div class="ai-status">● ONLINE</div>
        </div>
      </div>
      <div class="ai-message" id="ai-message">
        Initializing systems...
      </div>
      <div class="ai-controls">
        <button class="ai-btn" onclick="window.aiOperator.nextMessage()">Next</button>
        <button class="ai-btn" onclick="window.aiOperator.toggleAssistant()">Hide</button>
      </div>
    `;
    document.body.appendChild(assistant);
  }

  startGuidance() {
    this.showMessage(this.messages[0]);
    setTimeout(() => this.nextMessage(), 3000);
  }

  nextMessage() {
    this.currentIndex = (this.currentIndex + 1) % this.messages.length;
    this.showMessage(this.messages[this.currentIndex]);
  }

  showMessage(text) {
    const messageEl = document.getElementById('ai-message');
    if (messageEl) {
      messageEl.textContent = text;
    }
  }

  toggleAssistant() {
    const assistant = document.getElementById('ai-assistant');
    if (assistant) {
      assistant.style.display = assistant.style.display === 'none' ? 'block' : 'none';
    }
  }
}

// Initialize AI Operator
document.addEventListener('DOMContentLoaded', () => {
  window.aiOperator = new AIOperator();
});
