
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, MessageCircle, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/myerspark_cshs/', color: 'hover:text-pink-400' },
    { icon: MessageCircle, label: 'Remind', href: 'https://www.remind.com/join/mpcshs26', color: 'hover:text-blue-400' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/mpcshs', color: 'hover:text-gray-400' },
  ];

  const contactEmails = [
    { label: 'CSHS Email', href: 'mailto:leaders@mpcshs.org' },
    { label: 'President Email', href: 'mailto:president@mpcshs.org' },
    { label: 'Vice President Email', href: 'mailto:vp@mpcshs.org' },
    { label: 'Secretary Email', href: 'mailto:secretary@mpcshs.org' },
    { label: 'Treasurer Email', href: 'mailto:treasurer@mpcshs.org' },
    { label: 'Webmaster Email', href: 'mailto:webmaster@mpcshs.org' },
  ];

  const quickLinks = [
    { label: 'Join', href: '/join' },
    { label: 'Bylaws', href: '/bylaws' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-green-400 mb-4">Contact Us</h3>
            <div className="space-y-2">
              {contactEmails.map((email, index) => (
                <motion.a
                  key={email.label}
                  href={email.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200 group"
                >
                  <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{email.label}</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-green-400 mb-4">Socials</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`flex items-center text-gray-300 transition-colors duration-200 group ${social.color}`}
                >
                  <social.icon className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200 group"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-green-500/20 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Myers Park Computer Science Honor Society. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
