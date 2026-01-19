// Sample data for courses
const coursesData = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        category: "Development",
        price: "$49.99",
        rating: 4.8,
        students: "24,500",
        lessons: "156",
        duration: "18h 30m",
        instructor: "John Doe",
        image: "course1"
    },
    {
        id: 2,
        title: "UI/UX Design Masterclass",
        category: "Design",
        price: "$39.99",
        rating: 4.9,
        students: "18,300",
        lessons: "98",
        duration: "12h 45m",
        instructor: "Jane Smith",
        image: "course2"
    },
    {
        id: 3,
        title: "Digital Marketing Fundamentals",
        category: "Marketing",
        price: "$44.99",
        rating: 4.7,
        students: "32,100",
        lessons: "124",
        duration: "15h 20m",
        instructor: "Mike Johnson",
        image: "course3"
    },
    {
        id: 4,
        title: "Python for Data Science",
        category: "Data Science",
        price: "$54.99",
        rating: 4.9,
        students: "41,200",
        lessons: "178",
        duration: "22h 15m",
        instructor: "Sarah Lee",
        image: "course4"
    },
    {
        id: 5,
        title: "Modern JavaScript Complete Course",
        category: "Development",
        price: "$42.99",
        rating: 4.8,
        students: "28,700",
        lessons: "142",
        duration: "16h 50m",
        instructor: "David Chen",
        image: "course5"
    },
    {
        id: 6,
        title: "Graphic Design Theory",
        category: "Design",
        price: "$36.99",
        rating: 4.6,
        students: "15,800",
        lessons: "86",
        duration: "11h 30m",
        instructor: "Emma Wilson",
        image: "course6"
    }
];

// Categories data
const categoriesData = [
    { id: 1, name: "Development", icon: "fa-code", courses: "2,450" },
    { id: 2, name: "Web Design", icon: "fa-palette", courses: "1,820" },
    { id: 3, name: "Lifestyle", icon: "fa-heart", courses: "980" },
    { id: 4, name: "Health & Fitness", icon: "fa-dumbbell", courses: "1,240" },
    { id: 5, name: "IT & Software", icon: "fa-laptop-code", courses: "3,100" },
    { id: 6, name: "Marketing", icon: "fa-chart-line", courses: "1,560" },
    { id: 7, name: "Finance & Accounting", icon: "fa-dollar-sign", courses: "890" },
    { id: 8, name: "Personal Development", icon: "fa-rocket", courses: "1,120" }
];

// Instructors data
const instructorsData = [
    {
        id: 1,
        name: "Jane Doe",
        title: "Web Developer",
        students: "25,000+",
        courses: "12",
        avatar: "instructor1"
    },
    {
        id: 2,
        name: "Brad Nelson",
        title: "UI/UX Designer",
        students: "18,500+",
        courses: "8",
        avatar: "instructor2"
    },
    {
        id: 3,
        name: "Jane Joe",
        title: "Marketing Expert",
        students: "32,000+",
        courses: "15",
        avatar: "instructor3"
    }
];

// Testimonials data
const testimonialsData = [
    {
        id: 1,
        content: "SkillUp has completely transformed how I learn. The courses are engaging, well-structured, and the instructors are top-notch. I've gained skills that directly impacted my career!",
        author: "Michael Chen",
        role: "Software Engineer",
        avatar: "testimonial1"
    },
    {
        id: 2,
        content: "I've tried many online learning platforms, but SkillUp stands out. The quality of content and the interactive learning experience is exceptional. Highly recommend!",
        author: "Sarah Williams",
        role: "Digital Marketer",
        avatar: "testimonial2"
    },
    {
        id: 3,
        content: "As a busy professional, I appreciate the flexibility SkillUp offers. The courses are comprehensive yet easy to follow at my own pace. It's been a game-changer for my professional development.",
        author: "David Rodriguez",
        role: "Product Manager",
        avatar: "testimonial3"
    }
];

// Create course card
function createCourseCard(course) {
    return `
        <div class="course-card fade-in">
            <div class="course-image" style="background: linear-gradient(135deg, hsl(${Math.random() * 360}, 70%, 85%), hsl(${Math.random() * 360}, 70%, 90%));"></div>
            <div class="course-content">
                <span class="course-category">${course.category}</span>
                <h3 class="course-title">${course.title}</h3>
                <div class="course-meta">
                    <span><i class="fas fa-user"></i> ${course.students}</span>
                    <span><i class="fas fa-book"></i> ${course.lessons}</span>
                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                </div>
                <div class="course-footer">
                    <div class="course-price">${course.price}</div>
                    <div class="course-rating">
                        <span class="stars"><i class="fas fa-star"></i></span>
                        <span>${course.rating}</span>
                    </div>
                </div>
                <button class="btn-enroll">Enroll Now</button>
            </div>
        </div>
    `;
}

// Create category card
function createCategoryCard(category) {
    return `
        <div class="category-card fade-in">
            <div class="category-icon"><i class="fas ${category.icon}"></i></div>
            <h3 class="category-name">${category.name}</h3>
            <p class="category-count">${category.courses} Courses</p>
        </div>
    `;
}

// Create instructor card
function createInstructorCard(instructor) {
    return `
        <div class="instructor-card fade-in">
            <div class="instructor-avatar" style="background: linear-gradient(135deg, hsl(${Math.random() * 360}, 60%, 75%), hsl(${Math.random() * 360}, 60%, 80%));"></div>
            <h3 class="instructor-name">${instructor.name}</h3>
            <p class="instructor-title">${instructor.title}</p>
            <div class="instructor-stats">
                <span><i class="fas fa-users"></i> ${instructor.students}</span>
                <span><i class="fas fa-book"></i> ${instructor.courses} courses</span>
            </div>
        </div>
    `;
}

// Create testimonial card
function createTestimonialCard(testimonial) {
    return `
        <div class="testimonial-card fade-in">
            <p class="testimonial-content">${testimonial.content}</p>
            <div class="testimonial-author">
                <div class="author-avatar" style="background: linear-gradient(135deg, hsl(${Math.random() * 360}, 60%, 75%), hsl(${Math.random() * 360}, 60%, 80%));"></div>
                <div>
                    <div class="author-name">${testimonial.author}</div>
                    <div class="author-role">${testimonial.role}</div>
                </div>
            </div>
        </div>
    `;
}

// Render content
function renderContent() {
    // Render courses
    const coursesGrid = document.getElementById('coursesGrid');
    if (coursesGrid) {
        coursesGrid.innerHTML = coursesData.map(course => createCourseCard(course)).join('');
    }
    
    // Render categories
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (categoriesGrid) {
        categoriesGrid.innerHTML = categoriesData.map(category => createCategoryCard(category)).join('');
    }
    
    // Render instructors
    const instructorsGrid = document.getElementById('instructorsGrid');
    if (instructorsGrid) {
        instructorsGrid.innerHTML = instructorsData.map(instructor => createInstructorCard(instructor)).join('');
    }
    
    // Render testimonials
    const testimonialsSlider = document.getElementById('testimonialsSlider');
    if (testimonialsSlider) {
        testimonialsSlider.innerHTML = testimonialsData.map(testimonial => createTestimonialCard(testimonial)).join('');
    }
}

// Mobile menu toggle
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
             // Toggle active classes
             navLinks.classList.toggle('active');
             mobileMenuToggle.classList.toggle('active');
             
             // Toggle scrolling
             if (navLinks.classList.contains('active')) {
                 document.body.style.overflow = 'hidden';
             } else {
                 document.body.style.overflow = '';
             }
        });
    }

    // Close menu when clicking a link
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks?.classList.remove('active');
                navActions?.classList.remove('active');
                mobileMenuToggle?.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            navLinks?.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
            
            navLinks.classList.remove('active');
            navActions?.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
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
}

// Intersection Observer for fade-in animations
function setupAnimations() {
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
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.btn-search');
    
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const query = searchInput?.value.trim();
            if (query) {
                alert(`Searching for: ${query}\n\nThis is a demo. In a real application, this would search for courses.`);
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton?.click();
            }
        });
    }
}

// Newsletter form
function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('.newsletter-input');
            const email = emailInput?.value.trim();
            
            if (email) {
                alert(`Thank you for subscribing!\n\nEmail: ${email}\n\nThis is a demo. In a real application, this would subscribe you to our newsletter.`);
                emailInput.value = '';
            }
        });
    }
}

// Add active state to navigation on scroll
function setupNavScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize everything when DOM is loaded


// Add some parallax effect to hero section
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Carousel navigation for courses
function setupCarousel() {
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    const coursesGrid = document.getElementById('coursesGrid');
    
    if (!prevBtn || !nextBtn || !coursesGrid) return;
    
    // Hide buttons on desktop
    function updateButtonVisibility() {
        if (window.innerWidth > 768) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        }
    }
    
    updateButtonVisibility();
    window.addEventListener('resize', updateButtonVisibility);
    
    // Scroll functionality
    const scrollAmount = () => {
        const card = coursesGrid.querySelector('.course-card');
        return card ? card.offsetWidth + 16 : 300; // card width + gap
    };
    
    prevBtn.addEventListener('click', () => {
        coursesGrid.scrollBy({
            left: -scrollAmount(),
            behavior: 'smooth'
        });
    });
    
    nextBtn.addEventListener('click', () => {
        coursesGrid.scrollBy({
            left: scrollAmount(),
            behavior: 'smooth'
        });
    });
    
    // Update button states based on scroll position
    function updateButtonStates() {
        if (window.innerWidth <= 768) {
            const scrollLeft = coursesGrid.scrollLeft;
            const maxScroll = coursesGrid.scrollWidth - coursesGrid.clientWidth;
            
            prevBtn.style.opacity = scrollLeft <= 0 ? '0.3' : '1';
            prevBtn.style.pointerEvents = scrollLeft <= 0 ? 'none' : 'auto';
            
            nextBtn.style.opacity = scrollLeft >= maxScroll - 1 ? '0.3' : '1';
            nextBtn.style.pointerEvents = scrollLeft >= maxScroll - 1 ? 'none' : 'auto';
        }
    }
    
    coursesGrid.addEventListener('scroll', updateButtonStates);
    updateButtonStates();
}

// Contact Form Handling
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    const modal = document.getElementById('thankYouModal');
    const closeBtn = document.querySelector('.btn-modal-close');
    const submitBtn = form?.querySelector('button[type="submit"]');
    
    if (!form || !modal) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable button and show loading state
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Show modal
                modal.classList.add('active');
                form.reset();
            } else {
                alert("Oops! There was a problem submitting your form");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Oops! There was a problem submitting your form");
        })
        .finally(() => {
            // Reset button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
    });

    // Close modal
    const closeModal = () => {
        modal.classList.remove('active');
    };

    closeBtn?.addEventListener('click', closeModal);
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    setupMobileMenu();
    setupSmoothScrolling();
    setupSearch();
    setupNewsletter();
    setupNavScroll();
    setupContactForm(); // Initialize contact form
    
    // Setup animations and carousel after content is rendered
    setupAnimations();
    setupCarousel();
});
