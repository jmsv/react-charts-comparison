import React from "react"
import { Button, Card } from "antd"
import SyntaxHighlighter from "react-syntax-highlighter"
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs"
import reactElementToJSXString from "react-element-to-jsx-string"
import prettier from "prettier/standalone"
// @ts-ignore
import jsxParser from "prettier/parser-babylon"
import { GithubOutlined } from "@ant-design/icons"

interface IGraphPreviewContainerProps {
  title: string
  ghLink?: string
  code?: string
}

export const GraphPreviewContainer: React.FC<IGraphPreviewContainerProps> = ({
  children,
  title,
  ghLink,
  code,
}) => {
  return (
    <Card
      title={
        <>
          <div className="flex">
            <span>{title}</span>

            <div className="ml-auto">
              <a
                href={
                  ghLink || "https://github.com/jmsv/react-charts-comparison"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button shape="circle" icon={<GithubOutlined />} />
              </a>
            </div>
          </div>
        </>
      }
      className="mt-10"
    >
      <div className="flex flex-wrap space-x-12">
        <div className="w-full lg:w-1/2 xl:w-1/2" style={{ height: "28rem" }}>
          {children}
        </div>

        <div
          className="w-full lg:w-1/2 xl:w-1/2 h-50 overflow-y-auto px-4"
          style={{ maxHeight: "70vh" }}
        >
          <SyntaxHighlighter
            language="javascript"
            style={githubGist}
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
            }}
            wrapLines={true}
          >
            {prettier
              .format(
                code ||
                  reactElementToJSXString(children, {
                    // displayName: () => "Chart",
                  }),
                {
                  semi: false,
                  printWidth: 80,
                  parser: "babel",
                  plugins: [jsxParser],
                },
              )
              .replace(/;</g, "<")}
          </SyntaxHighlighter>
        </div>
      </div>
    </Card>
  )
}
