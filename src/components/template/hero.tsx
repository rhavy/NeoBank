
import { motion } from "framer-motion";

export function HeroComponents() {
  return (
    <section className="text-center py-24 px-6 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-6"
      >
        O banco do futuro, hoje 🚀
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg mb-8 max-w-2xl mx-auto"
      >
        Abra sua conta em minutos, controle tudo pelo app e tenha uma
        experiência financeira completa sem burocracia.
      </motion.p>
      <a href="/abra-sua-conta" className="mr-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition"
        >
          Abra sua conta
        </motion.button>
      </a>
    </section>
  );
}