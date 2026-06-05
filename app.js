// Base de datos de artículos de Divulgación
const blogArticles = [
    {
        id: 4,
        title: "Primer Concurso Artístico Literario para Niños: «Sueños Antárticos»",
        category: "Noticias",
        date: "04 de Junio, 2026",
        excerpt: "Se desarrollaron las actividades del certamen escolar en el año 2024 en homenaje al Profesor Julio C. Musso, fomentando la creación y conciencia sobre las actividades polares de Uruguay.",
        image: "assets/concurso_ninos.png",
        content: `
            <p>La Asociación Civil ANTARKOS organizó con éxito en el año 2024 el <b>Primer Concurso Artístico Literario para Niños: «Sueños Antárticos»</b>, en homenaje al Profesor Julio C. Musso, pionero y fundador del Instituto Antártico Uruguayo.</p>
            <h3>Objetivo del Certamen</h3>
            <p>Este concurso tuvo como finalidad promover e incentivar en los más jóvenes el interés por las ciencias, la investigación y la importancia geopolítica y ambiental de la Antártida. Se buscó inspirar una nueva generación que reconociera los esfuerzos de Uruguay en el continente helado.</p>
            <h3>Categorías y Participación</h3>
            <p>La convocatoria estuvo orientada a estudiantes de escuelas públicas de diversos niveles de Educación Básica Integrada (EBI), quienes participaron individualmente o en grupos en las siguientes disciplinas:</p>
            <ul>
                <li><b>Poesía:</b> Composiciones inspiradas en la vida polar, los glaciares y la paz antártica.</li>
                <li><b>Cuento corto:</b> Historias que imaginaron exploraciones, descubrimientos o la vida diaria en las bases científicas.</li>
                <li><b>Dibujo y Expresión Plástica:</b> Obras de arte con técnicas libres que ilustraron los paisajes o la fauna austral.</li>
            </ul>
            <h3>Apoyo Institucional</h3>
            <p>El certamen contó con el valioso auspicio de la Biblioteca Nacional de Uruguay, junto al apoyo activo de APECS Uruguay, el Instituto Antártico Uruguayo (IAU) y la Unidad de Extensión de la Facultad de Ciencias de la Universidad de la República (Udelar).</p>
            <h3>Más información</h3>
            <p>Puedes conocer más detalles, ver las obras premiadas y repasar las bases de futuras ediciones en la nota oficial del certamen en el sitio web de la <a href="http://www.antarkos.org.uy/concurso2024.htm" target="_blank" style="color: var(--accent-color); text-decoration: underline;">Asociación Civil ANTARKOS</a>.</p>
        `
    },
    {
        id: 1,
        title: "El viaje del Emperador: Supervivencia en el Hielo",
        category: "Fauna",
        date: "25 de Mayo, 2026",
        excerpt: "Cómo el pingüino emperador desafía los vientos de 200 km/h y temperaturas de -60°C para criar a sus polluelos.",
        image: "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=800&q=80",
        content: `
            <p>El pingüino emperador (<i>Aptenodytes forsteri</i>) es el único animal que se reproduce durante el crudo invierno antártico. Para sobrevivir a condiciones extremas de temperaturas de hasta -60°C y vientos huracanados de más de 200 km/h, emplean una estrategia colectiva única.</p>
            <h3>El calor de la multitud</h3>
            <p>Los pingüinos forman grandes agrupaciones apretadas llamadas "huddles" o tortugas. Se turnan para estar en el borde exterior expuestos al viento frío, moviéndose lentamente hacia el centro cálido del grupo. En el centro del grupo, las temperaturas pueden superar los 37°C.</p>
            <h3>El largo ayuno del padre</h3>
            <p>Mientras la hembra regresa al mar durante dos meses para alimentarse, el macho incuba el único huevo sobre sus patas, cubierto por un pliegue de piel cálida. Durante este tiempo, los machos no comen nada y confían únicamente en sus reservas de grasa para sobrevivir.</p>
        `
    },
    {
        id: 2,
        title: "El rol de la Antártida como regulador del clima global",
        category: "Clima",
        date: "14 de Mayo, 2026",
        excerpt: "El derretimiento del hielo marino y cómo influye directamente en las corrientes oceánicas globales.",
        image: "assets/pinguinos_adelia.png",
        content: `
            <p>La capa de hielo de la Antártida contiene el 90% del hielo del planeta y aproximadamente el 70% del agua dulce de la Tierra. Este enorme volumen helado cumple un rol crucial en la regulación del clima del planeta entero.</p>
            <h3>El Efecto Albedo</h3>
            <p>La inmensa superficie blanca de la Antártida actúa como un gigantesco espejo que refleja hasta el 80% de la radiación solar entrante de vuelta al espacio. Sin este efecto protector, la Tierra absorbería mucha más energía solar, acelerando el calentamiento global.</p>
            <h3>La cinta transportadora oceánica</h3>
            <p>Cuando el agua de mar se congela alrededor de la Antártida en invierno, expulsa la sal. Esto genera agua fría, densa y extremadamente salada que se hunde en el fondo marino. Esta corriente profunda impulsa la circulación termohalina global, distribuyendo nutrientes y calor por todos los océanos del planeta.</p>
        `
    },
    {
        id: 3,
        title: "La Edad Heroica y la Carrera hacia el Polo Sur",
        category: "Historia",
        date: "03 de Mayo, 2026",
        excerpt: "La odisea de Amundsen, Scott y Shackleton. Hazañas que redefinieron los límites humanos.",
        image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=800&q=80",
        content: `
            <p>A principios del siglo XX, la Antártida era la última frontera inexplorada del planeta. En este contexto comenzó la llamada Edad Heroica de la exploración antártica, marcada por hazañas y tragedias legendarias.</p>
            <h3>La Conquista de 1911</h3>
            <p>El explorador noruego Roald Amundsen y el capitán británico Robert Falcon Scott compitieron en una dramática carrera para ser los primeros hombres en pisar el Polo Sur geográfico. Amundsen llegó primero el 14 de diciembre de 1911 utilizando perros de trineo. Scott llegó un mes después, encontrando la bandera noruega. Trágicamente, Scott y sus hombres perecieron de frío y hambre en su viaje de regreso.</p>
            <h3>El Endurance de Shackleton</h3>
            <p>Poco después, Ernest Shackleton lideró la Expedición Imperial Transantártica. Aunque su barco, el <i>Endurance</i>, quedó atrapado y destruido por el hielo flotante, Shackleton logró salvar la vida de toda su tripulación tras una odisea de supervivencia de casi dos años, considerada una de las mayores hazañas de liderazgo de la historia.</p>
        `
    }
];

// Base de datos de Trivia
const triviaQuestions = [
    {
        question: "¿Cuál es el espesor máximo registrado de la capa de hielo antártica?",
        options: [
            "Aproximadamente 1,000 metros",
            "Casi 4,900 metros",
            "Cerca de 2,500 metros",
            "Alrededor de 500 metros"
        ],
        correctIndex: 1,
        explanation: "El espesor máximo medido del hielo antártico es de 4,897 metros (casi 5 km) en la Tierra de Wilkes."
    },
    {
        question: "¿Qué porcentaje del agua dulce de la Tierra se encuentra acumulado en la Antártida?",
        options: [
            "Alrededor del 70%",
            "Cerca del 30%",
            "Aproximadamente el 50%",
            "Solo el 10%"
        ],
        correctIndex: 0,
        explanation: "La capa de hielo antártica almacena cerca del 70% del agua dulce del planeta en forma de hielo glacial."
    },
    {
        question: "¿En qué año se firmó el Tratado Antártico que consagra el continente a la paz y la ciencia?",
        options: [
            "1945",
            "1959",
            "1982",
            "1991"
        ],
        correctIndex: 1,
        explanation: "El Tratado Antártico se firmó en Washington el 1 de diciembre de 1959 y entró en vigor en 1961."
    },
    {
        question: "¿Cuál es la especie de pingüino más grande y pesada de la Antártida?",
        options: [
            "Pingüino Adelia",
            "Pingüino Barbijo",
            "Pingüino Emperador",
            "Pingüino de Vincha"
        ],
        correctIndex: 2,
        explanation: "El pingüino Emperador es el más grande, alcanzando hasta 1.2 metros de altura y superando los 40 kg de peso."
    }
];

let currentTriviaIndex = 0;
let triviaScore = 0;
let answersAttempted = 0;

// Inicialización del DOM
document.addEventListener("DOMContentLoaded", () => {
    // Inicializar Lucide Icons
    lucide.createIcons();

    // Renderizar Blog Inicial
    renderBlog("todos");

    // Inicializar Trivia
    initTrivia();

    // Conmutador de Temas
    setupThemeToggle();

    // Filtros de Divulgación
    setupBlogFilters();

    // Navegación Móvil
    setupMobileMenu();

    // Cerrar Modal
    const modalClose = document.getElementById("modal-close");
    const modal = document.getElementById("details-modal");
    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
    });
    
    // Cerrar modal al hacer click fuera
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});

// Lógica del Conmutador de Temas (Claro / Oscuro)
function setupThemeToggle() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const htmlElement = document.documentElement;

    // Cargar preferencia guardada
    const savedTheme = localStorage.getItem("theme") || "dark";
    htmlElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const iconName = theme === "dark" ? "sun" : "moon";
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.setAttribute("data-lucide", iconName);
    lucide.createIcons();
}

// Menú Móvil
function setupMobileMenu() {
    const mobileBtn = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    
    mobileBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const isOpen = navMenu.classList.contains("active");
        mobileBtn.innerHTML = isOpen ? `<i data-lucide="x"></i>` : `<i data-lucide="menu"></i>`;
        lucide.createIcons();
    });

    // Cerrar menú al hacer clic en un enlace
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            navMenu.classList.remove("active");
            mobileBtn.innerHTML = `<i data-lucide="menu"></i>`;
            lucide.createIcons();
            
            // Activar enlace
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

// Renderizar el Blog de Divulgación
function renderBlog(categoryFilter) {
    const blogGrid = document.getElementById("blog-grid");
    blogGrid.innerHTML = "";

    const filtered = categoryFilter === "todos" 
        ? blogArticles 
        : blogArticles.filter(art => art.category === categoryFilter);

    filtered.forEach(art => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.innerHTML = `
            <div class="blog-card-img">
                <img src="${art.image}" alt="${art.title}">
                <div class="blog-card-tag">${art.category}</div>
            </div>
            <div class="blog-card-body">
                <span class="blog-card-date">${art.date}</span>
                <h3 class="blog-card-title">${art.title}</h3>
                <p class="blog-card-excerpt">${art.excerpt}</p>
                <button class="blog-card-btn" onclick="openArticle(${art.id})">
                    Leer más <i data-lucide="arrow-right" style="width:16px; height:16px;"></i>
                </button>
            </div>
        `;
        blogGrid.appendChild(card);
    });
    lucide.createIcons();
}

// Controladores de Filtro del Blog
function setupBlogFilters() {
    const filters = document.querySelectorAll(".filter-btn");
    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            filters.forEach(f => f.classList.remove("active"));
            btn.classList.add("active");
            const cat = btn.getAttribute("data-category");
            renderBlog(cat);
        });
    });
}

// Abrir Artículo en Modal
window.openArticle = function(id) {
    const art = blogArticles.find(item => item.id === id);
    if (!art) return;

    document.getElementById("modal-img").src = art.image;
    document.getElementById("modal-tag").textContent = art.category;
    document.getElementById("modal-title").textContent = art.title;
    document.getElementById("modal-date").textContent = art.date;
    document.getElementById("modal-text").innerHTML = art.content;

    document.getElementById("details-modal").classList.add("active");
};

// Cuestionario de Trivia
function initTrivia() {
    currentTriviaIndex = 0;
    triviaScore = 0;
    answersAttempted = 0;
    document.getElementById("trivia-score").textContent = `Puntaje: 0/0`;
    showTriviaQuestion();
}

function showTriviaQuestion() {
    const body = document.getElementById("trivia-body");
    const controls = document.getElementById("trivia-controls");
    body.innerHTML = "";
    controls.innerHTML = "";

    if (currentTriviaIndex >= triviaQuestions.length) {
        // Cuestionario terminado
        body.innerHTML = `
            <div style="text-align: center; padding: 2rem 0;">
                <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">🏁 ¡Desafío Completado!</h3>
                <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">
                    Tu puntuación final es de <strong>${triviaScore}</strong> de un total de <strong>${triviaQuestions.length}</strong> respuestas correctas.
                </p>
                <p style="font-size: 0.95rem; color: var(--accent-color); font-weight: 600; margin-bottom: 2rem;">
                    ${getTriviaFeedbackMessage(triviaScore)}
                </p>
                <button class="btn btn-primary" onclick="restartTrivia()">Volver a jugar</button>
            </div>
        `;
        return;
    }

    const q = triviaQuestions[currentTriviaIndex];
    
    // Crear contenedor de pregunta
    const qDiv = document.createElement("div");
    qDiv.innerHTML = `
        <div class="trivia-question">Pregunta ${currentTriviaIndex + 1}: ${q.question}</div>
        <div class="trivia-options" id="options-list"></div>
        <div id="explanation-box" style="margin-top: 1rem; padding: 1rem; border-radius: 12px; background-color: var(--bg-accent); border: 1px solid var(--border-color); display: none; font-size: 0.9rem;"></div>
    `;
    body.appendChild(qDiv);

    const optionsList = document.getElementById("options-list");
    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt;
        btn.addEventListener("click", () => selectOption(idx, btn));
        optionsList.appendChild(btn);
    });
}

function selectOption(selectedIdx, btnElement) {
    const q = triviaQuestions[currentTriviaIndex];
    const optionsList = document.getElementById("options-list");
    const buttons = optionsList.querySelectorAll(".option-btn");
    const explanationBox = document.getElementById("explanation-box");

    // Desactivar todos los botones para que no se pulse dos veces
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correctIndex) {
            btn.classList.add("correct");
        }
    });

    if (selectedIdx === q.correctIndex) {
        triviaScore++;
    } else {
        btnElement.classList.add("wrong");
    }

    answersAttempted++;
    document.getElementById("trivia-score").textContent = `Puntaje: ${triviaScore}/${answersAttempted}`;

    // Mostrar explicación
    explanationBox.innerHTML = `<strong>Explicación:</strong> ${q.explanation}`;
    explanationBox.style.display = "block";

    // Crear botón "Siguiente" en controles
    const nextBtn = document.createElement("button");
    nextBtn.className = "btn btn-secondary";
    nextBtn.style.padding = "0.6rem 1.4rem";
    nextBtn.innerHTML = `Siguiente <i data-lucide="chevron-right" style="width:18px; height:18px; vertical-align:middle;"></i>`;
    nextBtn.addEventListener("click", () => {
        currentTriviaIndex++;
        showTriviaQuestion();
    });
    document.getElementById("trivia-controls").appendChild(nextBtn);
    lucide.createIcons();
}

function getTriviaFeedbackMessage(score) {
    if (score === 4) return "❄️ ¡Impresionante! Eres todo un experto polar.";
    if (score >= 2) return "🌊 Buen trabajo. Tienes conocimientos sólidos de la Antártida.";
    return "🏔️ ¡Buen intento! Un excelente comienzo para seguir investigando.";
}

window.restartTrivia = function() {
    initTrivia();
};
