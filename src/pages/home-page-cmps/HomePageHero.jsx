import { Link } from "react-router-dom"

export function HomePageHero() {
  return (
    <section className="homepage-hero flex">
      <div className="homepage-hero-txt">
        <h1 className="homepage-hero-header"> Trilili brings all your tasks, teammates, and tools together</h1>
        <p className="homepage-hero-p">Keep everything in the same place-even if your team isn’t.</p>
        <Link to={'/workspace'} > <button className="btn-call-to-action">
          Start now!
        </button>
        </Link>
      </div>
      <div className="homepage-img">
        <img src={'src//assets//img//home-img.webp'} alt="home-image" />
      </div>
    </section>
  )
}