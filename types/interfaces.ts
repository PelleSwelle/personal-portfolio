interface project {
    id: number;
    title: string;
    subTitle: string;
    shortDescription: string;
    longDescription: string;
    image: string;
    codeSnippets?: codeSnippet[];
    roles: Activity[];
    technologies: technology[];
}

interface technology {
    technology_id: number;
    title: string;
    image: string;
}

interface Activity {
    activity_id: number;
    title: string;
}

interface codeSnippet {
  language: string;
  filename: string;
  code: string;
  description: string;
}

export type { project, technology, Activity, codeSnippet };