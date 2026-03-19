import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/20 blur-[100px] rounded-full pointer-events-none"></div>
      </div>
      
      <div className="text-center relative z-10 p-8 glass-panel rounded-3xl max-w-md w-full mx-4">
        <h1 className="text-8xl font-display font-bold text-gradient mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">System Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The node you're looking for doesn't exist in our current automation pipeline.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors">
          <ArrowLeft size={18} />
          Return to Hub
        </Link>
      </div>
    </div>
  );
}
