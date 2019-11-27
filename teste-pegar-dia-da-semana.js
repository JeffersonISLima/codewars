function diasemana() {
  const hoje = new Date();
  const dia = hoje.getDay();
  const semana = new Array(6);
  semana[0] = 'Domingo';
  semana[1] = 'Segunda-Feira';
  semana[2] = 'Terça-Feira';
  semana[3] = 'Quarta-Feia';
  semana[4] = 'Quinta-Feira';
  semana[5] = 'Sexta-Feira';
  semana[6] = 'Sábado';
  // document.write(semana[dia]);
  console.log(semana[dia]);
}

diasemana();
