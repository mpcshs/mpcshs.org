
import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Users, FileText, Briefcase, Mail, Calendar, User } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Leadership = () => {
  const currentLeadership = [
    {
      position: "President",
      name: "Asher Myers",
      email: "president@mpcshs.org",
      description: "Conducts all meetings and engages membership in service projects",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      image: "/img/leadership/asher.jpg", // Add actual image path when available
      imagePosition: "50% 50%", // CSS object-position for fine-tuning photo composition
      zoom: 1.3 // Scale factor for photo zoom (1.0 = normal, 1.1 = 10% zoom, etc.)
    },
    {
      position: "Vice President",
      name: "Martin Garas",
      email: "vp@mpcshs.org",
      description: "Leads meetings in President's absence and selects activities",
      icon: Users,
      color: "from-blue-500 to-purple-500",
      image: "/img/leadership/martin.jpg",
      zoom: 1.0 // Normal scale (no zoom)
    },
    {
      position: "Secretary",
      name: "Samantha Atencio-Hurtado",
      email: "secretary@mpcshs.org",
      description: "Maintains meeting minutes and collects service logs",
      icon: FileText,
      color: "from-green-500 to-teal-500",
      image: "/img/leadership/sam.webp", // No image available
      imagePosition: "right 40%",
      zoom: 1.1 // Normal scale (no zoom)
    },
    // {
    //   position: "Treasurer",
    //   name: "*Vacant*",
    //   email: "treasurer@mpcshs.org",
    //   description: "Manages finances, collects dues, and purchases materials",
    //   icon: Briefcase,
    //   color: "from-purple-500 to-pink-500",
    //   image: null, // No image available
    //   imagePosition: "center",
    //   zoom: 1.0 // Normal scale (no zoom)
    // },
    {
      position: "Webmaster",
      name: "Howard Lamb",
      email: "webmaster@mpcshs.org",
      description: "Maintains website and social media presence",
      icon: Users,
      color: "from-cyan-500 to-blue-500",
      image: "/img/leadership/howard.png", // No image available
      imagePosition: "center",
      zoom: 1.0 // Normal scale (no zoom)
    }
  ];

  const responsibilities = [
    {
      title: "Planning & Organization",
      description: "Coordinate meetings, events, and annual activities",
      points: ["Meeting agendas", "Event planning", "Resource coordination"]
    },
    {
      title: "Member Engagement",
      description: "Foster community and ensure member satisfaction",
      points: ["Member communication", "Conflict resolution", "Feedback collection"]
    },
    {
      title: "Academic Excellence",
      description: "Maintain high academic standards and opportunities",
      points: ["Curriculum planning", "Guest speakers", "Competition coordination"]
    },
    {
      title: "Club Growth",
      description: "Expand membership and enhance club reputation",
      points: ["Recruitment events", "School partnerships", "Alumni relations"]
    }
  ];

  const applicationInfo = [
    {
      title: "Eligibility Requirements",
      items: [
        "Society member in good standing",
        "Elected annually by membership",
        "Any member may run for single officer position",
        "Elections held at end of school year"
      ]
    },
    {
      title: "Election Process",
      items: [
        "Elections held during final meeting",
        "Plurality vote determines winners",
        "Advisor decides ties if necessary",
        "New officers installed at ceremony"
      ]
    },
    {
      title: "Officer Roles",
      items: [
        "President: Conducts meetings and leads service projects",
        "Vice President: Leads in President's absence and selects activities",
        "Secretary: Maintains records and collects service logs",
        "Treasurer: Manages finances and purchases materials",
        "Webmaster: Maintains website and social media"
      ]
    }
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
                Leadership Team
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the dedicated students leading CSHS and learn about leadership opportunities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Current Leadership */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-green-400 mb-4">2024-2025 Leadership Team</h2>
              <p className="text-xl text-gray-300">
                Our dedicated officers working to make CSHS the best it can be
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentLeadership.map((leader, index) => (
                <motion.div
                  key={leader.position}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group overflow-hidden"
                >
                  {/* Full Width Photo Section */}
                  <div className="relative group-hover:scale-105 transition-transform duration-300">
                    {leader.image ? (
                      <div className="w-full aspect-square overflow-hidden border-3 border-green-500/30 group-hover:border-green-500/60 transition-colors duration-300 shadow-lg group-hover:shadow-green-500/20">
                        <div className="w-full h-full relative overflow-hidden">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover absolute inset-0"
                            style={{
                              objectPosition: leader.imagePosition || 'center',
                              transform: leader.zoom && leader.zoom !== 1.0 ? `scale(${leader.zoom})` : 'none',
                              transformOrigin: 'center center'
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      /* No Image Available Placeholder */
                      <div className={`w-full aspect-square bg-gradient-to-br ${leader.color} flex items-center justify-center border-3 border-gray-600/30 shadow-lg`}>
                        <div className="bg-white/20 rounded-full p-6">
                          <User className="w-20 h-20 text-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Section with Padding */}
                  <div className="p-6">
                  
                  <h3 className="text-xl font-semibold text-green-400 mb-2">{leader.position}</h3>
                  <h4 className="text-lg font-medium text-white mb-3">{leader.name}</h4>
                  <p className="text-gray-300 text-sm mb-4">{leader.description}</p>
                  
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      <span className="text-sm">{leader.email}</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Responsibilities */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-green-400 mb-4">Leadership Responsibilities</h2>
              <p className="text-xl text-gray-300">
                What it means to be a leader in CSHS
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {responsibilities.map((resp, index) => (
                <motion.div
                  key={resp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-green-500/20"
                >
                  <h3 className="text-xl font-semibold text-green-400 mb-3">{resp.title}</h3>
                  <p className="text-gray-300 mb-4">{resp.description}</p>
                  <ul className="space-y-2">
                    {resp.points.map((point, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Application Information */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-green-400 mb-4">Become a Leader</h2>
              <p className="text-xl text-gray-300">
                Ready to take on a leadership role in CSHS? Here's what you need to know.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {applicationInfo.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-500/30"
                >
                  <h3 className="text-xl font-semibold text-green-400 mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="bg-gray-800/50 rounded-xl p-8 border border-green-500/20">
                <Calendar className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Annual Elections</h3>
                <p className="text-gray-300 mb-6">
                  Leadership elections are held annually at the end of the school year during the Society's final meeting.
                  All members in good standing are eligible to run for officer positions.
                </p>
                {/* <button className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 py-3 px-8 rounded-lg font-semibold transition-all duration-300">
                  Get Notified
                </button> */}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Leadership;
