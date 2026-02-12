import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('creator')

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <img src="/assets/logo.png" alt="Reachly Logo" />
          </div>

          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#how-it-works">How It Works</a>
            <a href="#features">Features</a>
            <a href="#story">Our Story</a>
            <a href="https://t.me/ReachlyOfficialBot" target="_blank" rel="noopener noreferrer" className="nav-cta">Join Channel</a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="container hero-content">
          <h1 className="hero-title fade-in">
            Democratizing Content Creation <span className="gradient-text">Collaborations</span>
          </h1>

          <p className="hero-subtitle fade-in">
            Singapore's first and largest transparent influencer marketplace.<br />
            Connecting authentic creators with brands that value genuine partnerships.
          </p>

          <div className="hero-ctas fade-in">
            <button className="btn btn-primary btn-large">
              <span>I'm a Creator</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className="btn btn-primary btn-large">
              <span>I'm a Brand</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <a href="https://t.me/ReachlyOfficialBot" target="_blank" rel="noopener noreferrer" className="telegram-link fade-in">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.249 15.751" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Join Our Creator Community on Telegram
          </a>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="pain-points">
        <div className="container">
          <h2 className="section-title fade-in">We Understand Your Challenges</h2>

          <div className="pain-grid">
            <div className="pain-card glass-card fade-in">
              <div className="pain-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
                  <path d="M24 16V26L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>For Content Creators</h3>
              <ul>
                <li>Struggling to monetize your creative passion?</li>
                <li>Difficulty finding brand partnerships?</li>
                <li>Tired of platforms requiring minimum followers?</li>
                <li>Want to turn your side hustle into real income?</li>
              </ul>
              <div className="card-accent"></div>
            </div>

            <div className="pain-card glass-card fade-in">
              <div className="pain-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 22H32M16 28H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>For Small Brands</h3>
              <ul>
                <li>Agency fees costing $6,000 - $30,000?</li>
                <li>Manually sourcing creators taking too much time?</li>
                <li>Need authentic UGC but on a budget?</li>
                <li>Want direct relationships with creators?</li>
              </ul>
              <div className="card-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title fade-in">How Reachly Works</h2>

          <div className="tab-buttons fade-in">
            <button
              className={`tab-btn ${activeTab === 'creator' ? 'active' : ''}`}
              onClick={() => setActiveTab('creator')}
            >
              For Creators
            </button>
            <button
              className={`tab-btn ${activeTab === 'brand' ? 'active' : ''}`}
              onClick={() => setActiveTab('brand')}
            >
              For Brands
            </button>
          </div>

          <div className="steps-container">
            {activeTab === 'creator' ? (
              <div className="steps fade-in">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Apply</h3>
                    <p>Browse campaigns that match your interests and apply in seconds. No minimum followers required.</p>
                  </div>
                </div>

                <div className="step-connector"></div>

                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Match</h3>
                    <p>Get matched with brands that love your authentic voice and creative style.</p>
                  </div>
                </div>

                <div className="step-connector"></div>

                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Get Paid</h3>
                    <p>Create amazing content, submit it, and receive protected payments directly.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="steps fade-in">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Post</h3>
                    <p>Create a campaign brief with your brand requirements and budget.</p>
                  </div>
                </div>

                <div className="step-connector"></div>

                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Review</h3>
                    <p>Review applications from authentic creators who genuinely connect with your brand.</p>
                  </div>
                </div>

                <div className="step-connector"></div>

                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Launch</h3>
                    <p>Collaborate directly with creators and launch campaigns with confidence.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" className="brand-story">
        <div className="story-background"></div>
        <div className="container">
          <div className="story-content glass-card fade-in">
            <h2>Our Story</h2>
            <p className="story-lead">
              We experienced the frustration firsthand. As creators, we struggled to find meaningful brand partnerships.
              As brands, we faced astronomical agency fees that made authentic marketing impossible.
            </p>
            <p>
              That's when we decided to change how things are done. We spent countless hours building, refining,
              and perfecting a platform that would <strong>democratize access to content creation collaborations</strong>.
            </p>
            <p>
              Today, Reachly is <strong>Singapore's first and largest transparent influencer marketplace</strong> —
              a place where authentic creators connect with brands that value genuine partnerships, without the barriers
              and excessive costs that have plagued the industry for too long.
            </p>
            <div className="story-cta">
              <p className="mission-text">Join us in building a more accessible, transparent, and fair creator economy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title fade-in">Platform Features</h2>

          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">💰</div>
              <h3>Protected Payments</h3>
              <p>Secure escrow system ensures creators get paid and brands get content</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">⚡</div>
              <h3>Frictionless Matching</h3>
              <p>Smart algorithms connect the right creators with the right brands</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">🎯</div>
              <h3>No Minimum Followers</h3>
              <p>Quality over quantity. Your authentic voice matters more than numbers</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">💎</div>
              <h3>Transparent Pricing</h3>
              <p>Clear, upfront pricing with no hidden fees or surprises</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">🤝</div>
              <h3>Direct Connections</h3>
              <p>Build genuine relationships between creators and brands</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">🚫</div>
              <h3>No Agency Fees</h3>
              <p>Skip the $6k-$30k agency costs and work directly with creators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="final-cta">
        <div className="cta-background">
          <div className="gradient-orb orb-4"></div>
          <div className="gradient-orb orb-5"></div>
        </div>

        <div className="container cta-content">
          <h2 className="fade-in">Ready to Transform Your Content Journey?</h2>
          <p className="fade-in">Join Singapore's most transparent influencer marketplace today</p>

          <div className="cta-buttons fade-in">
            <button className="btn btn-white btn-large">
              Start as a Creator
            </button>
            <button className="btn btn-outline btn-large">
              I'm a Brand
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/assets/logo.png" alt="Reachly Logo" />
              </div>
              <p>Singapore's first and largest transparent influencer marketplace</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#story">Our Story</a></li>
                <li><a href="https://t.me/ReachlyOfficialBot" target="_blank" rel="noopener noreferrer">Join Channel</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#instagram" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" stroke="currentColor" fill="none" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" fill="none" strokeWidth="2" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                  </svg>
                </a>
                <a href="#linkedin" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a href="#facebook" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://t.me/ReachlyOfficialBot" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.84 8.673c-.139.623-.499.778-1.012.485l-2.796-2.06-1.349 1.299c-.149.149-.273.273-.562.273l.199-2.835 5.158-4.661c.224-.199-.05-.311-.348-.112l-6.375 4.014-2.748-.864c-.598-.187-.61-.598.126-.889l10.74-4.145c.499-.187.936.112.773.889z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Reachly - Singapore's Transparent Influencer Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
