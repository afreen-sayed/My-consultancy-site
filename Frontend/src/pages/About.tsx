import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Award, TrendingUp } from "lucide-react";
import { teamMembers } from "../data/mockData";
import { TeamMemberCard } from "../components/TeamMemberCard";

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Empowering Businesses to
              <span className="block text-primary">Achieve Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              For over a decade, ConsultPro has been the trusted partner for
              businesses seeking transformational growth and operational
              excellence. We combine deep industry expertise with innovative
              methodologies to deliver sustainable results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  To empower businesses with strategic insights and innovative
                  solutions that drive sustainable growth, operational
                  excellence, and competitive advantage in an ever-evolving
                  marketplace.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Target size={24} className="text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Strategic Focus</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We align every initiative with your long-term business
                      objectives and market realities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users size={24} className="text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      Collaborative Approach
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We work as an extension of your team, ensuring knowledge
                      transfer and sustainable change.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <TrendingUp size={24} className="text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                      Measurable Results
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every engagement is designed to deliver quantifiable
                      improvements and ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/professional-team-collaboration.png"
                alt="Professional team collaboration"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Centered Industry Recognition Badge */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full sm:max-w-md">
            <div className="bg-card/95 backdrop-blur p-6 rounded-lg shadow-lg border border-border/40 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award size={20} className="text-primary" />
                <span className="font-semibold">Industry Recognition</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Top consulting firm 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Our Impact by the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Measurable results that demonstrate our commitment to client
              success and business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Projects Completed",
                description: "Successful transformations delivered",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                description: "Consistently exceeding expectations",
              },
              {
                number: "15+",
                label: "Years Experience",
                description: "Deep industry expertise",
              },
              {
                number: "$2.5B+",
                label: "Value Created",
                description: "Measurable business impact",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Our experienced consultants bring decades of combined expertise
              across industries and functional areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Let's discuss how our expertise and proven methodologies can help
              accelerate your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-md text-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="text-primary hover:text-primary/80 px-8 py-4 text-lg font-medium transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
