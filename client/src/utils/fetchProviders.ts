import { Provider } from "@shared/schema";
import providersData from "@/data/providers.json";

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchProviders(): Promise<Provider[]> {
  await delay(800); // Simulate network delay
  return providersData as Provider[];
}

export async function fetchProviderById(id: number): Promise<Provider | null> {
  await delay(600); // Simulate network delay
  const provider = providersData.find(p => p.id === id);
  return provider ? (provider as Provider) : null;
}

export function filterProviders(
  providers: Provider[],
  searchQuery: string,
  location?: string,
  specialization?: string
): Provider[] {
  return providers.filter(provider => {
    const matchesSearch = !searchQuery || 
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = !location || 
      provider.location.toLowerCase().includes(location.toLowerCase());
    
    const matchesSpecialization = !specialization ||
      provider.specialization.toLowerCase().includes(specialization.toLowerCase());
    
    return matchesSearch && matchesLocation && matchesSpecialization;
  });
}

export function sortProviders(providers: Provider[], sortBy: string): Provider[] {
  const sorted = [...providers];
  
  switch (sortBy) {
    case "rating":
      return sorted.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "location":
      return sorted.sort((a, b) => a.location.localeCompare(b.location));
    default:
      return sorted;
  }
}
