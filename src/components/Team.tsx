import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'John Doe',
    role: 'Founder & CEO'
  },
  {
    name: 'Jane Smith',
    role: 'Head of Technology'
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Operations'
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Strategy'
  }
];

const Team = () => {
  return (
    <section id="team" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 font-serif text-center">Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-2xl font-serif mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 