import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { FaReceipt } from "react-icons/fa";
import moment from "moment";

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#000"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={10}
      fontWeight="600"
    >
      {name}
    </text>
  );
};

const COLORS = ["#FACC15", "#60A5FA", "#EF4444", "#22C55E"];

export default function Dashboard({ bookings, statistics, result }) {
  const orderStatusData = [
    { name: "Menunggu Konfirmasi", value: result?.pending },
    { name: "Berlangsung", value: result?.approved },
    { name: "Ditolak", value: result?.rejected },
    { name: "Selesai", value: result?.done },
  ];
  return (
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-6">
      <div className="flex items-center justify-center gap-2 p-4 mb-6 bg-gray-100 border rounded-xl">
        <FaReceipt className="text-2xl text-black" />
        <h2 className="text-base font-bold text-black">Dashboard</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-2">
        <div className="p-4 bg-white shadow-md rounded-xl">
          <h2 className="mb-4 text-sm font-bold text-black md:text-base">
            Total Transaksi Bulanan
          </h2>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={statistics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip contentStyle={{ fontSize: 10 }} />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#3B82F6"
                strokeWidth={2}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="p-4 bg-white shadow-md rounded-xl">
          <h2 className="mb-4 text-sm font-bold text-black md:text-base">
            Status Pemesanan
          </h2>
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie
                data={orderStatusData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                label={renderCustomLabel}
                isAnimationActive={true}
              >
                {orderStatusData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip contentStyle={{ fontSize: 10 }} />
              <Legend wrapperStyle={{ fontSize: 10 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-4 overflow-x-auto bg-white shadow rounded-xl">
        <h2 className="mb-4 text-sm font-bold text-black md:text-base">
          Riwayat Pemesanan
        </h2>
        <table className="w-full text-sm text-center">
          <thead className="bg-blue-50 rounded-t-xl">
            <tr>
              <th className="px-6 py-3">No Pemesanan</th>
              <th className="px-6 py-3">Nama Pemesan</th>
              <th className="px-6 py-3">Layanan</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Created</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((service) => (
              <tr
                key={service.id}
                className="text-center"
              >
                <td className="px-4 py-2">{service.id}</td>
                <td className="px-4 py-2">{service.user.name}</td>
                <td className="px-4 py-2">{service.detail_service_name}</td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      service.status === "Selesai"
                        ? "text-green-800 bg-green-100"
                        : service.status === "Proses"
                        ? "text-yellow-800 bg-yellow-100"
                        : "text-gray-800 bg-gray-100"
                    }`}
                  >
                    {service.status}
                  </span>
                </td>
                <td className="px-4 py-2">{moment(service.created_at).format("D MMM YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
