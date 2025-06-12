import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SearchInputProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  locationFilter: string;
  onLocationChange: (location: string) => void;
  specializationFilter: string;
  onSpecializationChange: (specialization: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  resultCount: number;
}

export default function SearchInput({
  searchQuery,
  onSearchChange,
  locationFilter,
  onLocationChange,
  specializationFilter,
  onSpecializationChange,
  sortBy,
  onSortChange,
  resultCount
}: SearchInputProps) {
  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search by name or specialization..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 py-3 h-12"
            />
          </div>
          <div className="flex gap-3">
            <Select value={locationFilter} onValueChange={onLocationChange}>
              <SelectTrigger className="min-w-[140px] h-12">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Locations</SelectItem>
                <SelectItem value="chicago">Chicago, IL</SelectItem>
                <SelectItem value="boston">Boston, MA</SelectItem>
                <SelectItem value="austin">Austin, TX</SelectItem>
                <SelectItem value="seattle">Seattle, WA</SelectItem>
                <SelectItem value="miami">Miami, FL</SelectItem>
                <SelectItem value="denver">Denver, CO</SelectItem>
              </SelectContent>
            </Select>

            <Select value={specializationFilter} onValueChange={onSpecializationChange}>
              <SelectTrigger className="min-w-[160px] h-12">
                <SelectValue placeholder="All Specializations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Specializations</SelectItem>
                <SelectItem value="math">Math Tutoring</SelectItem>
                <SelectItem value="reading">Reading Support</SelectItem>
                <SelectItem value="adhd">ADHD Support</SelectItem>
                <SelectItem value="autism">Autism Spectrum</SelectItem>
                <SelectItem value="dyslexia">Dyslexia</SelectItem>
                <SelectItem value="executive">Executive Function</SelectItem>
                <SelectItem value="speech">Speech-Language</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex justify-between items-center">
        <p className="text-gray-500">
          <span className="font-medium">{resultCount}</span> providers found
        </p>
        <div className="flex items-center gap-2">
          <label className="text-gray-500 text-sm">Sort by:</label>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="location">Location</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
