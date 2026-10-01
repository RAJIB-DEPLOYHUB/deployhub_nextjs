export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#09090b', color: '#fafafa', fontFamily: 'system-ui, sans-serif', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: '800', background: 'linear-gradient(to right, #ffffff, #a1a1aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '0 0 1rem 0' }}>
        ▲ DeployHub Next.js 14
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#a1a1aa', maxWidth: '600px', marginBottom: '2rem' }}>
        App Router, React Server Components, and native API Health Routes.
      </p>
      <a href="/api/health" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: '#27272a', color: '#22c55e', borderRadius: '8px', border: '1px solid #3f3f46', textDecoration: 'none', fontWeight: '600' }}>
        ● Test Health Endpoint: /api/health
      </a>
    </main>
  );
}
