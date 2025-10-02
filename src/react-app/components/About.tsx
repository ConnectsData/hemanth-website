import { motion } from 'framer-motion'
import { Brain, Heart, Cloud, Zap, Users, Award } from 'lucide-react'

export default function About() {
  const skills = [
    {
      icon: Brain,
      title: "AI & Data Science",
      description: "Python, TensorFlow, Machine Learning, Deep Learning",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Health-Tech Innovation", 
      description: "Biosensors, Medical Devices, Hydration Monitoring",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS, Azure, Data Warehousing, Scalable Systems",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Zap,
      title: "Product Development",
      description: "Prototype Design, IoT Integration, User Experience",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Leadership & Strategy",
      description: "Team Management, Startup Growth, Business Strategy",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Award,
      title: "Innovation & Recognition",
      description: "Care Innovation Challenge Winner, Santander X Finalist",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-cyan-600/5" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-display">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              I'm a technology visionary and entrepreneur with over 4 years of expertise across dynamic domains. 
              Born and raised in India, I pursued BTech in Mechanical Engineering (with Distinction) before 
              transitioning to advanced computing, completing my MSc in Advanced Computer Science at the University of Hertfordshire.
            </p>
            <p>
              As Co-Founder & CTO of Ellyfe Ltd, I'm revolutionizing health-tech through the world's first 
              non-invasive hydration monitoring band for older adults. My journey spans prestigious companies 
              including Amazon, Meta, Wipro, Cognizant, and ICICI Bank, where I honed my expertise in AI, 
              data science, and cloud architecture.
            </p>
            <p>
              My mission is to bridge high-level technical design with practical deployment in complex, 
              real-world systems. I believe in applying technology to solve meaningful problems that impact 
              people's lives, particularly in healthcare and aging populations.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-6`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-slate-100 transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: "4+", label: "Years Experience" },
            { number: "200+", label: "Participants Tested" },
            { number: "£16K+", label: "Funding Raised" },
            { number: "5", label: "Languages Spoken" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
