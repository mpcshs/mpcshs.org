import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Users, Award, Calendar, Shield, Scale } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Bylaws = () => {
  const articles = [
    {
      id: 1,
      title: "ARTICLE I: NAME AND PURPOSE",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      sections: [
        {
          title: "Section 1: Name",
          content: "The name of this organization shall be the Myers Park Computer Science Honor Society (hereafter referred to as Society). It will also be known as MPHS CSHS."
        },
        {
          title: "Section 2: Purpose",
          content: "The purpose of the Society shall be to cultivate thriving environments for success in computer science in the school community by encouraging students' enthusiasm, honoring academic excellence, and promoting service."
        }
      ]
    },
    {
      id: 2,
      title: "ARTICLE II: CHARTER",
      icon: Award,
      color: "from-green-500 to-green-600",
      sections: [
        {
          title: "Section 1: CSTA & Constitution",
          content: "The Society shall operate under the direction of the Computer Science Teachers Association, LLC (CSTA) and in full compliance with the Computer Science Honor Society (CSHS) Constitution."
        },
        {
          title: "Section 2: Ongoing Requirements",
          content: "The Society shall retain an active charter from CSTA by meeting the following ongoing requirements:",
          list: [
            "School offers one or more sections of computer science;",
            "Advisor maintains active CSTA+ membership;",
            "Advisor agrees to all CSHS guidelines;",
            "Advisor completes annual report by deadline;",
            "Society maintains active membership;",
            "Society pays annual membership fees to CSTA;",
            "Society provides meaningful service to the local community;",
            "Society demonstrates commitment to improving equity in computer science; and",
            "Society holds regular activities."
          ]
        },
        {
          title: "Section 3: Forfeiture of Charter",
          content: "Failure to conform to the CSHS Constitution or the ongoing requirements may result in the forfeiture of the Society's charter. If a charter is forfeited, the school must resubmit a petition and pay for a new charter, should it want to have a society in the future."
        }
      ]
    },
    {
      id: 3,
      title: "ARTICLE III: ADVISOR AND FACULTY COUNCIL",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      sections: [
        {
          title: "Section 1: Appointment",
          content: "The Society advisor shall be a member of the faculty, appointed annually by the principal, and may serve consecutive terms. The school principal shall have the final authority on activities and decisions of the Society."
        },
        {
          title: "Section 2: Responsibilities",
          content: "The Society advisor shall be responsible for the direct, day-to-day supervision of the Society and act as a liaison between faculty, administration, students, and the community at large."
        },
        {
          title: "Section 3: Records",
          content: "The Society advisor shall maintain files on membership, activities, financial transactions, honors, and service hours."
        },
        {
          title: "Section 4: Annual Report",
          content: "The Society advisor shall complete the annual report, which includes information on member demographics, Society activities, and the total number of service hours, and submit it to the CSTA by the established deadline."
        },
        {
          title: "Section 5: Membership Dues",
          content: "The Society advisor shall submit an updated number of members and associated student membership dues to CSTA within 30 days of every induction event."
        },
        {
          title: "Section 6: Membership Compliance",
          content: "The Society advisor shall regularly review each member for compliance with the Society's standards and obligations."
        },
        {
          title: "Section 7: Support of Officers",
          content: "The Society advisor shall help the student officers understand and carry out their duties."
        },
        {
          title: "Section 8: Faculty Council (Optional)",
          content: "The faculty council shall consist of the Society advisor and two or more additional faculty members, appointed annually by the Society advisor. Members of the faculty council may serve consecutive terms. The purpose of the faculty council shall be to evaluate membership applications and determine discipline and dismissal of Society members."
        }
      ]
    },
    {
      id: 4,
      title: "ARTICLE IV: MEMBERSHIP",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      sections: [
        {
          title: "Section 1: Eligibility",
          content: "To be eligible for induction into the Society, the candidate must meet the following requirements:",
          list: [
            "Be a student in the 9th, 10th, 11th, or 12th grade;",
            "Have attended Myers Park High School for at least one semester;",
            "Have completed or be in at least one semester of rigorous computer science coursework Required: Computer Science Principals;",
            "Have earned at least 80% or the equivalent standard of excellence in computer science courses or maintain above an 70% while taking the class; and",
            "Demonstrate service and leadership."
          ]
        },
        {
          title: "Section 2: Selection of Members",
          content: "Selection for membership shall be by application and based on computer science achievement, leadership, and service. Once selected, members shall have the responsibility to continue to demonstrate these qualities.",
          additional: "The selection of new Society members shall be held Annually. Applications shall be available to all Myers Park High School students for at least two weeks. Membership applications and criteria shall be advertised through Discord, posters, morning announcements, Stampede, Instagram, and the MPHS CSHS Website (myersparkcshs.club)."
        },
        {
          title: "Section 3: Induction and Dues",
          content: "Students become active members at a special induction ceremony held on the first official meeting. Students inducted into CSHS shall receive a pin to signify their membership in the Society. Members in good standing shall maintain the privilege of wearing the CSHS pin.",
          additional: "Students selected for induction to the Society will be required to pay a $10 induction fee to pay for a CSHS pin, CSHS cord, CSHS t-shirt, and other club activities. Other Society activities and/or events may require additional fees. The Society officers and/or advisor will announce these activities and/or events in advance and will not require member participation."
        },
        {
          title: "Section 4: Graduation",
          content: "Society members in good standing shall receive an honor cord in the CSHS colors to wear at graduation. Membership status will change from active to graduate at the time of graduation from Myers Park High School. Graduate members may not vote on Society activities."
        },
        {
          title: "Section 5: Service Obligations",
          content: "Each Society member shall have the responsibility for choosing and participating in individual service that reflects his or her particular talents and interests. This is in addition to the Society service projects to which all members contribute.",
          additional: "Each Society member shall complete a minimum of ten hours of community service each academic year of membership. At least half of these hours (five hours) shall include service related to computer science. Members shall turn in a log of their time to the Society secretary."
        },
        {
          title: "Section 6: Transfer of Membership",
          content: "CSHS members who transfer to Myers Park High School from another school and bring a letter from the previous principal or society advisor to the new Society advisor shall be accepted automatically as a member in Myers Park High School Computer Science Honor Society.",
          additional: "Transfer members must meet the Society's standards within one semester in order to retain active membership. Transfer members shall be responsible for paying annual dues to Myers Park High School Computer Science Honor Society regardless of their transfer date to Myers Park High School."
        },
        {
          title: "Section 7: Discipline, Dismissal, and Resignation",
          content: "A Society member who fails to meet membership standards shall be promptly warned in writing by the Society advisor and given a reasonable amount of time to correct the deficiency. In the case of flagrant violation of school rules or the law, a member does not have to be warned before being disciplined or dismissed.",
          additional: "A Society member who fails to complete the required number of service hours at the end of the school year shall be given a single warning by the Society advisor. The member shall have the opportunity to complete their hours in the upcoming summer. However, if the member does not complete the remaining hours or fails to meet the service requirement in a subsequent year, they will be dismissed from the Society and will be ineligible to reapply."
        }
      ]
    },
    {
      id: 5,
      title: "ARTICLE V: MEETINGS AND ACTIVITIES",
      icon: Calendar,
      color: "from-cyan-500 to-blue-500",
      sections: [
        {
          title: "Section 1: Meetings",
          content: "Myers Park High School Computer Science Honor Society shall hold regular meetings biweekly. All Society members shall attend or makeup attendence.",
          additional: "Myers Park High School Computer Science Honor Society will also meet as needed to work on service projects or any other events requiring additional meeting time. Society shall conduct meetings according to Robert's Rules of Order, Newly Revised in all points not expressly provided for in the Society bylaws."
        },
        {
          title: "Section 2: Service Projects",
          content: "The Society shall choose one or more computer science-related service projects for each academic year. Example projects include outreach, recruitment, student support, new learning opportunities, and community engagement / support. All Society members shall regularly participate in these projects.",
          additional: "Service projects shall have the following characteristics: Fulfill a need within the school or community; Have the support of the administration and the faculty; Be appropriate and educationally defensible; and Be well planned, organized, and executed."
        }
      ]
    },
    {
      id: 6,
      title: "ARTICLE VI: LEADERSHIP",
      icon: Scale,
      color: "from-emerald-500 to-teal-500",
      sections: [
        {
          title: "Section 1: Executive Committee",
          content: "Myers Park High School Computer Science Honor Society shall be led by a group of elected student officers in collaboration with the Society advisor. The Executive Committee shall consist of the Society officers and advisor.",
          additional: "The Executive Committee shall have general supervision of the affairs of the society between its business meetings, make recommendations to the society, and determine and perform such other duties as are specified in the society bylaws. All actions and recommendations of the Executive Committee shall be subject to the review of the society membership."
        },
        {
          title: "Section 2: Officer Roles",
          content: "Myers Park High School Computer Science Honor Society shall have a President, Vice President, Secretary, Treasurer, and Webmaster elected annually by the membership."
        },
        {
          title: "Section 3: President's Duties",
          content: "The President shall conduct all meetings of the Myers Park High School Computer Science Honor Society. The President shall engage the Society membership in selecting and implementing at least one service project per school year. The President shall establish a calendar of meeting dates for both the membership and the Executive Committee."
        },
        {
          title: "Section 4: Vice President's Duties",
          content: "The Vice President shall conduct meetings and responsibilities in the President's absence. The Vice President shall be responsible for researching and selecting activities for the Society. Example activities include enrichment field trips, extension learning opportunities, social events, and competitions. The Vice President shall lead the annual induction ceremony."
        },
        {
          title: "Section 5: Secretary's Duties",
          content: "The Secretary shall keep the minutes of Society meetings and events. The Secretary shall communicate with Society members and the community. The Secretary shall collect and compile service logs from each Society member. The Secretary shall keep notes of the Society meetings and events and update the documents webpage on the Society's website on the respective date of the meeting or event."
        },
        {
          title: "Section 6: Treasurer's Duties",
          content: "The Treasurer shall maintain updated financial records of Myers Park High School Computer Science Honor Society. The Treasurer shall collect membership dues and other fees. The Treasurer shall ensure that pins, cords, and other materials are purchased and available for distribution."
        },
        {
          title: "Section 7: Webmaster's Duties",
          content: "The Webmaster shall maintain the Society website. The Webmaster shall update the site with upcoming events, highlights of past events, and any other pertinent public information for Society members. The Webmaster shall collaborate with the Secretary to maintain an active social media presence."
        },
        {
          title: "Section 8: Elections",
          content: "Any Society member in good standing shall be eligible as a candidate for a single officer position. Elections shall be held at the end of the school year during the Society's final meeting. All Society members in good standing are eligible to cast one vote for each office by secret ballot. Officers shall be elected by a plurality vote. In the event of a tie, Society advisor will decide the winner of the office in question. New officers shall be installed at a special ceremony."
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

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
              <div className="flex items-center justify-center mb-6">
                <FileText className="h-16 w-16 text-green-400 mr-4" />
                <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Society Bylaws
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The official constitution and bylaws governing the Myers Park High School Computer Science Honor Society
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bylaws Content */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {articles.map((article) => (
                <motion.div
                  key={article.id}
                  variants={itemVariants}
                  className="bg-gray-800/50 rounded-xl border border-green-500/20 overflow-hidden"
                >
                  {/* Article Header */}
                  <div className={`bg-gradient-to-r ${article.color} p-6`}>
                    <div className="flex items-center">
                      <article.icon className="h-8 w-8 text-white mr-4" />
                      <h2 className="text-2xl font-bold text-white">{article.title}</h2>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 space-y-6">
                    {article.sections.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-l-4 border-green-400 pl-6"
                      >
                        <h3 className="text-xl font-semibold text-green-400 mb-3">
                          {section.title}
                        </h3>
                        <div className="text-gray-300 leading-relaxed mb-4">
                          {section.content}
                        </div>
                        {section.list && (
                          <ul className="space-y-2 mb-4">
                            {section.list.map((item, i) => (
                              <li key={i} className="flex items-start text-gray-300">
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.additional && (
                          <div className="text-gray-300 leading-relaxed italic border-l-2 border-gray-600 pl-4">
                            {section.additional}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-8 border border-green-500/30"
            >
              <FileText className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Official Document</h3>
              <p className="text-gray-300 leading-relaxed">
                These bylaws are the official governing document of the Myers Park High School Computer Science Honor Society.
                All members, officers, and advisors are expected to be familiar with and adhere to these bylaws.
                The bylaws operate in full compliance with the Computer Science Teachers Association (CSTA) and
                Computer Science Honor Society (CSHS) Constitution.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Bylaws;
