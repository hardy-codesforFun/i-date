import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SecretPasscode = ({ onComplete }: { onComplete: (code: string) => void }) => {
  const [passcode, setPasscode] = useState(['', '', '', '']);
  const [isCorrect, setIsCorrect] = useState(false);
  useEffect(() => {
    const correctPasscode = ['4', '2', '0', '6'];

    if (passcode.join('') === correctPasscode.join('')) {
      setIsCorrect(true);
      onComplete(passcode.join(''));
    }
  }, [passcode, onComplete]);

  const handleChange = (index: number, value: string) => {
    const newPasscode = [...passcode];
    newPasscode[index] = value;
    setPasscode(newPasscode);
  };

  return (
    <div className="mb-6">
      <p className="text-purple-400 mb-2">Enter the secret passcode:</p>
      <div className="flex justify-center space-x-2">
        {passcode.map((digit, index) => (
          <motion.input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            className={`w-12 h-12 text-center text-2xl bg-gray-900 border ${
              isCorrect ? 'border-green-500' : 'border-purple-500'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
            whileFocus={{ scale: 1.1 }}
            animate={isCorrect ? { borderColor: ['#10B981', '#8B5CF6'] } : {}}
            transition={{ duration: 0.5, repeat: isCorrect ? Infinity : 0, repeatType: 'reverse' }}
          />
        ))}
      </div>
    </div>
  );
};

export default SecretPasscode;

