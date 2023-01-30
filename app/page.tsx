import { Hero, Technologies } from '@/sections';
import { fetchFromSanity } from '@/utils/fetchFromSanity';

const Page = async () => {
  const categories = await fetchFromSanity<GeneralCategory[]>(
    `*[_type=="generalCategory"]{
  _id, title, color, description, stacks[] ->
   {_id, mainImage, skill, title}}`,
  );
  return (
    <>
      <Hero />
      <Technologies categories={categories} />
    </>
  );
};

export default Page;
