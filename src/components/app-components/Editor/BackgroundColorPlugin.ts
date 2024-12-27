class TextColorTool {
  private selectedColor: string = '#000000'; // Начальный цвет текста
  private colorPopup: HTMLElement | null = null;
  private range: Range | null = null;

  static get isInline() {
    return true;
  }

  constructor({ api }: { api: any }) {
    this.api = api;
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '5px';
    wrapper.style.alignItems = 'center';

    // Кнопка для выбора цвета текста
    const textColorButton = document.createElement('button');
    textColorButton.innerHTML = TextColorTool.icon;
    textColorButton.title = 'Выбор цвета для фона';
    textColorButton.style.border = 'none';
    textColorButton.style.background = 'transparent';
    textColorButton.style.cursor = 'pointer';
    textColorButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.showTextColorPopup();
    });

    wrapper.appendChild(textColorButton);
    return wrapper;
  }

  showTextColorPopup() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    this.range = selection.getRangeAt(0);

    if (!this.colorPopup) {
      this.createColorPopup();
    } else {
      this.colorPopup.style.display = 'block';
    }

    this.positionPopup(this.colorPopup!);
  }

  createColorPopup() {
    this.colorPopup = document.createElement('div');
    this.colorPopup.style.position = 'absolute';
    this.colorPopup.style.backgroundColor = '#fff';
    this.colorPopup.style.border = '1px solid #ccc';
    this.colorPopup.style.padding = '10px';
    this.colorPopup.style.display = 'none';
    this.colorPopup.style.zIndex = '1000';
    this.colorPopup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

    const textColors = ['#000000', '#FF1300', '#FF9900', '#FFEB3B', '#4CAF50', '#2196F3', '#9C27B0'];
    const colorWrapper = this.createColorPicker(textColors);
    this.colorPopup.appendChild(colorWrapper);

    document.body.appendChild(this.colorPopup);
  }

  createColorPicker(colors: string[]) {
    const colorPickerWrapper = document.createElement('div');
    colors.forEach((color) => {
      const button = document.createElement('button');
      button.style.backgroundColor = color;
      button.style.width = '30px';
      button.style.height = '30px';
      button.style.border = 'none';
      button.style.cursor = 'pointer';
      button.style.margin = '5px';
      button.addEventListener('click', () => {
        this.selectedColor = color;
        this.applyStyles();
        this.closePopup();
      });

      colorPickerWrapper.appendChild(button);
    });

    return colorPickerWrapper;
  }

  positionPopup(popup: HTMLElement) {
    if (!this.range) return;

    const rect = this.range.getBoundingClientRect();
    popup.style.left = `${rect.left + window.scrollX}px`;
    popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
  }

  applyStyles() {
    const selectedText = window.getSelection();
    if (selectedText && selectedText.rangeCount > 0) {
      const range = selectedText.getRangeAt(0);
      this.surround(range);
    }
  }

  surround(range: Range) {
    if (!range || range.collapsed) return;

    const span = document.createElement('span');
    span.style.backgroundColor = this.selectedColor; // Сохраняем текущий фон
    span.textContent = range.toString();
    range.deleteContents();
    range.insertNode(span);
  }

  closePopup() {
    if (this.colorPopup) {
      this.colorPopup.style.display = 'none';
    }
  }

  static get sanitize() {
    return {
      span: {
        style: true,
      },
    };
  }

  static get title() {
    return 'Выбор цвета для фона';
  }

  static get icon() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette-fill" viewBox="0 0 16 16"> <path d="M12.5.5a7.5 7.5 0 1 0 6.5 13.148V14a2 2 0 0 1-2 2h-4.09a1 1 0 0 1-.364-.073L7.36 14H4a2 2 0 0 1-2-2V5a7.5 7.5 0 0 0 10.5-4.5ZM11 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/> </svg>`;
  }
}

export default TextColorTool;
