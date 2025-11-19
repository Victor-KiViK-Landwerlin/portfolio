import PocketBase from 'pocketbase';

// Remplace cette URL par celle de ton instance PocketBase
export const pb = new PocketBase('http://127.0.0.1:8090');

// Type pour les projets
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
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
  return pb.files.getUrl(project, filename);
}
