
const tbodyContainer = document.getElementById('tbody-container');

fetch('../users.csv')
  .then(response => response.text())
  .then(data => {
    const userData = data.split('\n').map(row => JSON.parse(row));
    const sortedData = userData.sort((a, b) => {
      const nomPrenomA = a.nom_prenom.toUpperCase();
      const nomPrenomB = b.nom_prenom.toUpperCase();
      if (nomPrenomA < nomPrenomB) return -1;
      if (nomPrenomA > nomPrenomB) return 1;
      return 0;
    });

    sortedData.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.nom_prenom}</td>
        <td>${user.numero_identite_nationale}</td>
        <td>${user.numero_telephone}</td>
        <td>${user.email}</td>
      `;
      tbodyContainer.appendChild(row);
    });
  });