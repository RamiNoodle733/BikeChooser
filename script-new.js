// Quiz Data
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

// Bike Database with Amazon Affiliate Links
const bikeDatabase = {
    road: [
        {
            name: "Schwinn Fastback Carbon 105 Road Bike",
            brand: "Schwinn",
            price: "$1,199",
            image: "https://images.unsplash.com/photo-1544191696-15693df4c96b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Carbon Frame", "Shimano 105", "16 Speed", "Drop Bars"],
            description: "High-performance road bike with carbon frame and Shimano 105 components. Perfect for serious riders.",
            affiliate: "https://amzn.to/YOUR_AFFILIATE_LINK_1", // Replace with your actual Amazon affiliate link
            compareLink: "https://www.amazon.com/s?k=road+bikes&tag=YOUR_ASSOCIATE_ID" // Replace with your associate ID
        },
        {
            name: "Vilano Shadow 3.0 Road Bike",
            brand: "Vilano",
            price: "$359",
            image: "https://images.unsplash.com/photo-1544191696-15693df4c96b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Aluminum Frame", "STI Shifters", "14 Speed", "Lightweight"],
            description: "Affordable entry-level road bike perfect for beginners and commuters.",
            affiliate: "https://amzn.to/YOUR_AFFILIATE_LINK_2",
            compareLink: "https://www.amazon.com/s?k=entry+level+road+bikes&tag=YOUR_ASSOCIATE_ID"
        }
    ],
    mountain: [
        {
            name: "Mongoose Dolomite Fat Tire Mountain Bike",
            brand: "Mongoose",
            price: "$299",
            image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Fat Tires", "Steel Frame", "7 Speed", "All-Terrain"],
            description: "Rugged mountain bike with fat tires for all-terrain adventures.",
            affiliate: "https://amzn.to/YOUR_AFFILIATE_LINK_3",
            compareLink: "https://www.amazon.com/s?k=fat+tire+mountain+bikes&tag=YOUR_ASSOCIATE_ID"
        },
        {
            name: "Schwinn High Timber Mountain Bike",
            brand: "Schwinn",
            price: "$229",
            image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Steel Frame", "21 Speed", "Front Suspension", "Knobby Tires"],
            description: "Classic mountain bike with front suspension and reliable performance.",
            affiliate: "https://amzn.to/YOUR_AFFILIATE_LINK_4",
            compareLink: "https://www.amazon.com/s?k=schwinn+mountain+bikes&tag=YOUR_ASSOCIATE_ID"
        }
    ],
    hybrid: [
        {
            name: "Schwinn Discover Hybrid Bike",
            brand: "Schwinn",
            price: "$279",
            image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Comfort Saddle", "21 Speed", "Upright Position", "Fenders"],
            description: "Comfortable hybrid bike perfect for commuting and recreational riding.",
            affiliate: "https://amzn.to/YOUR_AFFILIATE_LINK_5",
            compareLink: "https://www.amazon.com/s?k=hybrid+bikes&tag=YOUR_ASSOCIATE_ID"
        }
    ],
    electric: [
        {
            name: "Ancheer Electric Mountain Bike",
            brand: "Ancheer",
            price: "$599",
            image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["250W Motor", "Removable Battery", "21 Speed", "26 Inch"],
            description: "Affordable electric mountain bike with removable battery and pedal assist.",
            affiliate: "https://amzn.to/YOUR_AFFILIATE_LINK_6",
            compareLink: "https://www.amazon.com/s?k=electric+bikes&tag=YOUR_ASSOCIATE_ID"
        }
    ],
    cruiser: [
        {
            name: "Huffy Nel Lusso Cruiser Bike",
            brand: "Huffy",
            price: "$179",
            image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Single Speed", "Comfort Saddle", "Wide Handlebars", "Classic Style"],
            description: "Classic beach cruiser perfect for leisurely rides around town.",
            affiliate: "https://amzn.to/YOUR_AFFILIATE_LINK_7",
            compareLink: "https://www.amazon.com/s?k=cruiser+bikes&tag=YOUR_ASSOCIATE_ID"
        }
    ],
    gravel: [
        {
            name: "Tommaso Illimitate Gravel Bike",
            brand: "Tommaso",
            price: "$899",
            image: "https://images.unsplash.com/photo-1544191696-15693df4c96b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Aluminum Frame", "Shimano Claris", "16 Speed", "Disc Brakes"],
            description: "Versatile gravel bike for mixed terrain adventures and touring.",
            affiliate: "https://amzn.to/YOUR_AFFILIATE_LINK_8",
            compareLink: "https://www.amazon.com/s?k=gravel+bikes&tag=YOUR_ASSOCIATE_ID"
        }
    ]
};

// Quiz state
let currentQuestion = 0;
let userAnswers = {};
let bikeScores = { road: 0, mountain: 0, hybrid: 0, electric: 0, gravel: 0, cruiser: 0 };

// Start quiz function
function startQuiz() {
    console.log('Starting quiz...');
    
    // Track quiz start event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'quiz_start', {
            'event_category': 'engagement',
            'event_label': 'bike_chooser_quiz'
        });
    }
    
    // Show quiz container
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        quizContainer.style.display = 'block';
    } else {
        console.error('Quiz container not found');
        return;
    }
    
    // Hide other sections
    const sectionsToHide = ['.hero', '.how-it-works', '.popular-bikes'];
    sectionsToHide.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.display = 'none';
        }
    });
    
    // Reset quiz state
    currentQuestion = 0;
    userAnswers = {};
    bikeScores = { road: 0, mountain: 0, hybrid: 0, electric: 0, gravel: 0, cruiser: 0 };
    
    // Load first question
    loadQuestion();
}

// Load question function
function loadQuestion() {
    console.log('Loading question:', currentQuestion + 1);
    
    const question = quizData[currentQuestion];
    if (!question) {
        console.error('Question not found:', currentQuestion);
        return;
    }
    
    // Update progress
    const progressPercent = ((currentQuestion + 1) / quizData.length) * 100;
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) {
        progressFill.style.width = progressPercent + '%';
    }
    if (progressText) {
        progressText.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    }
    
    // Load question content
    const quizContent = document.getElementById('quiz-content');
    if (!quizContent) {
        console.error('Quiz content element not found');
        return;
    }
    
    const optionsHtml = question.options.map(option => `
        <div class="option" onclick="selectOption('${option.id}', this)">
            <i class="${option.icon}"></i>
            <span>${option.text}</span>
        </div>
    `).join('');
    
    quizContent.innerHTML = `
        <div class="question">
            <h3><i class="${question.icon}"></i> ${question.question}</h3>
            <div class="options">
                ${optionsHtml}
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
    
    console.log('Question loaded successfully');
}

// Select option function
function selectOption(optionId, element) {
    console.log('Option selected:', optionId);
    
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Add selection to clicked option
    element.classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestion] = optionId;
    
    // Enable next button
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

// Next question function
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

// Previous question function
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        
        // Restore previous selection if it exists
        const previousAnswer = userAnswers[currentQuestion];
        if (previousAnswer) {
            const selectedOption = document.querySelector(`[onclick*="${previousAnswer}"]`);
            if (selectedOption) {
                selectedOption.classList.add('selected');
                document.getElementById('next-btn').disabled = false;
            }
        }
    }
}

// Show results function
function showResults() {
    console.log('Showing results...');
    console.log('User answers:', userAnswers);
    
    // Track quiz completion event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'quiz_complete', {
            'event_category': 'engagement',
            'event_label': 'bike_chooser_quiz_complete'
        });
    }
    
    // Calculate bike scores
    calculateBikeScores();
    
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    
    if (quizContainer) {
        quizContainer.style.display = 'none';
    }
    if (resultsContainer) {
        resultsContainer.style.display = 'block';
        
        // Get top 3 bike types
        const sortedScores = Object.entries(bikeScores)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3);
        
        let recommendationsHtml = '';
        
        sortedScores.forEach(([bikeType, score], index) => {
            if (score > 0 && bikeDatabase[bikeType]) {
                const bikes = bikeDatabase[bikeType];
                bikes.forEach(bike => {
                    recommendationsHtml += `
                        <div class="bike-card">
                            <img src="${bike.image}" alt="${bike.name}" class="bike-image">
                            <div class="bike-info">
                                <h3>${bike.name}</h3>
                                <div class="bike-brand">${bike.brand}</div>
                                <div class="bike-price">${bike.price}</div>
                                <div class="bike-features">
                                    ${bike.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                                </div>
                                <p class="bike-description">${bike.description}</p>
                                <div class="bike-actions">
                                    <a href="${bike.affiliate}" target="_blank" class="btn-primary" onclick="trackAffiliateClick('${bike.name}')">
                                        <i class="fas fa-shopping-cart"></i> Buy on Amazon
                                    </a>
                                    <a href="${bike.compareLink}" target="_blank" class="btn-outline">
                                        Compare Similar
                                    </a>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }
        });
        
        const bikeRecommendations = document.getElementById('bike-recommendations');
        if (bikeRecommendations) {
            bikeRecommendations.innerHTML = recommendationsHtml;
        }
        
        // Show sections again
        document.querySelector('.popular-bikes').style.display = 'block';
    }
}

// Calculate bike scores based on user answers
function calculateBikeScores() {
    bikeScores = { road: 0, mountain: 0, hybrid: 0, electric: 0, gravel: 0, cruiser: 0 };
    
    Object.keys(userAnswers).forEach(questionIndex => {
        const answerKey = userAnswers[questionIndex];
        const question = quizData[questionIndex];
        const selectedOption = question.options.find(opt => opt.id === answerKey);
        
        if (selectedOption && selectedOption.weight) {
            Object.keys(selectedOption.weight).forEach(bikeType => {
                if (bikeScores[bikeType] !== undefined) {
                    bikeScores[bikeType] += selectedOption.weight[bikeType];
                }
            });
        }
    });
    
    console.log('Calculated bike scores:', bikeScores);
}

// Track affiliate clicks for analytics
function trackAffiliateClick(bikeName) {
    console.log('Affiliate link clicked:', bikeName);
    
    // Google Analytics tracking (if you have it set up)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'affiliate_click', {
            'event_category': 'monetization',
            'event_label': bikeName,
            'value': 1
        });
    }
    
    // You can also send to other analytics platforms here
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, quiz system ready');
    
    // Email form tracking
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Track email capture event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'email_capture', {
                    'event_category': 'conversion',
                    'event_label': 'bike_guide_download'
                });
            }
            
            // Show success message
            alert('Thank you! Your free bike buying guide will be sent to ' + email);
            this.reset();
            
            // Here you would typically integrate with your email service provider
            // e.g., Mailchimp, ConvertKit, etc.
        });
    }
});
