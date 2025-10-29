"use client";

import { HeroComponents } from "../components/template/hero";
import { VantagensComponnetes } from "../components/vantagens";
import { FooterComponemts } from "../components/template/footer";
import { HeaderComponents } from "../components/template/header";
import { DepoimentosComponents } from "../components/depoimentos";
import { ContatoComponents } from "../components/contato";
import { ProdutosComponents } from "../components/produtos";
import { SegurancaComponents } from "../components/seguranca";

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-indigo-50 to-white text-gray-900 min-h-screen">
      {/* Cabeçalho */}
      <HeaderComponents />

      {/* Hero */}
      <HeroComponents />

      {/* Vantagens */}
      <VantagensComponnetes/>

      {/* Produtos */}
      <ProdutosComponents/>

      {/* Segurança */}
      <SegurancaComponents/>

      {/* Depoimentos */}
      <DepoimentosComponents/>      

      {/* Contato */}
      <ContatoComponents />

      {/* Rodapé */}
      <FooterComponemts/>
      
    </main>
  );
}
