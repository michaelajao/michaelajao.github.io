'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Aneurysm Transient Flow Analysis with Physics-Informed Neural Networks",
      description: "Advanced implementation of Physics-Informed Neural Networks for modeling transient blood flow dynamics in aortic aneurysms. This research combines deep learning with fundamental physics principles, incorporating Navier-Stokes equations to predict pressure distributions, velocity fields, and wall shear stress in both healthy and aneurysmal blood vessels.",
      technologies: ["Python", "PyTorch", "Physics-Informed Neural Networks", "Computational Fluid Dynamics", "Healthcare Analytics"],
      github: "https://github.com/michaelajao/Anuerysm_transientFlow_PINNs",
      demo: "#",
      category: "Biomedical Engineering"
    },
    {
      title: "Plant Disease Detection with Deep Learning",
      description: "Cross-platform mobile application using artificial neural networks for plant disease detection. This MSc dissertation project achieved distinction and demonstrates the application of deep learning in agricultural technology for early disease identification and crop management.",
      technologies: ["Python", "TensorFlow", "Flutter", "Deep Learning", "Computer Vision", "Mobile Development"],
      github: "https://github.com/michaelajao/plant_disease_dl",
      demo: "https://github.com/michaelajao/plant_disease_flutter",
      category: "Agricultural Technology"
    },
    {
      title: "Topic Modelling with Latent Dirichlet Allocation",
      description: "Implementation of topic modeling techniques using Latent Dirichlet Allocation for text analysis and document classification. This project demonstrates natural language processing capabilities and unsupervised learning applications in text mining.",
      technologies: ["Python", "LDA", "Natural Language Processing", "Machine Learning", "Text Mining"],
      github: "https://github.com/michaelajao/topic-modelling-with-LDA",
      demo: "#",
      category: "Natural Language Processing"
    },
    {
      title: "Fitness Tracker Analytics with Machine Learning",
      description: "Comprehensive data science project for analyzing fitness tracker data using machine learning techniques. This project explores predictive modeling for health monitoring and demonstrates advanced data analysis capabilities in healthcare applications.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Healthcare Analytics", "Statistical Modeling"],
      github: "https://github.com/michaelajao/fitness_tracker",
      demo: "#",
      category: "Health Data Science"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Featured Research & Projects
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A selection of my research projects and implementations in biomedical engineering, 
            physics-informed neural networks, and healthcare analytics applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Header */}
              <div className="relative h-16 bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/michaelajao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
