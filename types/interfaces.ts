
interface Project {
    id: number;
    title: string;
    subTitle: string;
    shortDescription: string;
    longDescription: string;
    image: string;
    codeSnippets?: CodeSnippet[];
    roles: Role[];
    technologies: Technology[];
}

interface Technology {
    id: number;
    title: string;
    image: string;
}

interface Role {
    id: number;
    title: string;
}

interface CodeSnippet {
    id: number;
    language: string;
    filename: string;
    code: string;
    description: string;
}

interface CodeViewerProps {
    code: string;
    language: string;
    fileName: string;
}

export type { Project, Technology, Role , CodeSnippet, CodeViewerProps };