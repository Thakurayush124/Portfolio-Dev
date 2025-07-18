import React, { useState } from 'react';
import { Code, Database, Palette, Globe, Smartphone, Server, Cloud, GitBranch } from 'lucide-react';

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend',
      color: 'from-blue-500 to-purple-600',
      technologies: [
        { name: 'React', level: 95, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
        { name: 'Next.js', level: 85, color: 'bg-gray-800' },
        { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' },
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'HTML/CSS', level: 98, color: 'bg-orange-500' }
      ]
    },
    backend: {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend',
      color: 'from-green-500 to-emerald-600',
      technologies: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Python', level: 80, color: 'bg-blue-500' },
        { name: 'Express.js', level: 85, color: 'bg-gray-700' },
        { name: 'PostgreSQL', level: 75, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 70, color: 'bg-green-500' },
        { name: 'REST APIs', level: 90, color: 'bg-purple-600' }
      ]
    },
    design: {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design',
      color: 'from-pink-500 to-rose-600',
      technologies: [
        { name: 'Figma', level: 95, color: 'bg-purple-500' },
        { name: 'Adobe XD', level: 80, color: 'bg-pink-600' },
        { name: 'Photoshop', level: 75, color: 'bg-blue-600' },
        { name: 'UI/UX Design', level: 90, color: 'bg-indigo-500' },
        { name: 'Prototyping', level: 85, color: 'bg-green-500' },
        { name: 'Design Systems', level: 88, color: 'bg-orange-500' }
      ]
    },
    tools: {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Tools & Others',
      color: 'from-orange-500 to-red-600',
      technologies: [
        { name: 'Git/GitHub', level: 90, color: 'bg-gray-800' },
        { name: 'Docker', level: 70, color: 'bg-blue-600' },
        { name: 'AWS', level: 65, color: 'bg-orange-500' },
        { name: 'Vercel', level: 85, color: 'bg-black' },
        { name: 'Supabase', level: 80, color: 'bg-green-600' },
        { name: 'Firebase', level: 75, color: 'bg-yellow-500' }
      ]
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tech Stack</h2>
        <p className="text-lg text-gray-600">
          Technologies I use to bring ideas to life
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(techCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {category.icon}
            {category.title}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories[activeCategory as keyof typeof techCategories].technologies.map((tech, index) => (
            <div key={tech.name} className="group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{tech.name}</span>
                <span className="text-sm text-gray-500">{tech.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full ${tech.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                  style={{
                    width: `${tech.level}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
          <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
          <div className="text-sm text-blue-700">Projects Built</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
          <div className="text-2xl font-bold text-green-600 mb-1">3+</div>
          <div className="text-sm text-green-700">Years Experience</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
          <div className="text-2xl font-bold text-purple-600 mb-1">150k+</div>
          <div className="text-sm text-purple-700">Community</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
          <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
          <div className="text-sm text-orange-700">Availability</div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;