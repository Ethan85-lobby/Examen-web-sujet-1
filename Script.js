// Fonction pour afficher une section
function afficherSection(sectionId) {
    // Cacher toutes les sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Afficher la section sélectionnée
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
        // Scroll vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Fonction pour basculer l'affichage des histoires supplémentaires
function toggleExtras() {
    const extraHistories = document.getElementById('extraHistories');
    const toggleButton = document.getElementById('toggleExtra');

    if (extraHistories.style.display === 'none') {
        extraHistories.style.display = 'block';
        toggleButton.textContent = '📖 Masquer les Histoires Supplémentaires';
        toggleButton.style.backgroundColor = '#ff4444';
    } else {
        extraHistories.style.display = 'none';
        toggleButton.textContent = '📖 Afficher 10 Histoires Secrètes Supplémentaires';
        toggleButton.style.backgroundColor = '#ff6b6b';
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔐 Fondation SCP - Site de Contention Activé');
    console.log('⚠️ Attention: Accès Non Autorisé = Amnestiants Chimiques');
    console.log('📊 Anomalies Cataloguées: 6,847');
    console.log('👥 Personnel: 75,000');
    console.log('🌍 Sites de Containment: 312');

    // Afficher la première section par défaut
    const firstSection = document.querySelector('.content-section.active');
    if (firstSection) {
        firstSection.classList.add('active');
    }

    // Ajouter les event listeners aux liens de navigation
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            afficherSection(sectionId);
        });
    });

    // Animation de bienvenue
    setTimeout(() => {
        console.log('%c=== SYSTÈME D\'ALERTE FONDATION ===', 'color: red; font-size: 16px; font-weight: bold;');
        console.log('%cAccès Niveau 3 Requis pour plus d\'informations', 'color: orange; font-size: 12px;');
    }, 500);
});

// Gestion du clavier pour les raccourcis
document.addEventListener('keydown', function(event) {
    // Alt + H = Histoire
    if (event.altKey && event.key === 'h') {
        afficherSection('histoire');
    }
    // Alt + F = Fondation
    if (event.altKey && event.key === 'f') {
        afficherSection('fondation');
    }
    // Alt + A = Anomalies
    if (event.altKey && event.key === 'a') {
        afficherSection('anomalies');
    }
    // Alt + P = Personnel
    if (event.altKey && event.key === 'p') {
        afficherSection('personnel');
    }
    // Alt + I = Incidents
    if (event.altKey && event.key === 'i') {
        afficherSection('incidents');
    }
});

// Fonction pour afficher un message aléatoire SCP
function getRandomSCPMessage() {
    const messages = [
        '🔐 Contention Maintenue - Pas de Menace Imédiate Détectée',
        '⚠️ Anomalie Détectée - Protocole de Sécurité Activé',
        '📊 Base de Données Mise à Jour - Nouvelles Anomalies Cataloguées',
        '🚨 Alerte Site-19 - Vérifiez les Protocoles de Sécurité',
        '✓ Tous les Systèmes Opérationnels - La Fondation Protège',
        '📈 Taux d\'Évasion: Stable. Menaces Existentielles: Monitorées',
        '🔬 Recherche & Développement - Progrès Réalisés',
        '🌍 312 Sites Actifs - Sécurisation Mondiale Assurée'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

// Afficher un message aléatoire toutes les 30 secondes dans la console
setInterval(() => {
    console.log('%c' + getRandomSCPMessage(), 'color: #ff6b6b; font-weight: bold;');
}, 30000);

// Fonction pour Easter Egg: Code Konami
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    document.body.style.filter = 'invert(1)';
    setTimeout(() => {
        document.body.style.filter = 'none';
        alert('🔓 CODE KONAMI ACTIVÉ\n\n⚠️ VOUS AVEZ DÉCOUVERT UN SECRET!\n\nLa Fondation vous surveille maintenant...');
        console.log('%c🔓 SECRET DÉBLOQUÉ!', 'color: #00ff00; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px green;');
    }, 500);
}

// Gestion des clics sur les articles pour plus d'interactivité
const articles = document.querySelectorAll('article');
articles.forEach(article => {
    article.addEventListener('click', function() {
        const h3 = this.querySelector('h3');
        if (h3) {
            console.log(`📖 Article Ouvert: ${h3.textContent}`);
        }
    });

    article.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(45, 45, 45, 0.9)';
    });

    article.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'var(--color-secondary)';
    });
});

// Afficher les statistiques au chargement
window.addEventListener('load', function() {
    const sectionCount = document.querySelectorAll('.content-section').length;
    const articleCount = document.querySelectorAll('article').length;
    
    console.log(`%c📊 STATISTIQUES DU SITE`, 'color: #ffd700; font-size: 14px; font-weight: bold;');
    console.log(`Sections: ${sectionCount}`);
    console.log(`Articles: ${articleCount}`);
    console.log(`Anomalies Répertoriées: 15+`);
    console.log('%c✓ Site Pleinement Opérationnel', 'color: green; font-weight: bold;');
});
