import React, { useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User2, FileDown } from 'lucide-react';

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">VN</h1>
            <ul className="hidden md:flex space-x-8">
              <li>
                <button 
                  onClick={() => scrollToSection(aboutRef)}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection(skillsRef)}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection(projectsRef)}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection(contactRef)}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Let's Connect
                </button>
              </li>
            </ul>
            {/* Mobile Menu */}
            <div className="md:hidden flex space-x-4">
              <button onClick={() => scrollToSection(aboutRef)} className="p-2">
                <User2 className="w-5 h-5" />
              </button>
              <button onClick={() => scrollToSection(skillsRef)} className="p-2">
                <Code2 className="w-5 h-5" />
              </button>
              <button onClick={() => scrollToSection(projectsRef)} className="p-2">
                <Briefcase className="w-5 h-5" />
              </button>
              <button onClick={() => scrollToSection(contactRef)} className="p-2">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="mb-8">
              <img 
                src="https://avatars.githubusercontent.com/u/6308832?v=4" 
                alt="Vijay Nimmagadda"
                className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-xl mb-6"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Vijay Nimmagadda</h1>
            <p className="text-xl md:text-2xl mb-8">Senior Full Stack Developer</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/nimmagaddav9/portfolio-website/tree/master" className="text-white hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/nimmagaddav9/" className="text-white hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:nimmagaddav9@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4 md:px-8 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <User2 className="mr-2 text-blue-600" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a Sr. Developer with 12+ years of experience creating and delivering user-centric applications.
              Expertise in JavaScript, ReactJS, Redux, NodeJS, Angular, Typescript, and Bootstrap. 
              Extensive experience with API integration.
              Extensive experience in Development, Implementation, and testing in various application architectures, including E-Commerce, B2B, Distributed Applications, Internet/ Intranet. 
              Experience working in large matrixed environment, with multiple cross-functional teams.
            </p>
            <div className="flex justify-center">
              <a 
                href="/Vijay_Nimmagadda_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileDown className="mr-2" size={20} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 px-4 md:px-8 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Code2 className="mr-2 text-blue-600" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['React','Redux', 'Node.js','Angular','TypeScript', 'Material-UI', 'Bootstrap', 'AWS', 'Docker'].map((skill) => (
              <div key={skill} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-4 md:px-8 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Briefcase className="mr-2 text-blue-600" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'United Airlines',
                description: 'Worked with React Migration Team for different modules like Forgot-Password, United Club Pass, Sign-in Two factoring Authentication, etc. The goal is to migrate features on united.com and meet the Accessibility guidelines.',
                image: 'https://www.priestmangoode.com/wp-content/uploads/2021/04/United-Airlines_B787-9-Livery_Priestmangoode-2048x1348.jpg',
                startDate: 'December 2022',
                endDate: 'Present',
                link: 'https://www.united.com'
              },
              {
                title: 'Visa',
                description: 'I worked with ATX-A11y Accelerators Team for different modules like Account Management, Analytics, Application Management etc. The goal is to build modules from scratch and meet the Accessibility guidelines.',
                image: 'https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1343072609/image_1343072609.jpg?io=getty-c-w640',
                startDate: 'December 2020',
                endDate: 'November 2022',
                link: 'https://www.visa.com'
              },
              {
                title: 'Capital Group',
                description: 'Worked on DAVIS Project, Creative Workbench, a writing tool where articles are published on capital group websites.',
                image: 'https://media.glassdoor.com/l/99/13/71/04/cgc.jpg?signature=1b15f1f1737251629d7685c5338a2b86054264a648df4eba174e150364a6bad7',
                startDate: 'August 2018',
                endDate: 'November 2020',
                link: 'https://www.capitalgroup.com'
              },
              {
                title: 'Cerner Corporation',
                description: 'Worked on the medical examination forms.',
                image: 'https://s3-prod.modernhealthcare.com/s3fs-public/Cerner_fullsize_AP_i.jpg',
                startDate: 'December 2017',
                endDate: 'August 2018',
                link: 'https://www.oracle.com/industries/cerner-health/'
              },
              {
                title: 'Office Depot',
                description: 'Worked on black Friday reporting.',
                image: 'https://images.squarespace-cdn.com/content/v1/555dd767e4b0c1834b5b6595/1577071536117-MBUK0B26LGP1CPGM08N7/Office_Depot_Exterior_0010.jpg?format=2500w',
                startDate: 'September 2014',
                endDate: 'November 2017',
                link: 'https://www.officedepot.com'
              },
              {
                title: 'Satinos Technologies Pvt. Ltd',
                description: 'Created a tax portal and a schoomin website for the Vignan schools.',
                image: 'https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/464312526_9193589440670039_7346531205256223403_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=vBxnO7-Z-tMQ7kNvgHKz7Jb&_nc_oc=AdgCztshVgrGhl3132j7SIk5iY5q0TloIsGNBd2Wv5srvFLgnbLUFrHPpVy0FE3M-5Es4vg6Hy7zNh1NrtL7HWmC&_nc_zt=23&_nc_ht=scontent-hou1-1.xx&_nc_gid=o5d2kEvKPhf1unDT4WjeLA&oh=00_AYF31gn_ipngDtfbSxBNmz0uZ7pHL9Cms56bvWEnl56DFw&oe=67D910C6',
                startDate: 'January 2013',
                endDate: 'August 2014',
                link: 'https://www.vignanschools.com'
              }
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="text-sm text-gray-500 mb-3">
                    {project.startDate} - {project.endDate}
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Visit Website <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4 md:px-8 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:nimmagaddav9@gmail.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <Mail size={20} className="mr-2" />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/nimmagaddav9/"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors inline-flex items-center"
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>© 2025 Vijay Nimmagadda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;