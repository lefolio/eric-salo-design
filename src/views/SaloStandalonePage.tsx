import type { TemplateStandalonePageProps } from '@lefolio/engine/template';
import SaloArticleLayout, { bodyWithoutTitleHeading } from './SaloArticleLayout';

export default function SaloStandalonePage({ page }: TemplateStandalonePageProps) {
  return (
    <SaloArticleLayout
      title={page.title}
      body={bodyWithoutTitleHeading(page.processedBody, page.title)}
    />
  );
}
