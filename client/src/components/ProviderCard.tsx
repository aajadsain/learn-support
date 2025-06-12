import { Link } from "wouter";
import { Provider } from "@shared/schema";
import { MapPin, Star, Clock, ArrowRight, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProviderCardProps {
  provider: Provider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  const getSpecializationTags = (specialization: string) => {
    const tags = [];
    if (specialization.toLowerCase().includes('math')) tags.push({ label: 'Math', color: 'bg-blue-100 text-blue-600' });
    if (specialization.toLowerCase().includes('adhd')) tags.push({ label: 'ADHD', color: 'bg-green-100 text-green-600' });
    if (specialization.toLowerCase().includes('reading')) tags.push({ label: 'Reading', color: 'bg-green-100 text-green-600' });
    if (specialization.toLowerCase().includes('autism')) tags.push({ label: 'Autism', color: 'bg-purple-100 text-purple-600' });
    if (specialization.toLowerCase().includes('dyslexia')) tags.push({ label: 'Dyslexia', color: 'bg-purple-100 text-purple-600' });
    if (specialization.toLowerCase().includes('executive')) tags.push({ label: 'Executive Function', color: 'bg-orange-100 text-orange-600' });
    if (specialization.toLowerCase().includes('speech')) tags.push({ label: 'Speech', color: 'bg-pink-100 text-pink-600' });
    
    return tags.length > 0 ? tags : [{ label: 'General', color: 'bg-gray-100 text-gray-600' }];
  };

  const specializationTags = getSpecializationTags(provider.specialization);

  return (
    <Link href={`/provider/${provider.id}`}>
      <Card className="cursor-pointer hover:shadow-md transition-all duration-200 group h-full">
        <CardContent className="p-6">
          {/* Provider Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center flex-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-700 group-hover:text-primary transition-colors truncate">
                  {provider.name}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {provider.specialization}
                </p>
              </div>
            </div>
            <div className="flex items-center bg-accent/10 px-2 py-1 rounded-full ml-2 flex-shrink-0">
              <Star className="text-accent mr-1" size={12} fill="currentColor" />
              <span className="text-sm font-medium text-accent">{provider.rating}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <MapPin className="mr-2 flex-shrink-0" size={16} />
            <span className="truncate">{provider.location}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {provider.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {specializationTags.map((tag, index) => (
              <Badge key={index} className={`text-xs ${tag.color} border-0`}>
                {tag.label}
              </Badge>
            ))}
          </div>

          {/* Action */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="mr-1" size={16} />
              <span>Available Today</span>
            </div>
            <div className="text-primary font-medium text-sm group-hover:text-secondary transition-colors flex items-center">
              View Details
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
