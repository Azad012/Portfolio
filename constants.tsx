
import { Skill, Experience, Education } from './types';

export const SKILLS: Skill[] = [
  { name: 'Java', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'Spring MVC', category: 'Backend' },
  { name: 'Microservices', category: 'Backend' },
  { name: 'Kafka', category: 'Backend' },
  { name: 'RabbitMQ', category: 'Backend' },
  { name: 'Redis', category: 'Backend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Docker', category: 'Tools' },
  { name: 'Kubernetes', category: 'Tools' },
  { name: 'React js', category: 'Frontend' },
  { name: 'System Design', category: 'Backend' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Polytropic Services',
    role: 'Full Stack Developer',
    period: 'December 2022 - February 2023',
    location: 'Patna, Bihar, India'
  },
  {
    company: 'Polytropic Services',
    role: 'Frontend Web Developer',
    period: 'September 2021 - October 2021',
    location: 'Patna, Bihar, India'
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: 'Darbhanga College of Engineering',
    degree: 'Bachelor of Technology - Computer Science & Engineering',
    period: 'September 2019 - September 2023'
  },
  {
    institution: 'SRI RAM RATAN SHAHI HIGHER SECONDARY SCHOOL',
    degree: 'Intermediate, Science PCM',
    period: 'July 2016 - June 2018'
  },
  {
    institution: 'SRI RAM RATAN SHAHI HIGHER SECONDARY SCHOOL',
    degree: 'Matriculation',
    period: 'April 2014 - May 2016'
  }
];

export const PROFILE = {
  name: 'Azad Ansari',
  email: 'azadansari201923@gmail.com',
  linkedin: 'https://www.linkedin.com/in/azad-ansari-g',
  location: 'Gopalganj, Bihar, India',
  resumeUrl: '#', // Placeholder for the actual resume file path or URL
  summary: `I am a backend developer specializing in Java and Spring Boot, with a strong focus on building scalable, secure, and maintainable backend systems. I design and develop RESTful APIs and microservices that follow clean architecture principles, ensuring code quality, reliability, and ease of maintenance. I have solid experience working with MySQL, including database schema design, query optimization, indexing, and transaction management. I work extensively with microservices architecture, focusing on proper service decomposition, inter-service communication, and fault tolerance.`
};
