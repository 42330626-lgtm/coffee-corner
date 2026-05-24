function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h2>Welcome to Coffee Corner</h2>
          <p>Good coffee, good vibes</p>
        </div>
      </section>

      <section className="section container">
        <h2>Why choose us?</h2>
        <div className="cards">
          <div className="card">
            <i className="fas fa-seedling"></i>
            <h3>Fresh Beans</h3>
            <p>We use fresh coffee beans.</p>
          </div>
          <div className="card">
            <i className="fas fa-heart"></i>
            <h3>Friendly Staff</h3>
            <p>We care about our customers.</p>
          </div>
          <div className="card">
            <i className="fas fa-wifi"></i>
            <h3>Free Wi-Fi</h3>
            <p>Stay connected.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home