import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import Button from '@/components/ui/Button';
import { personalInfo, socialLinks } from '@/data/constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-600/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border bg-white/5 text-slate-300 border-white/10 backdrop-blur-md shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
              </span>
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <div className="inline-block rounded-2xl p-6 sm:p-8 font-mono text-left w-full max-w-2xl glass border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Terminal bar */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10 relative z-10">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.5)]" />
                <span className="ml-2 text-slate-400 text-xs font-medium tracking-wider">devrex@portfolio ~ </span>
              </div>
              <div className="text-sm sm:text-base relative z-10">
                <p className="text-slate-400">
                  <span className="text-neon font-bold">$</span> whoami
                </p>
                <div className="mt-3 text-slate-200">
                  <TypeAnimation
                    sequence={[
                      500,
                      `> Hi, I'm ${personalInfo.name}`,
                      1000,
                      `> I'm a ${personalInfo.title}`,
                      1000,
                      `> Specializing in Frontend Development`,
                      1000,
                      `> I build exceptional digital experiences`,
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    cursor={true}
                    className="text-slate-200"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-2xl">
              {personalInfo.name}
            </h1>
            <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-slate-400 tracking-wide">
              {personalInfo.title} <span className="mx-2 text-white/20">|</span> <span className="text-brand-400 font-bold">{personalInfo.subtitle}</span>
            </p>
          </motion.div>

          {/* Brief intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-slate-400 font-light text-center"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button
              variant="primary"
              size="lg"
              glow
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-full shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] transition-all duration-300"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
              <FiArrowDown className="ml-2 animate-bounce" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-full border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hire Me
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 flex items-center gap-6"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 transition-all duration-300 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 transition-all duration-300 text-slate-400 hover:text-[#0A66C2] hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(10,102,194,0.2)]"
            >
              <FaLinkedinIn size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
