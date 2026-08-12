import type { ManifestPage } from '@lefolio/engine/template';
import SaloArticleLayout, { bodyWithoutTitleHeading } from './SaloArticleLayout';

interface SaloContentPageProps {
  page: ManifestPage;
}

export default function SaloContentPage({ page }: SaloContentPageProps) {
  return (
    <SaloArticleLayout
      title={page.title}
      body={bodyWithoutTitleHeading(page.processedBody, page.title)}
      section={page.section}
      frontmatter={page.frontmatter}
      featureImage={page.thumbnail || null}
    />
  );
}
