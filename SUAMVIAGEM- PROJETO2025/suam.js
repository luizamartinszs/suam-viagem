const apiKey = '8bd278f5b7abbd0e1721cff925fc5c10'; 

const regioes = [
  { id: 'clima-norte', cidade: 'Manaus' },
  { id: 'clima-nordeste', cidade: 'Salvador' },
  { id: 'clima-centro', cidade: 'Brasília' },
  { id: 'clima-sudeste', cidade: 'São Paulo' },
  { id: 'clima-sul', cidade: 'Porto Alegre' }
];

regioes.forEach(regiao => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${regiao.cidade}&units=metric&lang=pt_br&appid=${'8bd278f5b7abbd0e1721cff925fc5c10'}`)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const descricao = data.weather[0].description;
      const icone = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icone}@2x.png`;

      document.getElementById(regiao.id).innerHTML = `
        <strong>${regiao.cidade}</strong><br>
        ${temp}°C - ${descricao}<br>
        <img src="${iconUrl}" alt="Clima ${regiao.cidade}">
      `;
    })
    .catch(error => {
      document.getElementById(regiao.id).innerText = `${regiao.cidade}: Não foi possível carregar o clima.`;
    });
});
