'use client';

import { DEFAULT_THEMES } from '@/config/themes';
import { SKILLS, PROJECTS } from '@/config';
import GitProfile from '@/components/GitProfile';

export default function ProfilePage() {
  return (
    <div>
      <GitProfile
        config={{
          github: {
            username: 'odedsam',
          },
          projects: {
            github: {
              display: true,
              header: 'My GitHub Projects',
              mode: 'automatic',
              automatic: {
                sortBy: 'stars',
                limit: 15,
                exclude: {
                  forks: true,
                  projects: [],
                },
              },
              manual: {
                projects: PROJECTS.filter((p) => p.pinned),
              },
            },
            external: {
              header: 'Live Projects',
              projects: PROJECTS,
            },
          },

          seo: {
            title: 'Portfolio of Oded Samuel',
            description: 'Portfolio, GitHub and Blog',
            imageURL: '/og.jpg',
          },
          social: {
            linkedin: 'oded-samuel',
            x: 'odedsamuel',
            email: 'oded970@gmail.com',
            website: 'https://coded-solution.com',
          },
          resume: {
            fileUrl: '/resume.pdf',
          },
          skills: SKILLS,
          experiences: [],
          certifications: [],
          educations: [],
          publications: [],
          googleAnalytics: {
            id: process.env.NEXT_PUBLIC_GA_ID || '',
          },
          hotjar: {
            id: process.env.NEXT_PUBLIC_HOTJAR_ID || '',
            snippetVersion: 6,
          },
          blog: {
            username: 'odedshmuel',
            source: 'dev',
            limit: 4,
            display: true,
          },
          themeConfig: {
            defaultTheme: DEFAULT_THEMES[0],
            disableSwitch: false,
            respectPrefersColorScheme: true,
            displayAvatarRing: true,
            themes: DEFAULT_THEMES,
          },
          footer: '© 2025 Oded Samuel. All rights reserved.',
          enablePWA: true,
        }}
      />
    </div>
  );
}
