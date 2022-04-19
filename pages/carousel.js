import "../styles/carousel.module.css";

export default function Carousel() {

  const technologies = [
    {
      name: 'React',
      icon: 'react'
    },
    {
      name: 'Node',
      icon: 'node'
    },
    {
      name: 'React',
      icon: 'react'
    },
    {
      name: 'JavaScript',
      icon: 'js'
    },
    {
      name: 'Vue',
      icon: 'vuejs'
    },
    {
      name: 'Git',
      icon: 'git-alt'
    },
    {
      name: 'Docker',
      icon: 'docker'
    },
    {
      name: 'React',
      icon: 'react'
    },
    {
      name: 'Node',
      icon: 'node'
    },
    {
      name: 'React',
      icon: 'react'
    },
    {
      name: 'JavaScript',
      icon: 'js'
    },
    {
      name: 'Vue',
      icon: 'vuejs'
    },
    {
      name: 'Git',
      icon: 'git-alt'
    },
    {
      name: 'Docker',
      icon: 'docker'
    },
  ]


  return (
    <div className="slider">
      <div className="slide-track">
        {technologies.map((it, idx) => (
          <div key={idx} class="slide">
            <span className={`fa-4x fa-brands fa-${it.icon}`}></span>
            <span className="technology">{it.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
