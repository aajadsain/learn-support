import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import SearchInput from "@/components/SearchInput";
import ProviderCard from "@/components/ProviderCard";
import { fetchProviders, filterProviders, sortProviders } from "@/utils/fetchProviders";
import { Provider } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProvidersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [specializationFilter, setSpecializationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const { data: providers, isLoading, error } = useQuery<Provider[]>({
    queryKey: ["/api/providers"],
    queryFn: fetchProviders,
  });

  const filteredAndSortedProviders = useMemo(() => {
    if (!providers) return [];
    
    const filtered = filterProviders(providers, searchQuery, locationFilter, specializationFilter);
    return sortProviders(filtered, sortBy);
  }, [providers, searchQuery, locationFilter, specializationFilter, sortBy]);

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center flex-1">
                <Skeleton className="w-12 h-12 rounded-lg mr-3" />
                <div className="flex-1">
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
              <Skeleton className="w-12 h-6 rounded-full" />
            </div>
            <Skeleton className="h-4 w-24 mb-3" />
            <Skeleton className="h-16 w-full mb-4" />
            <div className="flex gap-2 mb-4">
              <Skeleton className="h-6 w-12 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  if (error) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="p-8 text-center">
            <CardContent>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Error Loading Providers</h2>
              <p className="text-gray-600">
                We're having trouble loading the provider directory. Please try again later.
              </p>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-700 mb-4">
            Find the Perfect Learning Support Provider
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Connect with qualified educational specialists who can help students achieve their learning goals
          </p>
        </div>

        {/* Search and Filter */}
        <SearchInput
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          locationFilter={locationFilter}
          onLocationChange={setLocationFilter}
          specializationFilter={specializationFilter}
          onSpecializationChange={setSpecializationFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
          resultCount={filteredAndSortedProviders.length}
        />

        {/* Provider Cards Grid */}
        <div className="mt-8">
          {isLoading ? (
            <LoadingSkeleton />
          ) : filteredAndSortedProviders.length === 0 ? (
            <Card className="p-8 text-center">
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">No Providers Found</h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria or filters to find learning support providers.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProviders.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
