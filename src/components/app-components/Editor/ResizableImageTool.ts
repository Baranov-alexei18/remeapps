// ResizableImageTool.ts

import { BlockTool } from "@editorjs/editorjs";

class ResizableImageTool implements BlockTool {
  static get toolbox() {
    return {
      title: "Resizable Image",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16"><path d="M13.002 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2.998a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10.004zM2.998 0A2 2 0 0 0 1 2v10a2 2 0 0 0 1.998 2h10.004a2 2 0 0 0 1.998-2V2a2 2 0 0 0-1.998-2H2.998z"/><path d="M10.648 8.646a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l1.146 1.147 2.646-2.647z"/><path d="M2.5 3a.5.5 0 0 1 .5.5V5a.5.5 0 0 1-1 0V3.5a.5.5 0 0 1 .5-.5z"/></svg>',
    };
  }

  private data: { url: string; width: string; height: string };
  private container: HTMLElement;

  constructor({ data }: { data: any }) {
    this.data = data || { url: "", width: "100%", height: "auto" };
    this.container = document.createElement("div");
  }

  render(): HTMLElement {
    this.container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
        <img
          src="${this.data.url || "https://via.placeholder.com/150"}"
          style="width: ${this.data.width}; height: ${this.data.height};"
          alt="Uploaded Image"
        />
        <input type="text" placeholder="Image URL" value="${this.data.url}" style="width: 100%; padding: 8px;" />
        <div style="display: flex; gap: 10px;">
          <input type="text" placeholder="Width (e.g. 100% or 300px)" value="${this.data.width}" style="width: 100%; padding: 8px;" />
          <input type="text" placeholder="Height (e.g. auto or 300px)" value="${this.data.height}" style="width: 100%; padding: 8px;" />
        </div>
      </div>
    `;

    const imgElement = this.container.querySelector("img")!;
    const urlInput = this.container.querySelector("input[type='text']") as HTMLInputElement;
    const widthInput = this.container.querySelectorAll("input[type='text']")[1] as HTMLInputElement;
    const heightInput = this.container.querySelectorAll("input[type='text']")[2] as HTMLInputElement;

    urlInput.addEventListener("input", (event: any) => {
      this.data.url = event.target.value;
      imgElement.src = this.data.url;
    });

    widthInput.addEventListener("input", (event: any) => {
      this.data.width = event.target.value;
      imgElement.style.width = this.data.width;
    });

    heightInput.addEventListener("input", (event: any) => {
      this.data.height = event.target.value;
      imgElement.style.height = this.data.height;
    });

    return this.container;
  }

  save(): { url: string; width: string; height: string } {
    return this.data;
  }
}

export default ResizableImageTool;
