import { projects } from '../../data/projects';
import { Container } from '../layout/Container';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';

export function Projects() {
  return (
    <section
      className="border-subtle bg-surface/25 border-y py-20 sm:py-24 lg:py-28"
      id="projects"
    >
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          heading="Projects and systems I've worked on."
        />

        {projects.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="border-subtle text-muted mt-8 max-w-2xl border-t pt-6 text-sm leading-6">
            Selected project details are being prepared.
          </p>
        )}
      </Container>
    </section>
  );
}
