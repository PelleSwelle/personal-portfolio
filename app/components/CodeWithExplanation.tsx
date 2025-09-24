'use client';

import type { BundledLanguage, CodeBlockData } from '@/components/ui/shadcn-io/code-block';
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
} from '@/components/ui/shadcn-io/code-block';
import { ReactNode } from 'react';
import { codeSnippet } from '@/types/interfaces';


const CodeWithExplanation = ({code}: {code: CodeBlockData}) => (

    <div className="flex flex-row gap-4 items-center">
        <p>{code.description}</p>
        <CodeBlock data={[code]} defaultValue={code.language}>
            <CodeBlockBody>
            {(item) => (
                <CodeBlockItem key={item.id} value={item.language}>
                <CodeBlockContent language={item.language as BundledLanguage}>
                    {code.code}
                </CodeBlockContent>
                </CodeBlockItem>
            )}
            </CodeBlockBody>
        </CodeBlock>
    </div>
);

export default CodeWithExplanation;