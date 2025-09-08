import { DecoratorNode, type NodeKey, type DOMExportOutput } from "lexical";
import type React from "react";

export class ImageNode extends DecoratorNode<React.JSX.Element> {
  __src: string;
  __altText: string;
  __caption?: string;
  __width: "inherit" | number;
  __height: "inherit" | number;

  exportDOM(): DOMExportOutput {
    const container = document.createElement("figure");
    const element = document.createElement("img");
    element.setAttribute("src", this.__src);
    element.setAttribute("alt", this.__altText);
    element.setAttribute("width", this.__width.toString());
    element.setAttribute("height", this.__height.toString());
    element.style.display = "block";
    element.style.margin = "1rem auto";
    element.style.maxWidth = "100%";
    element.style.width = "100%";
    element.style.objectFit = "cover";
    element.style.objectPosition = "center";

    container.appendChild(element);

    if (this.__caption) {
      const caption = document.createElement("figcaption");
      caption.textContent = this.__caption;
      caption.style.textAlign = "center";
      caption.style.fontSize = "0.875rem";
      caption.style.color = "var(--muted-foreground)";
      caption.style.marginTop = "0.5rem";
      caption.style.fontStyle = "italic";
      container.appendChild(caption);
    }

    return { element: container };
  }

  constructor(
    src: string,
    altText: string,
    caption?: string,
    width?: "inherit" | number,
    height?: "inherit" | number,
    key?: NodeKey
  ) {
    super(key);

    this.__src = src;
    this.__altText = altText;
    this.__caption = caption;
    this.__width = width || "inherit";
    this.__height = height || "inherit";
  }
}
