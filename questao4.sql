SELECT CPF, nome, telefone
FROM cliente c JOIN endereco e ON c.CPF = e.CPF
JOIN contato ct ON c.CPF = ct.CPF
JOIN telefone t ON ct.id_contato = t.id_contato
WHERE e.estado = 'SP';
