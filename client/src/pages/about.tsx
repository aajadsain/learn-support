import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Users, Target, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="text-primary" size={40} />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About the Learning Support Directory
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connecting students with qualified learning support providers to unlock their full potential and achieve academic success.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Target className="text-primary mr-3" size={28} />
              <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Every student deserves access to personalized learning support that meets their unique needs. Our directory serves as a bridge between students with diverse learning challenges and qualified professionals who specialize in various educational interventions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe that with the right support, every student can overcome learning obstacles and thrive academically. Our platform makes it easier for families to find specialized providers who understand conditions like ADHD, dyslexia, autism spectrum disorders, and other learning differences.
            </p>
          </CardContent>
        </Card>

        {/* What We Do Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Heart className="text-primary mr-3" size={28} />
              <h2 className="text-2xl font-semibold text-gray-800">What We Do</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Curated Provider Network</h3>
                    <p className="text-gray-600">We maintain a carefully vetted directory of qualified learning support professionals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Specialized Matching</h3>
                    <p className="text-gray-600">Advanced search filters help families find providers who specialize in specific learning needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Comprehensive Profiles</h3>
                    <p className="text-gray-600">Detailed provider information including qualifications, specializations, and contact details.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Local Focus</h3>
                    <p className="text-gray-600">Find providers in your area for convenient in-person or local virtual sessions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Evidence-Based Approaches</h3>
                    <p className="text-gray-600">All listed providers use research-backed methodologies and interventions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">Family Support</h3>
                    <p className="text-gray-600">Resources and guidance to help families navigate the learning support process.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Specializations Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Users className="text-primary mr-3" size={28} />
              <h2 className="text-2xl font-semibold text-gray-800">Areas of Specialization</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "ADHD Support", description: "Attention and executive function strategies" },
                { title: "Dyslexia Intervention", description: "Phonics-based reading instruction" },
                { title: "Autism Spectrum Support", description: "Social skills and behavioral therapy" },
                { title: "Math Tutoring", description: "Specialized mathematical instruction" },
                { title: "Executive Function Coaching", description: "Organization and time management skills" },
                { title: "Speech-Language Therapy", description: "Communication and language development" },
                { title: "Learning Disabilities Support", description: "IEP and 504 plan navigation" },
                { title: "Reading Specialist Services", description: "Comprehensive literacy support" },
                { title: "Educational Psychology", description: "Assessment and intervention planning" }
              ].map((specialization, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">{specialization.title}</h3>
                  <p className="text-gray-600 text-sm">{specialization.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Vision Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              A world where every student, regardless of their learning differences, has access to quality educational support that empowers them to reach their full academic potential and build confidence in their abilities.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}