import { ExternalLink, LockKeyhole } from 'lucide-react';

import {
  PROJECT_CATEGORY_LABELS,
  PROJECT_KIND_LABELS,
  type Project,
} from '../../types/project';
import { GitHubIcon } from './BrandIcons';
import { ProjectDetails } from './ProjectDetails';

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
};

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const hasProjectLinks =
    project.githubUrl ||
    project.liveUrl ||
    project.sourceVisibility === 'private';
  const projectNumber = String(index + 1).padStart(2, '0');
  const totalProjects = String(total).padStart(2, '0');
  const classificationLabel = project.kind
    ? PROJECT_KIND_LABELS[project.kind]
    : PROJECT_CATEGORY_LABELS[project.category];

  return (
    <article className="border-primary/25 hover:bg-surface/55 grid min-w-0 gap-6 border-b py-10 transition-colors duration-200 sm:py-12 lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-10">
      <div className="flex items-center justify-between gap-4 lg:block">
        <p className="text-accent font-mono text-2xl font-black sm:text-3xl">
          {projectNumber}
          <span className="text-muted text-sm font-semibold">
            {' '}
            / {totalProjects}
          </span>
        </p>
        <p className="text-muted font-mono text-xs font-bold tracking-[0.16em] uppercase lg:mt-4">
          Case study
        </p>
      </div>

      <div className="min-w-0">
        {project.image && (
          <img
            alt={project.image.alt}
            className="border-primary/25 mb-6 aspect-[16/9] w-full border object-cover"
            src={project.image.src}
          />
        )}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-accent text-xs font-black tracking-[0.16em] uppercase">
            {classificationLabel}
          </span>

          {project.status && (
            <span className="text-muted text-xs font-bold tracking-[0.12em] uppercase">
              {project.status}
            </span>
          )}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_13rem]">
          <div>
            <h3 className="text-primary max-w-3xl text-3xl leading-tight font-black sm:text-4xl">
              {project.title}
            </h3>

            <p className="text-secondary mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8">
              {project.shortDescription}
            </p>
          </div>

          <div className="border-primary/25 border-t pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-5">
            {project.role && (
              <div>
                <p className="text-muted text-xs font-bold tracking-[0.16em] uppercase">
                  Role
                </p>
                <p className="text-primary mt-1 text-sm font-bold">
                  {project.role}
                </p>
              </div>
            )}

            <div className="mt-5">
              <p className="text-muted text-xs font-bold tracking-[0.16em] uppercase">
                Stack
              </p>
              <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5 lg:block lg:space-y-1.5">
                {project.technologies.map((technology) => (
                  <li
                    className="text-primary text-sm font-semibold"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ProjectDetails project={project} />

        {hasProjectLinks && (
          <div className="border-primary/25 mt-6 flex flex-wrap items-center gap-4 border-t pt-5">
            {project.githubUrl && (
              <a
                className="text-primary hover:text-accent focus-visible:outline-accent inline-flex items-center gap-2 text-sm font-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                href={project.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon aria-hidden="true" className="size-4" />
                Source
              </a>
            )}

            {project.sourceVisibility === 'private' && !project.githubUrl && (
              <span className="text-muted inline-flex items-center gap-2 text-sm font-bold">
                <LockKeyhole aria-hidden="true" className="size-4" />
                Private source
              </span>
            )}

            {project.liveUrl && (
              <a
                className="text-primary hover:text-accent focus-visible:outline-accent inline-flex items-center gap-2 text-sm font-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
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
