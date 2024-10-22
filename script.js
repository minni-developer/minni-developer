  document.addEventListener('DOMContentLoaded', () => {
    const files = document.querySelectorAll('.file');
    const content = document.getElementById('main-content');
  
    const sections = {
      content: `
      <div class="welcome-section">
      <h1>Welcome to My Portfolio</h1>
      <p id="rotatingText">I am a <span id="dynamicPhrase"></span></p>
      </div>
      <div class="explore-section">
      <h6>Click on the sections to learn more about my <span class="emphasized">skills</span>, <span class="emphasized">projects</span>, and <span class="emphasized">achievements</span>.</h6>
      </div>
`,
      skills: `
          <h2>Skills</h2>
          <br>
          <p>Cybersecurity, Threat Hunting, Incident Response, Penetration Testing, Network Security, etc.</p>
      `,
      workExperience: `
      <h2>Work Experience</h2>
      <br>
      <div class="experience-container">
          <div class="experience">
              <h3>Cybersecurity Intern</h3>
              <p><strong>Company:</strong> Tech Solutions Inc.</p>
              <p><strong>Duration:</strong> June 2023 - August 2023</p>
              <p><strong>Role:</strong> Assisted in threat assessment and vulnerability analysis.</p>
          </div>
          <div class="experience">
              <h3>Software Development Intern</h3>
              <p><strong>Company:</strong> Code Innovations</p>
              <p><strong>Duration:</strong> January 2023 - May 2023</p>
              <p><strong>Role:</strong> Developed and maintained web applications using JavaScript and Python.</p>
          </div>
          <div class="experience">
              <h3>Junior Security Analyst</h3>
              <p><strong>Company:</strong> SecureTech Ltd.</p>
              <p><strong>Duration:</strong> September 2023 - Present</p>
              <p><strong>Role:</strong> Collaborating with the team to enhance cybersecurity measures and perform regular audits.</p>
          </div>
      </div>
      `,
      projects: `
          <h2>Projects</h2>
          <br>
          <div class="project" id="thesis">
              <h3>FYP Thesis</h3>
              <p>Vulnerabilities in Android Applications Using Reverse Engineering and Machine Learning</p>
          </div>
          <div class="project" id="sdg-data-analytics">
              <h3>SDG 4 Data Analytics</h3>
              <p>Big Data Analysis using UNESCO Quality Education Dataset to gain insights and handle large data files.</p>
          </div>
          <div class="project" id="jedit-customization">
              <h3>Jedit Customization</h3>
              <p>Reverse-engineered the Java compiler to add new modules and re-engineered the existing system.</p>
          </div>
          <div class="project" id="network-simulation">
              <h3>Comprehensive Network Simulation</h3>
              <p>Network incorporating fundamental computer security concepts, including component configuration, VLAN setup, port security, STP, and VTP integration.</p>
          </div>
          <div class="project" id="stress-detection-research">
              <h3>Stress Detection Research</h3>
              <p>Stress detection with a variety of features through various Machine Learning models and their comparative study.</p>
          </div>
          <div class="project" id="web-portal">
              <h3>Co-Curricular Web Portal</h3>
              <p>Automating the record of university clubs and councils and providing a single platform for students to choose their best interests.</p>
          </div>
          <div class="project" id="management-system">
              <h3>Management System</h3>
              <p>A simple system that implements all Object Oriented concepts with a simple Java interface.</p>
          </div>
          <div class="project" id="branding-designing">
              <h3>Business Branding & Designing</h3>
              <p>Creating complete branding for an assumed business in graphic designing class using various tools.</p>
          </div>
      `,
      certificates: `
      <h2>Certifications</h2>
      <br>
      <div class="certification">
        <img src="logo/google-logo.png" alt="Google Logo" class="cert-logo">
        <p>Google Cybersecurity Specialization<br>Coursera | Google</p>
      </div>
      <div class="certification">
        <img src="logo/google-logo.png" alt="Google Logo" class="cert-logo">
        <p>Google UX Design Professional Certificate<br>Coursera | Google</p>
      </div>
      <div class="certification">
        <img src="logo/navttc-logo.png" alt="NAVTTC Logo" class="cert-logo">
        <p>National Vocational and Technical Training Commission (NAVTTC)<br>• Computer Networks<br>• Internet of Things (IoTs)</p>
      </div>
      <div class="certification">
        <img src="logo/deeplearning-logo.png" alt="DeepLearning.AI Logo" class="cert-logo">
        <p>Supervised Machine Learning<br>Coursera | DeepLearning.AI | Stanford University</p>
      </div>
      <div class="certification">
        <img src="logo/semrush-logo.png" alt="SEMrush Logo" class="cert-logo">
        <p>Search Engine Optimization (SEO)<br>SEMrush Academy</p>
      </div>
      <div class="certification">
        <img src="logo/ibm-logo.png" alt="IBM Logo" class="cert-logo">
        <p>IBM Cybersecurity Analyst<br>• Introduction to Cybersecurity Tools & Cyber Attacks<br>• Cybersecurity Roles, Processes & Operating System Security</p>
      </div>
      <div class="certification">
        <img src="logo/hku-logo.png" alt="HKU Logo" class="cert-logo">
        <p>Modeling Software Systems using UML<br>Coursera | Hong Kong University of Science and Technology</p>
      </div>
      <div class="certification">
        <img src="logo/eccouncil-logo.png" alt="EC-Council Logo" class="cert-logo">
        <p>Ethical Hacking Essentials (EHE)<br>Coursera | EC-Council</p>
      </div>
      <div class="certification">
        <img src="logo/cisco-logo.png" alt="Cisco Logo" class="cert-logo">
        <p>Introduction to Cybersecurity<br>Cisco Networking Academy</p>
      </div>
      `,
      honors: `
      <h2>Honors & Awards</h2> <br>
      <div class="honor">
        <p>🏆 Ignite Cybersecurity Hackathon 2023<br>National Finalist</p>
      </div>
      <div class="honor">
        <p>🏆 TechWeek Workshop<br>Developers Club Training</p>
      </div>
      <div class="honor">
        <p>🏆 BUITEMS Student Affairs<br>Volunteering since 2021</p>
      </div>
      <div class="honor">
        <p>🏆 Voice of Balochistan<br>Voluntarily worked with VOB</p>
      </div>
      <div class="honor">
        <p>🏆 Broadcasting Unit The City School<br>Served as a Lead Broadcaster (2008-2013)</p>
      </div>
      <div class="honor">
        <p>🏆 Science Fair<br>Best Presented Project 2012</p>
      </div>
      <div class="honor">
        <p>🏆 Colgate Global Art Contest<br>Served as a Lead Broadcaster (2012)</p>
      </div>
      <div class="honor">
        <p>🏆 AFAQ Creative Writing Competition<br>Best Creative Writer (2012)</p>
      </div>
      <div class="honor">
        <p>🏆 UNICEF Children Day<br>Remarkable Participation to portray rights and responsibilities of Children (2011)</p>
      </div>
      <div class="honor">
        <p>🏆 Parenting Conference<br>Organized Awareness Workshop for Parents (2011)</p>
      </div>
      `,
      blogs: `
          <h2>Blogs</h2>
          <br>
          <a href="demo-blog.html" target="_blank">Demo Blog Post</a>
      `,
      contact: `
      <h2>Contact Me</h2>
      <br>
      <div class="social">
          <p><i class="fab fa-github"></i> <a href="https://github.com/minni-developer" target="_blank">GitHub</a></p>
          <p><i class="fas fa-shield-alt"></i> <a href="https://app.letsdefend.io/user/manahilsabir544" target="_blank">Let's Defend</a></p>
          <p><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/manahil-sabir-0584a8253/" target="_blank">LinkedIn</a></p>
          <p><i class="fas fa-envelope"></i> <a href="mailto:manahilsabir544@gmail.com">Email</a></p>
          <p><i class="fas fa-globe"></i> <a href="https://yourwebsite.com" target="_blank">Personal Website</a></p>
      </div>
      `,
      about: `
          <h2>About</h2>
          <br>
          <p>I am a cybersecurity enthusiast with a focus on threat intelligence and ethical hacking.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      `,
      achievements: `
          <h2>Achievements</h2>
          <br>
          <p>1. Developed a SOC monitoring tool used by top organizations.</p>
          <p>2. Conducted over 100 penetration tests with a 95% success rate.</p>
      `
  };
  

  
    let isDeleting = false;
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    const rotatingText = document.getElementById("dynamicPhrase");
    const phrases = ["developer", "designer", "Researcher", "SOC analyst", "Software Engineer ", "Writer", "SEO expert", "Project manager", "problem solver", "tech enthusiast", "creative thinker ", "strategist ","visionary " , " innovator" ]; // Example phrases
    const styles = [
      "color: #e63946; font-weight: bold;", // developer - red bold
      "color: #457b9d; font-style: italic;", // designer - blue italic
      "color: #1d3557; text-decoration: underline;", // problem solver - underlined
      "color: #2a9d8f; text-transform: uppercase;", // tech enthusiast - green uppercase
      "color: #ff006e; font-weight: bold; text-shadow: 2px 2px #ffbe0b;", // developer - pink with shadow
      "color: #06d6a0; font-style: italic; background-color: #ef476f; padding: 0 10px; border-radius: 5px;", // designer - green italic with background
      "color: #118ab2; text-decoration: underline dotted; font-weight: 900; letter-spacing: 3px;", // problem solver - blue, thick underline, spaced letters
      "color: #ffd166; text-transform: uppercase; border-bottom: 3px solid #073b4c;", // tech enthusiast - yellow with a bottom border
      "color: #8338ec; font-variant: small-caps; transform: rotate(3deg);", // creative thinker - purple with slight rotation
      "color: #e36414; font-family: 'Courier New', monospace; font-size: 40px;", // strategist - orange with monospace font
      "color: #2b2d42; text-decoration: overline double #8d99ae; font-weight: lighter;", // innovator - dark with double overline
      "color: #4361ee; background-image: linear-gradient(90deg, #4361ee, #b5179e); -webkit-background-clip: text; color: transparent;" // visionary - gradient text effect
    ];
    

    function rotateText() {
      const rotatingText = document.getElementById("rotatingText");
      if (!rotatingText) return;

      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting && currentCharIndex < currentPhrase.length) {
          rotatingText.innerHTML = "I am a " + currentPhrase.substring(0, currentCharIndex + 1);
          rotatingText.setAttribute("style", styles[currentPhraseIndex]);
          currentCharIndex++;
          setTimeout(rotateText, 250);
      } else if (isDeleting && currentCharIndex > 0) {
          rotatingText.innerHTML = "I am a " + currentPhrase.substring(0, currentCharIndex - 1);
          rotatingText.setAttribute("style", styles[currentPhraseIndex]);
          currentCharIndex--;
          setTimeout(rotateText, 150);
      } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
          setTimeout(() => {
              isDeleting = true;
              rotateText();
          }, 500);
      } else if (isDeleting && currentCharIndex === 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          setTimeout(rotateText, 500);
      }
  }

  function updateContent(section) {
      content.innerHTML = sections[section] || `<h2>Section Not Found</h2>`;
      currentPhraseIndex = 0;
      currentCharIndex = 0;
      isDeleting = false;
      rotateText(); // Reinitialize the text rotation effect
  }

  files.forEach(file => {
      file.addEventListener('click', (e) => {
          e.preventDefault();
          const section = file.getAttribute('data-section');
          updateContent(section);
      });
  });

  // Initial content load and rotating text
  content.innerHTML = sections.content; // Load initial content
  rotateText(); // Start rotating text on load
});