import { Card } from "./card";

interface ImageCardProps {
  imagePath: string;
  title: string;
  footer: string;
}

export default function ImageCard({
  imagePath,
  title,
  footer,
}: ImageCardProps) {
  return (
    <Card>
      <img
        src={imagePath}
        alt={title}
        style={{ width: "100%", height: "auto" }}
      />
      <h3>{title}</h3>
      <p>{footer}</p>
    </Card>
  );
}
