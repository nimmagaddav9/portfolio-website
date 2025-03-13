import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Vijay Nimmagadda</h1>
            <p className="text-xl md:text-2xl mb-8">Senior Full Stack Developer</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/nimmagaddav9" className="text-white hover:text-blue-400 transition-colors">
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
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <User2 className="mr-2 text-blue-600" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a Sr. Developer with 12+ years of experience creating and delivering user-centric applications.
            Expertise in JavaScript, ReactJS, Redux, NodeJS, Angular, Typescript, and Bootstrap. 
            Extensive experience with API integration.
            Extensive experience in Development, Implementation, and testing in various application architectures, including E-Commerce, B2B, Distributed Applications, Internet/ Intranet. 
            Experience working in large matrixed environment, with multiple cross-functional teams.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
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
      <section className="py-20 px-4 md:px-8">
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
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
                startDate: 'December 2022',
                endDate: 'Present',
                link: 'https://www.united.com'
              },
              {
                title: 'Visa',
                description: 'I worked with ATX-A11y Accelerators Team for different modules like Account Management, Analytics, Application Management etc. The goal is to build modules from scratch and meet the Accessibility guidelines.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
                startDate: 'December 2020',
                endDate: 'November 2022',
                link: 'https://www.visa.com'
              },
              {
                title: 'Capital Group',
                description: 'Worked on DAVIS Project, Creative Workbench, a writing tool where articles are published on capital group websites.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
                startDate: 'August 2018',
                endDate: 'November 2020',
                link: 'https://www.capitalgroup.com'
              },
              {
                title: 'Cerner Corporation',
                description: 'Worked on the medical examination forms.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
                startDate: 'December 2017',
                endDate: 'August 2018',
                link: 'https://www.oracle.com/industries/cerner-health/'
              },
              {
                title: 'Office Depot',
                description: 'Worked on black Friday reporting.',
                image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
                startDate: 'September 2014',
                endDate: 'November 2017',
                link: 'https://www.officedepot.com'
              },
              {
                title: 'Satinos Technologies Pvt. Ltd',
                description: 'Created a tax portal and a schoomin website for the Vignan schools.',
                image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
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
      <section className="py-20 px-4 md:px-8 bg-white">
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