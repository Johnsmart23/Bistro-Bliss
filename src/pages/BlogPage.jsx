

const blogPosts = [
  {
    image: "/images/photo1.png",
    date: "January 3, 2023",
    title: "How to prepare a delicious gluten free sushi",
  },
  {
    image: "/images/photo2.png",
    date: "January 3, 2023",
    title: "Exclusive baking lessons from the pastry king",
  },
  {
    image: "/images/photo3.png",
    date: "January 3, 2023",
    title: "How to prepare the perfect fries in an air fryer",
  },
  {
    image: "/images/photo4.png",
    date: "January 3, 2023",
    title: "How to prepare delicious chicken tenders",
  },
  {
    image: "/images/gadgets.png",
    date: "January 3, 2023",
    title: "5 great cooking gadgets you can buy to save time",
  },
  {
    image: "/images/burger.png",
    date: "January 3, 2023",
    title: "The secret tips & tricks to prepare a perfect burger",
  },
    {
    image: "/images/cheesecake.png",
    date: "January 3, 2023",
    title: "7 delicious cheesecake recipes you can prepare",
  },
  {
    image: "/images/piz.png",
    date: "January 3, 2023",
    title: "5 great pizza restaurants you should visit this city",
  },
  {
    image: "/images/Mask-group.png",
    date: "January 3, 2023",
    title: "5 great cooking gadgets you can buy to save time",
  },
  {
    image: "/images/sushi.png",
    date: "January 3, 2023",
    title: "How to prepare a delicious gluten free sushi",
  },
  {
    image: "/images/desserts.png",
    date: "January 3, 2023",
    title: "Top 20 simple and quick desserts for kids",
  },
  {
    image: "/images/quick.png",
    date: "January 3, 2023",
    title: "Top 20 simple and quick desserts for kids",
  },
];

const BlogPage = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h1>Our Blog & Articles</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt="blog" className="blog-img" />
            <div className="blog-details">
              <span className="blog-date">{post.date}</span>
              <h3 className="blog-title">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
