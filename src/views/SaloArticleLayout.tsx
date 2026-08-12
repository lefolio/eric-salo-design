import Link from 'next/link';
import MarkdownRenderer from '@lefolio/engine/markdown';
import type { ManifestPage } from '@lefolio/engine/template';
import { slugify } from '@lefolio/engine/template';

interface SaloArticleLayoutProps {
  title: string;
  body: string;
  section?: string | null;
  frontmatter?: ManifestPage['frontmatter'];
  featureImage?: string | null;
}

function publishDate(frontmatter: ManifestPage['frontmatter'] | undefined) {
  const raw: unknown = frontmatter?.published;
  if (raw instanceof Date && !Number.isNaN(raw.getTime())) {
    return raw.toISOString().slice(0, 10);
  }
  if (typeof raw === 'string') {
    const trimmed = raw.trim();
    const lower = trimmed.toLowerCase();
    if (!['true', 'false', 'yes', 'no', 'on', 'off', '0', '1'].includes(lower)) {
      if (/^\d{4}-\d{2}-\d{2}T/.test(trimmed)) return trimmed.slice(0, 10);
      return trimmed;
    }
  }
  if (typeof frontmatter?.date === 'string') {
    const d = frontmatter.date;
    return /^\d{4}-\d{2}-\d{2}T/.test(d) ? d.slice(0, 10) : d;
  }
  return null;
}

function formatDate(value?: string | null) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Drop a leading H1 that duplicates the page title. */
export function bodyWithoutTitleHeading(body: string, title: string) {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return body.replace(new RegExp(`^#\\s+${escaped}\\s*\\n+`, 'i'), '').trim();
}

export default function SaloArticleLayout({
  title,
  body,
  section,
  frontmatter,
  featureImage,
}: SaloArticleLayoutProps) {
  const publishedRaw = publishDate(frontmatter);
  const published = formatDate(publishedRaw);
  const updatedRaw =
    typeof frontmatter?.updated === 'string' ? frontmatter.updated : null;
  const updated = formatDate(updatedRaw);
  const sectionHref = section ? `/${slugify(section)}/` : '/';

  return (
    <article className="salo-post">
      <div className="salo-container salo-post-top">
        {section ? (
          <Link href={sectionHref} className="salo-post-back">
            ← {section}
          </Link>
        ) : null}
        <h1 className="salo-post-title">{title}</h1>
        {published || updated ? (
          <p className="salo-post-meta">
            {published ? (
              <span>
                Published <time dateTime={publishedRaw || undefined}>{published}</time>
              </span>
            ) : null}
            {published && updated ? <span className="salo-post-meta-sep">·</span> : null}
            {updated ? (
              <span>
                Updated <time dateTime={updatedRaw || undefined}>{updated}</time>
              </span>
            ) : null}
          </p>
        ) : null}
      </div>

      {featureImage ? (
        <div className="salo-post-feature">
          <div className="salo-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featureImage} alt="" className="salo-post-feature-image" />
          </div>
        </div>
      ) : null}

      <div className="salo-container salo-post-body">
        <MarkdownRenderer content={body} />
      </div>
    </article>
  );
}
