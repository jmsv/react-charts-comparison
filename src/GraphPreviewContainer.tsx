import React from "react"
import { Card } from "antd"
import SyntaxHighlighter from "react-syntax-highlighter"
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs"
import reactElementToJSXString from "react-element-to-jsx-string"
import prettier from "prettier/standalone"
// @ts-ignore
import jsxParser from "prettier/parser-babylon"

interface IGraphPreviewContainerProps {
  title: string
}

export const GraphPreviewContainer: React.FC<IGraphPreviewContainerProps> = ({
  children,
  title,
}) => {
  return (
    <Card title={title} className="mt-10">
      <div className="flex flex-wrap space-x-12">
        <div className="w-full lg:w-1/2 xl:w-1/2">{children}</div>

        <div
          className="w-full lg:w-1/2 xl:w-1/2 h-50 overflow-y-scroll px-4"
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
                reactElementToJSXString(children, {
                  displayName: () => "Chart",
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
