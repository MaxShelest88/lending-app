'use client';

import { ContactForm } from '@/components';
import { Section } from '@/components/UI';
import { SocialIcon } from 'react-social-icons';

interface Props {
  socialIcons: SocialIcon[];
}

const Contacts: React.FC<Props> = ({ socialIcons }) => {
  return (
    <Section id="contacts" title="Контакты / Contacts">
      <div className="grid md:grid-cols-2">
        <div className="space-y-5">
          {socialIcons.map((icon) => (
            <div className="flex space-x-3" key={icon._id}>
              <p className="text-xl font-light">{icon.name}: </p>
              <SocialIcon
                url={icon.url}
                key={icon._id}
                bgColor="black"
                fgColor="white"
                style={{ width: 30, height: 30 }}
              />
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </Section>
  );
};
export default Contacts;
