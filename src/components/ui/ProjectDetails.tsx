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
    <details className="border-primary/25 group mt-7 border-t pt-5">
      <summary className="text-accent focus-visible:outline-accent inline-flex cursor-pointer text-sm font-black focus-visible:outline-2 focus-visible:outline-offset-4">
        View project details
      </summary>

      <div className="border-primary/20 mt-6 grid gap-0 border-y md:grid-cols-2">
        {visibleGroups.map((group) => (
          <section
            className="border-primary/20 border-b py-5 md:border-r md:px-5 first:md:pl-0 even:md:border-r-0"
            key={group.title}
          >
            <h4 className="text-muted text-xs font-black tracking-[0.16em] uppercase">
              {group.title}
            </h4>

            {group.body && (
              <p className="text-secondary mt-3 text-sm leading-6">
                {group.body}
              </p>
            )}

            {group.items && (
              <ul className="mt-3 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    className="text-secondary grid grid-cols-[1rem_minmax(0,1fr)] gap-3 text-sm leading-6"
                    key={item}
                  >
                    <span
                      aria-hidden="true"
                      className="text-accent font-mono font-bold"
                    >
                      /
                    </span>
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
