const dados = `
Nome: João Silva;
Email:joao.silva@ifce.edu.br; 
Curso: Técnico em Informática;
Matricula:202312345`;

const partes = dados.split(';');
const nome = partes[0].split(':')[1];
const email = partes[1].split(':')[1];
const cursoOriginal = partes[2].split(':')[1];
const matricula = partes[3].split(':')[1];

const posicaoEmail = dados.indexOf(email);
const dominioCorreto = email.endsWith('@ifce.edu.br');
const matriculaAnoCorreto = matricula.startsWith('2023');
const cursoNovo = cursoOriginal.replace('Técnico em Informática', 'Informática para Internet');
const dadosModificados = dados.replaceAll(':', '=');


console.log("--- Análise dos Dados do Usuário ---");
console.log(`Nome Completo: ${nome}`);
console.log(`Posição inicial do e-mail: ${posicaoEmail}`);
console.log(`O e-mail pertence ao domínio @ifce.edu.br? ${dominioCorreto ? 'Sim' : 'Não'}`);
console.log(`A matrícula começa com o ano 2023? ${matriculaAnoCorreto ? 'Sim' : 'Não'}`);
console.log(`String com o curso atualizado: ${dados.replace(cursoOriginal, cursoNovo)}`);
console.log(`String com dois pontos (:) trocados por igual(=): ${dadosModificados}`);
console.log("-----------------------------------------");

console.log(`Olá, ${nome}! Seu e-mail institucional é ${email} e você está matriculado no curso de ${cursoNovo}.`);