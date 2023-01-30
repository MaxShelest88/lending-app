import { sanityClient } from '../lib/sanity';
import { groq } from 'next-sanity';

export const fetchFromSanity = async <T>(params: string) => {
  const query = groq`
  ${params}`;
  const data = await sanityClient.fetch<T>(query);
  return data;
};
