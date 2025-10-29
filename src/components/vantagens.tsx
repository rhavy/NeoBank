
import { motion } from "framer-motion";

export function VantagensComponnetes() {
  return (
    <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Por que escolher o NeoBank?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "100% Digital",
              text: "Conta aberta em poucos minutos, sem filas ou papelada.",
            },
            {
              title: "Cartão Internacional",
              text: "Use no Brasil e no exterior, com segurança e zero anuidade.",
            },
            {
              title: "Pix e Transferências",
              text: "Envie e receba dinheiro instantaneamente, 24h por dia.",
            },
            {
              title: "Investimentos",
              text: "Renda fixa, fundos e muito mais direto pelo app.",
            },
          ].map((v, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-indigo-50 hover:bg-indigo-100 transition rounded-2xl p-6 shadow-md text-center border border-indigo-100"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                {v.title}
              </h3>
              <p>{v.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
  );
}