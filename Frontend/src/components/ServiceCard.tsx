import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Service } from "../data/mockData";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg border border-border/40 hover:shadow-lg transition-all duration-300 group">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
        {service.price && (
          <p className="text-primary font-medium text-sm">{service.price}</p>
        )}
        <div className="space-y-2">
          {service.features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>
        <Link
          to="/services"
          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium transition-colors group-hover:gap-2"
        >
          Learn More
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
