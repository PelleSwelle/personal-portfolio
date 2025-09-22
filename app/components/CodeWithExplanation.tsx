'use client';

import type { BundledLanguage } from '@/components/ui/shadcn-io/code-block';
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
} from '@/components/ui/shadcn-io/code-block';
import { ReactNode } from 'react';
import { code } from '@/types/interfaces';


const CodeWithExplanation = ({code, children}: {code: code[], children: ReactNode}) => (
    <div className="flex flex-row gap-4 items-center">
        {children}
        <CodeBlock data={code} defaultValue={code[0].language}>
            <CodeBlockBody>
            {(item) => (
                <CodeBlockItem key={item.language} value={item.language}>
                <CodeBlockContent language={item.language as BundledLanguage}>
                    {item.code}
                </CodeBlockContent>
                </CodeBlockItem>
            )}
            </CodeBlockBody>
        </CodeBlock>
    </div>
);

export default CodeWithExplanation;