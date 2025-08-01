import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1>InovaMente Labs</h1>
      <Link href="/chamados">Portal Cliente</Link>
      <Link href="/admin">Admin</Link>
    </div>
  )
}
