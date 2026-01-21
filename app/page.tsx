import React from "react";
import Link from "next/link";
import Countdown from "@/components/Countdown";


import {
  Anchor,
  Wind,
  Map,
  Luggage,
  Wallet,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094')] bg-cover bg-center" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Lorient 2026</h1>
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase">
            Expédition Bretagne Sud
          </p>
          <div className="mt-8 inline-block border border-white px-6 py-2 rounded-full font-medium">
            06 - 10 JUILLET
          </div>
          <div className="mt-8 inline-block border border-white px-6 py-2 rounded-full font-medium">
            Compte à rebours à ajouter ici
          </div>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="max-w-6xl mx-auto -mt-16 relative z-20 px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Carte Itinéraire dans app/page.tsx */}
          <Link href="/itineraire" className="group">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-500 hover:scale-105 transition-all cursor-pointer h-full">
              <Map className="text-blue-600 mb-4" size={32} />
              <h2 className="text-2xl font-black text-slate-900 mb-2">
                L'Itinéraire
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Découvrez les zones de navigation prévues entre Lorient, Groix
                et les Glénan.
              </p>
              <span className="text-blue-700 font-bold group-hover:underline inline-flex items-center gap-1">
                Voir la carte interactive <ChevronRight size={16} />
              </span>
            </div>
          </Link>

          {/* Checklist Bagage */}
          <Link href="/checklist">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-emerald-500 cursor-pointer hover:scale-[1.02]">
              <Luggage className="text-emerald-500 mb-4" size={32} />
              <h2 className="text-2xl font-black text-slate-900 mb-2">
                Dans ton sac
              </h2>
              <p className="text-gray-600 mb-4">
                Sacs souples uniquement. N'oublie pas ta polaire et tes lunettes
                de soleil.
              </p>
              <span className="text-emerald-600 font-semibold italic">
                Ouvrir la liste interactive →
              </span>
            </div>
          </Link>

          {/* Vie à Bord / Sécu */}
          <Link href="/securite" className="group">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-amber-500 hover:scale-105 transition-all cursor-pointer h-full">
              <ShieldCheck className="text-amber-600 mb-4" size={32} />
              <h2 className="text-2xl font-black text-slate-900 mb-2">
                Sécurité
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Briefing obligatoire avant le départ. Sécurité, eau douce et
                électricité à bord.
              </p>
              <span className="text-amber-700 font-bold group-hover:underline">
                Lire le mémo →
              </span>
            </div>
          </Link>
        </div>

        {/* Détails Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Anchor /> Le Navire
            </h3>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <ul className="space-y-4">
                <li className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Modèle</span>
                  <span className="font-bold text-slate-500">
                    DUFOUR 38 Classic Année 2001
                  </span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Capacité</span>
                  <span className="font-bold text-slate-500">6 Personnes</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Port d'attache</span>
                  <span className="font-bold text-slate-500">
                    LOCMIQUELIC Ste Catherine
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Wallet /> Au Sujet de la thunasse
            </h3>
            <div className="bg-blue-600 text-white rounded-xl p-8 shadow-inner">
              <p className="text-lg mb-4 opacity-90">
                Coût de la location = 1850€ (gazoil & gaz compris)
              </p>
              <p className="text-lg mb-4 opacity-90">Auxquels s'ajoutent :</p>
              <ul className="list-disc mb-4 list-inside space-y-2 opacity-90">
                <li>
                  Frais de ports & mouillages (entre 20 et 35€/nuit en saison)
                </li>
                <li>Avitaillement commun (nourriture/boissons)</li>
                <li>Restos et autres crêperies</li>
              </ul>
              <p className="text-lg mb-3 opacity-90">
                Environ 500€ la semaine en fonction de nos craquages
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 text-center text-sm opacity-60">
        <p>Codé avec passion par Régi ⚓ - 2026</p>
      </footer>
    </main>
  );
}
