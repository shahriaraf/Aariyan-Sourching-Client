"use client";

import { useState } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import {
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const StatCard = ({ icon, title, value, trend, trendValue }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-600 p-3 rounded-lg">
            {icon}
          </div>
        </div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <p className="text-3xl font-bold text-gray-800 mb-2">{value}</p>
        {trend && (
          <div
            className={`flex items-center gap-1 text-sm font-medium ${
              trend === "up" ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend === "up" ? (
              <FaArrowUp size={12} />
            ) : (
              <FaArrowDown size={12} />
            )}
            <span>{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

const StatCardSkeleton = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-pulse">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-gray-200 p-3 rounded-lg w-12 h-12"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
        <div className="h-8 bg-gray-300 rounded w-32 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  </div>
);

const mockApi = {
  fetchChartData: async (timeRange) => {
    await new Promise((res) => setTimeout(res, 500));
    const generateData = (numPoints, base, variance) =>
      Array.from(
        { length: numPoints },
        () => base + Math.floor(Math.random() * variance) - variance / 2
      );
    const generateLabels = (numPoints) => {
      if (timeRange === "7d")
        return Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`);
      if (timeRange === "90d")
        return Array.from({ length: 90 }, (_, i) => `Day ${i + 1}`);
      return Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
    };
    let numPoints = timeRange === "7d" ? 7 : timeRange === "90d" ? 90 : 30;
    return {
      userChart: {
        labels: generateLabels(numPoints),
        data: generateData(numPoints, 1000, 400),
      },
      trafficSources: {
        labels: ["Direct", "Organic Search", "Referral", "Social"],
        data: [35, 45, 10, 10],
      },
      deviceUsage: {
        labels: ["Desktop", "Mobile", "Tablet"],
        data: [60, 35, 5],
      },
      topPages: [
        { path: "/", views: "15,432" },
        { path: "/products", views: "11,120" },
        {
          path: "/blog/a-very-long-blog-post-title-that-needs-truncation",
          views: "9,876",
        },
        { path: "/pricing", views: "7,543" },
      ],
    };
  },
};
const Analytics = ({ UserData,allData, allOders}) => {
  const [timeRange, setTimeRange] = useState("30d");
  const axiosSecure = {
    get: async () => ({
      data: {
        totalUsers: UserData?.length || 0,
        totalProducts:allData?.length || 0,
        totalOrders: allOders?.length || 0,
      },
    }),
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["analyticsDashboard", timeRange],
    queryFn: async () => {
      const [statsResponse, chartData] = await Promise.all([
        axiosSecure.get("/api/stats"),
        mockApi.fetchChartData(timeRange),
      ]);
      return {
        stats: statsResponse.data,
        charts: chartData,
      };
    },
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        borderRadius: 8,
        titleFont: { size: 14, weight: "bold" },
        bodyFont: { size: 13 },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#6b7280", font: { size: 11 } },
      },
      y: {
        grid: { color: "#f3f4f6" },
        ticks: { color: "#6b7280", font: { size: 11 } },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom", 
        labels: {
          padding: 20,
          font: { size: 12 },
          color: "#374151",
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        borderRadius: 8,
        titleFont: { size: 13, weight: "bold" },
        bodyFont: { size: 12 },
      },
    },
  };

  const userChartData = {
    labels: data?.charts?.userChart?.labels || [],
    datasets: [
      {
        label: "Users",
        data: data?.charts?.userChart?.data || [],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.08)",
        tension: 0.4,
        fill: true,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#f59e0b",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const sourceChartData = {
    labels: data?.charts?.trafficSources?.labels || [],
    datasets: [
      {
        data: data?.charts?.trafficSources?.data || [],
        backgroundColor: ["#3B82F6", "#10B981", "#EF4444", "#6366F1"],
        borderWidth: 0,
        hoverOffset: 10,
      },
    ],
  };

  const deviceChartData = {
    labels: data?.charts?.deviceUsage?.labels || [],
    datasets: [
      {
        data: data?.charts?.deviceUsage?.data || [],
        backgroundColor: ["#3B82F6", "#10B981", "#EF4444"],
        borderWidth: 0,
        hoverOffset: 10,
      },
    ],
  };

  return (
    <div className="w-full my-7 ">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <p className="mt-1  font-semibold text-xl text-gray-700">
            Track your business performance and metrics
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)
        ) : isError ? (
          <div className="col-span-full bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-red-600 text-sm font-medium">
              Could not load statistics. Please try again.
            </p>
          </div>
        ) : (
          <>
            <StatCard
              icon={<FaUsers size={22} />}
              title="Total Users"
              value={data.stats.totalUsers}
            />
            <StatCard
              icon={<FaBoxOpen size={22} />}
              title="Total Products"
              value={data.stats.totalProducts}
            />
            <StatCard
              icon={<FaShoppingCart size={22} />}
              title="Total Orders"
              value={data.stats.totalOrders}
            />
            <StatCard
              icon={<FaDollarSign size={22} />}
              title="Revenue"
              value="$0.00"
            />
          </>
        )}
      </div>

      <div className="bg-white p-4  rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="mb-6 px-2">
          <h2 className="text-xl font-bold text-gray-800">User Growth</h2>
          <p className="text-sm text-gray-500 mt-1">
            Daily active users over time
          </p>
        </div>
        <div className="h-72 sm:h-80">
          {isLoading ? (
            <div className="h-full w-full bg-gray-50 animate-pulse rounded-lg"></div>
          ) : (
            <Line data={userChartData} options={chartOptions} />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="mb-5 px-2">
            <h2 className="text-xl font-bold text-gray-800">
              Top Performing Pages
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Most visited pages on your site
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Page Path
                  </th>
                  <th className="text-right py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.charts?.topPages.map((page, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-50 text-yellow-600 text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span
                          className="text-sm font-medium text-gray-700 truncate"
                          title={page.path}
                        >
                          {page.path}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <span className="text-sm font-bold text-gray-800">
                        {page.views}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-5 px-2">
              <h2 className="text-xl font-bold text-gray-800">
                Traffic Sources
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Where your visitors come from
              </p>
            </div>
            <div className="h-64 flex items-center justify-center">
              {isLoading ? (
                <div className="h-48 w-48 bg-gray-50 animate-pulse rounded-full"></div>
              ) : (
                <Doughnut data={sourceChartData} options={doughnutOptions} />
              )}
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-5 px-2">
              <h2 className="text-xl font-bold text-gray-800">Device Usage</h2>
              <p className="text-sm text-gray-500 mt-1">
                Devices used to access your site
              </p>
            </div>
            <div className="h-64 flex items-center justify-center">
              {isLoading ? (
                <div className="h-48 w-48 bg-gray-50 animate-pulse rounded-full"></div>
              ) : (
                <Doughnut data={deviceChartData} options={doughnutOptions} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
