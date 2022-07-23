interface CounterProps {
  count: number;
}

export default function Counter({ count }: CounterProps) {
  return (
    <div>
      <h2>Count is {count}</h2>
    </div>
  );
}
