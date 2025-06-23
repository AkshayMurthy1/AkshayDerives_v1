import Card from "@/components/Card";

export default function ProjectsPage() {
  const projects = [
    {
      title: "PINN Heat Simulator",
      description: "Physics-Informed Neural Network to model 3D Heat Equation.",
      href: "/projects/pinn-fluid",
      imageSrc: "/images/pinn.png",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Passion Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
