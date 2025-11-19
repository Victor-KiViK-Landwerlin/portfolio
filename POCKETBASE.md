# Guide PocketBase

## Installation

1. Télécharge PocketBase : https://pocketbase.io/docs/
2. Lance : `./pocketbase serve`
3. Admin : `http://127.0.0.1:8090/_/`

## Collection "projects"

Crée une collection avec ces champs :

- **title** (Text) - Required
- **slug** (Text) - Required, Unique
- **description** (Editor) - Required
- **image** (File) - Max 1
- **images** (File) - Max 10
- **tags** (Select Multiple) : Design, Webdesign, Branding, UI/UX, etc.
- **content** (Editor) - Optional
- **role** (Text)
- **tools** (Select Multiple) : Figma, Illustrator, Astro, etc.
- **year** (Text)

## Utilisation dans Astro

```typescript
import { getProjects, pb } from '../lib/pocketbase';

const projects = await getProjects();

{projects.map((project) => (
  <img src={pb.files.getUrl(project, project.image)} />
))}
```

Voir `src/lib/pocketbase.ts` pour les fonctions disponibles.
