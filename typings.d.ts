interface Image {
  _type: 'image';
  asset: {
    ref: string;
    _type: 'reference';
  };
}

interface Stack {
  _id: string;
  title: string;
  skill: number;
  mainImage: Image;
}

interface SocialIcon {
  _id: string;
  name: string;
  url: string;
}

interface GeneralCategory {
  _id: string;
  title: string;
  description: string;
  color: string;
  stacks: Stack[];
}

interface Project {
  _id: string;
  title: string;
  url: string;
  difficulty: number;
  mainImage: Image;
  stacks: Stack[];
}
