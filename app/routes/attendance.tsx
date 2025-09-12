import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, ExternalLink, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AttendanceRecovery = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const meetingDates = [
    'Lorem ipsum', 'Dolor sit amet', 'Consectetur adipiscing', 'Elit sed do',
    'Eiusmod tempor', 'Incididunt ut labore', 'Et dolore magna',
    'Aliqua ut enim', 'Ad minim veniam', 'Quis nostrud',
    'Exercitation ullamco', 'Laboris nisi ut', 'Aliquip ex ea',
    'Commodo consequat', 'Duis aute irure', 'Dolor in reprehenderit',
    'In voluptate velit'
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
                Attendance Makeup
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Access meeting materials and complete attendance makeup procedures as outlined in the CSHS bylaws
              </p>
            </motion.div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 rounded-xl p-8 border border-green-500/20 mb-12"
            >
              <h2 className="text-2xl font-semibold text-green-400 mb-6">Attendance Policy</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  According to the CSHS bylaws, all Society members shall attend or makeup attendance for regular meetings.
                  Regular meetings are held biweekly to ensure all members stay current with club activities and curriculum.
                </p>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 my-6">
                  <h3 className="text-green-400 font-semibold mb-2">Meeting Attendance Requirements</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Regular meetings are held biweekly</li>
                    <li>• All members must attend or makeup attendance</li>
                    <li>• Members can review meeting documents to catch up</li>
                    <li>• Makeup procedures are determined by the Executive Committee</li>
                  </ul>
                </div>
                <p>
                  To review any information missed during a meeting, members can access the documents
                  for each meeting date, allowing them to review slides, activities, and other materials
                  from that day's session.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Meeting Dates Grid */}
        {/* <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-green-400 mb-4">Meeting Materials</h2>
              <p className="text-xl text-gray-300">
                Access documents and materials from previous meetings to complete attendance makeup
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {meetingDates.map((date, index) => (
                <motion.div
                  key={date}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <button
                    onClick={() => setSelectedDate(selectedDate === date ? null : date)}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 ${
                      selectedDate === date
                        ? 'bg-green-500/20 border-green-500 text-green-400'
                        : 'bg-gray-800/50 border-green-500/20 text-gray-300 hover:border-green-500/40 hover:bg-gray-800/70'
                    }`}
                  >
                    <Calendar className="h-6 w-6 mx-auto mb-2" />
                    <div className="text-sm font-medium">{date}</div>
                  </button>
                  
                  {selectedDate === date && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 space-y-2"
                    >
                      <button className="w-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 py-2 px-3 rounded-lg text-sm transition-all duration-200 flex items-center justify-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Documents
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </button>
                      <button className="w-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 py-2 px-3 rounded-lg text-sm transition-all duration-200 flex items-center justify-center">
                        <Download className="h-4 w-4 mr-2" />
                        Recovery Form
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Instructions Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl p-8 border border-green-500/20"
            >
              <h2 className="text-2xl font-semibold text-green-400 mb-6">How to Makeup Attendance</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-white font-semibold mb-2">Review Materials</h3>
                  <p className="text-gray-300 text-sm">
                    Access meeting documents and materials from the date you missed
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-white font-semibold mb-2">Complete Makeup</h3>
                  <p className="text-gray-300 text-sm">
                    Follow the procedures established by the Executive Committee
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-white font-semibold mb-2">Record Attendance</h3>
                  <p className="text-gray-300 text-sm">
                    Ensure your makeup attendance is properly documented
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AttendanceRecovery;
