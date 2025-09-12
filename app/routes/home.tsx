import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Code, ArrowRight, ExternalLink } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import JoinClubModal from '../components/JoinClubModal';

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const shouldShowJoinDialog = searchParams.get('showJoinDialog') === 'true';
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(shouldShowJoinDialog);

  useEffect(() => {
    if (shouldShowJoinDialog) {
      // Clean up the URL by removing the query parameter
      searchParams.delete('showJoinDialog');
      setSearchParams(searchParams, { replace: true });
    }
  }, [shouldShowJoinDialog, searchParams, setSearchParams]);
  const newsItems = [
    {
      title: "Stampede!",
      date: "09-12-2025",
      content: "Stampede is an opportunity for students to visit the club leadership, to get to know the club, and to ask any questions they may have.",
      type: "Event"
    },
    // {
    //   title: "Absences",
    //   date: "Ongoing",
    //   content: "Don't forget to do attendance recovery if you've missed meetings! If you have more than 3 unexcused absences by the time of the election, you will not be eligible to run for leadership.",
    //   type: "important"
    // },
    // {
    //   title: "CHS Meeting (4/1/2025)",
    //   date: "4/1/2025",
    //   content: "CSHS will be meeting on Tuesday, April 1st for the start of the Web Dev portion of the Software/Web Dev unit!",
    //   type: "meeting"
    // },
    // {
    //   title: "Club T-Shirts!",
    //   date: "12/11/24",
    //   content: "After many months of planning, editing, and printing, the club t-shirts are finally here! Pick them up during the Cyber Forensics meeting on Wednesday, December 11th.",
    //   type: "announcement"
    // }
  ];

  const stats = [
    { icon: Users, label: "Active Members", value: "Lorem" },
    { icon: Calendar, label: "Meetings This Year", value: "Ipsum" },
    { icon: Code, label: "Projects Completed", value: "Dolor" },
    { icon: Award, label: "Service Hours", value: "Sit" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-gray-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src="/img/logo.png" 
                alt="CSHS Logo" 
                className="h-24 w-auto mx-auto mb-6"
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Myers Park High School's Computer Science Honor Society.
              Cultivating thriving environments for success in computer science by encouraging
              students' enthusiasm, honoring academic excellence, and promoting service.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => setIsJoinModalOpen(true)}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                Join CSHS
                <ArrowRight className="ml-2" />
              </Button>
              <Button asChild variant="outline" size="lg" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                <Link to="/meeting-info">
                  Meeting Info
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <Card className="p-6 bg-transparent border-none p-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <stat.icon className="size-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-green-400 mb-6">About CSHS</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We are the Myers Park High School Computer Science Honor Society (MPHS CSHS).
                Our purpose is to cultivate thriving environments for success in computer science
                in the school community by encouraging students' enthusiasm, honoring academic excellence,
                and promoting service.
              </p>
              <p>
                Members of the MPHS CSHS will receive a pin to signify membership, a cord and pin
                at graduation, and a club t-shirt to wear during the year.
              </p>
              <p>
                To be eligible for induction into CSHS, candidates must meet the following requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-left max-w-2xl mx-auto">
                <li>Be a student in the 9th, 10th, 11th, or 12th grade</li>
                <li>Have attended Myers Park High School for at least one semester</li>
                <li>Demonstrate service and leadership</li>
              </ul>
     
              <p className="text-green-400 font-semibold">
                CSHS operates under the direction of the Computer Science Teachers Association (CSTA)
                and in full compliance with the Computer Science Honor Society Constitution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Club News Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-green-400 mb-4">Club News</h2>
            <p className="text-xl text-gray-300">Stay updated with the latest CSHS announcements</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-green-400 group-hover:text-green-300 transition-colors">
                      {item.title}
                    </h3>
                    <Badge variant={
                      item.type === 'meeting' ? 'default' :
                      item.type === 'important' ? 'destructive' :
                      'secondary'
                    }>
                      {item.type}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-4">{item.content}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <JoinClubModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Index;
