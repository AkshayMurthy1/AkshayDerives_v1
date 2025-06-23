import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
};

export default function Card({ title, description, href, imageSrc }: CardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={300}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-xl text-green-950 font-bold mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}
