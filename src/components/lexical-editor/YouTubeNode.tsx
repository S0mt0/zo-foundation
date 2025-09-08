import { DecoratorNode, type DOMExportOutput, type NodeKey } from "lexical";
import type React from "react";

function getYouTubeVideoID(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
  );
  return match ? match[1] : null;
}

export class YouTubeNode extends DecoratorNode<React.JSX.Element> {
  __id: string;

  exportDOM(): DOMExportOutput {
    const element = document.createElement("iframe");
    element.setAttribute("src", `https://www.youtube.com/embed/${this.__id}`);
    element.setAttribute("width", "100%");
    element.setAttribute("height", "auto");
    element.setAttribute("frameborder", "0");
    element.setAttribute("allowfullscreen", "true");
    element.style.display = "block";
    element.style.margin = "1rem auto";
    element.style.aspectRatio = "16/9";
    return { element };
  }

  constructor(id: string, key?: NodeKey) {
    super(key);
    this.__id = id;
  }
}
