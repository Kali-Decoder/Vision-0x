'use client';
import { FC } from "react";

const StatCards: FC = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
      {[
        { icon: "bxs-calendar-check", label: "New Order", value: "1020" },
        { icon: "bxs-group", label: "Visitors", value: "2834" },
        { icon: "bxs-dollar-circle", label: "Total Sales", value: "N$2543.00" },
      ].map((item, i) => (
        <li key={i} className="bg-white shadow rounded p-4 flex items-center gap-4">
          <i className={`bx ${item.icon} text-3xl text-indigo-600`} />
          <div>
            <h3 className="text-xl font-bold">{item.value}</h3>
            <p className="text-gray-600">{item.label}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StatCards;
