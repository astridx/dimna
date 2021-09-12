import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import config from '../utils/config'
import takeNote from '../../content/images/index.png'
import Map from "../components/map"
import github from '../assets/nav-github.png'

const projectsList = [
  {
    name: 'x',
    slug: 'x',
    tagline: 'x.',
    image: takeNote,
    url: 'x',
    writeup: '/building-takenote',
    description: `x`,
  },
]

export default function ProjectsIndex() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function getStars() {
      const repos = await fetch(
        'https://api.github.com/users/astridx/repos?per_page=100'
      )

      return repos.json()
    }

    getStars()
      .then((data) => {
        setRepos(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Helmet title={`Projects | ${config.siteTitle}`} />
      <SEO />

      <article>
        <header>
          <div className="container">
            <h1>Projects</h1>
            <Map />
            <p className="description">
              A few highlights of my open-source projects. View them all{' '}
              <a href="https://github.com/astridx">on GitHub</a>.
            </p>
          </div>
        </header>


        <section className="projects large container">
          {projectsList.map((project) => (
            <div className="project" key={project.name}>
              <h2>{project.name}</h2>
              <div className="links tags">
                {project.writeup && <Link to={project.writeup}>Write-up</Link>}
                <a
                  href={`https://github.com/astridx/${project.slug}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                )}
              </div>
              <p className="description">{project.tagline}</p>
              <div className="stars">
                {repos.find((repo) => repo.name === project.slug) && (
                  <>
                    <img src={github} alt="Stargazers" />
                    <span>
                      <a
                        href={`https://github.com/astridx/${project.slug}/stargazers`}
                      >
                        {Number(
                          repos.find((repo) => repo.name === project.slug)
                            .stargazers_count
                        ).toLocaleString()}
                      </a>
                      {` stars on GitHub`}
                    </span>
                    <span></span>
                  </>
                )}
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  )
}

ProjectsIndex.Layout = Layout
