export interface RoundCardProps {
    number: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    date: string;
    description: string;
    index: number;
  }