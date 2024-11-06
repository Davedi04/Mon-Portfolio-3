document.addEventListener("DOMContentLoaded", function () {
    const bouton = document.getElementById("submit-button");
  
    bouton.addEventListener("click", function(event) {
      event.preventDefault(); // Empêcher le rechargement de la page
      valider(event); // Appeler la fonction de validation
    });
  });
  
  function valider(event) {
    const erreur = document.getElementById("error-message");
    const prenom_input = document.getElementById("first-name").value; // Récupérer le prénom
    const nom_input = document.getElementById("last-name").value; // Récupérer le nom de famille
    const commentaire_input = document.getElementById("message").value; // Récupérer le commentaire
  
    // Vérifier si les champs sont vides
    if (!prenom_input.trim() || !nom_input.trim() || !commentaire_input.trim()) {
      erreur.style.display = "block"; // Afficher le message d'erreur
    } else {
      erreur.style.display = "none"; // Cacher le message d'erreur
      ajout_commentaire(prenom_input, nom_input, commentaire_input); // Ajouter le commentaire
    }
  }
  
  function ajout_commentaire(prenom_input, nom_input, commentaire_input) {
    let container = document.getElementById("comment-list");
    let div = document.createElement("div");
  
    div.innerHTML = `
      <div class="flex-1 py-10 border-t border-gray-200">
         <h3 class="font-medium text-gray-900">${prenom_input} ${nom_input}</h3>
         <div class="prose prose-sm mt-4 max-w-none text-gray-500">
          <p>${commentaire_input}</p>
         </div>
      </div>`;
  
    container.appendChild(div); // Ajouter le commentaire dans la liste
  }