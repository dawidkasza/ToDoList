{   
    const tasks = [
        {
            content: "test1",
            done: false,
        },
        {
            content: "test2",
            done: true,
        },
    ];

    const render = () => {
        let tasksListHTMLContent = "";
        for(const task of tasks){
            tasksListHTMLContent += `
                <li class="task__item">
                <button class=" task__button task__button--toggleDone"> ${task.done ? "✔" : ""}</button>
                <span class="task__content ${task.done ? " task__content--done" : ""}"> 
                    ${task.content}
                </span>
                <button class=" task__button task__button--remove">X</button>
                </li>
            `
        }

        document.querySelector(".js-tasks").innerHTML = tasksListHTMLContent;
    };

    const init = () => {
        render();
    };

    init();
}