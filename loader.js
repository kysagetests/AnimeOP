// loader.js - этот файл размести в корне репозитория
async function loadAnimeData() {
    const timestamp = new Date().getTime();
    try {
        // Прямая загрузка с RAW GitHub с уникальным параметром
        const response = await fetch(`https://raw.githubusercontent.com/kysagetests/AnimeOP/main/anime_database.json?nocache=${timestamp}`);
        const data = await response.json();
        return { success: true, data: data, source: 'raw', timestamp: timestamp };
    } catch (error) {
        return { success: false, error: error.message, source: 'raw', timestamp: timestamp };
    }
}

// Экспортируем функцию для использования
if (typeof window !== 'undefined') {
    window.loadAnimeData = loadAnimeData;
}