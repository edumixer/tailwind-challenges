export interface FeedbackProps {
  message: string;
  type: "success" | "error";
}

export default function Feedback({ message, type }: FeedbackProps) {
  if (!message) return null;

  const color = type === "success" ? "text-green-600" : "text-red-600";
  return <div className={`mt-4 ${color} font-semibold`}>{message}</div>;
}
