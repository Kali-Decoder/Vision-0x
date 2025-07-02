'use client';
import { FC } from "react";

const TodoList: FC = () => {
  const todos = [
    ["Check Inventory", true],
    ["Manage Delivery Team", true],
    ["Contact Selma: Confirm Delivery", false],
    ["Update Shop Catalogue", true],
    ["Count Profit Analytics", false],
  ];

  return (
    <div className="bg-white shadow p-4 rounded">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Todos</h3>
        <div className="flex gap-2 text-gray-500">
          <i className="bx bx-plus" />
          <i className="bx bx-filter" />
        </div>
      </div>
      <ul className="space-y-2">
        {todos.map(([text, done], i) => (
          <li
            key={i}
            className={`flex justify-between items-center p-2 rounded ${done ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
          >
            <p>{text}</p>
            <i className="bx bx-dots-vertical-rounded" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
