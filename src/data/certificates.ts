export interface Certificate {
  name: string;
  imagePath: string;
  link?: string; // Optional link to the certificate verification page or larger image
}

export const certificates: Certificate[] = [
  {
    name: 'Claude 101',
    imagePath: 'certificates/certificate1.png',
  },
  {
    name: 'Claude Code in Action',
    imagePath: 'certificates/certificate2.png',
  },
  {
    name: 'Introduction to Claude Co-work',
    imagePath: 'certificates/certificate3.png',
  },
  {
    name: 'AI Fluency: Framework & Foundation',
    imagePath: 'certificates/certificate4.png',
  },
  // Add more certificate objects as needed
];
