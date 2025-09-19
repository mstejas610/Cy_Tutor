// Animation utilities extracted from original scripts

// Particle Background Animation
export const createParticleBackground = (canvasId) => {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return null;

  const ctx = canvas.getContext('2d');
  const particles = [];
  const particleCount = 80;

  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = Math.random() * 0.5 - 0.25;
      this.vy = Math.random() * 0.5 - 0.25;
      this.size = Math.random() * 2 + 1;
      this.color = Math.random() < 0.5 ? '#22c55e' : '#6E40C9';
      this.opacity = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    // Draw connections
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(34, 197, 94, ${0.1 * (1 - distance/150)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animate);
  }

  animate();
  return { particles, animate };
};

// Terminal Typing Animation
export const createTerminalAnimation = async (terminalId, lines) => {
  const terminal = document.getElementById(terminalId);
  if (!terminal) return;

  async function typeText(element, text, className) {
    for (let char of text) {
      const span = document.createElement("span");
      span.className = className;
      span.textContent = char;
      element.appendChild(span);
      await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 50));
    }
  }

  terminal.innerHTML = "";
  
  for (let line of lines) {
    const lineDiv = document.createElement("div");
    lineDiv.className = "terminal-line";
    terminal.appendChild(lineDiv);
    
    await typeText(lineDiv, line.prompt + " ", "terminal-prompt");
    await typeText(lineDiv, line.command, "terminal-command");
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (line.output) {
      const outputDiv = document.createElement("div");
      outputDiv.className = "terminal-line";
      terminal.appendChild(outputDiv);
      await typeText(outputDiv, line.output, "terminal-output");
    }
    
    await new Promise(resolve => setTimeout(resolve, 800));
  }
  
  const finalLine = document.createElement("div");
  finalLine.className = "terminal-line";
  finalLine.innerHTML = '<span class="terminal-prompt">user@cytutor:~$</span><span class="terminal-cursor"></span>';
  terminal.appendChild(finalLine);
};

// Intersection Observer for animations
export const setupIntersectionObserver = (selector, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, defaultOptions);

  document.querySelectorAll(selector).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });

  return observer;
};

// Smooth scroll utility
export const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// Button click animations
export const setupButtonAnimations = () => {
  document.querySelectorAll('button, .btn, .cta-button').forEach(button => {
    button.addEventListener('click', function() {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });
};

// Logout utility
export const handleLogout = () => {
  sessionStorage.clear();
  localStorage.clear();
  console.log('User logged out successfully');
  // In React, use navigate('/login') instead
  return true;
};
