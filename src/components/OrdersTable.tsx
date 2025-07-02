'use client';
import { FC } from "react";

const OrdersTable: FC = () => {
  const orders = [
    ["Micheal John", "18-10-2021", "completed"],
    ["Ryan Doe", "01-06-2022", "pending"],
    ["Tarry White", "14-10-2021", "process"],
    ["Selma", "01-02-2023", "pending"],
    ["Andreas Doe", "31-10-2021", "completed"],
  ];

  return (
    <div className="bg-white shadow p-4 rounded">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Orders</h3>
        <div className="flex gap-2 text-gray-500">
          <i className="bx bx-search" />
          <i className="bx bx-filter" />
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-600 border-b">
            <th>User</th>
            <th>Date Order</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(([user, date, status], i) => (
            <tr key={i} className="border-b text-sm">
              <td className="py-2 flex items-center gap-2">
                <img src="https://placehold.co/40x40" className="w-8 h-8 rounded-full" />
                {user}
              </td>
              <td>{date}</td>
              <td>
                <span className={`px-2 py-1 text-xs rounded ${{
                  completed: "bg-green-100 text-green-600",
                  pending: "bg-yellow-100 text-yellow-600",
                  process: "bg-blue-100 text-blue-600"
                }[status]}`}>{status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
