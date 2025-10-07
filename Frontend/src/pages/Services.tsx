import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services } from "../data/mockData";

export function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Comprehensive Solutions for
              <span className="block text-primary">Business Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Our full-service consulting approach addresses every aspect of
              your business, from strategic planning to operational execution,
              ensuring sustainable growth and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-card p-8 rounded-lg border border-border/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {service.title}
                      </h3>
                      {service.price && (
                        <p className="text-primary font-semibold text-lg">
                          {service.price}
                        </p>
                      )}
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-card-foreground">
                      What's Included:
                    </h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle
                            size={16}
                            className="text-primary mt-1 flex-shrink-0"
                          />
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/40">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Get Started with {service.title}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Our Proven Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              A systematic approach that ensures successful outcomes and
              sustainable transformation for every client engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description:
                  "Comprehensive analysis of your current state, challenges, and opportunities.",
              },
              {
                step: "02",
                title: "Strategy Development",
                description:
                  "Custom solutions designed specifically for your business objectives and constraints.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Collaborative execution with your team, ensuring knowledge transfer and adoption.",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Continuous monitoring and refinement to maximize results and sustain improvements.",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold">{phase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Deep sector expertise across diverse industries, enabling us to
              deliver tailored solutions that address specific market dynamics
              and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Technology",
              "Healthcare",
              "Financial Services",
              "Manufacturing",
              "Retail & E-commerce",
              "Energy & Utilities",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg border border-border/40 text-center hover:shadow-md transition-all duration-300"
              >
                <p className="font-medium text-card-foreground">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Let's discuss which services align best with your business
              objectives and how we can help you achieve measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="text-primary hover:text-primary/80 px-8 py-4 text-lg font-medium transition-colors"
              >
                Learn About Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
