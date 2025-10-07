import { Star } from "lucide-react";
import type { Testimonial } from "../data/mockData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg border border-border/40 hover:shadow-lg transition-all duration-300">
      <div className="space-y-4">
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-primary text-primary" />
          ))}
        </div>
        <blockquote className="text-card-foreground leading-relaxed">
          "{testimonial.content}"
        </blockquote>
        <div className="border-t border-border/40 pt-4">
          <p className="font-medium text-card-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}
