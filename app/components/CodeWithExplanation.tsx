'use client';

import { CodeSnippet, CodeViewerProps } from '@/types/interfaces';
import CodeViewer from './CodeViewer';

export default function CodeWithExplanation({ props }: { props: CodeSnippet }) {

    const codeViewerProps: CodeViewerProps = {
        code: props.code,
        language: props.language,
        fileName: props.filename
    }
    return (
        <div className="flex flex-row gap-4 items-center">
            <p>{props.description}</p>
            <CodeViewer props={codeViewerProps}/>
        </div>
    )
};