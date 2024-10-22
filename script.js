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
<div class="skills-container">
    <!-- Skill 1: Programming Languages -->
    <div class="skill">
        <div class="icon">
            <i class="fas fa-code"></i>
        </div>
        <div class="details">
            <h3>Programming Languages</h3>
            <p>Python, Java, C++, JavaScript, SQL</p>
        </div>
    </div>

    <!-- Skill 2: Web Development -->
    <div class="skill">
        <div class="icon">
            <i class="fas fa-laptop-code"></i>
        </div>
        <div class="details">
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React, Node.js, Flask</p>
        </div>
    </div>

    <!-- Skill 3: Tools & Technologies -->
    <div class="skill">
        <div class="icon">
            <i class="fas fa-tools"></i>
        </div>
        <div class="details">
            <h3>Tools & Technologies</h3>
            <p>Git, Docker, Spark, Jupyter, AWS, Wazuh, Let's Defend</p>
        </div>
    </div>

    <!-- Skill 4: Cybersecurity -->
    <div class="skill">
        <div class="icon">
            <i class="fas fa-shield-alt"></i>
        </div>
        <div class="details">
            <h3>Cybersecurity</h3>
            <p>Web Pentesting, Vulnerability Scanning, SOC Monitoring, Ethical Hacking</p>
        </div>
    </div>

    <!-- Skill 5: Data Analysis -->
    <div class="skill">
        <div class="icon">
            <i class="fas fa-chart-line"></i>
        </div>
        <div class="details">
            <h3>Data Analysis</h3>
            <p>Pandas, NumPy, Big Data Analysis, Spark DataFrame, Data Visualization</p>
        </div>
    </div>

    <!-- Skill 6: Soft Skills -->
    <div class="skill">
        <div class="icon">
            <i class="fas fa-user-friends"></i>
        </div>
        <div class="details">
            <h3>Soft Skills</h3>
            <p>Teamwork, Problem-Solving, Communication, Leadership, Time Management</p>
        </div>
    </div>

    <!-- Skill 7: Writing & Documentation -->
    <div class="skill">
        <div class="icon">
            <i class="fas fa-pen-nib"></i>
        </div>
        <div class="details">
            <h3>Writing & Documentation</h3>
            <p>Thesis Writing, Technical Documentation, Report Writing, Content Creation</p>
        </div>
    </div>

    <!-- Skill 8: Multilingual Abilities -->
    <div class="skill">
        <div class="icon">
            <i class="fas fa-language"></i>
        </div>
        <div class="details">
            <h3>Multilingual Abilities</h3>
            <p>English, Urdu, Balochi, Pashto</p>
        </div>
    </div>
</div>

      `,
      workExperience: `
      <!-- Include Font Awesome -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      
      <h2>Work Experience</h2> <br>
      <div class="experience-container">
          <!-- PSEB Apprenticeship -->
          <div class="experience">
              <div class="icon">
                  <i class="fas fa-shield-alt"></i>
              </div>
              <div class="details">
                  <h3>PSEB Apprenticeship</h3>
                  <p class="company">Ultrasoft System Inc. • Aug - Sept 2024</p>
                  <p class="role">Web Pentesting</p>
              </div>
          </div>
      
          <!-- SEO Intern -->
          <div class="experience">
              <div class="icon">
                  <i class="fas fa-search"></i>
              </div>
              <div class="details">
                  <h3>SEO Intern</h3>
                  <p class="company">Icon Pro Digital Solutions • Jan - Apr 2024</p>
                  <p class="role">Developed and maintained SEO strategies.</p>
              </div>
          </div>
      
          <!-- Teaching Assistance -->
          <div class="experience">
              <div class="icon">
                  <i class="fas fa-chalkboard-teacher"></i>
              </div>
              <div class="details">
                  <h3>Teaching Assistance</h3>
                  <p class="company">BUITEMS • Aug - Dec 2023</p>
                  <p class="role">Conducted machine learning lectures, lab sessions, and debugging.</p>
              </div>
          </div>
      </div>
      
      `,
      projects: `
      <h2>Projects</h2>
      <br>
      <div class="projects-container">
          <div class="project" id="thesis">
              <h3>FYP Thesis: Android Vulnerability Detection</h3>
              <p>Analyzed vulnerabilities in Android applications using reverse engineering and machine learning to enhance detection and classification of security threats.</p>
          </div>
          <div class="project" id="sdg-data-analytics">
              <h3>SDG 4 Data Analytics</h3>
              <p>Performed big data analysis using the UNESCO Quality Education dataset, extracting insights and processing large data files to support education-related decision-making.</p>
          </div>
          <div class="project" id="jedit-customization">
              <h3>Jedit Customization</h3>
              <p>Reverse-engineered the Java compiler by adding new modules and improving the system's functionality.</p>
          </div>
          <div class="project" id="network-simulation">
              <h3>Comprehensive Network Simulation</h3>
              <p>Designed a network simulation incorporating key security concepts, such as VLAN configuration, port security, and VTP integration.</p>
          </div>
          <div class="project" id="stress-detection-research">
              <h3>Stress Detection Research</h3>
              <p>Researched stress detection using machine learning models and performed a comparative analysis of multiple algorithms.</p>
          </div>
          <div class="project" id="web-portal">
              <h3>Co-Curricular Web Portal</h3>
              <p>Automated university clubs and councils management, providing a platform for students to register for co-curricular activities.</p>
          </div>
          <div class="project" id="management-system">
              <h3>Object-Oriented Management System</h3>
              <p>Created a management system using OOP principles, with a user-friendly Java interface for administrative tasks.</p>
          </div>
          <div class="project" id="branding-designing">
              <h3>Business Branding & Graphic Design</h3>
              <p>Executed branding for a hypothetical business, including logo design, promotional materials, and visual identity.</p>
          </div>
      </div>
      
      `,
      certificates: `
      <h2>Certifications</h2>
      <br>
      <div class="certification">
        <img src="logo/google.svg" alt="Google Logo" class="cert-logo">
        <p>Google Cybersecurity Specialization<br>Coursera | Google</p>
      </div>
      <div class="certification">
        <img src="logo/google.svg" alt="Google Logo" class="cert-logo">
        <p>Google UX Design Professional Certificate<br>Coursera | Google</p>
      </div>
      <div class="certification">
        <img src="logo/NAVTTC.svg" alt="NAVTTC Logo" class="cert-logo">
        <p>National Vocational and Technical Training Commission (NAVTTC)<br>• Computer Networks<br>• Internet of Things (IoTs)</p>
      </div>
      <div class="certification">
        <img src="logo/deepLearning.png" alt="DeepLearning.AI Logo" class="cert-logo">
        <p> Machine Learning Specialization<br>Coursera | DeepLearning.AI | Stanford University</p>
      </div>
      <div class="certification">
        <img src="logo/Semrush.svg" alt="SEMrush Logo" class="cert-logo">
        <p>Search Engine Optimization (SEO)<br>SEMrush Academy</p>
      </div>
      <div class="certification">
        <img src="logo/ibm.svg" alt="IBM Logo" class="cert-logo">
        <p>IBM Cybersecurity Analyst<br>• Introduction to Cybersecurity Tools & Cyber Attacks<br>• Cybersecurity Roles, Processes & Operating System Security</p>
      </div>
      <div class="certification">
        <img src="logo/Coursera.svg" alt="HKU Logo" class="cert-logo">
        <p>Modeling Software Systems using UML<br>Coursera | Hong Kong University of Science and Technology</p>
      </div>
      <div class="certification">
        <img src="logo/EC-Council.png" alt="EC-Council Logo" class="cert-logo">
        <p>Ethical Hacking Essentials (EHE)<br>Coursera | EC-Council</p>
      </div>
      <div class="certification">
        <img src="logo/cisco.svg" alt="Cisco Logo" class="cert-logo">
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
      <h2>Blog</h2>
      <br>
      <div class="blog-container">
          <div class="blog-post" id="blog1">
              <h3>Understanding Web Pentesting</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis tortor nec purus dapibus euismod...</p>
              <a href="#" target="_blank">Read More</a>
          </div>
          <div class="blog-post" id="blog2">
              <h3>Big Data Analytics: Insights from UNESCO Dataset</h3>
              <p>Proin ac justo et quam auctor efficitur. Nulla facilisi. Suspendisse nec odio ullamcorper, pharetra neque sit amet...</p>
              <a href="#" target="_blank">Read More</a>
          </div>
          <div class="blog-post" id="blog3">
              <h3>Reverse Engineering in Software Development</h3>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...</p>
              <a href="#" target="_blank">Read More</a>
          </div>
      </div>
      
      `,
      contact: `
      <h2>Contact Me</h2> <br>
      <div class="social">
          <p><i class="fab fa-github" aria-hidden="true"></i> <a href="https://github.com/minni-developer" target="_blank">GitHub</a></p>
          <p><i class="fas fa-shield-alt" aria-hidden="true"></i> <a href="https://app.letsdefend.io/user/manahilsabir544" target="_blank">Let's Defend</a></p>
          <p><i class="fab fa-linkedin" aria-hidden="true"></i> <a href="https://www.linkedin.com/in/manahil-sabir-0584a8253/" target="_blank">LinkedIn</a></p>
          <p><i class="fas fa-envelope" aria-hidden="true"></i> <a href="mailto:manahilsabir544@gmail.com">Email</a></p>
          <p><i class="fas fa-globe" aria-hidden="true"></i> <a href="https://minni-developer.github.io/" target="_blank">Personal Website</a></p>
      </div>

      `,
      about: `
      <h2>About Me</h2>
      <br>
      <div class="about-container">
          <div class="about-content">
              <p>
                  Hello! I’m <strong>Manahil Sabir</strong>, a <span class="highlight">cybersecurity enthusiast</span> with a keen focus on <span class="highlight">threat intelligence</span> and <span class="highlight">ethical hacking</span>. I hold a BS in Software Engineering, where I graduated with a CGPA of <strong>3.5</strong>. My journey has been fueled by a passion for leveraging technology to tackle real-world challenges.
              </p>
              <p>
                  During my academic career, I honed my skills through hands-on internships in <strong>web penetration testing</strong> and <strong>SEO</strong>, engaging in projects that showcase my creativity and technical prowess. My expertise spans various programming languages, machine learning techniques, and ethical hacking practices, empowering me to approach problems from diverse angles.
              </p>
              <p>
                  I thrive in collaborative environments and possess strong teaching and mentoring abilities, allowing me to convey complex ideas with clarity. Additionally, my multilingual skills enhance my ability to connect with individuals from different backgrounds.
              </p>
              <p>
                  I am eager to contribute to innovative projects that advance technology security and efficiency. With a results-oriented mindset and a commitment to excellence, I look forward to making a meaningful impact as part of a dynamic team.
              </p>
          </div>
      </div>
      
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
    const phrases = [ "SOFTWARE Engineer ","Researcher", "Writer",  "SEO expert", "SOC analyst", "Project manager", "Problem Solver", "Tech Enthusiast", "Creative Thinker ", "Strategist ","Visionary " , " Innovator" ]; // Example phrases
    const styles = [
      "color: #e38d3d; font-weight: bold;", // 
      "color: #457b9d; font-style: italic;", // 
      "color: #FF8A8A; text-decoration: underline;", // 
      "color: #2a9d8f; text-transform: uppercase;", // 
      "color: #36BA98; font-weight: bold; text-shadow: 2px 2px #ffbe0b;", // 
      "color: #170207; font-style: italic; background-color: #e3dadc; padding: 0 10px; border-radius: 5px;", // 
      "color: #118ab2; text-decoration: underline dotted; font-weight: 900; letter-spacing: 3px;", // 
      "color: #ffd166; text-transform: uppercase; border-bottom: 3px solid #073b4c;", //   
      "color: #8338ec; font-variant: small-caps; transform: rotate(3deg);", //  
      "color: #e36414; font-family: 'Courier New', monospace; font-size: 40px;", // 
      "color: #98db46; text-decoration: overline double #98db46; font-weight: lighter;", //  
      "color: #e63946; background-image: linear-gradient(90deg, #4361ee, #b5179e); -webkit-background-clip: text; color: transparent;" // 
    ];
    

    function rotateText() {
      const rotatingText = document.getElementById("rotatingText");
      if (!rotatingText) return;

      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting && currentCharIndex < currentPhrase.length) {
          rotatingText.innerHTML = "I am a " + currentPhrase.substring(0, currentCharIndex + 1);
          rotatingText.setAttribute("style", styles[currentPhraseIndex]);
          currentCharIndex++;
          setTimeout(rotateText, 200);
      } else if (isDeleting && currentCharIndex > 0) {
          rotatingText.innerHTML = "I am a " + currentPhrase.substring(0, currentCharIndex - 1);
          rotatingText.setAttribute("style", styles[currentPhraseIndex]);
          currentCharIndex--;
          setTimeout(rotateText, 100);
      } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
          setTimeout(() => {
              isDeleting = true;
              rotateText();
          }, 500);
      } else if (isDeleting && currentCharIndex === 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          setTimeout(rotateText, 300);
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