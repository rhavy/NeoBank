
import { motion } from "framer-motion";
export function SegurancaComponents() {
    return (
        <section className="py-20 px-6 text-center bg-indigo-700 text-white">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-6"
            >
                Segurança em primeiro lugar 🔒
            </motion.h2>
            <p className="max-w-2xl mx-auto">
                Utilizamos criptografia de ponta, autenticação em duas etapas e
                monitoramento 24/7 para proteger o seu dinheiro e seus dados.
            </p>
        </section>
    );
}