import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Tag from '@/components/data-display/tag';
import ExperienceDetails from '@/components/data-display/experience-details'; // Reutiliza o visual
import { COURSES } from '@/lib/data';

const CoursesSection = () => {
  return (
<Container id="courses">
        <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Cursos e Certificações" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Graduações, cursos e certificações que possuo:
        </Typography>
      </div>

      {COURSES?.map((course, index) => (
        <ExperienceDetails {...course} key={index} />
      ))}
    </Container>
  );
};

export default CoursesSection;