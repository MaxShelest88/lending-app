'use client';

import { ContactForm } from '@/components';
import { SocialIcon } from 'react-social-icons';

interface Props {
  socialIcons: SocialIcon[];
}

const Contacts: React.FC<Props> = ({ socialIcons }) => {
  return (
    <section className="section p-5 sm:p-10" id="contacts">
      <div className="container mx-auto">
        <h1 className="text-title py-10">Контакты</h1>
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col space-y-3">
            {socialIcons.map((icon) => (
              <div className="text-xl font-light" key={icon._id}>
                <p>{icon.name}: </p>
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
      </div>
    </section>
  );
};
export default Contacts;
