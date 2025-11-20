
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Presentation, Download, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router';

const MeetingInfo = () => {
  const upcomingMeetings = [
    {
      date: "Lorem ipsum dolor",
      time: "Sit amet consectetur",
      location: "Adipiscing elit",
      topic: "Sed do eiusmod",
      type: "tempor"
    },
    {
      date: "Incididunt ut labore",
      time: "Et dolore magna",
      location: "Aliqua ut enim",
      topic: "Ad minim veniam",
      type: "quis"
    }
  ];

  const meetingSchedule = [
    { unit: "Lorem ipsum dolor", meetings: 6, status: "completed" },
    { unit: "Sit amet consectetur", meetings: 4, status: "completed" },
    { unit: "Adipiscing elit sed", meetings: 5, status: "completed" },
    { unit: "Do eiusmod tempor", meetings: 6, status: "current" },
    { unit: "Incididunt ut labore", meetings: 2, status: "upcoming" }
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
                Meeting Information
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay informed about upcoming meetings, schedules, and presentation materials
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-6 border border-blue-500/30"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-blue-400">Regular Schedule</h3>
                </div>
                <p className="text-gray-300">
                  Regular meetings held bi-weekly as per CSHS bylaws
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-xl p-6 border border-green-500/30"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-green-400">Location</h3>
                </div>
                <p className="text-gray-300">
                  Room 208 - LA Building, Myers Park High School
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl p-6 border border-purple-500/30"
              >
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-purple-400">Attendance</h3>
                </div>
                <p className="text-gray-300">
                  All members must attend or makeup attendance as per bylaws
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Upcoming Meetings */}
        {/* <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-green-400 mb-4">Upcoming Meetings</h2>
              <p className="text-xl text-gray-300">
                Mark your calendar for these important upcoming sessions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingMeetings.map((meeting, index) => (
                <motion.div
                  key={meeting.date}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-green-400">{meeting.topic}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      meeting.type === 'showcase' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {meeting.type}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-5 w-5 mr-3 text-green-400" />
                      {meeting.date}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-5 w-5 mr-3 text-green-400" />
                      {meeting.time}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-5 w-5 mr-3 text-green-400" />
                      {meeting.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Meeting Schedule Overview */}
        {/* <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-green-400 mb-4">2024-2025 Meeting Units</h2>
              <p className="text-xl text-gray-300">
                Our comprehensive curriculum covering key areas of computer science
              </p>
            </motion.div>

            <div className="space-y-4">
              {meetingSchedule.map((unit, index) => (
                <motion.div
                  key={unit.unit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gray-800/50 rounded-xl p-6 border transition-all duration-300 ${
                    unit.status === 'current' 
                      ? 'border-green-500/50 bg-green-500/5' 
                      : 'border-green-500/20 hover:border-green-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-4 ${
                        unit.status === 'completed' ? 'bg-green-500' :
                        unit.status === 'current' ? 'bg-yellow-500' :
                        'bg-gray-500'
                      }`} />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{unit.unit}</h3>
                        <p className="text-gray-400 text-sm">{unit.meetings} meetings</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      unit.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      unit.status === 'current' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {unit.status === 'current' ? 'In Progress' : 
                       unit.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Slideshow Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-green-400 mb-4">Meeting Slideshows</h2>
              <p className="text-xl text-gray-300">
                Access presentation materials from recent meetings
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-8 border border-green-500/30"
            >
              <div className="text-center">
                <Presentation className="h-16 w-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Latest Presentation</h3>
                <p className="text-gray-300 mb-6">
                  App Pitch & Prototyping - 11-20-25
                </p>
                <a href="/slideshows/11-20-25/index.html" target="_blank">
                  <button className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center mx-auto">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Open Slideshow
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default MeetingInfo;
