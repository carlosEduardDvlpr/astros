import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <main style={{ justifyContent: 'center' }}>
      <Link to={'/'}>Voltar para home</Link>
    </main>
  );
}
