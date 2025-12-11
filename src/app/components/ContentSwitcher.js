"use client";

import AboutContent from './AboutContent';
import ResumeContent from './ResumeContent';
import WorksContent from './WorksContent';
import BlogContent from './BlogContent';
import ContactContent from './ContactContent';

export default function ContentSwitcher({ activeSection }) {
  const renderContent = () => {
    switch(activeSection) {
      case 'about':
        return <AboutContent />;
      case 'resume':
        return <ResumeContent />;
      case 'works':
        return <WorksContent />;
      case 'blog':
        return <BlogContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return <AboutContent />;
    }
  };

  return (
    <div className="content-transition w-full h-full">
      {renderContent()}
    </div>
  );
}