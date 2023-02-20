import {links} from './links.jsx'
import Link from 'next/link'

const Nav = () =>(
  <nav>
    <ul>
      {
        links.map(({route, label})=>(
          <li key={route}>
            <Link href={route}>
              {label}
            </Link>
          </li>
        ))
      }
    </ul>
  </nav>
)

export default Nav;
