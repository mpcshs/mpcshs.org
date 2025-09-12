
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Award, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import JoinClubModal from '../components/JoinClubModal';

const Forms = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const forms = [
    {
      title: "Leadership Application",
      description: "Apply for leadership positions in CSHS for the upcoming academic year",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      available: true,
      deadline: "Lorem ipsum"
    },
    {
      title: "Senior Cord Sign Up",
      description: "Register to receive your CSHS graduation cord and pin ceremony",
      icon: Award,
      color: "from-purple-500 to-purple-600",
      available: true,
      deadline: "Dolor sit amet"
    },
    {
      title: "Feedback Form",
      description: "Share your thoughts and suggestions to help improve CSHS",
      icon: MessageSquare,
      color: "from-green-500 to-green-600",
      available: true,
      deadline: "Open"
    }
  ];

  const requirements = [
    "Be a student in the 9th, 10th, 11th, or 12th grade",
    "Have attended Myers Park High School for at least one semester",
    "Demonstrate service and leadership"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      <div className="pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-br from-green-900/20 to-gray-900/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-6">
                Forms & Applications
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access all CSHS forms, applications, and registration documents in one place
              </p>
            </motion.div>
          </div>
        </section>

        {/* Join CSHS Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-8 border border-green-500/30 mb-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-green-400 mb-4">Join CSHS 2025</h2>
                <p className="text-xl text-gray-300">
                  Ready to become part of Myers Park's premier Computer Science Honor Society?
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Eligibility Requirements</h3>
                  <div className="space-y-3">
                    {requirements.map((req, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{req}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Member Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">CSHS pin to signify membership</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Graduation cord in CSHS colors</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Official CSHS t-shirt</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Community service opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setIsJoinModalOpen(true)}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  Join CSHS Now
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </button>
                {/* <p className="text-sm text-gray-400 mt-3">
                  Form must be completed before October 25th. $10 induction fee required for pin, cord, and t-shirt.
                </p> */}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Forms Grid */}
        {/* <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-green-400 mb-4">Available Forms</h2>
              <p className="text-xl text-gray-300">
                Access forms for leadership, graduation, and feedback
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {forms.map((form, index) => (
                <motion.div
                  key={form.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-r ${form.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <form.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                      {form.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 flex-grow">
                      {form.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Deadline:</span>
                        <span className={`font-medium ${form.deadline === 'Open' ? 'text-green-400' : 'text-orange-400'}`}>
                          {form.deadline}
                        </span>
                      </div>
                      
                      <button
                        disabled={!form.available}
                        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                          form.available
                            ? 'bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30 hover:border-green-500/50'
                            : 'bg-gray-700/50 text-gray-500 border border-gray-600/30 cursor-not-allowed'
                        }`}
                      >
                        {form.available ? 'Access Form' : 'Coming Soon'}
                        {form.available && <ExternalLink className="ml-2 h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Important Notice */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Important Information</h3>
                  <div className="text-gray-300 space-y-2">
                    <p>
                      • All forms must be completed by their respective deadlines
                    </p>
                    <p>
                      • Leadership applications require current CSHS membership
                    </p>
                    <p>
                      • Senior cord registration is only available to graduating seniors
                    </p>
                    <p>
                      • Contact leadership if you have questions about any forms
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <JoinClubModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Forms;
