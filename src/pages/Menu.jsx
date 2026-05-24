function Menu() {
  const menuItems = [
    { name: "Espresso", desc: "Strong shot", price: "$2.50", icon: "fa-coffee" },
    { name: "Cappuccino", desc: "With foam", price: "$3.50", icon: "fa-mug-hot" },
    { name: "Latte", desc: "Smooth", price: "$4.00", icon: "fa-mug-hot" },
    { name: "Green Tea", desc: "Fresh", price: "$2.50", icon: "fa-leaf" },
    { name: "Chocolate Cookie", desc: "Homemade", price: "$1.50", icon: "fa-cookie-bite" },
    { name: "Cheesecake", desc: "New York style", price: "$4.50", icon: "fa-cake" },
    { name: "Mocha", desc: "Chocolate coffee", price: "$4.25", icon: "fa-mug-hot" },
    { name: "Iced Latte", desc: "Cold and creamy", price: "$4.50", icon: "fa-ice-cream" },
    { name: "Croissant", desc: "Buttery pastry", price: "$2.00", icon: "fa-bread-slice" }
  ]

  return (
    <main className="container">
      <h2 className="section-title">Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <i className={`fas ${item.icon}`}></i>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Menu