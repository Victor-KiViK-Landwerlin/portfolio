// src/lib/pocketbase.ts
import PocketBase from 'pocketbase';

// URL de ton instance PocketBase
// Utilise la variable d'environnement ou fallback sur localhost
const POCKETBASE_URL = import.meta.env.PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090';
export const pb = new PocketBase(POCKETBASE_URL);

// Type pour les projets
export interface Project {
  id: string;
  collectionId: string;
  collectionName: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  content?: string;
  role?: string;
  tools?: string[];
  year?: string;
  created: string;
  updated: string;
}

// Fonction pour récupérer tous les projets
export async function getProjects(): Promise<Project[]> {
  try {
    const records = await pb.collection('projects').getFullList({
      sort: '-created',
    });
    return records as unknown as Project[];
  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error);
    return [];
  }
}

// Fonction pour récupérer un projet par son slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const record = await pb.collection('projects').getFirstListItem(`slug="${slug}"`);
    return record as unknown as Project;
  } catch (error) {
    console.error('Erreur lors de la récupération du projet:', error);
    return null;
  }
}

// Fonction pour obtenir l'URL d'une image
export function getImageUrl(project: Project, filename: string): string {
  if (!filename) return '/images/placeholder.jpg';
  if (filename.startsWith('http') || filename.startsWith('/')) return filename;
  
  // URL correcte pour PocketBase
  return `${POCKETBASE_URL}/api/files/${project.collectionId}/${project.id}/${filename}`;
}

// Fonction pour obtenir l'URL de l'image principale
export function getMainImageUrl(project: Project): string {
  if (!project.image) return '/images/placeholder.jpg';
  return getImageUrl(project, project.image);
}

// Fonction pour obtenir toutes les URLs de la galerie
export function getGalleryImages(project: Project): string[] {
  if (!project.images || project.images.length === 0) return [];
  return project.images.map(img => getImageUrl(project, img));
}