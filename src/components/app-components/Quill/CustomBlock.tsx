// CustomBlock.tsx

import React, { useState } from "react";
import { BlockTool } from "@editorjs/editorjs";

// Компонент для кастомного блока
class CustomBlock implements BlockTool {
    static get toolbox() {
        return {
            title: 'Custom Block',
            icon: '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 3v10l7-5z"/></svg>', // Иконка
        };
    }

    private data: any;
    private container: HTMLElement;

    constructor({ data }: { data: any }) {
        this.data = data || { text: "", background: "#f0f0f0" };
        this.container = document.createElement('div');
    }

    render(): HTMLElement {
        // Создание HTML-элемента для блока
        this.container.innerHTML = `
            <div contenteditable="true" style="background-color: ${this.data.background}; padding: 10px;">
                ${this.data.text || 'Кастомный элемент...'}
            </div>
            <div style="margin-top: 10px;">
                <label for="background-color">Цвет фона:</label>
                <input type="color" id="background-color" value="${this.data.background}">
            </div>
        `;

        // Добавление обработчика изменений фона
        const colorPicker = this.container.querySelector("#background-color")!;
        colorPicker.addEventListener("input", (e: any) => {
            this.data.background = e.target.value;
            this.container.querySelector("div")!.style.backgroundColor = this.data.background;
        });

        return this.container;
    }

    save(): any {
        // Сохранение данных
        const text = this.container.querySelector("[contenteditable]")!.innerHTML;
        return {
            text,
            background: this.data.background,
        };
    }
}

export default CustomBlock;
