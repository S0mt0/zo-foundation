"use client";

import { useEffect, useState } from "react";
import { createEditor } from "lexical";
import { $generateHtmlFromNodes } from "@lexical/html";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";

import { HorizontalRuleNode } from "./HorizontalRuleNode";
import { ImageNode } from "./ImageNode";
import { YouTubeNode } from "./YouTubeNode";
import { cn } from "@/lib/utils";

interface LexicalContentDisplayProps {
  content: string;
  className?: string;
}

export function LexicalContentDisplay({
  content,
  className = "prose prose-lg dark:prose-invert",
}: LexicalContentDisplayProps) {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const convertToHtml = async () => {
      try {
        if (content.startsWith("<") || !content.startsWith("{")) {
          setHtmlContent(content);
          setIsLoading(false);
          return;
        }

        const editorState = JSON.parse(content);

        const editor = createEditor({
          nodes: [
            HeadingNode,
            ListNode,
            ListItemNode,
            QuoteNode,
            CodeNode,
            CodeHighlightNode,
            TableNode,
            TableCellNode,
            TableRowNode,
            AutoLinkNode,
            LinkNode,
            ImageNode,
            YouTubeNode,
            HorizontalRuleNode,
          ],
          onError: (error) => console.error("Lexical error:", error),
        });

        editor.setEditorState(editor.parseEditorState(editorState));

        const html = await new Promise<string>((resolve) => {
          editor.getEditorState().read(() => {
            const htmlString = $generateHtmlFromNodes(editor, null);
            resolve(htmlString);
          });
        });

        setHtmlContent(html);
      } catch (error) {
        console.error("Failed to parse content:", error);
        setHtmlContent(content);
      } finally {
        setIsLoading(false);
      }
    };

    convertToHtml();
  }, [content]);

  if (isLoading) {
    return (
      <div className={className}>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("min-w-full w-full max-w-full", className)}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
