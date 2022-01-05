function programa() {
    let profissoes = {

        medico: {
            nomeDoCurso: "medicina",
            duracaoDoCurso: "4 anos",
            dificuldade: "Dificil",
            ondeEstudar: "Faculdades publicas e privadas",
            salario: 6500,
        },

        professor: {
            nomeDoCurso: "pedagogia",
            duracaoDoCurso: "3 anos",
            dificuldade: "medio",
            ondeEstudar: "faculdades publicas e privadas",
            salario: 3500,
        },

        programador: {
            nomeDoCurso: "ciencias da computação",
            duracaoDoCurso: "4 anos",
            dificuldade: "medio",
            ondeEstudar: "faculdades publicas e privadas, EAD",
            salario: 10000,
        },
    }

    function medico() {

        alert(`
        Nome do curso: ${profissoes.medico.nomeDoCurso}
        Duração do curso: ${profissoes.medico.duracaoDoCurso}
        Dificuldade: ${profissoes.medico.dificuldade}
        Onde estudar: ${profissoes.medico.ondeEstudar}
        Salário: ${profissoes.medico.salario}
        `)
        dnv = prompt("quer saber sobre outros cursos?")
        if (dnv === "sim") {
            programa();
        } else {
            alert("Obrigado e até mais")
        };
    };

    function professor() {

        alert(`
        Nome do curso: ${profissoes.professor.nomeDoCurso}
        Duração do curso: ${profissoes.professor.duracaoDoCurso}
        Dificuldade: ${profissoes.professor.dificuldade}
        Onde estudar: ${profissoes.professor.ondeEstudar}
        Salário: ${profissoes.professor.salario}
        `)
        dnv = prompt("quer saber sobre outros cursos?")
        if (dnv === "sim") {
            programa();
        } else {
            alert("Obrigado e até mais")
        };
    };

    function programador() {

        alert(`
        Nome do curso: ${profissoes.programador.nomeDoCurso}
        Duração do curso: ${profissoes.programador.duracaoDoCurso}
        Dificuldade: ${profissoes.programador.dificuldade}
        Onde estudar: ${profissoes.programador.ondeEstudar}
        Salário: ${profissoes.programador.salario}
        `);
        dnv = prompt("quer saber sobre outros cursos?")
        if (dnv === "sim") {
            programa();
        } else {
            alert("Obrigado e até mais")
        };
    }


    opcao = Number(prompt("Bem vindo ao terminal de informações ! \nAqui você verá os cursos disponiveis pra aplicar, diremos as informações sobre cada curso, primeiro selecione3 um curso\n1 - médico\n2 - professor\n3 - programador"));
    
    switch (opcao) {
        case 1:
            medico();
            break;
        case 2:
            professor();
            break;
        case 3:
            programador();
            break;

        default:
            alert("você precisa por algum valor !")
            programa();
            break;
    }


};
programa();