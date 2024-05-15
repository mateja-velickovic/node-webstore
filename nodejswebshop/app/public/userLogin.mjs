document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginPage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission du formulaire par défaut

        // Données entrées par l'utilisateur 
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch("mock-users.json")
            .then(response => response.json())
            .then(users => {
                const user = users.find(user => user.name === username);

                if (!user ) {
                    console.log('Données incorrectes');
                    return;
                }

                if(user.password !== password){
                    console.log('Données incorrectes');
                    return;
                }

                console.log('Connexion réussie');
            })
            .catch(error => {
                console.error('Erreur : ', error);
            });
    });
});
