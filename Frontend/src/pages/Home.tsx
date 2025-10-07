import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { services, testimonials } from "../data/mockData";
import { ServiceCard } from "../components/ServiceCard";
import { TestimonialCard } from "../components/TestimonialCard";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-background"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Transform Your Business with
              <span className="block text-primary">Expert Consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              We help businesses navigate complex challenges and unlock their
              full potential through strategic consulting, digital
              transformation, and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Start Your Journey
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="text-primary hover:text-primary/80 px-8 py-4 text-lg font-medium transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Comprehensive solutions designed to drive growth and operational
              excellence across all aspects of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                  Why Leading Companies Choose ConsultPro
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Our proven methodology and experienced team deliver measurable
                  results that drive sustainable growth and competitive
                  advantage.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Proven track record with 500+ successful projects",
                  "Industry expertise across multiple sectors",
                  "Data-driven approach with measurable outcomes",
                  "Dedicated support throughout implementation",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-primary mt-1 flex-shrink-0"
                    />
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <img
                src="/professional-business-meeting-consultation.jpg"
                alt="Professional consultation meeting"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-lg border border-border/40">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">5.0</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by 500+ companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Don't just take our word for it. Here's what industry leaders say
              about working with ConsultPro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Let's discuss how our expertise can help you achieve your business
              objectives and drive sustainable growth.
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
                to="/services"
                className="text-primary hover:text-primary/80 px-8 py-4 text-lg font-medium transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
