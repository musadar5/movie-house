import { useRouter } from 'next/router';

export default function HelpPage() {
  const { slug = [] } = useRouter().query;
  return (
    <div>
      <h1>Help Page</h1>
      <p>You are viewing: /help/{slug.join('/')}</p>
    </div>
  );
}
