/*
 * Royal Sovereign Design Theme - Courses Page
 * OMEGA 777 PROTECTED - 10,000 COURSES
 * - Complete course catalog with 10,000 courses
 * - Filtering by department, level, and category
 * - Search functionality with pagination
 * - Multilingual support (8 languages)
 * 
 * © 2024-2025 The Royal Supreme AI Augmented Maritime Academy
 * GDPR COMPLIANT | ACCOUNT PROTECTED
 */

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Award, BookOpen, ChevronDown, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
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
import { megaCourses, DEPARTMENTS, LEVELS, type Course } from '@/data/megaCourses';
import { useLanguage } from '@/contexts/LanguageContext';

// Level colors for badges
const levelColors: Record<string, string> = {
  'Beginner': 'bg-green-500',
  'Intermediate': 'bg-blue-500',
  'Advanced': 'bg-purple-500',
  'Expert': 'bg-orange-500',
  'Master': 'bg-red-500',
};

// Category colors
const categoryColors: Record<string, string> = {
  'hospitality': 'bg-amber-500',
  'engineering': 'bg-slate-600',
  'construction': 'bg-emerald-600',
};

const COURSES_PER_PAGE = 50;

export default function Courses() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = useMemo(() => {
    return megaCourses.filter((course) => {
      const matchesSearch = searchQuery === '' || 
        course.title.en?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.title[language]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDepartment = selectedDepartment === 'all' || course.department === selectedDepartment;
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      
      return matchesSearch && matchesDepartment && matchesLevel && matchesCategory;
    });
  }, [searchQuery, selectedDepartment, selectedLevel, selectedCategory, language]);

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * COURSES_PER_PAGE;
    return filteredCourses.slice(start, start + COURSES_PER_PAGE);
  }, [filteredCourses, currentPage]);

  // Group courses by department for display
  const coursesByDepartment = useMemo(() => {
    const grouped: Record<string, Course[]> = {};
    paginatedCourses.forEach((course) => {
      if (!grouped[course.department]) {
        grouped[course.department] = [];
      }
      grouped[course.department].push(course);
    });
    return grouped;
  }, [paginatedCourses]);

  // Reset page when filters change
  const handleFilterChange = (setter: (value: string) => void) => (value: string) => {
    setter(value);
    setCurrentPage(1);
  };

  const categories = [
    { id: 'hospitality', name: 'Hospitality', icon: '🏨' },
    { id: 'engineering', name: 'Engineering', icon: '⚙️' },
    { id: 'construction', name: 'Construction', icon: '🏗️' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.99_0.005_90)]">
      <Header />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="container">
          {/* Page Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.25_0.05_250)] text-white text-sm font-semibold mb-4"
            >
              <span>🛡️ OMEGA 777 PROTECTED</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            </motion.div>
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
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Explore our comprehensive collection of <strong>10,000 professional courses</strong> across 
              Hospitality, Engineering, and Construction departments in <strong>8 languages</strong>.
            </motion.p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 mt-8"
            >
              <div className="px-6 py-3 rounded-xl bg-white shadow-md">
                <div className="text-2xl font-bold text-[oklch(0.25_0.05_250)]">10,000</div>
                <div className="text-sm text-muted-foreground">Total Courses</div>
              </div>
              <div className="px-6 py-3 rounded-xl bg-white shadow-md">
                <div className="text-2xl font-bold text-[oklch(0.25_0.05_250)]">20</div>
                <div className="text-sm text-muted-foreground">Departments</div>
              </div>
              <div className="px-6 py-3 rounded-xl bg-white shadow-md">
                <div className="text-2xl font-bold text-[oklch(0.25_0.05_250)]">8</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="px-6 py-3 rounded-xl bg-white shadow-md">
                <div className="text-2xl font-bold text-[oklch(0.25_0.05_250)]">5</div>
                <div className="text-sm text-muted-foreground">Skill Levels</div>
              </div>
            </motion.div>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="royal-card rounded-xl p-6 mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search 10,000 courses by name or code..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 bg-white"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={handleFilterChange(setSelectedCategory)}>
                <SelectTrigger className="w-full lg:w-48 bg-white">
                  <Layers className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.icon} {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Department Filter */}
              <Select value={selectedDepartment} onValueChange={handleFilterChange(setSelectedDepartment)}>
                <SelectTrigger className="w-full lg:w-64 bg-white">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments (20)</SelectItem>
                  {DEPARTMENTS.map((dept) => (
                    <SelectItem key={dept.id} value={dept.id}>
                      {dept.icon} {dept.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Level Filter */}
              <Select value={selectedLevel} onValueChange={handleFilterChange(setSelectedLevel)}>
                <SelectTrigger className="w-full lg:w-48 bg-white">
                  <Award className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {LEVELS.map((level) => (
                    <SelectItem key={level.id} value={level.name}>
                      {level.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Results count and pagination info */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <span>
                Showing {paginatedCourses.length} of {filteredCourses.length} courses
                {filteredCourses.length !== megaCourses.length && ` (filtered from ${megaCourses.length.toLocaleString()} total)`}
              </span>
              <div className="flex items-center gap-2">
                {(searchQuery || selectedDepartment !== 'all' || selectedLevel !== 'all' || selectedCategory !== 'all') && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedDepartment('all');
                      setSelectedLevel('all');
                      setSelectedCategory('all');
                      setCurrentPage(1);
                    }}
                  >
                    Clear filters
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Courses by Department */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Accordion type="multiple" defaultValue={Object.keys(coursesByDepartment).slice(0, 3)} className="space-y-4">
              {DEPARTMENTS.map((dept) => {
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
                          <div className="flex items-center gap-2">
                            <h3 className="font-display text-lg font-semibold text-[oklch(0.15_0.03_250)]">
                              {dept.name}
                            </h3>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold text-white ${categoryColors[dept.category]}`}>
                              {dept.category}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {deptCourses.length} courses on this page
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
                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                              {course.description[language] || course.description.en}
                            </p>
                            <div className="flex items-center justify-between">
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
                              <span className="text-xs text-muted-foreground">
                                {course.instructor}
                              </span>
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

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-2 mt-8"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              
              <div className="flex items-center gap-1">
                {currentPage > 3 && (
                  <>
                    <Button variant="ghost" size="sm" onClick={() => setCurrentPage(1)}>1</Button>
                    {currentPage > 4 && <span className="px-2">...</span>}
                  </>
                )}
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                  if (page > totalPages) return null;
                  return (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  );
                })}
                
                {currentPage < totalPages - 2 && (
                  <>
                    {currentPage < totalPages - 3 && <span className="px-2">...</span>}
                    <Button variant="ghost" size="sm" onClick={() => setCurrentPage(totalPages)}>{totalPages}</Button>
                  </>
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}

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
                  setSelectedCategory('all');
                  setCurrentPage(1);
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
