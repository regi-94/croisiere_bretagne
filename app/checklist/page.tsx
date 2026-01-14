"use client"; // Nécessaire pour l'interactivité des checkboxes

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sun, Wind, Umbrella, Bath, Smartphone, Briefcase } from 'lucide-react';

const categories = [
  {
    title: "Vêtements & Protection",
    icon: <Wind className="text-blue-500" />,
    items: [
      "Veste de quart ou coupe-vent imperméable",
      "Polaire ou gros pull (les soirées sont fraîches en mer)",
      "Chaussures de pont ou bottes (semelles claires, non marquantes)",
      "Maillot de bain & serviette microfibre",
      "Casquette ou chapeau (avec attache si possible)",
      "Tenue de rechange légère pour se la péter dans les ports"
    ]
  },
  {
    title: "Solaire & Hygiène",
    icon: <Sun className="text-amber-500" />,
    items: [
      "Lunettes de soleil (indispensable)",
      "Crème solaire (respectueuse du milieu marin si possible)",
      "Stick à lèvres protection UV",
      "Trousse de toilette",
      "Produit douche biodégradable (idéalement)"
    ]
  },
  {
    title: "Électronique & Divers",
    icon: <Smartphone className="text-purple-500" />,
    items: [
      "Batterie externe",
      "Chargeur GSM",
      "Pochette étanche pour téléphone",
      "Boules Quies (contre les ronfleurs ou les bruits de drisses)",
      "Lampe frontale (avec mode lumière rouge)",
      "Ta meilleure enceinte"
    ]
  },
  {
    title: "Pharmacie Personnelle",
    icon: <Umbrella className="text-red-500" />,
    items: [
      "Ton traitement habituel",
      "Anti-mal de mer pour Adri (Mercalm, bracelets, etc.)",
      "Pansements waterproof",
      "Désinfectant"
    ]
  }
];

export default function ChecklistPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b px-4 py-6 mb-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-blue-600 font-medium">
            <ArrowLeft size={20} /> Retour
          </Link>
          <h1 className="text-xl font-bold text-slate-900">La Checklist du Marin</h1>
          <div className="w-10"></div> {/* Spacer */}
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4">
        {/* Rappel important */}
        <div className="bg-amber-100 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8 shadow-sm">
          <div className="flex items-center gap-3">
            <Briefcase className="text-amber-700" />
            <h2 className="font-bold text-amber-900 uppercase tracking-wide">Règle d'or</h2>
          </div>
          <p className="mt-2 text-amber-800">
            <strong>SACS SOUPLES UNIQUEMENT.</strong> Les valises rigides sont trop casses couilles à caser dans le bato.
          </p>
        </div>

        {/* Liste des catégories */}
        <div className="space-y-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                {cat.icon}
                <h3 className="text-lg font-bold text-slate-800">{cat.title}</h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-slate-600 group-hover:text-slate-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>Petit conseil du skipper : On prend souvent trop de vêtements. <br/>Vise le pratique et l'efficace !</p>
        </div>
      </main>
    </div>
  );
}
