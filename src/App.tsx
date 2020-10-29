import React from "react"
import { Button, Typography } from "antd"
import { Apex } from "./Charts"
import { GithubOutlined } from "@ant-design/icons"

export const App: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center">
        <Typography.Title className="text-center">
          React Charts Comparison
        </Typography.Title>

        <a
          href="https://github.com/jmsv/react-charts-comparison"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button shape="round" type="primary" icon={<GithubOutlined />}>
            GitHub
          </Button>
        </a>
      </div>

      <Apex />
    </div>
  )
}
