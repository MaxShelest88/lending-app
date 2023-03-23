import { About, Contacts, Hero, Projects, Skills } from '@/sections';
import { fetchFromSanity } from '@/utils/fetchFromSanity';

const Page = async () => {
  const categories = await fetchFromSanity<GeneralCategory[]>(
    `*[_type=="generalCategory"]{
  _id, title, color, description, stacks[] ->
   {_id, mainImage, skill, title}}`,
  );

  const projects = await fetchFromSanity<Project[]>(
    `*[_type=="Project"]{
  _id, title, url, difficulty, description, mainImage, stacks[] ->
   {_id, mainImage, skill, title}
}`,
  );

  const socialIcons = await fetchFromSanity<SocialIcon[]>(`
  *[_type=="socialIcons"]{
  		_id, name, url
	}`);

  return (
    <>
      <Hero />
      <Skills categories={categories} />
      <About />
      <Projects projects={projects} />
      <Contacts socialIcons={socialIcons} />
    </>
  );
};

export default Page;
