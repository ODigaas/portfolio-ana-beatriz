import Image from 'next/image';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';
import { TestimonialDetails as TestimonialProps } from '@/lib/types';

const InterestsDetails = ({
  personName,
  testimonial,
  title,
  personAvatar,
}: TestimonialProps) => {
  return (
    <Card className="flex flex-col items-center gap-6 p-8 md:p-10 h-full w-full shadow-md bg-white dark:">
      
      {/* Container da Imagem: Ajustamos para h-20 e a imagem para h-16 (64px) */}
      <div className="flex items-center justify-center h-20 w-full">
        <div className="relative h-16 w-16">
          <Image
            src={personAvatar!}
            alt={`${personName} avatar`}
            fill
            className="object-contain" // Mantém a proporção da logo sem cortar
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-start flex-grow w-full gap-2">
        {Array.isArray(testimonial) ? (
          <ul className="flex flex-col items-center gap-1 w-full p-0">
            {testimonial.map((item, index) => (
              <li key={index} className="list-none w-full">
                <Typography className="text-center break-words leading-snug">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        ) : (
          <Typography className="text-center italic  break-words leading-relaxed">
            &quot;{testimonial}&quot;
          </Typography>
        )}
      </div>

      <div className="flex flex-col items-center gap-1 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 w-full">
        <Typography variant="subtitle" className="font-bold text-center tracking-wider text-sm">
          {personName}
        </Typography>
        <Typography variant="body3" className=" text-center">
          {title}
        </Typography>
      </div>
    </Card>
  );
};

export default InterestsDetails;