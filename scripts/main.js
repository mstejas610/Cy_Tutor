// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Add fade-in animation to elements with .fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(el);
    });

    // Add slide-up animation to elements with .slide-up class
    const slideElements = document.querySelectorAll('.slide-up');
    slideElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(el);
    });
});

// Particle background animation
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particles-bg');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const particles = [];
        const particleCount = 100;

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
                this.size = Math.random() * 2;
                this.color = Math.random() < 0.5 ? '#58A6FF' : '#6E40C9';
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
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(88, 166, 255, ${0.1 * (1 - distance/150)})`;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        animate();
    }

});

function handleLogout() {
    // Clear all session data
    sessionStorage.clear();
    localStorage.clear();
    
    // Optional: Show logout message
    console.log('User logged out successfully');
    
    // Redirect to login page
    window.location.href = 'login.html';
}

// Particle background animation for all pages
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particles-bg');
    if (canvas) {
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
    }

    // Enhanced dropdown menu functionality
    const userProfileToggle = document.querySelector('.user-profile-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    console.log('User profile toggle element:', userProfileToggle);
    console.log('Dropdown menu element:', dropdownMenu);
    
    // Add debug click listener to document
    document.addEventListener('click', (e) => {
        if (e.target.closest('.user-profile-toggle')) {
            console.log('Click detected on user profile toggle area');
        }
    });

    if (userProfileToggle && dropdownMenu) {
        console.log('Both elements found, setting up dropdown functionality');
        // Initialize dropdown as hidden
        dropdownMenu.classList.remove('show');
        dropdownMenu.style.display = 'none'; // Ensure it's hidden initially
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        
        // Make sure the toggle is clickable
        userProfileToggle.style.cursor = 'pointer';
        userProfileToggle.style.userSelect = 'none';
        
        // Toggle dropdown on click
        userProfileToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('User profile clicked'); // Debug log
            const isOpen = dropdownMenu.classList.contains('show');
            
            if (isOpen) {
                console.log('Closing dropdown');
                closeDropdown();
            } else {
                console.log('Opening dropdown');
                openDropdown();
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userProfileToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                closeDropdown();
            }
        });

        // Close dropdown on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDropdown();
            }
        });

        // Functions to handle dropdown state
        function openDropdown() {
            console.log('Opening dropdown function called');
            
            // Simple and reliable approach
            dropdownMenu.classList.add('show');
            dropdownMenu.style.display = 'block';
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.pointerEvents = 'auto';
            dropdownMenu.style.transform = 'translateY(0) scale(1)';
            
            userProfileToggle.classList.add('active');
            
            // Initialize Lucide icons if available
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }

        function closeDropdown() {
            console.log('Closing dropdown function called');
            
            // Simple and reliable approach
            dropdownMenu.classList.remove('show');
            dropdownMenu.style.display = 'none';
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.pointerEvents = 'none';
            dropdownMenu.style.transform = 'translateY(-10px) scale(0.95)';
            
            userProfileToggle.classList.remove('active');
        }

        // Handle dropdown menu item clicks
        dropdownMenu.addEventListener('click', (e) => {
            const clickedLink = e.target.closest('a');
            if (clickedLink) {
                // Add click animation
                clickedLink.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    clickedLink.style.transform = 'translateX(5px)';
                }, 100);
                
                // Close dropdown after a short delay for animation
                setTimeout(() => {
                    closeDropdown();
                }, 150);
            }
        });
    }

    // Add visual feedback for user menu interactions
    const userMenuItems = document.querySelectorAll('.dropdown-menu a');
    userMenuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateX(0)';
            }
        });
    });

    // Smooth scroll for anchor links
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

    // Add loading animation to buttons
    document.querySelectorAll('button, .btn, .cta-button').forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.domain-card, .activity-item, .feature-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});
