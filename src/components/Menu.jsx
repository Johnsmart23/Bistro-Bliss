import { Link } from "react-router-dom";

const menuItems = [
  {
    icon: "🍳", 
    title: "Breakfast",
    description: "In the new era of technology we look in the future with certainty and pride for our life.",
    link: "/menu#breakfast",
  },
  {
    icon: "🍲",
    title: "Main Dishes",
    description: "In the new era of technology we look in the future with certainty and pride for our life.",
    link: "/menu#main-dishes",
  },
  {
    icon: "☕",
    title: "Drinks",
    description: "In the new era of technology we look in the future with certainty and pride for our life.",
    link: "/menu#drinks",
  },
  {
    icon: "🍰",
    title: "Desserts",
    description: "In the new era of technology we look in the future with certainty and pride for our life.",
    link: "/menu#desserts",
  },
];

const BrowseMenu = () => {
  return (
    <section className="browse-menu">
      <div className="container">
        <h2>Browse Our Menu</h2>

        <div className="menu-flex">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              {/* Updated Link */}
              <Link to={item.link}>Explore Menu</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseMenu;
