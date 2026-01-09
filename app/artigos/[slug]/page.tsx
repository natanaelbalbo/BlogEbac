import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArtigoPorSlug, getAllSlugs } from '@/lib/artigos';
import type { Metadata } from 'next';

// Gerar parâmetros estáticos para SSG
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Gerar metadados dinâmicos para SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artigo = await getArtigoPorSlug(slug);

  if (!artigo) {
    return {
      title: 'Artigo não encontrado',
    };
  }

  return {
    title: `${artigo.titulo} | Blog EBAC`,
    description: artigo.resumo,
    authors: [{ name: artigo.autor }],
    openGraph: {
      title: artigo.titulo,
      description: artigo.resumo,
      type: 'article',
      publishedTime: artigo.dataPublicacao,
      authors: [artigo.autor],
    },
    twitter: {
      card: 'summary_large_image',
      title: artigo.titulo,
      description: artigo.resumo,
    },
  };
}

export default async function ArtigoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artigo = await getArtigoPorSlug(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Botão Voltar */}
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar para o início
        </Link>

        {/* Conteúdo do Artigo */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12">
          {/* Header do Artigo */}
          <header className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              {artigo.titulo}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">{artigo.autor}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={artigo.dataPublicacao}>
                  {new Date(artigo.dataPublicacao).toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </header>

          {/* Resumo */}
          <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {artigo.resumo}
            </p>
          </div>

          {/* Conteúdo Principal */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {artigo.conteudo.split('\n\n').map((paragrafo, index) => (
              <p key={index} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {paragrafo}
              </p>
            ))}
          </div>

          {/* Footer do Artigo */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Ver todos os artigos
              </Link>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                Publicado por <span className="font-semibold">{artigo.autor}</span>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
