import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('creators')
  const fadeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <svg className="logo-icon" width="24" height="24" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#4F46E5" />
              <path d="M8 14L14 8L20 14L14 20L8 14Z" fill="white" opacity="0.9" />
              <path d="M11 14L14 11L17 14L14 17L11 14Z" fill="#4F46E5" />
            </svg>
            <span className="logo-text">reachly.io</span>
          </div>

          <a href="https://t.me/+K_ql6MOIm40zY2I1" target="_blank" rel="noopener noreferrer" className="btn-join-waitlist">Join Waitlist</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-split">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-diamond">◆</span>
              SINGAPORE'S FIRST TRANSPARENT CREATOR MARKETPLACE
            </div>

            <h1 className="hero-title">
              Monetize Passion,<br />
              <span className="accent-text">Scale Authentically.</span>
            </h1>

            <p className="hero-subtitle">
              The all-in-one marketplace connecting UGC creators with high-intent brands. No minimum followers. No agency fees.
            </p>

            <div className="hero-ctas">
              <a href="#creator" className="btn btn-dark">
                Join as Creator
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#brand" className="btn btn-outline">I'm a Brand</a>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                {/* App Header */}
                <div className="app-header">
                  <span className="app-title">Discover</span>
                  <div className="app-avatar-small">
                    <img src="/assets/creator-1.jpg" alt="" className="app-avatar-img" />
                  </div>
                </div>

                {/* Creator Photo */}
                <div className="creator-photo-area">
                  <img src="/assets/creator-1.jpg" alt="Creator" className="creator-photo" />
                  <div className="ugc-badge">UGC Creator</div>
                </div>

                {/* Creator Card */}
                <div className="creator-card">
                  <div className="creator-card-header">
                    <div className="creator-info">
                      <h3 className="creator-name">Sarah Chen</h3>
                      <p className="creator-details">Lifestyle &amp; Beauty •<br />Singapore</p>
                    </div>
                    <div className="match-score">
                      <svg className="match-ring" width="44" height="44" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="18" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                        <circle cx="22" cy="22" r="18" fill="none" stroke="#4F46E5" strokeWidth="3"
                          strokeDasharray="113.1" strokeDashoffset="2.26"
                          strokeLinecap="round" transform="rotate(-90 22 22)" />
                      </svg>
                      <span className="match-text">98%<br /><small>Match</small></span>
                    </div>
                  </div>

                  <div className="creator-tags">
                    <span className="tag">Video</span>
                    <span className="tag">Photography</span>
                  </div>

                  <button className="collaborate-btn">Collaborate</button>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="floating-badge badge-payments">
              <div className="badge-icon-circle badge-icon-green">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M15 5L7 13L3 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="badge-text-group">
                <span className="badge-label">PAYMENTS</span>
                <span className="badge-value">Protected &amp; Fast</span>
              </div>
            </div>

            <div className="floating-badge badge-fees">
              <div className="badge-icon-circle badge-icon-purple">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3L11 7L15 7.5L12 10.5L13 15L9 12.5L5 15L6 10.5L3 7.5L7 7L9 3Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="badge-text-group">
                <span className="badge-label">FEES</span>
                <span className="badge-value">0% Agency Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="about-section fade-in">
        <div className="container">
          <div className="about-label">ABOUT REACHLY</div>
          <h2 className="about-heading">
            We're bridging the gap between<br />
            <span className="about-highlight">authentic creators</span> and <span className="about-highlight-underline">growing brands.</span>
          </h2>

          <div className="about-columns">
            <div className="about-col">
              <h3 className="about-col-title">Democratizing Access</h3>
              <p className="about-col-text">
                We believe every creator deserves a fair shot at brand partnerships.
                Built for the next generation of influence makers, we remove the
                gatekeeping and provide a level playing field where talent matters
                more than follower counts or vanity metrics.
              </p>
            </div>
            <div className="about-col">
              <h3 className="about-col-title">The Origin Story</h3>
              <p className="about-col-text">
                Born out of frustration with opaque agency models, Reachly was
                created to make brand partnerships transparent, accessible and fair.
                We give creators control, reduce barriers to entry, provide real value
                instead of empty promises by decentralizing the creator
                economy in SG and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section fade-in">
        <div className="container">
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">LIVE CAMPAIGNS</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">ACTIVE CREATORS</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">#1</span>
              <span className="stat-label">CREATOR-FIRST PLATFORM</span>
            </div>
            <div className="stat-arrow">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works fade-in">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Three simple steps to get started.</p>

          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === 'creators' ? 'active' : ''}`}
              onClick={() => setActiveTab('creators')}
            >
              For Creators
            </button>
            <button
              className={`tab-btn ${activeTab === 'brands' ? 'active' : ''}`}
              onClick={() => setActiveTab('brands')}
            >
              For Brands
            </button>
          </div>

          <div className="steps-container">
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Apply</h3>
                  <p>
                    {activeTab === 'creators'
                      ? 'Share your content, set up your profile to showcase your work. No minimum followers required.'
                      : 'Tell us about your brand, your goals, and the type of creators you want to work with.'}
                  </p>
                </div>
              </div>

              <div className="step-connector"></div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Match</h3>
                  <p>
                    {activeTab === 'creators'
                      ? 'Get matched with brands in your niche. Our smart algorithm finds the best fits for your style.'
                      : 'Our algorithm connects you with creators who align with your brand values and campaign goals.'}
                  </p>
                </div>
              </div>

              <div className="step-connector"></div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Get Paid</h3>
                  <p>
                    {activeTab === 'creators'
                      ? 'Create content, deliver on time, and get paid securely through our protected payment system.'
                      : 'Review content, approve deliverables, and pay creators securely through our platform.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Creators Section */}
      <section className="benefits-section fade-in" id="creator">
        <div className="container">
          <h3 className="benefits-label">For Creators</h3>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon benefit-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <h4 className="benefit-title">Monetize Your Passion</h4>
              <p className="benefit-desc">
                Turn your creativity into income. Join campaigns, create content, and get paid for doing what you love.
              </p>
              <div className="benefit-visual benefit-chart">
                <div className="mini-chart">
                  <div className="chart-bar" style={{ height: '40%', background: '#818CF8' }}></div>
                  <div className="chart-bar" style={{ height: '60%', background: '#6366F1' }}></div>
                  <div className="chart-bar" style={{ height: '45%', background: '#818CF8' }}></div>
                  <div className="chart-bar" style={{ height: '80%', background: '#4F46E5' }}></div>
                  <div className="chart-bar" style={{ height: '65%', background: '#6366F1' }}></div>
                </div>
              </div>
            </div>

            <div className="benefit-card benefit-card-purple">
              <div className="benefit-icon benefit-icon-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h4 className="benefit-title">No Minimum Followers</h4>
              <p className="benefit-desc">
                We don't gatekeep. Whether you have 500 or 500K followers, your talent matters more than your follower count.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon benefit-icon-green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h4 className="benefit-title">Flexible Planning</h4>
              <p className="benefit-desc">
                Work on your own schedule. Accept campaigns that fit your timeline and creative style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Brands Section */}
      <section className="benefits-section benefits-brands fade-in" id="brand">
        <div className="container">
          <h3 className="benefits-label">For Brands</h3>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon benefit-icon-orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h4 className="benefit-title">Effortless Matching</h4>
              <p className="benefit-desc">
                let algorithm find the most relevant creators for your campaign – perfectly aligned with your target audience.
              </p>
              <div className="benefit-link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="benefit-card benefit-card-yellow">
              <div className="benefit-icon benefit-icon-yellow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </div>
              <h4 className="benefit-title">Avoid Inflated Rates</h4>
              <p className="benefit-desc">
                Say goodbye to 50% agency markups. Negotiate directly with creators at fair, transparent rates.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon benefit-icon-red">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h4 className="benefit-title">Access to Talent</h4>
              <p className="benefit-desc">
                Access a curated pool of verified UGC creators across various niches, ready to bring your brand vision to life.
              </p>
              <div className="benefit-link benefit-link-red">Learn more →</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Community Section */}
      <section className="testimonials-section fade-in">
        <div className="container">
          <h2 className="section-title">Trusted by the community</h2>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="/assets/creator-1.jpg" alt="Creator" />
                </div>
                <div className="testimonial-info">
                  <span className="testimonial-name">@SarahCreates</span>
                  <span className="testimonial-role">UGC Creator</span>
                </div>
              </div>
              <p className="testimonial-text">
                "This is unlike any other platform I've used before.
                Before I used to search every other platform but now I can
                simply find brands I want to work with in seconds. Highly recommended!"
              </p>
              <div className="testimonial-stars">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="star">{star}</span>
                ))}
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="/assets/creator-2.jpg" alt="Creator" />
                </div>
                <div className="testimonial-info">
                  <span className="testimonial-name">@FoodieJen</span>
                  <span className="testimonial-role">Lifestyle Creator</span>
                </div>
              </div>
              <p className="testimonial-text">
                "Reach's approach to transparent brand-creator
                partnerships is exactly what this marketplace needed.
                It creates transparent, fair and honest collaborations. Highly recommend!"
              </p>
              <div className="testimonial-stars">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="star">{star}</span>
                ))}
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar avatar-placeholder">
                  <span>TC</span>
                </div>
                <div className="testimonial-info">
                  <span className="testimonial-name">@TechCarl</span>
                  <span className="testimonial-role">Tech Reviewer</span>
                </div>
              </div>
              <p className="testimonial-text">
                "As a manager who manages nearly 25+ talent,
                and a tech enthusiast, I fell in love with Reachly's
                look at thought model. "I'm going everywhere now." simply
                stunning."
              </p>
              <div className="testimonial-stars">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="star">{star}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta fade-in" id="waitlist">
        <div className="container cta-content">
          <div className="cta-label">JOIN THE WAITLIST</div>
          <h2>Start your journey today.</h2>
          <p>Whether you're a creator looking for your passion or a brand in search of
            the perfect match, Reachly is made for you.</p>
          <div className="cta-buttons">
            <a href="https://t.me/+K_ql6MOIm40zY2I1" target="_blank" rel="noopener noreferrer" className="btn btn-cta-primary">Join the Waitlist</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-simple">
        <div className="container">
          <p className="footer-copyright">
            © 2025 Reachly • Singapore's First Transparent Creator Marketplace
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
