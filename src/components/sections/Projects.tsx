import { projects } from '../../data/projects';
import { Container } from '../layout/Container';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';

export function Projects() {
  return (
    <section
      className="border-primary/15 bg-canvas border-y py-20 sm:py-24 lg:py-28"
      id="projects"
    >
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          heading="Projects and systems I've worked on."
          number="03"
        />

        {projects.length > 0 ? (
          <div className="border-primary/25 mt-12 border-t">
            {projects.map((project, index) => (
              <ProjectCard
                index={index}
                key={project.id}
                project={project}
                total={projects.length}
              />
            ))}
          </div>
        ) : (
          <p className="border-primary/25 text-muted mt-8 max-w-2xl border-t pt-6 text-sm leading-6">
            Selected project details are being prepared.
          </p>
        )}
      </Container>
    </section>
  );
}
