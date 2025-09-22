interface project {
    id: number;
    title: string;
    subTitle: string;
    shortDescription: string;
    longDescription: string;
    image: string;
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

interface code {
  language: string;
  filename: string;
  code: string;
}

export type { project, technology, Activity, code };