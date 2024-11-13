package com.projetoteste.projetoteste.controller;

import com.projetoteste.projetoteste.model.Paciente;
import com.projetoteste.projetoteste.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teste")
public class PacienteController {

    @Autowired
    private PacienteRepository pacienteRepository;

    @PostMapping
    public void inserirPaciente(@RequestBody Paciente paciente) {
        pacienteRepository.save(paciente);
    }

    @GetMapping
    public List<Paciente> listarPacientes() {
        return pacienteRepository.findAll();
    }

    @DeleteMapping
    public void removerPaciente(@RequestBody Paciente paciente) {
        pacienteRepository.delete(paciente);
    }

}
