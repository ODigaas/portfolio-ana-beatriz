import Image from 'next/image';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';
import { TestimonialDetails as TestimonialProps } from '@/lib/types';

const InterestsDetails = ({
  personName,
  testimonial, // É esta propriedade que contém a lista de interesses
  title,
  avatar,
}: TestimonialProps) => {
  return (
    <Card className="flex flex-col items-center gap-6 p-8 md:p-10 h-full w-full shadow-md">
      
      {/* Container da Logo com tamanho fixo */}
      <div className="flex items-center justify-center h-24 w-full">
        <div className="relative h-20 w-20">
          <Image
            src={avatar || '/images/logos/avatar-dummy.svg'}
            alt={`${personName} logo`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Container de Texto corrigido */}
      <div className="flex flex-col items-center justify-start flex-grow w-full gap-2">
        {/* Mudamos de Interests para testimonial aqui na linha 30 */}
        {Array.isArray(testimonial) ? (
          <ul className="flex flex-col items-center gap-1 w-full p-0">
            {testimonial.map((item, index) => (
              <li key={index} className="list-none w-full">
                <Typography className="text-center text-gray-600 break-words leading-snug">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        ) : (
          <Typography className="text-center italic text-gray-600 break-words leading-relaxed">
            &quot;{testimonial}&quot;
          </Typography>
        )}
      </div>

      {/* Rodapé fixo na base */}
      <div className="flex flex-col items-center gap-1 mt-auto pt-4 border-t border-gray-100 w-full">
        <Typography variant="subtitle" className="font-bold text-gray-900 text-center uppercase tracking-wider text-sm">
          {personName}
        </Typography>
        <Typography variant="body3" className="text-gray-500 text-center">
          {title}
        </Typography>
      </div>
    </Card>
  );
};

export default InterestsDetails;