import { BuilderProvider } from '@/context/BuilderContext';
import PromptBuilderPage from '@/components/PromptBuilderPage';

export default function Home() {
  return (
    <BuilderProvider>
      <PromptBuilderPage />
    </BuilderProvider>
  );
}
