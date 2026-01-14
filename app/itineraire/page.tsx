// app/itineraire/page.tsx
import React from "react";
import Link from "next/link";
import { ChevronLeft, Info, Compass } from "lucide-react";
import MapWrapper from "../components/MapWrapper";

export default function ItineraryPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header simple avec bouton retour */}
      <div className="bg-blue-600 text-white py-12 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
            <ChevronLeft size={20} /> Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4">L'Itinéraire</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Entre passes étroites, eaux turquoise des Glénan et mouillages forains à Groix.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          {/* La Carte Interactive */}
          <div className="w-full">
            <MapWrapper />
          </div>

          {/* Détails des destinations */}
          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
                <Compass className="text-blue-600" /> Les Escales Possibles
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-700 font-bold h-8 w-8 rounded-full flex items-center justify-center shrink-0">1</span>
                  <div>
                    <h3 className="font-bold text-slate-800">Lorient (Base de sous-marins)</h3>
                    <p className="text-slate-600 text-sm">Prise en main du bateau et avitaillement.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-700 font-bold h-8 w-8 rounded-full flex items-center justify-center shrink-0">2</span>
                  <div>
                    <h3 className="font-bold text-slate-800">Île de Groix</h3>
                    <p className="text-slate-600 text-sm">Mouillage aux Grands Sables ou Port-Tudy.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-blue-100 text-blue-700 font-bold h-8 w-8 rounded-full flex items-center justify-center shrink-0">3</span>
                  <div>
                    <h3 className="font-bold text-slate-800">Archipel des Glénan</h3>
                    <p className="text-slate-600 text-sm">Si la météo permet de traverser, eaux transparentes garanties.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <Info size={18} /> Note de Régi
              </h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Le parcours est donné à titre indicatif. En mer, c'est la météo (et surtout le vent) qui décide. On verra sur le moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
