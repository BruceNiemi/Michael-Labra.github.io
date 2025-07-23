interface SectionWithLinksProps {
  title: string;
  links: { href: string; label: string }[];
}

export default function SectionWithLinks({
  title,
  links,
}: SectionWithLinksProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-sm hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
