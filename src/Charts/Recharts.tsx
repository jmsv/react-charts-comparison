import React from "react"
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { GraphPreviewContainer } from "../GraphPreviewContainer"

export const Recharts = () => {
  return (
    <GraphPreviewContainer
      title="Recharts"
      ghLink="https://github.com/jmsv/react-charts-comparison/blob/main/src/Charts/Recharts.tsx"
    >
      <ResponsiveContainer>
        <ComposedChart
          data={[
            {
              name: "Page A",
              uv: 590,
              pv: 800,
              amt: 1400,
            },
            {
              name: "Page B",
              uv: 868,
              pv: 967,
              amt: 1506,
            },
            {
              name: "Page C",
              uv: 1397,
              pv: 1098,
              amt: 989,
            },
            {
              name: "Page D",
              uv: 1480,
              pv: 1200,
              amt: 1228,
            },
            {
              name: "Page E",
              uv: 1520,
              pv: 1108,
              amt: 1100,
            },
            {
              name: "Page F",
              uv: 1400,
              pv: 680,
              amt: 1700,
            },
          ]}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="name"
            label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
          />
          <YAxis
            label={{ value: "Index", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Bar stackId="a" dataKey="pv" barSize={20} fill="#413ea0" />
          <Bar stackId="a" dataKey="amt" barSize={20} fill="#82ca9d" />
          <Bar dataKey="amt" barSize={20} fill="#b22" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </GraphPreviewContainer>
  )
}
