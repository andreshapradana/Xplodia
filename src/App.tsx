import React, { useEffect, useState } from 'react';
import { FiUsers, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface Feature {
  Icon: IconType;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Feature[] = [
    {
      Icon: FiMessageSquare,
      title: 'Forum Diskusi (Xchange)',
      description: 'Tanya jawab soal UTBK dengan komunitas pejuang lainnya.',
    },
    {
      Icon: FiTrendingUp,
      title: 'Leaderboard & Target',
      description: 'Belajar jadi lebih seru dengan sistem ranking & goal tracker.',
    },
    {
      Icon: FiUsers,
      title: 'Latihan Soal Live (Livesol)',
      description: 'Kerjakan soal bareng dan bahas bareng secara real-time.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-primary-base text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center lg:items-start"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold leading-tight text-white drop-shadow-lg">
                Siap UTBK dengan{' '}
                <span className="text-primary-lightest bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-lighter">
                  Xplodia
                </span>
              </h1>
              <p className="text-xl text-white/90 mt-4 max-w-xl leading-relaxed">
                Belajar UTBK lebih seru, kolaboratif, dan termotivasi. Gratis di awal, premium super
                terjangkau.
              </p>
            </motion.div>

            {/* Features */}
            <div className="space-y-6 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 bg-white/10 text-primary-lightest rounded-lg shadow-sm flex-shrink-0">
                    <feature.Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{feature.title}</h3>
                    <p className="text-white/80 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-6 pt-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.a
                  href="https://example.com/download"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-primary-lightest to-primary-lighter text-primary-dark font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Download Sekarang
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-6 py-3 bg-black/80 text-white rounded-xl hover:bg-black transition-colors duration-300"
                >
                  <FaApple className="w-5 h-5" />
                  <span>App Store</span>
                </a>
                <a
                  href="https://play.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-6 py-3 bg-white/90 text-gray-900 rounded-xl hover:bg-white transition-colors duration-300"
                >
                  <FaGooglePlay className="w-5 h-5" />
                  <span>Play Store</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/xplodia-mockup-illustration.png"
                alt="Xplodia Mobile App"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>

            {/* Decorative blurred bubbles */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primary-lightest/20 blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-primary-light/30 blur-3xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
