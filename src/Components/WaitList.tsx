import React, { useState } from "react";

const WaitlistPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your API call here to save the email
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-purple-800 p-4 text-white">
      <div className="text-center max-w-lg " style={{fontFamily: "VT323"}}>
        <h1 className="text-6xl font-bold mb-4">
          RetroFuture Connect
        </h1>
        <p className="text-xl mb-6">
          Step into the future, where connections are just a click away!
        </p>
        <p className="text-lg mb-4">
          Join our waitlist now to be the first to know when we launch!
        </p>

        {isSubmitted ? (
          <div className="bg-green-200 text-green-800 p-4 rounded-md">
            You’ve successfully joined the waitlist! Get ready for the future!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your college email"
              required
              className="px-4 py-2 border border-white bg-gray-800 rounded-md w-full max-w-md"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black px-6 py-2 rounded-md w-full max-w-md hover:bg-yellow-400 transition-colors"
            >
              Join the Waitlist
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default WaitlistPage;
