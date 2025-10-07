export interface Service {
    id: string
    title: string
    description: string
    price?: string
    features: string[]
  }
  
  export interface Testimonial {
    id: string
    name: string
    company: string
    content: string
    rating: number
  }
  
  export interface TeamMember {
    id: string
    name: string
    role: string
    bio: string
    image: string
  }
  
  export interface ConsultationRequest {
    id: string
    name: string
    email: string
    message: string
    createdAt: string
    status: "new" | "in-progress" | "completed"
  }
  
  export const services: Service[] = [
    {
      id: "1",
      title: "Business Strategy",
      description: "Comprehensive strategic planning to align your business objectives with market opportunities.",
      price: "Starting at $2,500",
      features: [
        "Market analysis and competitive research",
        "Strategic roadmap development",
        "Performance metrics and KPIs",
        "Implementation guidance",
      ],
    },
    {
      id: "2",
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology solutions and digital processes.",
      price: "Starting at $5,000",
      features: [
        "Technology assessment and planning",
        "Process digitization",
        "Change management support",
        "Training and adoption strategies",
      ],
    },
    {
      id: "3",
      title: "Process Optimization",
      description: "Streamline operations and eliminate inefficiencies to maximize productivity and reduce costs.",
      price: "Starting at $3,000",
      features: [
        "Current state analysis",
        "Process mapping and redesign",
        "Automation opportunities",
        "Performance monitoring setup",
      ],
    },
    {
      id: "4",
      title: "Market Analysis",
      description: "In-depth market research and analysis to identify opportunities and threats in your industry.",
      price: "Starting at $1,500",
      features: [
        "Industry trend analysis",
        "Competitor benchmarking",
        "Customer behavior insights",
        "Market entry strategies",
      ],
    },
  ]
  
  export const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content:
        "ConsultPro transformed our business strategy completely. Their insights helped us increase revenue by 40% in just six months.",
      rating: 5,
    },
    {
      id: "2",
      name: "Michael Chen",
      company: "Global Manufacturing",
      content:
        "The digital transformation project exceeded our expectations. The team was professional, knowledgeable, and delivered on time.",
      rating: 5,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      company: "Retail Solutions",
      content:
        "Process optimization services helped us reduce operational costs by 25% while improving customer satisfaction significantly.",
      rating: 5,
    },
  ]
  
  export const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "David Thompson",
      role: "Senior Strategy Consultant",
      bio: "With over 15 years of experience in business strategy, David has helped numerous Fortune 500 companies achieve their growth objectives.",
      image: "/professional-business-consultant-headshot.jpg",
    },
    {
      id: "2",
      name: "Lisa Park",
      role: "Digital Transformation Lead",
      bio: "Lisa specializes in technology integration and digital process optimization, bringing innovative solutions to traditional business challenges.",
      image: "/professional-female-consultant-headshot.jpg",
    },
    {
      id: "3",
      name: "Robert Kim",
      role: "Operations Specialist",
      bio: "Robert focuses on process improvement and operational efficiency, helping businesses streamline their operations for maximum productivity.",
      image: "/professional-asian-consultant-headshot.jpg",
    },
  ]
  
  // Mock data for admin panel
  export const mockUsers = [
    { id: "1", name: "John Doe", email: "john@example.com", joinDate: "2024-01-15" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", joinDate: "2024-02-20" },
    { id: "3", name: "Bob Wilson", email: "bob@example.com", joinDate: "2024-03-10" },
  ]
  
  // This will be managed by localStorage in the actual implementation
  export const consultationRequests: ConsultationRequest[] = [
    {
      id: "1",
      name: "Alice Cooper",
      email: "alice@company.com",
      message: "Interested in business strategy consultation for our startup.",
      createdAt: "2024-01-20T10:30:00Z",
      status: "new",
    },
    {
      id: "2",
      name: "Mark Johnson",
      email: "mark@business.com",
      message: "Need help with digital transformation for our manufacturing company.",
      createdAt: "2024-01-18T14:15:00Z",
      status: "in-progress",
    },
  ]
  