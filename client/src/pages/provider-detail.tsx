import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import Layout from "@/components/Layout";
import { fetchProviderById } from "@/utils/fetchProviders";
import { Provider } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Phone, 
  Mail, 
  Calendar,
  GraduationCap,
  Clock,
  BookOpen,
  Brain,
  Users,
  Lightbulb
} from "lucide-react";

export default function ProviderDetailPage() {
  const params = useParams();
  const providerId = parseInt(params.id || "0");

  const { data: provider, isLoading, error } = useQuery<Provider | null>({
    queryKey: ["/api/providers", providerId],
    queryFn: () => fetchProviderById(providerId),
  });

  const getSpecializationIcon = (specialization: string) => {
    if (specialization.toLowerCase().includes('math')) return <BookOpen className="text-blue-600" size={20} />;
    if (specialization.toLowerCase().includes('adhd')) return <Brain className="text-green-600" size={20} />;
    if (specialization.toLowerCase().includes('reading')) return <BookOpen className="text-green-600" size={20} />;
    if (specialization.toLowerCase().includes('autism')) return <Brain className="text-purple-600" size={20} />;
    if (specialization.toLowerCase().includes('executive')) return <Lightbulb className="text-orange-600" size={20} />;
    if (specialization.toLowerCase().includes('speech')) return <Users className="text-pink-600" size={20} />;
    return <GraduationCap className="text-primary" size={20} />;
  };

  const getSpecializationTags = (specialization: string) => {
    const tags = [];
    if (specialization.toLowerCase().includes('math')) tags.push({ label: 'Math Tutoring', color: 'bg-blue-50 text-blue-600 border-blue-200' });
    if (specialization.toLowerCase().includes('adhd')) tags.push({ label: 'ADHD Support', color: 'bg-green-50 text-green-600 border-green-200' });
    if (specialization.toLowerCase().includes('reading')) tags.push({ label: 'Reading Specialist', color: 'bg-green-50 text-green-600 border-green-200' });
    if (specialization.toLowerCase().includes('autism')) tags.push({ label: 'Autism Spectrum', color: 'bg-purple-50 text-purple-600 border-purple-200' });
    if (specialization.toLowerCase().includes('dyslexia')) tags.push({ label: 'Dyslexia Support', color: 'bg-purple-50 text-purple-600 border-purple-200' });
    if (specialization.toLowerCase().includes('executive')) tags.push({ label: 'Executive Function', color: 'bg-orange-50 text-orange-600 border-orange-200' });
    if (specialization.toLowerCase().includes('speech')) tags.push({ label: 'Speech-Language', color: 'bg-pink-50 text-pink-600 border-pink-200' });
    
    return tags;
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-10 w-32 mb-8" />
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <Skeleton className="w-32 h-32 rounded-xl mx-auto md:mx-0" />
                <div className="flex-1 text-center md:text-left">
                  <Skeleton className="h-8 w-64 mb-2 mx-auto md:mx-0" />
                  <Skeleton className="h-6 w-48 mb-4 mx-auto md:mx-0" />
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-10 w-32" />
                    <Skeleton className="h-10 w-20" />
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <Skeleton className="h-6 w-16 mb-4" />
                  <Skeleton className="h-32 w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  if (error || !provider) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2" size={20} />
              Back to Providers
            </Button>
          </Link>
          <Card className="p-8 text-center">
            <CardContent>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Provider Not Found</h2>
              <p className="text-gray-600 mb-6">
                The provider you're looking for doesn't exist or has been removed.
              </p>
              <Link href="/">
                <Button>Browse All Providers</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  const specializationTags = getSpecializationTags(provider.specialization);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to Providers
          </Button>
        </Link>

        <Card>
          <CardContent className="p-8">
            {/* Provider Header */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {/* Professional photo placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto md:mx-0 flex-shrink-0">
                <GraduationCap className="text-primary text-4xl" size={48} />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-700 mb-2">
                  {provider.name}
                </h1>
                <p className="text-xl text-primary mb-3">
                  {provider.specialization}
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="mr-2" size={16} />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="text-accent mr-2" size={16} fill="currentColor" />
                    <span>{provider.rating} Rating</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2" size={16} />
                    <span>10+ Years Experience</span>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button className="bg-primary hover:bg-secondary">
                    <Phone className="mr-2" size={16} />
                    Call Now
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Mail className="mr-2" size={16} />
                    Send Message
                  </Button>
                  <Button variant="outline">
                    Save Provider
                  </Button>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Section */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">About</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {provider.longDescription}
                  </p>
                </div>

                {/* Specializations */}
                {specializationTags.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Specializations</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {specializationTags.map((tag, index) => (
                        <div key={index} className={`flex items-center p-3 rounded-lg border ${tag.color}`}>
                          {getSpecializationIcon(tag.label)}
                          <span className="font-medium ml-3">{tag.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Section */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Reviews</h2>
                  <div className="space-y-4">
                    <Card className="border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <div className="flex text-accent text-sm mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={12} fill="currentColor" />
                            ))}
                          </div>
                          <span className="font-medium text-gray-700">Jennifer M.</span>
                          <span className="text-gray-500 text-sm ml-2">• Parent</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          "Exceptional service and remarkable results. The personalized approach made all the difference for our child's learning progress."
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <div className="flex text-accent text-sm mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={12} fill="currentColor" />
                            ))}
                          </div>
                          <span className="font-medium text-gray-700">David K.</span>
                          <span className="text-gray-500 text-sm ml-2">• Parent</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          "Professional, patient, and knowledgeable. The specialized strategies have made a huge difference for our family."
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Information */}
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="text-gray-400 mr-3" size={16} />
                        <span className="text-gray-600">{provider.phoneNumber}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-gray-400 mr-3" size={16} />
                        <span className="text-gray-600">{provider.contactEmail}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Availability */}
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Availability</h3>
                    <div className="space-y-2">
                      {[
                        { day: 'Monday', hours: '9:00 AM - 6:00 PM', available: true },
                        { day: 'Tuesday', hours: '9:00 AM - 6:00 PM', available: true },
                        { day: 'Wednesday', hours: '9:00 AM - 6:00 PM', available: true },
                        { day: 'Thursday', hours: '9:00 AM - 6:00 PM', available: true },
                        { day: 'Friday', hours: '9:00 AM - 4:00 PM', available: true },
                        { day: 'Saturday', hours: 'Closed', available: false },
                        { day: 'Sunday', hours: 'Closed', available: false },
                      ].map((schedule) => (
                        <div key={schedule.day} className="flex justify-between items-center">
                          <span className="text-gray-600">{schedule.day}</span>
                          <span className={schedule.available ? "text-green-600 font-medium" : "text-gray-400"}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button className="w-full bg-primary hover:bg-secondary">
                        Schedule Consultation
                      </Button>
                      <Button variant="outline" className="w-full">
                        Download Brochure
                      </Button>
                      <Button variant="outline" className="w-full">
                        Share Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
