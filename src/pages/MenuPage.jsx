import React, { useState } from "react";

const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

const menuItems = [
  {
    id: 1,
    title: "Fried Eggs",
    price: "$9.99",
    category: "Breakfast",
    img: "/images/fry-egg.png",
    desc: "Golden fried eggs served with a side of toast and fresh herbs."
  },
  {
    id: 2,
    title: "Hawaiian Pizza",
    price: "$12.50",
    category: "Breakfast",
    img: "/images/pizza.png",
    desc: "A delicious pizza topped with ham, pineapple, and melted mozzarella cheese."
  },
  {
    id: 3,
    title: "Martinez Cocktail",
    price: "$11.00",
    category: "Main Dishes",
    img: "/images/cocktail.png",
    desc: "Classic gin and vermouth cocktail with a hint of orange and aromatic bitters."
  },
  {
    id: 4,
    title: "Butterscotch Cake",
    price: "$15.99",
    category: "Main Dishes",
    img: "/images/cake.png",
    desc: "Rich and moist butterscotch cake topped with creamy frosting and caramel drizzle."
  },
  {
    id: 5,
    title: "Mint Lemonade",
    price: "$7.25",
    category: "Drinks",
    img: "/images/Mint Lemonade.png",
    desc: "Refreshing lemonade infused with fresh mint leaves and a splash of citrus."
  },
  {
    id: 6,
    title: "Chocolate Ice Cream",
    price: "$18.05",
    category: "Drinks",
    img: "/images/Chocolate Icecream.png",
    desc: "Creamy chocolate ice cream made with rich cocoa and topped with chocolate shavings."
  },
  {
    id: 7,
    title: "Cheese Burger",
    price: "$13.50",
    category: "Desserts",
    img: "/images/Cheese Burger.png",
    desc: "Juicy beef patty with melted cheese, fresh lettuce, tomatoes, and tangy sauce."
  },
  {
    id: 8,
    title: "Classic Waffles",
    price: "$18.99",
    category: "Desserts",
    img: "/images/Classic Waffles.png",
    desc: "Crispy waffles served warm with syrup, whipped cream, and fresh berries."
  }
];



const apps = [
  { name: "Uber Eats", img: "/images/ubereats.png" },
  { name: "Grubhub", img: "/images/grubhub.png" },
  { name: "Postmates", img: "/images/postmates.png" },
  { name: "DoorDash", img: "/images/doordash.png" },
  { name: "FoodPanda", img: "/images/foodpanda.png" },
  { name: "Deliveroo", img: "/images/deliveroo.png" },
  { name: "Instacart", img: "/images/instacart.png" },
  { name: "Just Eat", img: "/images/justeat.png" },
   { name: "DiDi", img: "/images/didi.png" }
];

const Menu = () => {
  const [selected, setSelected] = useState("All");

  const filteredItems =
    selected === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selected);

  return (
    <>
      {/* Menu Section */}
      <section className="menu-section">
        <div className="menu-header">
          <h2>Our Menu</h2>
          <p>Explore our carefully curated menu made with fresh ingredients and love.</p>
        </div>

        <div className="menu-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={selected === cat ? "active" : ""}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div className="menu-card" key={item.id}>
              <img src={item.img} alt={item.title} />
              <div className="menu-info">
                <h3 className="menu-price">{item.price}</h3>
                <h4 className="menu-title">{item.title}</h4>
                <p className="menu-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apps Section */}
      <section className="apps-section">
            <div className="apps-container">
    
         {/* LEFT TEXT */}
          <div className="apps-text">
         <h2>You can order through apps</h2>
         <p>You can easily place your food orders through any of these delivery apps. Fast, simple, and convenient.</p>
        </div>


    {/* RIGHT IMAGES */}
    <div className="apps-grid">
      {apps.map((app, i) => (
        <div key={i} className="app-card">
          <img src={app.img} alt={app.name} />
        </div>
      ))}
    </div>

  </div>
</section>

    </>
  );
};

export default Menu;
