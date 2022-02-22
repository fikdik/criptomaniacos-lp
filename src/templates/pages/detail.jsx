import React from "react"
import { MDXProvider } from "@mdx-js/react"
import components from "../../components/mdx"

const Template = ({ data }) => {
  return (
    <>
      <p>template root detail</p>
      <MDXProvider components={components}></MDXProvider>
    </>
  )
}

export default Template
