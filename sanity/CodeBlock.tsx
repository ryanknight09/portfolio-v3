import { ClipBoard } from "@/components/ClipBoard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  value: {
    code: string;
    language: string;
  };
}

const CodeBlock = ({ value }: Props) => {
  const { code, language } = value;

  return (
    <div className="border rounded-md relative group">
      <ClipBoard value={code} className="absolute top-4 right-4" />
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        wrapLines={true}
        customStyle={{ background: "none" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
