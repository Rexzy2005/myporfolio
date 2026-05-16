import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiLoader, FiArrowRight } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { socialLinks, personalInfo } from '@/data/constants';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const socialItems = [
  { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FaXTwitter, href: socialLinks.twitter, label: 'Twitter' },
];

const inputClass =
  'w-full px-5 py-3.5 text-[15px] font-[400] bg-graphite/20 border border-lead/25 text-starlight placeholder:text-lead/40 outline-none focus:border-mercury-blue/50 transition-colors duration-150 tracking-[0.16px]';

const labelClass = 'block text-[11px] font-[400] text-lead/60 tracking-[0.22px] uppercase mb-2';

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        'service_uv2nunj',
        'template_blwadh4',
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
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

  return (
    <div className="bg-midnight-slate">
      <Container id="contact">
        <SectionHeading
          tag="Contact"
          title="Start a conversation"
          subtitle="Have a project in mind or want to discuss opportunities? I am always open to new work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-24 items-start">
          {/* Form */}
          <AnimatedWrapper direction="left">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Name</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Your name" required className={inputClass}
                    style={{ borderRadius: '4px' }}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="your@email.com" required className={inputClass}
                    style={{ borderRadius: '4px' }}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Subject</label>
                <input
                  type="text" name="subject" value={form.subject} onChange={handleChange}
                  placeholder="Project inquiry" required className={inputClass}
                  style={{ borderRadius: '4px' }}
                />
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project..." required rows={6}
                  className={`${inputClass} resize-none`}
                  style={{ borderRadius: '4px' }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-3 py-3.5 bg-mercury-blue text-pure-white text-[15px] font-[480] tracking-[0.16px] hover:bg-[#4456d6] transition-colors disabled:opacity-60"
                style={{ borderRadius: '32px' }}
              >
                {status === 'idle' && <><FiSend size={15} /> Send Message</>}
                {status === 'sending' && <><FiLoader className="animate-spin" size={15} /> Sending...</>}
                {status === 'success' && <><FiCheck size={15} /> Message Sent!</>}
                {status === 'error' && 'Failed. Please try again.'}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-[13px] text-lead/60 tracking-[0.26px]"
                >
                  I will get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </AnimatedWrapper>

          {/* Contact info */}
          <AnimatedWrapper direction="right">
            <div className="space-y-12">
              <div>
                <p className="text-[11px] font-[400] text-lead/50 tracking-[0.22px] uppercase mb-4">Direct contact</p>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="inline-flex items-center gap-2 text-[17px] font-[300] text-starlight hover:text-pure-white transition-colors"
                  style={{ letterSpacing: '0.01em' }}
                >
                  {socialLinks.email}
                  <FiArrowRight size={15} />
                </a>
              </div>

              <div>
                <p className="text-[11px] font-[400] text-lead/50 tracking-[0.22px] uppercase mb-4">Location</p>
                <p className="text-[15px] font-[400] text-starlight tracking-[0.16px]">{personalInfo.location}</p>
              </div>

              <div>
                <p className="text-[11px] font-[400] text-lead/50 tracking-[0.22px] uppercase mb-4">Find me on</p>
                <div className="border-t border-lead/20">
                  {socialItems.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-5 border-b border-lead/20 text-lead hover:text-starlight transition-colors group"
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={14} />
                        <span className="text-[15px] font-[400] tracking-[0.16px]">{label}</span>
                      </div>
                      <FiArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </Container>
    </div>
  );
}
