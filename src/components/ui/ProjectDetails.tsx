import type { Project } from '../../types/project';

type DetailGroup = {
  title: string;
  body?: string;
  items?: readonly string[];
};

type ProjectDetailsProps = {
  project: Project;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const detailGroups: DetailGroup[] = [
    { title: 'Problem', body: project.problem },
    { title: 'Solution', body: project.solution },
    { title: 'Backend work', items: project.backendWork },
    { title: 'Technical highlights', items: project.highlights },
    { title: 'Architecture', items: project.architecture },
    { title: 'Integrations', items: project.integrations },
  ];

  const visibleGroups = detailGroups.filter(
    (group) => group.body || group.items?.length,
  );

  if (visibleGroups.length === 0) {
    return null;
  }

  return (
    <details className="border-subtle group mt-6 border-t pt-5">
      <summary className="text-accent focus-visible:outline-accent inline-flex cursor-pointer rounded-sm text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4">
        View project details
      </summary>

      <div className="mt-5 grid gap-5">
        {visibleGroups.map((group) => (
          <section key={group.title}>
            <h4 className="text-muted text-xs font-semibold tracking-[0.1em] uppercase">
              {group.title}
            </h4>

            {group.body && (
              <p className="text-secondary mt-2 text-sm leading-6">
                {group.body}
              </p>
            )}

            {group.items && (
              <ul className="mt-3 grid gap-2">
                {group.items.map((item) => (
                  <li
                    className="text-secondary flex items-start gap-3 text-sm leading-6"
                    key={item}
                  >
                    <span
                      aria-hidden="true"
                      className="bg-accent mt-2 size-1.5 shrink-0 rounded-full"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </details>
  );
}
