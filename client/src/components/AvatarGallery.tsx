import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Avatar Gallery Component - Showcasing Department Instructor Couples
// The Royal Supreme AI Augmented Maritime Academy

interface DepartmentAvatar {
  id: string;
  name: string;
  icon: string;
  avatar: string;
  scene: string;
  description: string;
  courses: number;
  instructors: string;
}

const departmentAvatars: DepartmentAvatar[] = [
  {
    id: 'front-office',
    name: 'Front Office & Reception',
    icon: '🎯',
    avatar: '/images/avatars/front-office-couple.png',
    scene: '/images/departments/front-office-scene.png',
    description: 'Master the art of luxury cruise guest relations, VIP check-in protocols, and creating memorable first impressions.',
    courses: 10,
    instructors: 'Director & Senior Reception Manager'
  },
  {
    id: 'food-beverage',
    name: 'Food & Beverage Service',
    icon: '🍽️',
    avatar: '/images/avatars/food-beverage-couple.png',
    scene: '/images/scenery/fine-dining-restaurant.png',
    description: 'Excellence in fine dining service, sommelier expertise, and culinary presentation aboard luxury vessels.',
    courses: 10,
    instructors: 'Executive Chef & Head Sommelier'
  },
  {
    id: 'housekeeping',
    name: 'Housekeeping & Cabin Services',
    icon: '🛏️',
    avatar: '/images/avatars/housekeeping-couple.png',
    scene: '/images/departments/luxury-suite-scene.png',
    description: 'Luxury cabin presentation, turndown service excellence, and guest comfort management.',
    courses: 10,
    instructors: 'Housekeeping Director & Suite Manager'
  },
  {
    id: 'entertainment',
    name: 'Entertainment & Activities',
    icon: '🎭',
    avatar: '/images/avatars/entertainment-couple.png',
    scene: '/images/departments/theater-scene.png',
    description: 'Guest programming, event management, and creating unforgettable entertainment experiences at sea.',
    courses: 10,
    instructors: 'Entertainment Director & Cruise Director'
  },
  {
    id: 'spa-wellness',
    name: 'Spa & Wellness',
    icon: '💆',
    avatar: '/images/avatars/spa-wellness-couple.png',
    scene: '/images/departments/spa-interior-scene.png',
    description: 'Maritime wellness services, spa operations, and holistic guest rejuvenation programs.',
    courses: 10,
    instructors: 'Spa Director & Wellness Manager'
  },
  {
    id: 'concierge',
    name: 'Concierge & Shore Excursions',
    icon: '🗺️',
    avatar: '/images/avatars/concierge-couple.png',
    scene: '/images/departments/shore-excursion-scene.png',
    description: 'Destination expertise, curated guest experiences, and world-class concierge services.',
    courses: 10,
    instructors: 'Chief Concierge & Excursion Manager'
  },
  {
    id: 'casino',
    name: 'Casino & Gaming Services',
    icon: '🎰',
    avatar: '/images/avatars/casino-couple.png',
    scene: '/images/departments/casino-scene.png',
    description: 'VIP player relations, gaming operations, and creating exciting casino experiences.',
    courses: 10,
    instructors: 'Casino Manager & VIP Host'
  },
  {
    id: 'retail',
    name: 'Retail & Boutique Operations',
    icon: '🛍️',
    avatar: '/images/avatars/retail-couple.png',
    scene: '/images/departments/retail-boutique-scene.png',
    description: 'Luxury retail experience, sales excellence, and duty-free boutique management.',
    courses: 10,
    instructors: 'Retail Director & Boutique Manager'
  },
  {
    id: 'vip-butler',
    name: 'VIP & Butler Services',
    icon: '👔',
    avatar: '/images/avatars/vip-butler-couple.png',
    scene: '/images/departments/luxury-suite-scene.png',
    description: 'Ultra-luxury service protocols, butler excellence, and UHNW guest management.',
    courses: 10,
    instructors: 'Head Butler & VIP Services Director'
  },
  {
    id: 'safety-security',
    name: 'Guest Safety & Security',
    icon: '🛡️',
    avatar: '/images/avatars/safety-security-couple.png',
    scene: '/images/departments/training-classroom-scene.png',
    description: 'Crisis management, emergency procedures, and maritime safety protocols.',
    courses: 10,
    instructors: 'Security Chief & Safety Officer'
  }
];

export function AvatarGallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-200 mb-4">
            🚢 Meet Your Instructors
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            The Royal Supreme AI Augmented Maritime Academy presents our world-class department instructors - 
            expert couples dedicated to your maritime hospitality excellence.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Badge className="bg-gold-500/20 text-gold-400 border border-gold-500/50 px-4 py-2">
              10 Departments
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500/50 px-4 py-2">
              100 Courses
            </Badge>
            <Badge className="bg-green-500/20 text-green-400 border border-green-500/50 px-4 py-2">
              20 Expert Instructors
            </Badge>
          </div>
        </div>

        {/* Avatar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentAvatars.map((dept) => (
            <Card 
              key={dept.id}
              className="bg-slate-800/80 border-slate-700 overflow-hidden hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10"
            >
              {/* Scene Background */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={dept.scene} 
                  alt={`${dept.name} Scene`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" />
                <Badge className="absolute top-3 right-3 bg-gold-500 text-slate-900">
                  {dept.icon} {dept.courses} Courses
                </Badge>
              </div>

              {/* Avatar Overlay */}
              <div className="relative -mt-16 px-4">
                <div className="relative inline-block">
                  <img 
                    src={dept.avatar} 
                    alt={`${dept.name} Instructors`}
                    className="w-32 h-24 object-cover rounded-xl border-4 border-gold-500 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    ● Live
                  </div>
                </div>
              </div>

              <CardHeader className="pt-2">
                <CardTitle className="text-white flex items-center gap-2">
                  <span className="text-2xl">{dept.icon}</span>
                  {dept.name}
                </CardTitle>
                <CardDescription className="text-gold-400 font-medium">
                  {dept.instructors}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-slate-300 text-sm mb-4">
                  {dept.description}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gold-500/20 text-gold-400 border border-gold-500/50 rounded-lg py-2 text-sm font-medium hover:bg-gold-500/30 transition-colors">
                    View Courses
                  </button>
                  <button className="flex-1 bg-blue-500/20 text-blue-400 border border-blue-500/50 rounded-lg py-2 text-sm font-medium hover:bg-blue-500/30 transition-colors">
                    Join Live
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academy Building Showcase */}
        <div className="mt-16">
          <Card className="bg-slate-800/80 border-slate-700 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src="/images/scenery/academy-building.png" 
                  alt="Royal Maritime Academy Building"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gold-400 mb-4">
                  🏛️ The Royal Supreme AI Augmented Maritime Academy
                </h2>
                <p className="text-slate-300 mb-6">
                  Our world-class facility combines traditional maritime excellence with cutting-edge 
                  AI-augmented learning. Located in a stunning Mediterranean coastal setting, the academy 
                  offers state-of-the-art training facilities, simulation centers, and direct access to 
                  our partner fleet of luxury cruise vessels.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-gold-400">10,000+</div>
                    <div className="text-slate-400 text-sm">Students Trained</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-gold-400">20+</div>
                    <div className="text-slate-400 text-sm">Years Experience</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-gold-400">8</div>
                    <div className="text-slate-400 text-sm">Languages</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-gold-400">5⭐</div>
                    <div className="text-slate-400 text-sm">Excellence Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Cruise Ship Showcase */}
        <div className="mt-8">
          <Card className="bg-slate-800/80 border-slate-700 overflow-hidden">
            <div className="relative">
              <img 
                src="/images/scenery/luxury-cruise-exterior.png" 
                alt="Roudie Cruise Ship"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  🛳️ Roudie Cruise - Our Training Partner
                </h3>
                <p className="text-slate-200 max-w-2xl">
                  Experience hands-on training aboard our partner fleet of 5-star luxury cruise vessels. 
                  Internships, career placement, and real-world experience await our graduates.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>© 2024-2025 The Royal Supreme AI Augmented Maritime Academy</p>
          <p>Partner: Roudie Cruise - The 5-Star Brand of Luxury Cruising</p>
          <p className="mt-2">GDPR Compliant | Cybersecurity Protected | Code Protected</p>
        </div>
      </div>
    </div>
  );
}

export default AvatarGallery;
