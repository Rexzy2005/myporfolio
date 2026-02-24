import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiCheck, FiLoader } from 'react-icons/fi';
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // TODO: Replace with your actual EmailJS service ID, template ID, and public key
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        'YOUR_PUBLIC_KEY'
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
