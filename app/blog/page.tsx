import Card from "@/components/Card";

const blogs = [
  {
    title: "PINNs",
    description: "What are these things?",
    href: "/projects/pinns",
    imgSrc: "/images/pinn.png",
  },
  
];
export default function BlogPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Blog</h2>
      <p className="mb-6">Short reads on math, physics, and more.</p>
      <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <Card key={blog.title} {...blog} />
              ))}
            </div>
          </div>
    </div>
  );
}