/*
 * Royal Sovereign Design Theme - Courses Page
 * - Complete course catalog with 100 courses
 * - Filtering by department and level
 * - Search functionality
 * - Multilingual support
 */

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Award, BookOpen, ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { courses, departments, levelColors, type Course } from '@/data/courses';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Courses() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = searchQuery === '' || 
        course.title.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.title[language]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDepartment = selectedDepartment === 'all' || course.department === selectedDepartment;
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      
      return matchesSearch && matchesDepartment && matchesLevel;
    });
  }, [searchQuery, selectedDepartment, selectedLevel, language]);

  // Group courses by department
  const coursesByDepartment = useMemo(() => {
    const grouped: Record<string, Course[]> = {};
    filteredCourses.forEach((course) => {
      if (!grouped[course.department]) {
        grouped[course.department] = [];
      }
      grouped[course.department].push(course);
    });
    return grouped;
  }, [filteredCourses]);

  const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master'];

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.99_0.005_90)]">
      <Header />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="container">
          {/* Page Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl sm:text-5xl font-bold text-[oklch(0.15_0.03_250)] mb-4"
            >
              Course Catalog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our comprehensive collection of 100 professional courses in Guest Relations Management across all 5-star cruise ship departments.
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="royal-card rounded-xl p-6 mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search courses by name or code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white"
                />
              </div>

              {/* Department Filter */}
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-full lg:w-64 bg-white">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept.id} value={dept.id}>
                      {dept.icon} {dept.name[language] || dept.name.en}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Level Filter */}
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full lg:w-48 bg-white">
                  <Award className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Results count */}
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Showing {filteredCourses.length} of {courses.length} courses
              </span>
              {(searchQuery || selectedDepartment !== 'all' || selectedLevel !== 'all') && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDepartment('all');
                    setSelectedLevel('all');
                  }}
                >
                  Clear filters
                </Button>
              )}
            </div>
          </motion.div>

          {/* Courses by Department */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Accordion type="multiple" defaultValue={departments.map(d => d.id)} className="space-y-4">
              {departments.map((dept) => {
                const deptCourses = coursesByDepartment[dept.id] || [];
                if (deptCourses.length === 0) return null;

                return (
                  <AccordionItem
                    key={dept.id}
                    value={dept.id}
                    className="royal-card rounded-xl overflow-hidden border-none"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-[oklch(0.97_0.01_90)]">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[oklch(0.25_0.05_250)] flex items-center justify-center">
                          <span className="text-xl">{dept.icon}</span>
                        </div>
                        <div className="text-left">
                          <h3 className="font-display text-lg font-semibold text-[oklch(0.15_0.03_250)]">
                            {dept.name[language] || dept.name.en}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {deptCourses.length} courses available
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {deptCourses.map((course) => (
                          <div
                            key={course.id}
                            className="p-4 rounded-xl bg-white border border-[oklch(0.90_0.01_90)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <span className="text-xs font-mono text-muted-foreground">
                                {course.code}
                              </span>
                              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold text-white ${levelColors[course.level]}`}>
                                {course.level}
                              </span>
                            </div>
                            <h4 className="font-display text-base font-semibold text-[oklch(0.15_0.03_250)] mb-2 line-clamp-2">
                              {course.title[language] || course.title.en}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                              {course.description[language] || course.description.en}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{course.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Award className="w-3.5 h-3.5" />
                                <span>{course.credits} credits</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-[oklch(0.15_0.03_250)] mb-2">
                No courses found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDepartment('all');
                  setSelectedLevel('all');
                }}
              >
                Clear all filters
              </Button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
