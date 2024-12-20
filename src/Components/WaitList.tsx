'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { glitchAnimation, glitchTransition } from "../../utils/glitchEffect";
import FeatureShowcase from "./Featureshowcase";

const WaitlistPage = () => {
  const [email, setEmail] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(259200); // 3 days in seconds
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your API call here to save the email and secret code
    setIsSubmitted(true);
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent opacity-20"
      />
      <div className="text-center max-w-2xl relative z-10" style={{fontFamily: "VT323, monospace"}}>
        <motion.h1
          className="text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Enigma Connect
        </motion.h1>
        <motion.p
          className="text-2xl mb-6"
          variants={glitchAnimation}
          initial="hidden"
          animate="visible"
          transition={glitchTransition}
        >
          The future of secret campus connections
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

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-purple-900 text-purple-200 p-6 rounded-md shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">Infiltration Successful</h2>
            <p>Prepare for covert communication. Your secret key will arrive shortly.</p>
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
            <input
              type="text"
              value={secretCode}
              onChange={(e) => setSecretCode(e.target.value)}
              placeholder="Enter the secret code"
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
              <span>I swear to uphold the secrecy of this network</span>
            </label>
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md w-full max-w-md hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!agreeTerms}
            >
              Infiltrate the Network
            </motion.button>
          </motion.form>
        )}

        <motion.button
          onClick={() => setShowFeatures(!showFeatures)}
          className="mt-8 text-purple-400 underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showFeatures ? "Hide" : "Reveal"} Top Secret Features
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
        System: [CLASSIFIED]
      </motion.div>
    </div>
  );
};

export default WaitlistPage;

