import React from 'react'
import { Link } from 'gatsby'

import gatsby from '../assets/gatsby.png'
import github from '../assets/nav-github.png'

const links = [
  { url: 'https://astrid-guenther.de/subscribe', label: 'Newsletter' },
  { url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KQMKUVAX5SPVS&source=url', label: 'PayPal' },
]
const internalLinks = [{ url: '/rss.xml', label: 'RSS' }]
const madeWithLinks = [
  { url: 'https://www.gatsbyjs.org/', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/astridx', label: 'GitHub', icon: github },
]

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <nav>
          <span className="desktop-only">Made with ♥ by Astrid</span>
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              {link.label}
            </a>
          ))}
          {internalLinks.map((link) => (
            <Link to={link.url} key={link.url}>
              {link.label}
            </Link>
          ))}
        </nav>
        <nav>
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              <span>{link.label}</span>
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
        </nav>
      </section>
    </footer>
  )
}
