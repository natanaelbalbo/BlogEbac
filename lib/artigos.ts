import { Artigo } from './types';
import artigosData from '@/data/artigos.json';

export async function getArtigos(): Promise<Artigo[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return artigosData as Artigo[];
}

export async function getArtigoPorSlug(slug: string): Promise<Artigo | null> {
  const artigos = await getArtigos();
  return artigos.find((artigo) => artigo.slug === slug) || null;
}

export async function getAllSlugs(): Promise<string[]> {
  const artigos = await getArtigos();
  return artigos.map((artigo) => artigo.slug);
}
