import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 100),
  },
];

const HumidityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value} %`}
        />
        <Line stroke="#2CCB66" dataKey="total" fill="currentColor" className="fill-primary" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HumidityChart;
