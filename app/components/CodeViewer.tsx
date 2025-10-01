import { CodeBlock, dracula, atomOneDark } from 'react-code-blocks';
import { CodeViewerProps } from '@/types/interfaces';

export default function CodeViewer({props}: {props: CodeViewerProps}) {

    return(
        <div>
            {/* TODO: the heading does not show up for some reason */}
            <h4>{props.fileName}</h4>
            <CodeBlock
                text={props.code}
                language={props.language}
                theme={atomOneDark}
            />
        </div>
    )
}