import { useState } from 'react';
import { CloseButton } from '../CloseButton';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';

import bugImageUrl from '../../images/Bug.svg';
import ideaImageUrl from '../../images/Idea.svg';
import thoughtImageUrl from '../../images/Thought.svg';

export const feedbackTypes = {
  bug: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem da lagarta'
    },
  },
  idea: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem da lampada'
    },
  },
  other: {
    title: 'Outros',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem da nuvem'
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypedChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartResquested={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ❤️ no <a className="underline underline-offset-2" href="https://lp.rocketseat.com.br/nlw-return">NLW Return Edition</a>
      </footer>
    </div >
  )
}