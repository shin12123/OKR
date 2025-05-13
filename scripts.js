

function dialogWithUser() {
    const name = prompt("Введіть ваше ім'я:", "");
    if (!name) return;

    const interested = confirm(`Привіт, ${name}! Бажаєте дізнатися про фішинг?`);
    if (!interested) {
        alert("Будьте обережні в інтернеті!");
        return;
    }
    let tips = "";
    for (let i = 1; i <= 3; i++) {
        if (i === 1) tips += "1. Перевіряйте URL-адреси\n";
        else if (i === 2) tips += "2. Не відкривайте підозрілі вкладення\n";
        else tips += "3. Нікому не повідомляйте особисті дані\n";
    }
    alert(`Поради з безпеки:\n${tips}`);
}


function showDeveloperInfo(lastName, firstName, position = "Студент") {
    alert(`Розробник: ${firstName} ${lastName}, ${position}`);
}


function compareStrings(str1, str2) {
    if (!str1 || !str2) {
        alert("Обидва рядки повинні бути заповнені");
        return;
    }
    if (str1.length > str2.length)       alert(`Більший рядок: ${str1}`);
    else if (str2.length > str1.length)  alert(`Більший рядок: ${str2}`);
    else                                 alert("Рядки однакової довжини");
}


function changeBackground() {
    const old = getComputedStyle(document.body).backgroundColor;
    document.body.style.setProperty('background-color', '#ffdddd', 'important');
    setTimeout(() => {
        document.body.style.setProperty('background-color', old, 'important');
        alert("Фон повернувся до початкового стану");
    }, 30_000);
}


function redirectPage() {
    if (confirm("Перейти на іншу сторінку?")) location.href = "links.html";
}


function useGetElementById() {
    const el = document.getElementById("welcome");
    if (el) {
        el.style.color = "red";
        el.style.fontWeight = "bold";
    }
}


function useQuerySelectorAll() {
    document.querySelectorAll("a").forEach(a => a.style.color = "black");
}


function demonstrateProperties() {
    const el = document.querySelector(".alert-text");
    if (!el) return;

    el.innerHTML = "<strong>Змінений через innerHTML</strong>";
    alert("outerHTML:\n"  + el.outerHTML);
    alert("textContent:\n" + el.textContent);
    const nv = el.firstChild?.textContent ??"null";
    alert("nodeValue:\n"  + nv);          
}


function modifyDocument() {
    const box = document.createElement("div");
    box.style.cssText = "background:#eeffee;padding:10px;margin:10px 0;";
    box.textContent = "Новий елемент добавлений через DOM ";
    document.body.append(box);

    const strong = document.createElement("strong");
    strong.textContent = "УВАГА! ";
    box.prepend(strong);

    const p = document.createElement("p");
    p.textContent = "Цей параграф доданий через after()";
    box.after(p);

    setTimeout(() => {
        const repl = document.createElement("div");
        repl.textContent = "Цей елемент замінив попередній параграф";
        repl.style.cssText="background:#eeeeff;padding:10px;";
        p.replaceWith(repl);

        setTimeout(() => repl.remove(), 3000);
    }, 3000);
}


function useDocumentWrite() {
    if (!confirm("Увага! Функція document.write перезапише сторінку. Продовжити?")) return;

    document.write("<h1>Сторінку перезаписано</h1>");
    document.write("<p>Використано document.write</p>");
    document.write("<button onclick='location.reload()'>Перезавантажити</button>");
}

