import './globals.css'
import Nav from '../components/nav/index.jsx'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Nav/>
        </header>
        <main>
          <section>
            {children} 
          </section>
          <article>
          </article>
        </main>
        <footer>
          &copy; todos los derechos reservados..
        </footer>
      </body>
    </html>
  )
}
