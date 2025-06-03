import React, { useEffect, useState } from 'react';
import { ChatBubbleLeftRightIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { AppleLogo, GooglePlayLogo } from './CustomIcons'; // We'll define these below
import { motion } from 'framer-motion';

interface Feature {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: ChatBubbleLeftRightIcon,
    title: 'Forum Diskusi (Xchange)',
    description: 'Tanya jawab soal UTBK dengan komunitas pejuang lainnya.',
  },
  {
    Icon: ChartBarIcon,
    title: 'Leaderboard & Target',
    description: 'Belajar jadi lebih seru dengan sistem ranking & goal tracker.',
  },
  {
    Icon: UserGroupIcon,
    title: 'Latihan Soal Live (Livesol)',
    description: 'Kerjakan soal bareng dan bahas bareng secara real-time.',
  },
];

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Siap UTBK dengan <span className="text-indigo-300">Xplodia</span>
            </h1>
            <p className="text-xl text-gray-300">
              Belajar UTBK lebih seru, kolaboratif, dan termotivasi. Gratis di awal, premium super terjangkau.
            </p>

            <div className="space-y-4">
              {features.map(({ Icon, title, description }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="p-2 bg-indigo-700 rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-300">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <motion.a
                href="https://example.com/download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Sekarang
              </motion.a>

              <div className="flex items-center space-x-4 mt-6">
                <a
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-400 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  <AppleLogo className="w-6 h-6" />
                  <span>App Store</span>
                </a>
                <a
                  href="https://play.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-400 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  <GooglePlayLogo className="w-6 h-6" />
                  <span>Play Store</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/xplodia-mockup-illustration.png"
                alt="Xplodia Mobile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
