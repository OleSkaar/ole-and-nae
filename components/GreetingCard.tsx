interface GreetingCardProps {
  content: string;
  name: string;
}

export default function GreetingCard({ content, name }: GreetingCardProps) {
  return (
    <div class="frame">
      <p>{content}</p>
      <p>{`— ${name}`}</p>
    </div>
  )
}