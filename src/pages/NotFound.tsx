import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-8xl lg:text-9xl font-bold font-heading bg-gradient-hero bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            className="font-heading font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
          <Button
            onClick={() => window.location.href = '/'}
            size="lg"
            className="bg-gradient-hero text-axomify-black hover:bg-axomify-yellow-dark font-heading font-semibold shadow-yellow"
          >
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-muted-foreground font-body">
            Need help? <a href="mailto:infoaxomify@gmail.com" className="text-primary hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;