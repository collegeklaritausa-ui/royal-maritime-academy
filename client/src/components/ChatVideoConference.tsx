import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Chat & Video Conference Component for Royal Maritime Academy
// Supports revealed identity chat and video conferencing for courses

interface Message {
  id: string;
  sender: string;
  senderAvatar: string;
  content: string;
  timestamp: Date;
  department: string;
}

interface Participant {
  id: string;
  name: string;
  avatar: string;
  role: 'instructor' | 'student' | 'admin';
  department: string;
  isOnline: boolean;
  isSpeaking?: boolean;
}

const departments = [
  { id: 'front-office', name: 'Front Office & Reception', icon: '🎯', avatar: '/images/avatars/front-office-couple.png' },
  { id: 'food-beverage', name: 'Food & Beverage Service', icon: '🍽️', avatar: '/images/avatars/food-beverage-couple.png' },
  { id: 'housekeeping', name: 'Housekeeping & Cabin Services', icon: '🛏️', avatar: '/images/avatars/housekeeping-couple.png' },
  { id: 'entertainment', name: 'Entertainment & Activities', icon: '🎭', avatar: '/images/avatars/entertainment-couple.png' },
  { id: 'spa-wellness', name: 'Spa & Wellness', icon: '💆', avatar: '/images/avatars/spa-wellness-couple.png' },
  { id: 'concierge', name: 'Concierge & Shore Excursions', icon: '🗺️', avatar: '/images/avatars/concierge-couple.png' },
  { id: 'casino', name: 'Casino & Gaming Services', icon: '🎰', avatar: '/images/avatars/casino-couple.png' },
  { id: 'retail', name: 'Retail & Boutique Operations', icon: '🛍️', avatar: '/images/avatars/retail-couple.png' },
  { id: 'vip-butler', name: 'VIP & Butler Services', icon: '👔', avatar: '/images/avatars/vip-butler-couple.png' },
  { id: 'safety-security', name: 'Guest Safety & Security', icon: '🛡️', avatar: '/images/avatars/safety-security-couple.png' },
];

export function ChatVideoConference() {
  const [activeTab, setActiveTab] = useState('chat');
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const [messageInput, setMessageInput] = useState('');
  const [isInCall, setIsInCall] = useState(false);

  // Sample messages for demonstration
  const [messages] = useState<Message[]>([
    {
      id: '1',
      sender: 'Academy Director',
      senderAvatar: '/images/director-photo.webp',
      content: 'Welcome to the Royal Maritime Academy! Today we will cover the fundamentals of 5-star guest relations.',
      timestamp: new Date(),
      department: 'front-office'
    },
    {
      id: '2',
      sender: 'Senior Instructor',
      senderAvatar: '/images/avatars/front-office-couple.png',
      content: 'Please ensure you have reviewed the pre-course materials on VIP check-in protocols.',
      timestamp: new Date(),
      department: 'front-office'
    }
  ]);

  // Sample participants for video conference
  const [participants] = useState<Participant[]>([
    { id: '1', name: 'Academy Director', avatar: '/images/director-photo.webp', role: 'instructor', department: 'all', isOnline: true, isSpeaking: true },
    { id: '2', name: 'Front Office Lead', avatar: '/images/avatars/front-office-couple.png', role: 'instructor', department: 'front-office', isOnline: true },
    { id: '3', name: 'F&B Manager', avatar: '/images/avatars/food-beverage-couple.png', role: 'instructor', department: 'food-beverage', isOnline: true },
    { id: '4', name: 'Spa Director', avatar: '/images/avatars/spa-wellness-couple.png', role: 'instructor', department: 'spa-wellness', isOnline: true },
    { id: '5', name: 'Entertainment Lead', avatar: '/images/avatars/entertainment-couple.png', role: 'instructor', department: 'entertainment', isOnline: false },
  ]);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In production, this would send to backend
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  const handleJoinCall = () => {
    setIsInCall(true);
  };

  const handleLeaveCall = () => {
    setIsInCall(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gold-400 mb-2">
            🚢 Royal Maritime Academy
          </h1>
          <p className="text-xl text-blue-200">
            Live Learning Platform - Chat & Video Conferencing
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-500">
              ● Live Session Active
            </Badge>
            <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500">
              {participants.filter(p => p.isOnline).length} Participants Online
            </Badge>
          </div>
        </div>

        {/* Department Selector */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Select Department Channel:</h3>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <Button
                key={dept.id}
                variant={selectedDepartment.id === dept.id ? "default" : "outline"}
                className={`${selectedDepartment.id === dept.id 
                  ? 'bg-gold-500 text-slate-900 hover:bg-gold-400' 
                  : 'bg-slate-800/50 text-white border-slate-600 hover:bg-slate-700'}`}
                onClick={() => setSelectedDepartment(dept)}
              >
                <span className="mr-2">{dept.icon}</span>
                {dept.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Participants */}
          <Card className="bg-slate-800/80 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                👥 Participants
              </CardTitle>
              <CardDescription className="text-slate-400">
                Course instructors and students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {participants.map((participant) => (
                  <div 
                    key={participant.id}
                    className={`flex items-center gap-3 p-2 rounded-lg ${
                      participant.isSpeaking ? 'bg-green-500/20 ring-2 ring-green-500' : 'bg-slate-700/50'
                    }`}
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={participant.avatar} alt={participant.name} />
                        <AvatarFallback>{participant.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-800 ${
                        participant.isOnline ? 'bg-green-500' : 'bg-slate-500'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">
                        {participant.name}
                      </p>
                      <p className="text-xs text-slate-400 capitalize">
                        {participant.role}
                      </p>
                    </div>
                    {participant.isSpeaking && (
                      <Badge className="bg-green-500 text-white text-xs">
                        Speaking
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-slate-800 border-slate-700 mb-4">
                <TabsTrigger value="chat" className="data-[state=active]:bg-gold-500 data-[state=active]:text-slate-900">
                  💬 Live Chat
                </TabsTrigger>
                <TabsTrigger value="video" className="data-[state=active]:bg-gold-500 data-[state=active]:text-slate-900">
                  📹 Video Conference
                </TabsTrigger>
                <TabsTrigger value="courses" className="data-[state=active]:bg-gold-500 data-[state=active]:text-slate-900">
                  📚 Course Materials
                </TabsTrigger>
              </TabsList>

              {/* Chat Tab */}
              <TabsContent value="chat">
                <Card className="bg-slate-800/80 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      {selectedDepartment.icon} {selectedDepartment.name} - Live Chat
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Revealed identity chat - All participants are verified academy members
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Messages Area */}
                    <div className="h-96 overflow-y-auto bg-slate-900/50 rounded-lg p-4 mb-4 space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className="flex gap-3">
                          <Avatar className="h-10 w-10 flex-shrink-0">
                            <AvatarImage src={message.senderAvatar} alt={message.sender} />
                            <AvatarFallback>{message.sender[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-gold-400">{message.sender}</span>
                              <span className="text-xs text-slate-500">
                                {message.timestamp.toLocaleTimeString()}
                              </span>
                            </div>
                            <p className="text-white bg-slate-700/50 rounded-lg p-3">
                              {message.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="flex gap-2">
                      <Input
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type your message..."
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button 
                        onClick={handleSendMessage}
                        className="bg-gold-500 text-slate-900 hover:bg-gold-400"
                      >
                        Send
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Video Conference Tab */}
              <TabsContent value="video">
                <Card className="bg-slate-800/80 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      📹 Video Conference - {selectedDepartment.name}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Live video sessions with course instructors
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!isInCall ? (
                      <div className="text-center py-12">
                        <div className="mb-6">
                          <img 
                            src={selectedDepartment.avatar} 
                            alt={selectedDepartment.name}
                            className="w-48 h-32 object-cover rounded-xl mx-auto mb-4 border-4 border-gold-500"
                          />
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {selectedDepartment.icon} {selectedDepartment.name}
                          </h3>
                          <p className="text-slate-400 mb-6">
                            Join the live video conference with department instructors
                          </p>
                        </div>
                        <Button 
                          size="lg"
                          onClick={handleJoinCall}
                          className="bg-green-500 hover:bg-green-400 text-white px-8 py-6 text-lg"
                        >
                          🎥 Join Video Conference
                        </Button>
                      </div>
                    ) : (
                      <div>
                        {/* Video Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                          {/* Main Speaker */}
                          <div className="col-span-2 md:col-span-2 relative">
                            <img 
                              src="/images/departments/video-conference-scene.png" 
                              alt="Video Conference"
                              className="w-full h-64 object-cover rounded-xl"
                            />
                            <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded-lg">
                              <span className="text-white font-semibold">Academy Director</span>
                              <Badge className="ml-2 bg-green-500">Speaking</Badge>
                            </div>
                          </div>
                          
                          {/* Other Participants */}
                          {participants.slice(1, 4).map((p) => (
                            <div key={p.id} className="relative">
                              <img 
                                src={p.avatar} 
                                alt={p.name}
                                className="w-full h-32 object-cover rounded-xl"
                              />
                              <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-xs">
                                <span className="text-white">{p.name}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Controls */}
                        <div className="flex justify-center gap-4">
                          <Button variant="outline" className="bg-slate-700 border-slate-600 text-white">
                            🎤 Mute
                          </Button>
                          <Button variant="outline" className="bg-slate-700 border-slate-600 text-white">
                            📹 Camera
                          </Button>
                          <Button variant="outline" className="bg-slate-700 border-slate-600 text-white">
                            🖥️ Share Screen
                          </Button>
                          <Button variant="outline" className="bg-slate-700 border-slate-600 text-white">
                            ✋ Raise Hand
                          </Button>
                          <Button 
                            onClick={handleLeaveCall}
                            className="bg-red-500 hover:bg-red-400 text-white"
                          >
                            📞 Leave Call
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Courses Tab */}
              <TabsContent value="courses">
                <Card className="bg-slate-800/80 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      📚 {selectedDepartment.name} - Course Materials
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Access your department's training materials and certifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master'].map((level, idx) => (
                        <Card key={level} className="bg-slate-700/50 border-slate-600">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                                idx === 0 ? 'bg-green-500/20' :
                                idx === 1 ? 'bg-blue-500/20' :
                                idx === 2 ? 'bg-purple-500/20' :
                                idx === 3 ? 'bg-yellow-500/20' :
                                'bg-red-500/20'
                              }`}>
                                {idx === 0 ? '🟢' : idx === 1 ? '🔵' : idx === 2 ? '🟣' : idx === 3 ? '🟡' : '🔴'}
                              </div>
                              <div>
                                <h4 className="font-semibold text-white">{level} Level</h4>
                                <p className="text-sm text-slate-400">2 courses • {(idx + 1) * 3} months</p>
                              </div>
                            </div>
                            <Button className="w-full mt-3 bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 border border-gold-500/50">
                              View Courses
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>© 2024-2025 The Royal Supreme AI Augmented Maritime Academy</p>
          <p>All Rights Reserved | GDPR Compliant | Cybersecurity Protected</p>
        </div>
      </div>
    </div>
  );
}

export default ChatVideoConference;
