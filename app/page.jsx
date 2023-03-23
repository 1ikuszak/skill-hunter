import Link from 'next/link';


export default function Home() {
  return (
    <main>
        <ul>
          <li><Link href="/browse">browse</Link></li>
          <li><Link href="/login">login</Link></li>
          <li><Link href="/register">signin</Link></li>
          <li><Link href="/add">add</Link></li>
        </ul>
    </main>
  )
}
