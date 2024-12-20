
import { motion } from 'framer-motion';

const features = [
  {
    title: "Anonymous Matching",
    description: "Connect with others without revealing your identity until you're ready.",
    icon: "🎭"
  },
  {
    title: "Encrypted Messaging",
    description: "Your conversations are protected with end-to-end encryption.",
    icon: "🔐"
  },
  {
    title: "Timed Profiles",
    description: "Profiles disappear after 24 hours for ultimate privacy.",
    icon: "⏳"
  },
  {
    title: "Exclusive Events",
    description: "Access to secret meetups and parties on campus.",
    icon: "🎉"
  }
];

const FeatureShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="bg-gray-900 p-6 rounded-lg border border-purple-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="text-4xl mb-2">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2 text-purple-400">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureShowcase;

