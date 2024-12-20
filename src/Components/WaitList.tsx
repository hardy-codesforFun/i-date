import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { glitchAnimation, glitchTransition } from "../../utils/glitchEffect";
import FeatureShowcase from "./Featureshowcase";
import SecretPasscode from "./SecretPasscode";
import AnimatedBackground from "./AnimatedBackground";
import IlluminatiEye from "./Illuminati";

const WaitlistPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(259200); // 3 days in seconds
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [passcodeComplete, setPasscodeComplete] = useState(false);
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [activeAgents, setActiveAgents] = useState(1337);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    const agentTimer = setInterval(() => {
      setActiveAgents((prevAgents) => prevAgents + Math.floor(Math.random() * 5));
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(agentTimer);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your API call here to save the email
    setIsSubmitted(true);
    setChatMessages([...chatMessages, "Infiltration request received. Processing..."]);
    setTimeout(() => {
      setChatMessages([...chatMessages, "Infiltration request received. Processing...", "Access granted. Welcome to the Order of Enigma."]);
    }, 2000);
  };

  const formatTime = (time: number) => {
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4 text-purple-400 overflow-hidden">
      <AnimatedBackground />
      <div className="text-center max-w-2xl relative z-10" style={{ fontFamily: "VT323, monospace" }}>
        <motion.div className="flex justify-center items-center mb-4">
          <IlluminatiEye />
        </motion.div>
        <motion.h1
          className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Enigma Connect
        </motion.h1>

        <motion.div
          className="mt-8 p-4 bg-gray-900 rounded-md border border-purple-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-xl font-bold mb-2 text-purple-400">Order Statistics</h3>
          <motion.p
            className="text-gray-300"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Active Initiates: {activeAgents}
          </motion.p>
          <p className="text-gray-300">Successful Rituals: 42,069</p>
          <p className="text-gray-300">Enlightenment Rate: 98.7%</p>
        </motion.div>
        <motion.p
          className="text-2xl mb-6"
          variants={glitchAnimation}
          initial="hidden"
          animate="visible"
          transition={glitchTransition}
        >
          The Order of Secret Campus Connections
        </motion.p>
        <p className="text-lg mb-4 text-gray-300">
          Infiltrate our exclusive network before the portal closes
        </p>
        <motion.div
          className="text-3xl font-bold mb-6"
          animate={{ color: ['#9333ea', '#db2777', '#9333ea'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {formatTime(countdown)}
        </motion.div>

        {!isSubmitted && <SecretPasscode onComplete={

          (code) => {
            console.log(code);
            setPasscodeComplete(true)
          }} />}

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 text-purple-200 p-6 rounded-md shadow-lg border border-purple-500"
          >
            <h2 className="text-2xl font-bold mb-2">Infiltration Successful</h2>
            <div className="mt-4 text-left">
              {chatMessages.map((message, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.5 }}
                  className="mb-2"
                >
                  &gt; {message}
                </motion.p>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your encrypted email"
              required
              className="px-4 py-3 border border-purple-500 bg-gray-900 rounded-md w-full max-w-md text-purple-400 placeholder-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label className="flex items-center space-x-2 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
                className="form-checkbox text-pink-500"
              />
              <span>I swear to uphold the secrecy of the Order</span>
            </label>
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md w-full max-w-md hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!agreeTerms || !passcodeComplete}
            >
              Infiltrate the Order
            </motion.button>
          </motion.form>
        )}

        <motion.button
          onClick={() => setShowFeatures(!showFeatures)}
          className="mt-8 text-purple-400 underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showFeatures ? "Conceal" : "Reveal"} the Sacred Knowledge
        </motion.button>

        <AnimatePresence>
          {showFeatures && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FeatureShowcase />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      <motion.div
        className="absolute bottom-4 left-4 text-xs text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
      >
        Novus Ordo Seclorum | TOR Node: Active | Encryption: Quantum
      </motion.div>
    </div>
  );
};

export default WaitlistPage;
