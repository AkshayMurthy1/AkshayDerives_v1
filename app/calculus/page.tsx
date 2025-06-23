import Card from "@/components/Card";

export default function CalculusPage() {
  const topics = [
    { title: "Limits", description: "Understanding how functions behave near points.", href: "/calculus/limits" },
    { title: "Derivatives", description: "Rates of change and tangent lines.", href: "/calculus/derivatives" },
    { title: "Integrals", description: "Area under curves and accumulation.", href: "/calculus/integrals" },
    { title: "Volumes & Cross Sections", description: "3D solids formed from slicing.", href: "/calculus/volumes" },
    { title: "Polar Graphs", description: "Visualizing functions in polar coordinates.", href: "/calculus/polar" },
    { title: "Series", description: "Infinite sums and convergence.", href: "/calculus/series" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Calculus Topics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Card key={topic.title} {...topic} />
        ))}
      </div>
    </div>
  );
}
