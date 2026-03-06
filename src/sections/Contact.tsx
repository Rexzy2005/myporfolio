import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiCheck, FiLoader, FiSmartphone, FiGlobe, FiCode, FiEdit3 } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import Button from '@/components/ui/Button';
import { socialLinks, personalInfo } from '@/data/constants';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const socialIcons = [
  { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FaXTwitter, href: socialLinks.twitter, label: 'Twitter' },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const templates = {
    mobile: {
      label: 'Mobile App',
      icon: <FiSmartphone className="w-4 h-4" />,
      subject: 'Mobile App Project Inquiry',
      message: "Hi! I have a mobile app project idea. Here is the context: [brief description]. My budget range is [budget], and I'm looking to have this completed by [timeline]."
    },
    website: {
      label: 'Website',
      icon: <FiGlobe className="w-4 h-4" />,
      subject: 'Website Project Inquiry',
      message: "Hi! I have a website project idea. Here is the context: [brief description]. My budget range is [budget], and I'm looking to have this completed by [timeline]."
    },
    custom: {
      label: 'Custom Project',
      icon: <FiCode className="w-4 h-4" />,
      subject: 'Custom Project Inquiry',
      message: "Hi! I have a custom project idea. Here is the context: [brief description]. My budget range is [budget], and I'm looking to have this completed by [timeline]."
    }
  };

  const handleTemplateClick = (key: keyof typeof templates) => {
    setForm(prev => ({
      ...prev,
      subject: templates[key].subject,
      message: templates[key].message
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Replace YOUR_PUBLIC_KEY with your actual EmailJS public key
      await emailjs.send(
        'service_uv2nunj',
        'template_blwadh4',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        '3ggzlaLaifzwhfsrP'
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputStyles = 'w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none bg-surface-900 border border-white/10 text-white placeholder:text-slate-500 focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/30';

  return (
    <Container id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind or want to discuss opportunities? Let's talk."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left — Contact Info */}
        <AnimatedWrapper direction="left">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Let's work together
              </h3>
              <p className="leading-relaxed text-slate-400">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Drop me a message and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-500/10">
                  <FiMail className="text-brand-500" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="font-medium transition-colors text-white hover:text-neon"
                  >
                    {socialLinks.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-500/10">
                  <FiMapPin className="text-brand-500" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="font-medium text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-medium mb-3 text-slate-500">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialIcons.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl transition-all duration-200 bg-surface-900 border border-white/10 text-slate-400 hover:text-brand-400 hover:border-brand-400/30"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Right — Contact Form */}
        <AnimatedWrapper direction="right">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={inputStyles}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className={inputStyles}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 text-slate-300">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                required
                className={inputStyles}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 text-slate-300">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className={`${inputStyles} resize-none`}
              />
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-sm text-slate-400">Quick start with a template:</p>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(templates) as Array<keyof typeof templates>).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleTemplateClick(key)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-surface-800 border border-white/10 text-slate-300 hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30"
                  >
                    <span className="text-brand-400">{templates[key].icon}</span>
                    {templates[key].label}
                  </button>
                ))}
              </div>
              
              {form.message.includes('[brief description]') && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-200/80 text-sm flex items-start gap-3"
                >
                  <FiEdit3 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <p>Please customize the template with your specific details before sending.</p>
                </motion.div>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              glow
              className="w-full"
              disabled={status === 'sending'}
            >
              {status === 'idle' && (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
              {status === 'sending' && (
                <>
                  <FiLoader className="animate-spin" />
                  Sending...
                </>
              )}
              {status === 'success' && (
                <>
                  <FiCheck />
                  Message Sent!
                </>
              )}
              {status === 'error' && 'Failed — Try Again'}
            </Button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-green-400"
              >
                Thanks! I'll get back to you within 24 hours.
              </motion.p>
            )}
          </form>
        </AnimatedWrapper>
      </div>
    </Container>
  );
}
