class QuestionAnswerTool {
    private data: { items: { question: string; answer: string }[] };
    private wrapper: HTMLElement | null;
  
    constructor({ data }: { data: { items: { question: string; answer: string }[] } }) {
      this.data = { items: [{ question: "Exemple", answer: "Exemple" }] }; // Инициализируем массив
      this.wrapper = null;
    }
  
    // Рендер блока
    render() {
      const wrapper = document.createElement("div");
      wrapper.classList.add("question-answer-tool");
      wrapper.style.border = "1px solid #ddd";
      wrapper.style.padding = "10px";
      wrapper.style.marginBottom = "10px";
  
      // Отображение всех элементов из массива
      this.data.items.forEach((item, index) => {
        this.addItem(wrapper, item, index);
      });
  
      // Кнопка добавления нового элемента
      const addButton = document.createElement("button");
      addButton.textContent = "Добавить вопрос-ответ";
      addButton.style.marginTop = "10px";
      addButton.style.padding = "5px 10px";
      addButton.style.border = "1px solid #ddd";
      addButton.style.backgroundColor = "#f5f5f5";
      addButton.style.cursor = "pointer";
      addButton.addEventListener("click", () => {
        this.data.items.push({ question: "", answer: "" });
        this.render(); // Перерисовка блока
      });
  
      wrapper.appendChild(addButton);
      this.wrapper = wrapper;
  
      return wrapper;
    }
  
    // Добавление отдельного вопроса-ответа
    addItem(wrapper: HTMLElement, item: { question: string; answer: string }, index: number) {
      const itemWrapper = document.createElement("div");
      itemWrapper.style.marginBottom = "10px";
  
      const questionInput = document.createElement("input");
      questionInput.type = "text";
      questionInput.placeholder = "Введите вопрос";
      questionInput.value = item.question;
      questionInput.style.width = "100%";
      questionInput.style.marginBottom = "5px";
      questionInput.style.padding = "5px";
      questionInput.addEventListener("input", (e) => {
        this.data.items[index].question = (e.target as HTMLInputElement).value;
      });
  
      const answerInput = document.createElement("textarea");
      answerInput.placeholder = "Введите ответ";
      answerInput.value = item.answer;
      answerInput.style.width = "100%";
      answerInput.style.padding = "5px";
      answerInput.style.minHeight = "80px";
      answerInput.addEventListener("input", (e) => {
        this.data.items[index].answer = (e.target as HTMLTextAreaElement).value;
      });
  
      // Кнопка для удаления элемента
      const removeButton = document.createElement("button");
      removeButton.textContent = "Удалить";
      removeButton.style.marginTop = "5px";
      removeButton.style.padding = "5px";
      removeButton.style.border = "1px solid #ddd";
      removeButton.style.backgroundColor = "#ff5f5f";
      removeButton.style.color = "#fff";
      removeButton.style.cursor = "pointer";
      removeButton.addEventListener("click", () => {
        this.data.items.splice(index, 1);
        this.render(); // Перерисовка блока
      });
  
      itemWrapper.appendChild(questionInput);
      itemWrapper.appendChild(answerInput);
      itemWrapper.appendChild(removeButton);
  
      wrapper.appendChild(itemWrapper);
    }
  
    // Сохраняем данные блока
    save() {
      return this.data;
    }
  
    // Панель инструментов
    static get toolbox() {
      return {
        title: "Вопрос-Ответ",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 8 2z"/><path d="M5.255 5.786a.237.237 0 0 0-.247.247c0 .138.11.247.247.247h.708c.138 0 .247-.11.247-.247 0-.138-.11-.247-.247-.247H5.255zm2.226-.007a1.512 1.512 0 0 1 1.013.244c.268.18.525.437.686.744.161.308.25.68.25 1.024v.059c0 .388-.11.694-.283.92-.17.223-.447.404-.775.404-.23 0-.417-.095-.594-.27a.647.647 0 0 1-.135-.206.247.247 0 0 0-.22-.16h-.774c-.138 0-.247.11-.247.247 0 .095.048.181.135.224.072.036.144.074.217.107.274.122.582.196.965.196.756 0 1.361-.318 1.748-.795.394-.485.59-1.128.59-1.663 0-.325-.043-.61-.12-.852a1.784 1.784 0 0 0-.446-.744A2.016 2.016 0 0 0 8.91 5.13a2.293 2.293 0 0 0-1.202-.334c-.393 0-.772.086-1.11.252-.338.166-.608.41-.788.714-.18.304-.29.669-.29 1.04v.059c0 .388.11.694.283.92.17.223.447.404.775.404.23 0 .417-.095.594-.27a.647.647 0 0 1 .135-.206.247.247 0 0 0 .22-.16h.774c.138 0 .247-.11.247-.247 0-.095-.048-.181-.135-.224a1.798 1.798 0 0 1-.217-.107A1.98 1.98 0 0 1 6.8 6.788a.72.72 0 0 1-.003-.095v-.059a1.237 1.237 0 0 1 .02-.182z"/></svg>',
      };
    }
  }
  
  export default QuestionAnswerTool;
  