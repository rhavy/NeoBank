
import { motion } from "framer-motion";
export function DepoimentosComponents() {
    return (
        <section className="py-20 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-10">
                O que nossos clientes dizem
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[
                    {
                        quote:
                            "Troquei de banco e nunca mais olhei pra trás. O NeoBank é simples, rápido e transparente.",
                        author: "Ana Souza",
                    },
                    {
                        quote:
                            "Controle total das minhas finanças no celular. Recomendo demais!",
                        author: "Lucas Martins",
                    },
                ].map((d, i) => (
                    <motion.article
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-md border border-gray-200"
                    >
                        <p className="italic">“{d.quote}”</p>
                        <h4 className="mt-4 font-semibold text-indigo-700">— {d.author}</h4>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}