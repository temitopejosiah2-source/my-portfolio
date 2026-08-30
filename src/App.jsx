import { useState, useEffect } from 'react';

const roles = ["Full-Stack Developer", "Web3 Enthusiast", "Security Focused"];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === roles[roleIndex].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1500);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex(subIndex + (deleting ? -1 : 1));
    }, 80);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, roleIndex]);

  return <span className="text-cyan-400">{roles[roleIndex].substring(0, subIndex)}</span>;
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wider">&lt;TJ /&gt;</h1>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#tech" className="hover:text-cyan-400 transition">Tech Stack</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex items-center justify-center min-h-screen px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 opacity-40 z-0"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text */}
          <div className="text-left space-y-6">
            <p className="text-cyan-400 font-mono text-lg">$ whoami</p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Temitope Josiah</span>
            </h1>
            
            <div className="text-2xl md:text-4xl font-semibold text-slate-300 h-10">
              <Typewriter />
            </div>

            <p className="text-slate-400 max-w-xl text-lg">
              I build secure, scalable web applications and explore decentralized technologies.
              Currently interning at Web3Bridge, passionate about clean code and modern UI.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="#projects" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-cyan-500/20">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3 border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 rounded-lg font-bold transition">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side: Picture */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl shadow-cyan-500/30">
              <img 
                src="/src/assets/profile.jpeg" 
                alt="Temitope Josiah" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </section>
        {/* Tech Stack Section */}
      <section id="tech" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tech Stack</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 bg-slate-800 border border-slate-700 rounded-xl hover:border-cyan-400 transition duration-300 h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Frontend Development</h3>
              <p className="text-slate-400">React, JavaScript, HTML5, CSS3, Tailwind CSS</p>
            </div>
            
            {/* Card 2 */}
            <div className="p-8 bg-slate-800 border border-slate-700 rounded-xl hover:border-cyan-400 transition duration-300 h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Backend Development</h3>
              <p className="text-slate-400">Node.js, Express, REST APIs, Database Management</p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-slate-800 border border-slate-700 rounded-xl hover:border-cyan-400 transition duration-300 h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Web3 & Blockchain</h3>
              <p className="text-slate-400">Solidity, Smart Contracts, Web3Bridge, Decentralized Apps</p>
            </div>

            {/* Card 4 */}
            <div className="p-8 bg-slate-800 border border-slate-700 rounded-xl hover:border-cyan-400 transition duration-300 h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Cyber Security</h3>
              <p className="text-slate-400">Security Fundamentals, Web Threat Analysis, Secure Code Practices</p>
            </div>

            {/* Card 5 */}
            <div className="p-8 bg-slate-800 border border-slate-700 rounded-xl hover:border-cyan-400 transition duration-300 h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Tools & Workflow</h3>
              <p className="text-slate-400">Git, GitHub, VS Code, Cursor, Linux, Terminal</p>
            </div>

            {/* Card 6 */}
            <div className="p-8 bg-slate-800 border border-slate-700 rounded-xl hover:border-cyan-400 transition duration-300 h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Soft Skills</h3>
              <p className="text-slate-400">Problem Solving, Collaboration, Fast Learning, Communication</p>
            </div>
          </div>
        </div>
            </section>
            {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-400 transition duration-300">
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-slate-500">Coming Soon</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-3">Tailwind Assessment</h3>
                <p className="text-slate-400 mb-6">A responsive product review card built with HTML and Tailwind CSS.</p>
                <div className="flex gap-6">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Live Demo →</a>
                  <a href="#" className="text-slate-400 hover:text-white font-medium">GitHub Repo →</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-400 transition duration-300">
              <div className="h-52 bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-slate-500">Coming Soon</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-3">Mini Blockchain Explorer</h3>
                <p className="text-slate-400 mb-6">A Web3 application exploring blockchain data and decentralized concepts.</p>
                <div className="flex gap-6">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Live Demo →</a>
                  <a href="#" className="text-slate-400 hover:text-white font-medium">GitHub Repo →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h2>
          <p className="text-slate-400 mb-8">
            I'm actively looking for new opportunities and internships. My inbox is always open!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {/* Email Button */}
            <a href="mailto:temitopejosiah2@gmail.com" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition shadow-lg shadow-cyan-500/20">
              Email Me
            </a>
            
            {/* LinkedIn Button */}
            <a href="https://www.linkedin.com/in/Temitope-Josiah" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 rounded-lg font-bold transition">
              LinkedIn
            </a>
            
            {/* GitHub Button */}
            <a href="https://github.com/temitopejosiah2-source" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 rounded-lg font-bold transition">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Temitope Josiah. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;