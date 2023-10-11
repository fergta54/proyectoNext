import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/PlataformaAtencion">Plataforma Atencion</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
      </ul>
    </nav>
  );
}