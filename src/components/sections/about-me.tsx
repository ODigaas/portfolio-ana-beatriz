import Image from 'next/image';

import BiaFullPose from '/public/images/bia-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="Sobre mim">
      <div className="self-center">
        <Tag label="Sobre mim" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={BiaFullPose}
              alt="Fullpose of Bia"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Que tal me conhecer um pouco mais?
          </Typography>
          <Typography>
           Me chamo Ana Beatriz, sou estudante de Psicologia e apaixonada por
           entender o comportamento humano em suas múltiplas dimensões. Nesse
           percurso, complemento minha formação com cursos nas áreas de Gestão
           Organizacional e de Talentos, com um olhar especial para a importância do
           ambiente laboral na saúde mental.
          </Typography>
          <Typography>
            Além disso, sou entusiasta da Neurociência e busco integrar os fundamentos
            da neurofisiologia à prática clínica e organizacional. Bem como a literatura
            que também me acompanha de forma constante, sendo fonte de reflexão e
            conhecimento.
          </Typography>
          <Typography>
            Atualmente, sou voluntária em um Centro de Atenção Integrada à Saúde
            Mental, vivenciando práticas multiprofissionais voltadas ao cuidado em saúde
            mental. Paralelamente, sou professora voluntária de inglês em uma ONG,
            onde ensino crianças e adolescentes em um projeto que une educação,
            afeto e propósito.
          </Typography>
          <Typography>
            Acredito na potência do diálogo, do aprendizado contínuo e da construção
            conjunta, por isso, será um prazer compartilhar essa jornada com você.
            Vamos juntos?🌻
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
