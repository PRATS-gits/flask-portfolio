
import React from 'react';
import HeroSection from '@/components/about/HeroSection';
import ProfileSection from '@/components/about/ProfileSection';
import SkillsSection from '@/components/about/SkillsSection';
import ExperienceEducationSection from '@/components/about/ExperienceEducationSection';
import CtaSection from '@/components/about/CtaSection';

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <ProfileSection />
      <SkillsSection />
      <ExperienceEducationSection />
      <CtaSection />
    </>
  );
};

export default AboutPage;
