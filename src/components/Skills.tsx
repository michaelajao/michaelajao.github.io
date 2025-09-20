'use client'

import { motion } from 'framer-motion'
import { Code, Database, Brain, Globe, Users, Clock } from 'lucide-react'

export default function Skills() {
  const technicalSkills = [
    {
      category: "Research & Modeling",
      icon: Brain,
      skills: [
        "Physics-Informed Neural Networks (PINNs)",
        "Epidemiological Modeling",
        "Deep Learning (RNNs, LSTMs, CNNs, Transformers)",
        "Scientific Computing",
        "Numerical Methods"
      ]
    },
    {
      category: "Programming & Frameworks",
      icon: Code,
      skills: [
        "Python (TensorFlow, PyTorch, JAX, SciPy)",
        "Machine Learning (Scikit-learn, Keras)",
        "Data Science (Pandas, NumPy, Statistical Analysis)",
        "Visualization (Matplotlib, Seaborn, Plotly)",
        "Julia Programming"
      ]
    },
    {
      category: "Engineering & Development",
      icon: Globe,
      skills: [
        "Electrical Engineering (Communications, Signal Processing)",
        "Web Technologies (JavaScript, HTML5, CSS/SCSS, ReactJS)",
        "Mobile Development (Flutter)",
        "Cloud Computing (AWS, Azure, Google Cloud)",
        "Version Control (Git, GitHub)"
      ]
    },
    {
      category: "Data & Analytics",
      icon: Database,
      skills: [
        "Big Data Management",
        "Data Visualization",
        "Statistical Methods",
        "Information Retrieval",
        "Database Design"
      ]
    }
  ]

  const softSkills = [
    {
      icon: Users,
      title: "Communication",
      description: "Strong ability to explain complex technical concepts to non-experts"
    },
    {
      icon: Brain,
      title: "Problem-Solving",
      description: "Strategic and analytical problem-solving approach"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Experience mentoring junior developers and data scientists"
    },
    {
      icon: Users,
      title: "Teaching",
      description: "Skilled in making complex concepts accessible at various levels"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Extensive experience working in cross-functional teams"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Expertise in managing multiple projects and meeting deadlines"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-800">
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning research, development, and leadership, 
            built through academic pursuits and professional experience.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Code className="text-green-600" size={24} />
            Technical Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    {category.category}
                  </h4>
                </div>
                
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1.5">•</span>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Users className="text-green-600" size={24} />
            Professional Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-3">
                  {skill.title}
                </h4>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
