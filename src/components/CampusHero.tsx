import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Calendar, MapPin, Book, Users, Coffee } from "lucide-react";

const CampusHero = () => {
  const [isTyping, setIsTyping] = useState(false);

  const campusServices = [
    {
      icon: Calendar,
      title: "Class Schedules",
      description: "Get your class timetables, room locations, and schedule changes"
    },
    {
      icon: MapPin,
      title: "Campus Facilities",
      description: "Find buildings, labs, study spaces, and campus amenities"
    },
    {
      icon: Coffee,
      title: "Dining Services",
      description: "Meal plans, dining hall hours, and menu information"
    },
    {
      icon: Book,
      title: "Library Services",
      description: "Book reservations, study room bookings, and research help"
    },
    {
      icon: Users,
      title: "Student Services",
      description: "Registration, financial aid, and administrative procedures"
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Instant answers to your campus questions anytime"
    }
  ];

  const handleStartChat = () => {
    setIsTyping(true);
    // This would normally start the actual chat functionality
    setTimeout(() => setIsTyping(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 animate-float">
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Smart Campus Assistant</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Campus,
            <br />
            <span className="text-campus-accent">Simplified</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get instant answers about schedules, facilities, dining, library services, 
            and administrative procedures. Your AI-powered campus companion is here to help.
          </p>
          
          <Button 
            onClick={handleStartChat}
            variant="hero"
            size="lg"
            className="text-lg px-8 py-6 animate-bounce hover:animate-none transition-smooth"
            disabled={isTyping}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            {isTyping ? "Connecting..." : "Start Chatting"}
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {campusServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-0 shadow-medium hover:shadow-large transition-smooth hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-campus-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-campus-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-campus-neutral mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Chat Preview */}
        <Card className="max-w-4xl mx-auto bg-gradient-chat border-0 shadow-large p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-campus-neutral mb-4">
              Try asking me anything about campus!
            </h2>
            <p className="text-muted-foreground">
              Click on any example below or start your own conversation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "What time does the library close today?",
              "Where is the Computer Science building?",
              "What's for lunch at the main dining hall?",
              "How do I register for next semester?"
            ].map((question, index) => (
              <button
                key={index}
                onClick={handleStartChat}
                className="p-4 text-left bg-white border border-border rounded-lg hover:border-campus-primary hover:shadow-soft transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-campus-primary flex-shrink-0" />
                  <span className="text-campus-neutral">{question}</span>
                </div>
              </button>
            ))}
          </div>

          {isTyping && (
            <div className="flex items-center justify-center gap-2 py-4">
              <div className="w-2 h-2 bg-campus-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-campus-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-campus-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <span className="text-muted-foreground ml-3">AI assistant is thinking...</span>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default CampusHero;