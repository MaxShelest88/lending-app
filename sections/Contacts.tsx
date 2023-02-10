'use client';

import { ContactForm } from '@/components';
import { Section } from '@/components/UI';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion';

interface Props {
  socialIcons: SocialIcon[];
}

const Contacts: React.FC<Props> = ({ socialIcons }) => {
  return (
    <Section id="contacts">
      <motion.div
        variants={{ ...staggerContainer }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1
          variants={fadeIn('up', 'spring', 0.2, 1.25)}
          className="text-title mb-10"
        >
          Контакты / Contacts
        </motion.h1>
        <motion.div
          variants={fadeIn('up', 'spring', 0.5, 1.25)}
          className="grid md:grid-cols-2"
        >
          <div className="mb-2 space-y-5">
            {socialIcons.map((icon) => (
              <div className="flex space-x-3" key={icon._id}>
                <p className="text-xl font-light">{icon.name}: </p>
                <SocialIcon
                  url={icon.url}
                  key={icon._id}
                  bgColor="#0ea5e9"
                  fgColor="white"
                  style={{ width: 30, height: 30 }}
                />
              </div>
            ))}
          </div>
          <ContactForm />
        </motion.div>
      </motion.div>
    </Section>
  );
};
export default Contacts;
