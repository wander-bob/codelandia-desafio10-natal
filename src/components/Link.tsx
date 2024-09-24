import '../styles/link.css';

interface LinkProps {
  path?: string;
  content: string;
}

export function Link({ path, content }: LinkProps) {
  return (
    <a href={path ? `/${path}` : '#'}>
      <span>{content}</span>
    </a>
  );
}
