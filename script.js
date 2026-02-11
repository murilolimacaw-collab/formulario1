

let currentStep = 0;
const steps = document.querySelectorAll(".step");

function showStep(index) {
  steps.forEach(step => step.classList.remove("active"));
  steps[index].classList.add("active");
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}



const impostosPorEstado = {
  AC: { icms: 7, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 19, servico: 81 },
  AL: { icms: 7, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 19, servico: 81 },
  AP: { icms: 6, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 18, servico: 82 },
  AM: { icms: 8, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 20, servico: 80 },
  BA: { icms: 8.5, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 20.5, servico: 79.5 },
  CE: { icms: 8, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 20, servico: 80 },
  DF: { icms: 6, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 18, servico: 82 },
  ES: { icms: 5, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 17, servico: 83 },
  GO: { icms: 7, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 19, servico: 81 },
  MA: { icms: 10, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 22, servico: 78 },
  MT: { icms: 5, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 17, servico: 83 },
  MS: { icms: 5, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 17, servico: 83 },
  MG: { icms: 6, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 18, servico: 82 },
  PA: { icms: 7, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 19, servico: 81 },
  PB: { icms: 8, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 20, servico: 80 },
  PR: { icms: 7, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 19, servico: 81 },
  PE: { icms: 8.5, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 20.5, servico: 79.5 },
  PI: { icms: 9, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 21, servico: 79 },
  RJ: { icms: 8, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 20, servico: 80 },
  RN: { icms: 8, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 20, servico: 80 },
  RS: { icms: 5, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 17, servico: 83 },
  RO: { icms: 5.5, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 17.5, servico: 82.5 },
  RR: { icms: 5, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 17, servico: 83 },
  SC: { icms: 5, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 17, servico: 83 },
  SP: { icms: 6, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 18, servico: 82 },
  SE: { icms: 7, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 19, servico: 81 },
  TO: { icms: 6, difal: 12, pis: 1.65, cofins: 7.6, iss: 5, material: 18, servico: 82 }
};


function preencherImpostos() {
  const estado = document.querySelector('[name="estado"]').value;
  const dados = impostosPorEstado[estado];

  if (!dados) return;

  document.getElementById("icms").value = dados.icms;
  document.getElementById("difal").value = dados.difal;
  document.getElementById("pis").value = dados.pis;
  document.getElementById("cofins").value = dados.cofins;
  document.getElementById("iss").value = dados.iss;
  document.getElementById("percent_material").value = dados.material;
  document.getElementById("percent_servico").value = dados.servico;
}


let etapaAtual = 1;

function mostrarEtapa(n) {
  document.querySelectorAll('.etapa').forEach(e => e.classList.remove('ativa'));
  document.getElementById('etapa' + n).classList.add('ativa');
}

function proximaEtapa() {
  etapaAtual++; 
  mostrarEtapa(etapaAtual);
}

function voltarEtapa() {
  etapaAtual--;
  mostrarEtapa(etapaAtual);
}
