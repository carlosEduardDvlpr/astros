export default function ErrorPage() {
  return (
    <main style={{ justifyContent: 'center' }}>
      <button
        style={{ textDecoration: 'underline', fontSize: '20px', cursor: 'pointer' }}
        onClick={() => (window.location.href = '/')}
      >
        Voltar para home
      </button>
    </main>
  );
}
