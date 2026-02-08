import React from "react";

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  const renderMarkdown = (md: string): React.ReactNode[] => {
    const lines = md.split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;
    let key = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Code block
      if (line.startsWith("```")) {
        const lang = line.slice(3).trim();
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```
        elements.push(
          <pre
            key={key++}
            className="rounded-xl bg-muted p-5 overflow-x-auto my-6 border border-border"
          >
            <code className="text-sm font-mono text-foreground leading-relaxed">
              {codeLines.join("\n")}
            </code>
          </pre>
        );
        continue;
      }

      // Headings
      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={key++} className="font-display text-xl font-bold mt-10 mb-4 text-foreground">
            {renderInline(line.slice(4))}
          </h3>
        );
        i++;
        continue;
      }
      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={key++} className="font-display text-2xl font-bold mt-12 mb-4 text-foreground">
            {renderInline(line.slice(3))}
          </h2>
        );
        i++;
        continue;
      }

      // Blockquote
      if (line.startsWith("> ")) {
        elements.push(
          <blockquote
            key={key++}
            className="border-l-4 border-primary pl-6 py-2 my-6 text-muted-foreground italic font-body text-lg"
          >
            {renderInline(line.slice(2))}
          </blockquote>
        );
        i++;
        continue;
      }

      // Ordered list
      if (/^\d+\.\s/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
          items.push(lines[i].replace(/^\d+\.\s/, ""));
          i++;
        }
        elements.push(
          <ol key={key++} className="list-decimal list-inside space-y-2 my-4 font-body text-foreground">
            {items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{renderInline(item)}</li>
            ))}
          </ol>
        );
        continue;
      }

      // Unordered list
      if (line.startsWith("- ")) {
        const items: string[] = [];
        while (i < lines.length && lines[i].startsWith("- ")) {
          items.push(lines[i].slice(2));
          i++;
        }
        elements.push(
          <ul key={key++} className="list-disc list-inside space-y-2 my-4 font-body text-foreground">
            {items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{renderInline(item)}</li>
            ))}
          </ul>
        );
        continue;
      }

      // Empty line
      if (line.trim() === "") {
        i++;
        continue;
      }

      // Paragraph
      elements.push(
        <p key={key++} className="font-body text-foreground leading-relaxed my-4 text-base md:text-lg">
          {renderInline(line)}
        </p>
      );
      i++;
    }

    return elements;
  };

  const renderInline = (text: string): React.ReactNode => {
    // Bold + italic patterns
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`(.+?)`)/g;
    let lastIndex = 0;
    let match;
    let partKey = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      if (match[2]) {
        parts.push(<strong key={partKey++} className="font-semibold">{match[2]}</strong>);
      } else if (match[4]) {
        parts.push(<em key={partKey++} className="italic">{match[4]}</em>);
      } else if (match[6]) {
        parts.push(
          <code key={partKey++} className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
            {match[6]}
          </code>
        );
      }
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts.length === 1 ? parts[0] : parts;
  };

  return <div className="prose-custom">{renderMarkdown(content)}</div>;
};

export default MarkdownContent;
