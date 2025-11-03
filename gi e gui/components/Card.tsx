import React from "react";
export const Card: React.FC<{ icon?: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="rounded-3xl border bg-white p-6 shadow-sm">
    <div className="flex items-center gap-2 mb-2">
      {icon && <span className="text-rose-500">{icon}</span>}
      <div className="font-medium">{title}</div>
    </div>
    <div className="text-gray-700 text-sm leading-relaxed">{children}</div>
  </div>
);
