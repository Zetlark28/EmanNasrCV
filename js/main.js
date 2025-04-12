// Menu mobile toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuButton = document.querySelector('.menu-toggle');
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
    
    // Se il menu è aperto, aggiungiamo un event listener per chiuderlo quando si clicca fuori
    if (!isExpanded) {
        setTimeout(() => {
            document.addEventListener('click', closeMenuOnClickOutside);
        }, 0);
    } else {
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

// Funzione per chiudere il menu quando si clicca fuori
function closeMenuOnClickOutside(event) {
    const navLinks = document.getElementById('navLinks');
    const menuButton = document.querySelector('.menu-toggle');
    const clickedLink = event.target.closest('a'); // Controlla se il click è su un link
    
    // Se il click è fuori dal menu, sul menu stesso (ma non su un link), o sul pulsante hamburger
    if (!menuButton.contains(event.target) && (!clickedLink || !navLinks.contains(clickedLink))) {
        closeMenu();
        document.removeEventListener('click', closeMenuOnClickOutside);
        menuButton.setAttribute('aria-expanded', 'false');
    }
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
    }
}

// Funzione per tornare in cima alla pagina
function scrollToTop() {
    closeMenu();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href') === '#') return; // Salta i link che puntano solo a #
        
        anchor.addEventListener('click', function (e) {
            closeMenu();
            
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Gestione del form di prenotazione
// const appointmentForm = document.getElementById('appointmentForm');
// const successMessage = document.getElementById('successMessage');

// appointmentForm.addEventListener('submit', async function(e) {
//     e.preventDefault();
//     
//     // Disabilita il pulsante di invio
//     const submitButton = this.querySelector('button[type="submit"]');
//     submitButton.disabled = true;
//     submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Invio in corso...';
//     
//     try {
//         // Simulazione di invio al server
//         await new Promise(resolve => setTimeout(resolve, 2000)); // Simula un ritardo di 2 secondi
//         
//         // Nasconde il form e mostra il messaggio di successo
//         this.style.display = 'none';
//         successMessage.style.display = 'block';
//         
//         // Resetta il form
//         this.reset();
//         
//         // Abilita il pulsante dopo un po'
//         setTimeout(() => {
//             submitButton.disabled = false;
//             submitButton.innerHTML = 'Prenota';
//         }, 3000);
//         
//     } catch (error) {
//         console.error('Errore durante l\'invio:', error);
//         alert('Si è verificato un errore durante l\'invio del form. Riprova più tardi.');
//         submitButton.disabled = false;
//         submitButton.innerHTML = 'Prenota';
//     }
// });

// // Chiude il form quando si clicca fuori
// document.querySelector('.form-overlay').addEventListener('click', function() {
//     const form = document.querySelector('.appointment-form');
//     form.style.display = 'none';
//     // Resetta il form e nasconde il messaggio di successo
//     appointmentForm.style.display = 'block';
//     successMessage.style.display = 'none';
// });
