import Typography from '@/components/general/typography';
import Container from '@/components/layout/container'; // Garanta que esta linha existe
import Tag from '@/components/data-display/tag';
import InterestsDetails from '@/components/data-display/interests-details';
import { INTERESTS } from '@/lib/data';

const InterestsSection = () => {
  return (
    <Container id="interests">
      <div className="flex flex-col items-center gap-4">
        <Tag label="Habilidades" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          Um pouco mais sobre o que me motiva e o que gosto de fazer:
        </Typography>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12 items-stretch">
        {INTERESTS?.map((interest, index) => (
          <InterestsDetails {...interest} key={index} />
        ))}
      </div>
    </Container>
  );  
  
};

export default InterestsSection;