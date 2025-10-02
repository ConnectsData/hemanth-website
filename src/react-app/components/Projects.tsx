import { motion } from 'framer-motion'
import { ExternalLink, Award, TrendingUp, Users, Heart } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "Ellyfe - Hydration Monitoring Band",
      description: "The world's first non-invasive hydration monitoring band designed specifically for older adults and people with frail skin. Revolutionary health-tech solution addressing dehydration in care settings.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: ["Biosensors", "IoT", "Machine Learning", "Python", "Data Analytics", "Medical Devices"],
      features: [
        "Non-invasive hydration monitoring",
        "Real-time caregiver alerts",
        "Dementia-friendly design",
        "200+ participants tested",
        "Care Innovation Challenge Winner 2024"
      ],
      demo: "https://www.careshowlondon.co.uk/speakers/hemanth-kumar-talupula",
      icon: Heart,
      gradient: "from-green-500 to-emerald-600",
      status: "Live Product"
    },
    {
      title: "Plicks Media Platform",
      description: "Founded and developed a comprehensive media and digital services platform, providing innovative solutions for content creation, digital marketing, and brand development across multiple industries.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["WordPress", "Adobe Suite", "SEO", "Digital Marketing", "Content Management", "Analytics"],
      features: [
        "Full-service digital agency platform",
        "Content creation and management",
        "SEO optimization tools",
        "Brand development services",
        "Multi-client project management"
      ],
      demo: "#",
      icon: TrendingUp,
      gradient: "from-blue-500 to-purple-600",
      status: "Ongoing"
    },
    {
      title: "AI-Powered Data Analytics Systems",
      description: "Developed sophisticated data analytics and machine learning systems during tenure at Amazon, Wipro, and other major corporations, focusing on automated decision-making and data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "AWS", "Data Warehousing", "SQL", "ETL Pipelines"],
      features: [
        "Large-scale data processing",
        "Machine learning model deployment",
        "Automated reporting systems",
        "Real-time analytics dashboards",
        "Performance optimization"
      ],
      demo: "#",
      icon: Award,
      gradient: "from-purple-500 to-pink-600",
      status: "Enterprise"
    },
    {
      title: "Digital Transformation Projects",
      description: "Led multiple digital transformation initiatives across banking and technology sectors, implementing cloud solutions, automation systems, and improving operational efficiency.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Cloud Computing", "Automation", "Banking Systems", "Process Optimization", "Team Leadership"],
      features: [
        "Banking system modernization",
        "Cloud migration strategies",
        "Process automation implementation",
        "Team management and mentoring",
        "Operational efficiency improvements"
      ],
      demo: "#",
      icon: Users,
      gradient: "from-orange-500 to-red-600",
      status: "Completed"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-transparent to-pink-600/5" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-display">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From revolutionary health-tech innovations to enterprise-scale digital transformations, 
            each project represents a unique solution to real-world challenges.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm text-white border ${
                      project.status === 'Live Product' ? 'border-green-500/50' :
                      project.status === 'Ongoing' ? 'border-blue-500/50' :
                      project.status === 'Enterprise' ? 'border-purple-500/50' :
                      'border-gray-500/50'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Overlay buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white">
                      <project.icon className="w-5 h-5" />
                    </div>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-medium border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.demo !== '#' && (
                    <div className="flex gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Learn More
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recognition section */}
        <motion.div
          className="text-center mt-16 p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-slate-300 font-medium">Care Innovation Challenge 2024</p>
              <p className="text-slate-400 text-sm">National Care Forum Winner</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-slate-300 font-medium">Santander X Global Challenge</p>
              <p className="text-slate-400 text-sm">Finalist 2025</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-slate-300 font-medium">Innovate UK Programme</p>
              <p className="text-slate-400 text-sm">Business Growth Selection</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
