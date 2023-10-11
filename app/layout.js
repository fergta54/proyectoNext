import Navbarra from '@/components/NavBarra';
import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'Sistema con nextjs',
  description: 'Pagina Home',
  keywords: 'Sistema de informacion',
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
});

const links = [
  // { url: './', text: 'Inicio' },
  // { url: './', text: 'Acerca de' },
  // { url: './', text: 'Contacto' },
  { url: '/PlataformaAtencion', text: 'Plataforma Atencion' },
  { url: '/ConsultorioDental', text: 'Consultorio' },
  { url: '/Canchas', text: 'Canchas' },
  { url: '/NAF', text: 'NAF' },
  { url: '/Fotocopiadora', text: 'fotocopiadora' },
];

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        <Navbarra title="Sistema de informacion" links={links} />

        {children}
      </body>
    </html>
  );
}
