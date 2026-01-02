import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import ContactForm from '@/components/general/ContactForm';
import SocialIcons from '@/components/data-display/social-icons';

const ContactSection = () => {
  return (
    <Container id="contato">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Contato" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Sinta-se à vontade para entrar em contato comigo se estiver procurando pela pessoa certa para o seu trabalho
        </Typography>
      </div>

      <div className="mt-12 flex flex-col items-center gap-12">
        <ContactForm />

        <div className="flex flex-col items-center gap-4">
          <Typography className="text-center">
            Você também pode me encontrar nessas redes
          </Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;