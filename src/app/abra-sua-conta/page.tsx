"use client";

import { HeaderComponents } from "@/src/components/template/header";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AbraSuaConta() {
    return (
        <>
            <HeaderComponents/>
            <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-xl rounded-2xl max-w-4xl w-full grid md:grid-cols-2 overflow-hidden"
                >
                    {/* Lado esquerdo - Texto */}
                    <div className="p-10 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-indigo-700 mb-4">
                            Abra sua conta digital em minutos 🚀
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Sem filas, sem burocracia. Acesse o banco do futuro e tenha controle
                            total do seu dinheiro com apenas alguns cliques.
                        </p>

                        <ul className="space-y-3 text-gray-700 mb-8">
                            <li className="flex items-center gap-2">
                                <span className="text-indigo-600 font-bold">✔</span>
                                Conta gratuita e sem tarifas escondidas
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-indigo-600 font-bold">✔</span>
                                Cartão físico e virtual com limite instantâneo
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-indigo-600 font-bold">✔</span>
                                Pix, pagamentos e transferências 24h
                            </li>
                        </ul>

                        <Link
                            href="/cadastro"
                            className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center"
                        >
                            Abrir conta agora
                        </Link>

                        <p className="text-sm text-gray-500 mt-4">
                            Já tem uma conta?{" "}
                            <Link
                                href="/login"
                                className="text-indigo-600 hover:text-indigo-800 font-medium"
                            >
                                Faça login
                            </Link>
                        </p>
                    </div>

                    {/* Lado direito - Imagem */}
                    <div className="bg-indigo-700 text-white flex flex-col justify-center items-center p-10">
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            src={"/image/card.png"}
                            alt="Abrir conta digital"
                            className="rounded-xl w-full h-auto shadow-lg"
                        />
                        <p className="mt-4 text-sm text-indigo-100">
                            Seu futuro financeiro começa aqui 💰
                        </p>
                    </div>
                </motion.div>
            </main>
        </>
    );
}
