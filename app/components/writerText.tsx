'use client'

import { useEffect, useState } from "react";

export default function WriterText({ sentences }: { sentences: string[] }) {
  const [part, setPart] = useState('');

  let sentenceIndex = 0
  let offset = 0
  const numberOfSentences = sentences.length
  let forwards = true
  let pauseTick = 0
  const ticksToPause = 30
  const tickDuration = 40;

  const write = () => {
    if (forwards) {
      if (offset >= sentences[sentenceIndex].length) {
        ++pauseTick;
        if (pauseTick == ticksToPause) {
          forwards = false;
          pauseTick = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        sentenceIndex++;
        offset = 0;
        if (sentenceIndex >= numberOfSentences) {
          sentenceIndex = 0;
        }
      }
    }

    if (pauseTick == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    setPart(sentences[sentenceIndex].substring(0, offset))
  }

  useEffect(() => {
    setInterval(() => {
      write()
    }, tickDuration);

  }, [])

  return (
    <div className="text-blue-600 text-4xl font-bold w-fit">{part}</div>
  )
}
