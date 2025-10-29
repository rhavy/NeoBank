
import { motion } from "framer-motion";
export function ContatoComponents() {
    return (
        <section className="py-20 px-6 text-center bg-white">
            <h2 className="text-3xl font-bold mb-8">Fale conosco</h2>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-lg mx-auto flex flex-col gap-4"
            >
                <input
                    type="text"
                    placeholder="Nome"
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <textarea
                    placeholder="Mensagem"
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                ></textarea>
                <button
                    type="submit"
                    className="bg-indigo-700 text-white px-8 py-3 rounded-full hover:bg-indigo-800 transition font-semibold"
                >
                    Enviar
                </button>
            </motion.form>
        </section>
    );
}