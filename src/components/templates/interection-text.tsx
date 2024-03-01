interface InterectionTextProps {
  texts: string[];
}

function InterectionText({ texts }: InterectionTextProps) {
  return (
    <div className="flex max-h-9 flex-col gap-2 overflow-y-hidden">
      {texts.map((text: string) => (
        <h1 className="text-3xl font-bold">{text}</h1>
      ))}
    </div>
  );
}

export { InterectionText };
