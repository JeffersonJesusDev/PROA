package com.projetoteste.projetoteste.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Paciente")
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long pk_id_paciente;
    @Column(name = "nome_paciente")
    private String nome;
    @Column(name = "email_paciente")
    private String email;
    @Column(name = "telefone_paciente")
    private String telefone;

    public Long getPk_paciente() {
        return pk_id_paciente;
    }

    public void setPk_paciente(Long pk_paciente) {
        this.pk_id_paciente = pk_paciente;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}
