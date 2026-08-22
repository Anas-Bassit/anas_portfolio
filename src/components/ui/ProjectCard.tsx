import { ExternalLink, LockKeyhole } from 'lucide-react';

import { PROJECT_CATEGORY_LABELS, type Project } from '../../types/project';
import { GitHubIcon } from './BrandIcons';
import { ProjectDetails } from './ProjectDetails';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasProjectLinks =
    project.githubUrl ||
    project.liveUrl ||
    project.sourceVisibility === 'private';

  return (
    <article className="rounded-panel border-subtle bg-surface hover:border-accent/35 flex h-full min-w-0 flex-col border p-5 transition-colors duration-200 sm:p-6">
      {project.image && (
        <img
          alt={project.image.alt}
          className="border-subtle rounded-card mb-5 aspect-[16/9] w-full border object-cover"
          src={project.image.src}
        />
      )}

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-accent bg-accent/10 rounded-full px-3 py-1 text-xs font-semibold tracking-[0.1em] uppercase">
          {PROJECT_CATEGORY_LABELS[project.category]}
        </span>

        {project.status && (
          <span className="border-subtle text-muted rounded-full border px-3 py-1 text-xs font-medium">
            {project.status}
          </span>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-primary text-xl leading-tight font-semibold tracking-[-0.02em]">
          {project.title}
        </h3>

        {project.role && (
          <p className="text-muted mt-2 text-sm font-medium">{project.role}</p>
        )}

        <p className="text-secondary mt-4 text-sm leading-6 sm:text-base sm:leading-7">
          {project.shortDescription}
        </p>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            className="border-subtle bg-canvas/45 text-secondary rounded-full border px-3 py-1.5 text-xs font-medium"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <ProjectDetails project={project} />

        {hasProjectLinks && (
          <div className="border-subtle mt-6 flex flex-wrap items-center gap-3 border-t pt-5">
            {project.githubUrl && (
              <a
                className="text-secondary hover:text-primary focus-visible:outline-accent inline-flex items-center gap-2 rounded-sm text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                href={project.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon aria-hidden="true" className="size-4" />
                Source
              </a>
            )}

            {project.sourceVisibility === 'private' && !project.githubUrl && (
              <span className="text-muted inline-flex items-center gap-2 text-sm font-medium">
                <LockKeyhole aria-hidden="true" className="size-4" />
                Private source
              </span>
            )}

            {project.liveUrl && (
              <a
                className="text-secondary hover:text-primary focus-visible:outline-accent inline-flex items-center gap-2 rounded-sm text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                href={project.liveUrl}
                rel="noreferrer"
                target="_blank"
              >
                <ExternalLink aria-hidden="true" className="size-4" />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
