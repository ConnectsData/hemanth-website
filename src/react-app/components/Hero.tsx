import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react'
import Scene3D from './Scene3D'

export default function Hero() {
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Scene3D />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-600/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/50 to-slate-900" />
      
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8"
          variants={floatingVariants}
          animate="animate"
        >
          <div className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold">
            HK
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold text-gradient text-glow mb-6 font-display"
          variants={itemVariants}
        >
          Hemanth Kumar
          <br />
          <span className="text-4xl md:text-6xl text-purple-300 animate-glow">Talupula</span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-slate-300 mb-8 space-y-2"
          variants={itemVariants}
        >
          <div className="font-medium">Co-Founder & CTO at Ellyfe | Data Scientist | AI Developer</div>
          <div className="text-lg text-slate-400">Revolutionizing health-tech through innovative hydration monitoring solutions</div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <span className="px-4 py-2 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium backdrop-blur-sm border border-purple-500/30">
            AI & Data Science
          </span>
          <span className="px-4 py-2 bg-cyan-500/20 text-cyan-200 rounded-full text-sm font-medium backdrop-blur-sm border border-cyan-500/30">
            Health-Tech Innovation
          </span>
          <span className="px-4 py-2 bg-orange-500/20 text-orange-200 rounded-full text-sm font-medium backdrop-blur-sm border border-orange-500/30">
            Cloud Architecture
          </span>
          <span className="px-4 py-2 bg-green-500/20 text-green-200 rounded-full text-sm font-medium backdrop-blur-sm border border-green-500/30">
            Entrepreneurship
          </span>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={itemVariants}
        >
          <a
            href="https://www.linkedin.com/in/hemanth-kumar-talupula/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            LinkedIn
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
          
          <a
            href="https://github.com/hemanthtalupula"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full font-medium transition-all duration-300 hover:from-gray-800 hover:to-gray-900 hover:scale-105 hover:shadow-xl hover:shadow-gray-500/25"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            GitHub
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
          
          <a
            href="mailto:talupulahemanth@gmail.com"
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-medium transition-all duration-300 hover:from-purple-700 hover:to-purple-800 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Contact
          </a>
          
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full font-medium transition-all duration-300 hover:from-emerald-700 hover:to-emerald-800 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
