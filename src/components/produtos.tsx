
import { motion } from "framer-motion";

export function ProdutosComponents() {
    return (
        <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Produtos e Serviços
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Conta Corrente",
              text: "Gratuita, sem taxas escondidas e com gestão inteligente do seu saldo.",
            },
            {
              title: "Cartão de Crédito",
              text: "Limite flexível, cashback e controle total no aplicativo.",
            },
            {
              title: "Investimentos",
              text: "Ganhe mais com opções seguras e diversificadas.",
            },
          ].map((p, i) => (
            <motion.article
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">
                {p.title}
              </h3>
              <p>{p.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    );
}