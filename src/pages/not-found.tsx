import { Link } from "wouter";
import { Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md text-center space-y-6">
        <div className="flex justify-center mb-8">
          <Search className="h-16 w-16 text-muted-foreground" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-primary">
          404 Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-4">
          <Link href="/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#174e3b] text-white shadow hover:bg-[#1a6348] h-10 px-8 py-2 hover:scale-105">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;