import { DecoratorNode, type DOMExportOutput } from "lexical";
import type React from "react";

export class HorizontalRuleNode extends DecoratorNode<React.JSX.Element> {
  exportDOM(): DOMExportOutput {
    const element = document.createElement("hr");
    element.className = "my-4 border-gray-300";
    return { element };
  }
}
