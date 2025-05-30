// Quiz Data and Logic
const quizData = [
    {
        id: 1,
        question: "Where will you mostly ride your bike?",
        icon: "fas fa-map-marker-alt",
        options: [
            { id: "city", text: "City streets and bike lanes", icon: "fas fa-city", weight: { hybrid: 3, electric: 2, road: 1 } },
            { id: "trails", text: "Trails and dirt paths", icon: "fas fa-mountain", weight: { mountain: 3, gravel: 2, hybrid: 1 } },
            { id: "campus", text: "Campus or neighborhood", icon: "fas fa-graduation-cap", weight: { hybrid: 2, electric: 2, cruiser: 3 } },
            { id: "fitness", text: "Fast fitness rides", icon: "fas fa-bolt", weight: { road: 3, gravel: 2, hybrid: 1 } }
        ]
    },
    {
        id: 2,
        question: "How often do you plan to ride?",
        icon: "fas fa-calendar-alt",
        options: [
            { id: "rarely", text: "Once or twice a month", icon: "fas fa-clock", weight: { cruiser: 2, hybrid: 2 } },
            { id: "weekly", text: "A few times per week", icon: "fas fa-calendar-week", weight: { hybrid: 3, electric: 2, road: 1 } },
            { id: "daily", text: "Every day or almost every day", icon: "fas fa-calendar-check", weight: { electric: 3, hybrid: 2, road: 2 } },
            { id: "weekend", text: "Mainly weekends for fun", icon: "fas fa-sun", weight: { mountain: 2, gravel: 2, cruiser: 2 } }
        ]
    },
    {
        id: 3,
        question: "What's your budget range?",
        icon: "fas fa-dollar-sign",
        options: [
            { id: "budget", text: "Under $400", icon: "fas fa-coins", weight: { hybrid: 2, cruiser: 3 } },
            { id: "mid", text: "$400 - $800", icon: "fas fa-money-bill", weight: { hybrid: 3, road: 2, mountain: 2 } },
            { id: "high", text: "$800 - $1,500", icon: "fas fa-credit-card", weight: { road: 3, mountain: 3, electric: 2, gravel: 3 } },
            { id: "premium", text: "$1,500+", icon: "fas fa-gem", weight: { electric: 3, road: 3, mountain: 3, gravel: 2 } }
        ]
    },
    {
        id: 4,
        question: "What's your riding style preference?",
        icon: "fas fa-user",
        options: [
            { id: "comfort", text: "Upright and comfortable", icon: "fas fa-chair", weight: { hybrid: 3, cruiser: 3, electric: 2 } },
            { id: "speed", text: "Speed and performance", icon: "fas fa-tachometer-alt", weight: { road: 3, gravel: 2 } },
            { id: "adventure", text: "Off-road adventures", icon: "fas fa-compass", weight: { mountain: 3, gravel: 2 } },
            { id: "practical", text: "Practical transportation", icon: "fas fa-briefcase", weight: { electric: 3, hybrid: 2, cruiser: 1 } }
        ]
    },
    {
        id: 5,
        question: "How important is bike weight to you?",
        icon: "fas fa-weight-hanging",
        options: [
            { id: "very", text: "Very important - I want lightweight", icon: "fas fa-feather", weight: { road: 3, gravel: 2 } },
            { id: "somewhat", text: "Somewhat important", icon: "fas fa-balance-scale", weight: { hybrid: 2, mountain: 1, road: 2 } },
            { id: "not", text: "Not important at all", icon: "fas fa-anchor", weight: { electric: 3, cruiser: 2, mountain: 2 } }
        ]
    },
    {
        id: 6,
        question: "Any special features you want?",
        icon: "fas fa-cog",
        options: [
            { id: "electric", text: "Electric assistance", icon: "fas fa-battery-full", weight: { electric: 5 } },
            { id: "cargo", text: "Cargo carrying capability", icon: "fas fa-box", weight: { electric: 2, hybrid: 2, cruiser: 1 } },
            { id: "gears", text: "Multiple gears for hills", icon: "fas fa-cogs", weight: { mountain: 2, road: 2, gravel: 3 } },
            { id: "simple", text: "Simple and low maintenance", icon: "fas fa-wrench", weight: { cruiser: 3, hybrid: 1 } }
        ]
    }
];

// Bike Database
const bikeDatabase = {
    road: [
        {
            name: "Giant Contend 3",
            brand: "Giant",
            price: "$550",
            image: "https://images.unsplash.com/photo-1544191696-15693df4c96b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Lightweight", "Drop bars", "21 speeds", "Aluminum frame"],
            description: "Perfect entry-level road bike for fitness and commuting. Lightweight aluminum frame with reliable components.",
            affiliate: "https://www.rei.com/search?q=giant+contend+3",
            compareLink: "https://www.bicycling.com/bikes-gear/a20048810/best-road-bikes/"
        },
        {
            name: "Trek Domane AL 2",
            brand: "Trek",
            price: "$780",
            image: "https://images.unsplash.com/photo-1544191696-15693df4c96b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Endurance geometry", "16 speeds", "IsoSpeed technology", "Carbon fork"],
            description: "Comfortable endurance road bike perfect for long rides and sportives. Features Trek's comfort technology.",
            affiliate: "https://www.rei.com/search?q=trek+domane+al+2",
            compareLink: "https://www.bicycling.com/bikes-gear/a20048810/best-road-bikes/"
        }
    ],
    mountain: [
        {
            name: "Specialized Rockhopper",
            brand: "Specialized",
            price: "$650",
            image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Hardtail", "29\" wheels", "1x drivetrain", "Trail geometry"],
            description: "Versatile hardtail mountain bike perfect for trails and light off-road adventures. Great value for beginners.",
            affiliate: "https://www.rei.com/search?q=specialized+rockhopper",
            compareLink: "https://www.bicycling.com/bikes-gear/mountain-bike-reviews/"
        },
        {
            name: "Trek Marlin 7",
            brand: "Trek",
            price: "$830",
            image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Alpha Gold Aluminum", "RockShox fork", "2x8 drivetrain", "Internal routing"],
            description: "Well-rounded trail bike with quality components. Perfect for riders ready to tackle more challenging terrain.",
            affiliate: "https://www.rei.com/search?q=trek+marlin+7",
            compareLink: "https://www.bicycling.com/bikes-gear/mountain-bike-reviews/"
        }
    ],
    hybrid: [
        {
            name: "Giant Escape 3",
            brand: "Giant",
            price: "$430",
            image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Lightweight aluminum", "21 speeds", "Flat bars", "Puncture-resistant tires"],
            description: "The perfect all-around bike for commuting, fitness, and recreational riding. Comfortable and reliable.",
            affiliate: "https://www.rei.com/search?q=giant+escape+3",
            compareLink: "https://www.bicycling.com/bikes-gear/a20048980/best-hybrid-bikes/"
        },
        {
            name: "Trek FX 3",
            brand: "Trek",
            price: "$630",
            image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Alpha Gold Aluminum", "24 speeds", "Carbon fork", "Wide gear range"],
            description: "Premium hybrid bike with carbon fork for comfort and performance. Great for longer rides and commuting.",
            affiliate: "https://www.rei.com/search?q=trek+fx+3",
            compareLink: "https://www.bicycling.com/bikes-gear/a20048980/best-hybrid-bikes/"
        }
    ],
    electric: [
        {
            name: "Rad Power RadCity 5",
            brand: "Rad Power",
            price: "$1,499",
            image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["750W motor", "45+ mile range", "Integrated lights", "Cargo rack"],
            description: "Powerful commuter e-bike with excellent range and practical features. Perfect for daily transportation.",
            affiliate: "https://www.radpowerbikes.com/products/radcity-electric-commuter-bike",
            compareLink: "https://www.bicycling.com/bikes-gear/electric-bikes/"
        },
        {
            name: "Trek Verve+ 2",
            brand: "Trek",
            price: "$2,400",
            image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Bosch motor", "50 mile range", "Comfort geometry", "Integrated battery"],
            description: "Premium electric hybrid with top-quality Bosch drive system. Comfortable and refined for daily use.",
            affiliate: "https://www.rei.com/search?q=trek+verve+plus+2",
            compareLink: "https://www.bicycling.com/bikes-gear/electric-bikes/"
        }
    ],
    gravel: [
        {
            name: "Giant Contend AR 4",
            brand: "Giant",
            price: "$850",
            image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Adventure geometry", "Disc brakes", "Wide tire clearance", "2x drivetrain"],
            description: "Versatile gravel bike ready for adventures on and off the beaten path. Great for mixed terrain riding.",
            affiliate: "https://www.rei.com/search?q=giant+contend+ar+4",
            compareLink: "https://www.bicycling.com/bikes-gear/gravel-bikes/"
        }
    ],
    cruiser: [
        {
            name: "Electra Townie 7D",
            brand: "Electra",
            price: "$450",
            image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Flat Foot Technology", "7 speeds", "Comfort saddle", "Upright position"],
            description: "The most comfortable bike you'll ever ride. Perfect for casual rides around town and the beach.",
            affiliate: "https://www.rei.com/search?q=electra+townie+7d",
            compareLink: "https://www.bicycling.com/bikes-gear/cruiser-bikes/"
        }
    ]
};

// Quiz State
let currentQuestion = 0;
let userAnswers = {};
let bikeScores = {
    road: 0,
    mountain: 0,
    hybrid: 0,
    electric: 0,
    gravel: 0,
    cruiser: 0
};

// Quiz Functions
function startQuiz() {
    document.getElementById('quiz-container').style.display = 'block';
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.how-it-works').style.display = 'none';
    document.querySelector('.popular-bikes').style.display = 'none';
    document.querySelector('.testimonials').style.display = 'none';
    
    currentQuestion = 0;
    userAnswers = {};
    bikeScores = { road: 0, mountain: 0, hybrid: 0, electric: 0, gravel: 0, cruiser: 0 };
    
    loadQuestion();
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    const progressPercent = ((currentQuestion + 1) / quizData.length) * 100;
    
    document.getElementById('progress-fill').style.width = progressPercent + '%';
    document.getElementById('progress-text').textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <div class="question">
            <h3><i class="${question.icon}"></i> ${question.question}</h3>
            <div class="options">
                ${question.options.map(option => `
                    <div class="option" onclick="selectOption('${option.id}', this)">
                        <i class="${option.icon}"></i>
                        <span>${option.text}</span>
                    </div>
                `).join('')}
            </div>
            <div class="quiz-navigation">
                <button class="btn btn-secondary" onclick="previousQuestion()" ${currentQuestion === 0 ? 'style="visibility:hidden"' : ''}>
                    Previous
                </button>
                <button class="btn" id="next-btn" onclick="nextQuestion()" disabled>
                    ${currentQuestion === quizData.length - 1 ? 'See Results' : 'Next'}
                </button>
            </div>
        </div>
    `;
}

function selectOption(optionId, element) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Add selection to clicked option
    element.classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestion] = optionId;
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (!userAnswers[currentQuestion]) return;
    
    // Calculate scores for current question
    const question = quizData[currentQuestion];
    const selectedOption = question.options.find(opt => opt.id === userAnswers[currentQuestion]);
    
    if (selectedOption && selectedOption.weight) {
        Object.keys(selectedOption.weight).forEach(bikeType => {
            bikeScores[bikeType] += selectedOption.weight[bikeType];
        });
    }
    
    currentQuestion++;
    
    if (currentQuestion >= quizData.length) {
        showResults();
    } else {
        loadQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        
        // Restore previous selection if exists
        if (userAnswers[currentQuestion]) {
            const question = quizData[currentQuestion];
            const selectedOptionId = userAnswers[currentQuestion];
            const optionElements = document.querySelectorAll('.option');
            
            question.options.forEach((option, index) => {
                if (option.id === selectedOptionId) {
                    optionElements[index].classList.add('selected');
                    document.getElementById('next-btn').disabled = false;
                }
            });
        }
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    
    // Get top bike types
    const sortedBikes = Object.entries(bikeScores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3);
    
    const recommendationsHTML = sortedBikes.map(([bikeType, score], index) => {
        const bikes = bikeDatabase[bikeType] || [];
        if (bikes.length === 0) return '';
        
        const bike = bikes[0]; // Get first bike of this type
        const matchPercentage = Math.min(95, Math.max(75, (score / Math.max(...Object.values(bikeScores))) * 100));
        
        return `
            <div class="bike-card">
                <img src="${bike.image}" alt="${bike.name}" class="bike-image">
                <div class="bike-info">
                    <h3>${bike.name}</h3>
                    <div class="bike-brand">${bike.brand}</div>
                    <div class="bike-price">${bike.price}</div>
                    <div class="match-score" style="color: #059669; font-weight: 600; margin-bottom: 1rem;">
                        ${Math.round(matchPercentage)}% Match
                    </div>
                    <div class="bike-features">
                        ${bike.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                    </div>
                    <p class="bike-description">${bike.description}</p>
                    <div class="bike-actions">
                        <a href="${bike.affiliate}" target="_blank" class="btn-primary">
                            View on REI <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="${bike.compareLink}" target="_blank" class="btn-outline">
                            Compare Similar
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    document.getElementById('bike-recommendations').innerHTML = recommendationsHTML;
}

// Email capture
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send this to your email service
            // For now, we'll just show a success message
            alert('Thank you! Your free bike buying guide will be sent to ' + email);
            this.reset();
        });
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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
});

// Add some interactive elements
function addInteractivity() {
    // Animate stats on scroll
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                animateNumber(target, finalValue);
                observer.unobserve(target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, finalValue) {
    const isPercentage = finalValue.includes('%');
    const isPlusSign = finalValue.includes('+');
    const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
    
    let current = 0;
    const increment = numericValue / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(current).toLocaleString();
        if (isPercentage) displayValue += '%';
        if (isPlusSign) displayValue += '+';
        
        element.textContent = displayValue;
    }, 40);
}

// Initialize interactivity when page loads
document.addEventListener('DOMContentLoaded', addInteractivity);
