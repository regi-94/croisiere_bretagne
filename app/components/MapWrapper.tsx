"use client"; // Indispensable ici

import dynamic from 'next/dynamic';

const ExpeditionMap = dynamic(() => import('./Map'), { 
  ssr: false,
  loading: () => (
    <div className="h-[500px] bg-slate-200 animate-pulse rounded-2xl flex items-center justify-center text-slate-500 font-medium">
      Chargement de la zone de navigation...
    </div>
  )
});

export default function MapWrapper() {
  return <ExpeditionMap />;
}
