import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Navbar from "../ui/Navbar"

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="text-center flex items-center justify-center">
        <h1 className="flex-1 text-4xl">
          marsponce.ca
        </h1>
        <div className="flex-1">
          <p>
            this site is currently under construction.
            please direct any questions to <a
              className="italic"
              href="mailto://info@marsponce.ca"
            >
              info@marsponce.ca
            </a>
            .
          </p>
        </div>
      </div>
      <Header>
        <Navbar />
      </Header>
      { children }
      <Footer/>
    </main>
  )
}
