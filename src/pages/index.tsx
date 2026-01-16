import * as React from "react"

const IndexPage = () => {
  return (
    <main>
      <div>
      <h1>
        marsponce.ca
      </h1>
      <p>
        this site is currently under construction.
      </p>
      <p>
        please direct any questions to <a
          href="mailto://info@marsponce.ca"
        >
          info@marsponce.ca
        </a>
        .
      </p>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>marsponce.ca</title>
