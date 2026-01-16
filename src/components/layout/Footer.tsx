import * as React from "react"

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <footer>
      { children }
    </footer>
  )
}
