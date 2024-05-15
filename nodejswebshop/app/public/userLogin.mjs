document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginPage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission du formulaire par défaut

        // Récupérer les valeurs des champs du formulaire
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch("mock-users.json")
            .then(response => response.json())
            .then(users => {
                // Vérifier si le nom d'utilisateur existe dans les données
                const user = users.find(user => user.name === username);

                if (!user ) {
                    console.log('Données incorrectes');
                    return;
                }

                if(user.password !== password){
                    console.log('Données incorrectes');
                    return;
                }

                // Si les informations d'identification sont correctes
                console.log('Connexion réussie');
                // Rediriger vers une autre page ou effectuer d'autres actions nécessaires
            })
            .catch(error => {
                console.error('Erreur lors du chargement des données utilisateur:', error);
            });
    });
});
