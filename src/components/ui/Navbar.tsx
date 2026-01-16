import * as React from "react"
import { Link } from "gatsby"

export default function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <nav>
      <ul className="flex items-center justify-center text-center">
        <li className="flex-1">
          <Link
            to="/"
            className="hover:font-bold duration-150"
            activeClassName="font-bold"
          >
            home
          </Link>
        </li>
        <li className="flex-1">
          <Link
            to="/projects"
            className="hover:font-bold duration-150"
            activeClassName="font-bold"
          >
            projects
          </Link>
        </li>
        <li className="flex-1">
          <Link
            to="/resume"
            className="hover:font-bold duration-150"
            activeClassName="font-bold"
          >
            resume
          </Link>
        </li>
        <li className="flex-1">
          <Link
            to="/contact"
            className="hover:font-bold duration-150"
            activeClassName="font-bold"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
