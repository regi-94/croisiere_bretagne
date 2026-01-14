import React from "react";
import Link from "next/link";
import { ShieldCheck, LifeBuoy, AlertTriangle, Flame, Droplets, ChevronLeft, Phone } from "lucide-react";

export default function SecurityPage() {
  const safetyRules = [
    {
      icon: <LifeBuoy className="text-orange-500" size={28} />,
      title: "Gilets de sauvetage",
      desc: "Port obligatoire dès que le skipper le demande (gros temps, navigation de nuit, manœuvres)."
    },
    {
      icon: <AlertTriangle className="text-amber-500" size={28} />,
      title: "Un homme à la mer",
      desc: "La règle d'or : On ne quitte jamais le bateau sans prévenir. Si quelqu'un tombe, on ne le quitte pas des yeux."
    },
    {
      icon: <Flame className="text-yellow-500" size={28} />,
      title: "Bobos",
      desc: "Un des dangers les plus courants, c'est l'eau chaude. Redoubler de précautions dans la cuisine."
    },
    {
      icon: <Droplets className="text-blue-500" size={28} />,
      title: "Gestion de l'eau",
      desc: "On embarquera de l'eau dans les réservoirs pour nous laver, faire la vaisselle... Pour boire, on devra acheter des bouteilles en suffisance."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Alerte/Sérieux */}
      <div className="bg-amber-600 text-white py-12 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-amber-100 hover:text-white mb-6 transition-colors">
            <ChevronLeft size={20} /> Retour
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck size={40} />
            <h1 className="text-4xl font-black">Sécurité & Vie à Bord</h1>
          </div>
          <p className="text-xl text-amber-50">
            Navigation sereine, équipage en sécurité. À lire impérativement avant l'embarquement.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8">
        {/* Rappel Important */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-amber-600 mb-8">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Le Briefing de Départ</h2>
          <p className="text-slate-700 leading-relaxed">
            Avant de larguer les amarres, nous ferons un tour complet du propriétaire : 
            emplacement des gilets, utilisation des WC marins, fonctionnement des vannes de coque 
            et procédure d'urgence radio. <strong>La parole du skipper (moi) est souveraine en mer.</strong>
          </p>
        </div>

        {/* Grille des règles */}
        <div className="grid md:grid-cols-2 gap-6">
          {safetyRules.map((rule, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
              <div className="mb-4">{rule.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{rule.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{rule.desc}</p>
            </div>
          ))}
        </div>

        {/* Section Urgence */}
        <div className="mt-12 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Phone className="text-red-500" />
            <h2 className="text-2xl font-bold">Numéros d'Urgence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <span className="text-red-400 font-mono text-2xl font-bold">196</span>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Secours en mer (CROSS)</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <span className="text-blue-400 font-mono text-2xl font-bold">VHF Canal 16</span>
              <p className="text-slate-400 text-sm uppercase tracking-wider">Veille radio permanente</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
