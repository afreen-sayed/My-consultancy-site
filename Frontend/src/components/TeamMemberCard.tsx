import type { TeamMember } from "../data/mockData";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg border border-border/40 hover:shadow-lg transition-all duration-300 text-center">
      <div className="space-y-4">
        <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden bg-secondary">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-card-foreground">
            {member.name}
          </h3>
          <p className="text-primary font-medium">{member.role}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
