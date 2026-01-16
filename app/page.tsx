import Link from 'next/link';
import { getArtigos } from '@/lib/artigos';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog EBAC - Artigos sobre Desenvolvimento Web',
  description:
    'Explore nossos artigos sobre Next.js, React, TypeScript e as melhores práticas de desenvolvimento web moderno.',
  openGraph: {
    title: 'Blog EBAC - Artigos sobre Desenvolvimento Web',
    description:
      'Explore nossos artigos sobre Next.js, React, TypeScript e as melhores práticas de desenvolvimento web moderno.',
  },
};

export default async function Home() {
  const artigos = await getArtigos();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Blog EBAC
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Artigos sobre desenvolvimento web moderno
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {artigos.map((artigo) => (
            <article
              key={artigo.slug}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <Link href={`/artigos/${artigo.slug}`} className="block p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {artigo.titulo}
                </h2>

                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {artigo.autor}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {new Date(artigo.dataPublicacao).toLocaleDateString(
                      'pt-BR',
                    )}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {artigo.resumo}
                </p>

                <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:gap-2 transition-all">
                  Ler artigo
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </article>
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 Blog EBAC - Desenvolvido com Next.js 15</p>
        </footer>
      </div>
    </div>
  );
}
