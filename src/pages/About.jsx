import { Users, Target, Rocket, Mail } from 'lucide-react';

function About() {
  return (
    <div className="page">
      <div className="container">
        {/* Left Column: About Section */}
        <div className="card">
          <div className="about-section">
            <div>
              <div className="section-header">
                <Users size={32} />
                <h1>About Us</h1>
              </div>
              <p>
                Welcome to our project! We are dedicated to delivering innovative
                solutions that simplify your life and empower your business.
              </p>
            </div>

            <div>
              <div className="section-header">
                <Target size={24} />
                <h2>Our Vision</h2>
              </div>
              <p>
                To create a seamless digital ecosystem that bridges the gap
                between technology and user needs, fostering growth and
                efficiency.
              </p>
            </div>

            <div>
              <div className="section-header">
                <Rocket size={24} />
                <h2>Our Mission</h2>
              </div>
              <p>
                To provide high-quality, scalable, and user-friendly solutions
                that cater to a diverse range of industries, ensuring client
                satisfaction and long-term success.
              </p>
            </div>

            <div>
              <div className="section-header">
                <Mail size={24} />
                <h2>Contact Us</h2>
              </div>
              <p>
                Have questions or want to collaborate? Feel free to reach out at{' '}
                <a href="mailto:info@ourproject.com" className="email-link">
                  info@ourproject.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Meet the Team */}
        <div className="card">
          <h1>Meet the Team</h1>
          <div className="team-grid">
            <div className="team-member">
              <img
                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Prakash Singh"
              />
              <div className="team-member-info">
                <h3>Prakash Singh</h3>
                <p className="role">Lead Developer</p>
                <p>
                  Passionate about creating efficient, scalable, and innovative
                  solutions.
                </p>
              </div>
            </div>

            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Jyoti Attri"
              />
              <div className="team-member-info">
                <h3>Jyoti Attri</h3>
                <p className="role">UI/UX Designer</p>
                <p>
                  Focused on delivering user-friendly interfaces and outstanding
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;