CREATE DATABASE db_Escola;
USE db_Escola;

CREATE TABLE tb_aluno (
    aluno_id INT AUTO_INCREMENT PRIMARY KEY,
    nome_aluno VARCHAR(100) NOT NULL,
    data_nascimento DATE,
    telefone_aluno VARCHAR(15),
    endereco_aluno VARCHAR(255),
    cpf_aluno CHAR(11),
    turma_aluno VARCHAR(20)
);

CREATE TABLE tb_professor (
    professor_id INT AUTO_INCREMENT PRIMARY KEY,
    nome_professor VARCHAR(100) NOT NULL,
    cpf_professor CHAR(11),
    data_contratacao DATE,
    disciplina_professor VARCHAR(50),
    estado_civil_professor VARCHAR(20),
    nome_mae_professor VARCHAR(100)
);

CREATE TABLE tb_aula (
    aula_id INT AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    sala VARCHAR(10),
    professor_id INT,
    aluno_id INT,
    conteudo VARCHAR(255),
    FOREIGN KEY (professor_id) REFERENCES tb_professor(professor_id),
    FOREIGN KEY (aluno_id) REFERENCES tb_aluno(aluno_id)
);

INSERT INTO tb_aluno (nome, data_nascimento, telefone, endereco, cpf, turma) VALUES
('Jeff1', '2005-01-15', '1234-5678', 'Rua A, 123', '12345678901', 'A'),
('Jeff2', '2006-02-20', '1234-5679', 'Rua B, 456', '12345678902', 'B'),
('Jeff3', '2007-03-25', '1234-5680', 'Rua C, 789', '12345678903', 'C'),
('Jeff4', '2005-04-30', '1234-5681', 'Rua D, 101', '12345678904', 'A'),
('Jeff5', '2006-05-10', '1234-5682', 'Rua E, 202', '12345678905', 'B'),
('Jeff6', '2007-06-15', '1234-5683', 'Rua F, 303', '12345678906', 'C'),
('Jeff7', '2005-07-20', '1234-5684', 'Rua G, 404', '12345678907', 'A'),
('Jeff8', '2006-08-25', '1234-5685', 'Rua H, 505', '12345678908', 'B'),
('Jeff9', '2007-09-30', '1234-5686', 'Rua I, 606', '12345678909', 'C'),
('Jeff10', '2005-10-05', '1234-5687', 'Rua J, 707', '12345678910', 'A');

INSERT INTO tb_professor (nome, cpf, data_contratacao, disciplina, estado_civil, nome_mae) VALUES
('Prof jefff', '23456789012', '2020-01-10', 'Matemática', 'Solteiro', 'Maria Carlos'),
('Prof JJ', '23456789013', '2019-02-15', 'Português', 'Casada', 'Ana Julia'),
('Prof. Jeffa', '23456789014', '2018-03-20', 'História', 'Solteiro', 'Carla Renato'),
('Prof Jeffz', '23456789015', '2017-04-25', 'Geografia', 'Casada', 'Beatriz Fernanda'),
('Prof Jeff32', '23456789016', '2021-05-30', 'Biologia', 'Divorciado', 'Sofia Marcos'),
('Prof Jack', '23456789017', '2020-06-10', 'Física', 'Casada', 'Joana Paula'),
('Prof Jacks1', '23456789018', '2019-07-15', 'Química', 'Solteiro', 'Laura Roberto'),
('Prof Jacks2', '23456789019', '2018-08-20', 'Inglês', 'Casada', 'Clara Simone'),
('Prof Jeff32', '23456789020', '2017-09-25', 'Educação Física', 'Solteiro', 'Mariana Vitor'),
('Prof Jeff22', '23456789021', '2021-10-30', 'Artes', 'Casado', 'Helena Alice');

INSERT INTO tb_aula (data, horario, sala, professor_id, aluno_id, conteudo) VALUES
('2024-01-10', '08:00', '101', 1, 1, 'Introdução à Matemática'),
('2024-01-11', '08:00', '102', 2, 2, 'Gramática Básica'),
('2024-01-12', '09:00', '103', 3, 3, 'História do Brasil'),
('2024-01-13', '10:00', '104', 4, 4, 'Mapa Mundi'),
('2024-01-14', '11:00', '105', 5, 5, 'Biologia Celular'),
('2024-01-15', '08:00', '106', 6, 6, 'Física Básica'),
('2024-01-16', '09:00', '107', 7, 7, 'Química Geral'),
('2024-01-17', '10:00', '108', 8, 8, 'Conversação em Inglês'),
('2024-01-18', '11:00', '109', 9, 9, 'Educação Física - Teoria'),
('2024-01-19', '08:00', '110', 10, 10, 'Introdução às Artes');

START TRANSACTION;

ALTER TABLE tb_professor MODIFY COLUMN cpf CHAR(14);

INSERT INTO tb_professor (nome, cpf, data_contratacao, disciplina, estado_civil, nome_mae) VALUES
('Prof Jeffzz', '23456789022', '2022-11-05', 'Sociologia', 'Solteiro', 'Marta Rafael'),
('Prof Jeff32', '23456789023', '2023-03-12', 'Filosofia', 'Casada', 'Nina Amanda'),
('Prof Jeff22', '23456789024', '2023-06-18', 'Música', 'Divorciado', 'Olivia Felipe');

ALTER TABLE tb_professor DROP COLUMN cidade;

UPDATE tb_professor SET disciplina = 'Ciências Sociais' WHERE professor_id IN (6, 8, 9, 11, 13);

DELETE FROM tb_professor WHERE professor_id IN (7, 10, 12);

ALTER TABLE tb_professor ADD COLUMN email VARCHAR(100) DEFAULT 'solicitação em andamento';

ALTER TABLE tb_professor MODIFY COLUMN estado_civil CHAR(10);

ALTER TABLE tb_professor ADD COLUMN formacao_prof VARCHAR(50);

COMMIT;
