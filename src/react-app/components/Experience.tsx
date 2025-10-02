import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Co-Founder & CTO",
      company: "Ellyfe Ltd",
      location: "London, United Kingdom",
      period: "October 2023 - Present",
      type: "Full-time",
      description: "Leading technical innovation at a health-tech startup developing the world's first non-invasive hydration monitoring band for older adults. Driving product development from prototype to market-ready solution.",
      achievements: [
        "Winner of Care Innovation Challenge 2024 (National Care Forum)",
        "Selected for Santander X Global Challenge finalist (2025)",
        "Successfully tested with 200+ participants across multiple pilot programs",
        "Secured £16,500+ in funding and grants for R&D",
        "Led partnerships with OSJCT, Borough Care, and St Monica Trust"
      ],
      technologies: ["Biosensors", "IoT", "Data Analytics", "Python", "Machine Learning", "Medical Devices"]
    },
    {
      title: "Food And Beverage Intern",
      company: "The Londoner Hotel",
      location: "London, United Kingdom",
      period: "December 2023 - Present",
      type: "Part-time",
      description: "Gained valuable experience in hospitality operations while developing Ellyfe. Enhanced customer service skills and operational efficiency in a luxury hotel environment.",
      achievements: [
        "Maintained exceptional service standards in high-pressure environment",
        "Developed strong customer relationship management skills",
        "Collaborated effectively with international teams",
        "Applied data-driven approaches to improve service delivery"
      ],
      technologies: ["Customer Service", "Operations Management", "Team Collaboration", "Process Optimization"]
    },
    {
      title: "Data Warehouse Specialist",
      company: "Amazon",
      location: "London, United Kingdom",
      period: "June 2022 - November 2022",
      type: "Contract",
      description: "Specialized in large-scale data warehouse operations and cloud infrastructure. Worked on optimizing data pipelines and analytics systems for improved performance and scalability.",
      achievements: [
        "Optimized data warehouse operations for improved query performance",
        "Implemented automated data pipeline solutions",
        "Collaborated with global teams on cloud infrastructure projects",
        "Enhanced data quality and reliability across multiple systems"
      ],
      technologies: ["AWS", "Data Warehousing", "SQL", "ETL Pipelines", "Cloud Computing", "Analytics"]
    },
    {
      title: "Deputy Manager of Information Technology",
      company: "ICICI Bank",
      location: "Hyderabad, India",
      period: "March 2021 - November 2021",
      type: "Full-time",
      description: "Led IT operations and digital transformation initiatives. Managed technology infrastructure and implemented innovative solutions to enhance banking operations and customer experience.",
      achievements: [
        "Led digital transformation projects for improved customer experience",
        "Managed critical IT infrastructure with 99.9% uptime",
        "Implemented automated systems reducing manual processing by 40%",
        "Mentored junior developers and technical teams"
      ],
      technologies: ["Banking Systems", "Digital Transformation", "Cloud Migration", "Automation", "Team Leadership"]
    },
    {
      title: "Senior Associate",
      company: "Wipro Digital Operations and Platforms",
      location: "Hyderabad, India",
      period: "April 2020 - April 2021",
      type: "Full-time",
      description: "Worked as Senior Associate focusing on digital operations, machine learning, and automated system engineering. Led a team of 43 members while handling client relationships and data streamlining.",
      achievements: [
        "Led a team of 43 engineers with precision decision-making skills",
        "Implemented machine learning solutions for automated systems",
        "Streamlined data operations improving efficiency by 35%",
        "Maintained strong client relationships and service delivery"
      ],
      technologies: ["Machine Learning", "Python", "Team Leadership", "Data Engineering", "Automation", "Client Management"]
    },
    {
      title: "Senior Data Analyst",
      company: "Cognizant",
      location: "Hyderabad, India",
      period: "July 2017 - April 2020",
      type: "Full-time",
      description: "Worked on digital operations with focus on data handling, visualization, and decision-making systems. Specialized in tool maintenance and technical support for automated data systems.",
      achievements: [
        "Developed comprehensive data visualization dashboards",
        "Improved data quality and automated processing systems",
        "Led technical support for multiple client projects",
        "Enhanced decision-making processes through data-driven insights"
      ],
      technologies: ["Data Analytics", "Python", "Data Visualization", "SQL", "Process Automation", "Technical Support"]
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-l from-blue-600/5 via-transparent to-purple-600/5" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-display">
            Experience
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A diverse journey across prestigious companies, from banking technology to health-tech innovation, 
            building expertise in AI, data science, and entrepreneurship.
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <div className="relative p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                {/* Timeline dot */}
                <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900" />
                
                {/* Content */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-4 text-slate-400">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:w-64 flex-shrink-0">
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-medium border border-slate-600/50 hover:border-slate-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
