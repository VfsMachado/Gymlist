const treinos = [
    {
      dia: "Dia 1 – Push (Peito, Ombro, Tríceps)",
      exercicios: [
        {
          nome: "Supino reto com barra",
          series: "4x6-8",
          imagem: "https://www.bodybuilding.com/images/2021/march/flat-barbell-bench-press-header-960x540.jpg"
        },
        {
          nome: "Supino inclinado com halteres",
          series: "3x8-10",
          imagem: "https://www.muscleandstrength.com/sites/default/files/incline-dumbbell-press.jpg"
        },
        {
          nome: "Desenvolvimento militar com barra",
          series: "4x6-8",
          imagem: "https://www.muscleandstrength.com/sites/default/files/barbell-shoulder-press.jpg"
        },
        {
          nome: "Elevação lateral",
          series: "3x12-15",
          imagem: "https://cdn.muscleandstrength.com/sites/default/files/lateral-dumbbell-raise.jpg"
        },
        {
          nome: "Tríceps testa",
          series: "3x10-12",
          imagem: "https://www.muscleandstrength.com/sites/default/files/skull-crusher.jpg"
        },
        {
          nome: "Tríceps corda na polia",
          series: "3x12-15",
          imagem: "https://cdn.muscleandstrength.com/sites/default/files/triceps-pushdown-rope.jpg"
        }
      ]
    },
  
    {
      dia: "Dia 2 – Pull (Costas, Bíceps, Posterior de ombro)",
      exercicios: [
        {
          nome: "Barra fixa (ou puxada na frente)",
          series: "4x6-8",
          imagem: "https://www.bodybuilding.com/images/2020/august/how-to-do-a-pull-up-960x540.jpg"
        },
        {
          nome: "Remada curvada",
          series: "4x8-10",
          imagem: "https://cdn.muscleandstrength.com/sites/default/files/bent-over-row.jpg"
        },
        {
          nome: "Puxada unilateral (ou remada baixa)",
          series: "3x10-12",
          imagem: "https://www.muscleandstrength.com/sites/default/files/seated-cable-row.jpg"
        },
        {
          nome: "Face pull",
          series: "3x12-15",
          imagem: "https://www.muscleandstrength.com/sites/default/files/face-pull.jpg"
        },
        {
          nome: "Rosca direta",
          series: "3x10-12",
          imagem: "https://www.muscleandstrength.com/sites/default/files/barbell-curl.jpg"
        },
        {
          nome: "Rosca martelo",
          series: "3x12-15",
          imagem: "https://www.muscleandstrength.com/sites/default/files/hammer-curl.jpg"
        }
      ]
    },
  
    {
      dia: "Dia 3 – Legs (Pernas completas)",
      exercicios: [
        {
          nome: "Agachamento livre",
          series: "4x6-8",
          imagem: "https://www.muscleandstrength.com/sites/default/files/barbell-squat.jpg"
        },
        {
          nome: "Leg press",
          series: "4x10-12",
          imagem: "https://cdn.muscleandstrength.com/sites/default/files/leg-press.jpg"
        },
        {
          nome: "Cadeira extensora",
          series: "3x12-15",
          imagem: "https://www.muscleandstrength.com/sites/default/files/leg-extension.jpg"
        },
        {
          nome: "Mesa flexora",
          series: "3x12-15",
          imagem: "https://www.muscleandstrength.com/sites/default/files/seated-leg-curl.jpg"
        },
        {
          nome: "Stiff",
          series: "3x10-12",
          imagem: "https://www.muscleandstrength.com/sites/default/files/romanian-deadlift.jpg"
        },
        {
          nome: "Elevação de panturrilha",
          series: "4x15-20",
          imagem: "https://www.muscleandstrength.com/sites/default/files/seated-calf-raise.jpg"
        }
      ]
    },
  
    {
      dia: "Dia 4 – Upper (Corpo superior geral)",
      exercicios: [
        {
          nome: "Supino reto halteres",
          series: "3x10-12",
          imagem: "https://www.muscleandstrength.com/sites/default/files/dumbbell-bench-press.jpg"
        },
        {
          nome: "Pull down (ou barra)",
          series: "3x10-12",
          imagem: "https://www.muscleandstrength.com/sites/default/files/pulldown.jpg"
        },
        {
          nome: "Crucifixo máquina",
          series: "3x12-15",
          imagem: "https://www.muscleandstrength.com/sites/default/files/machine-fly.jpg"
        },
        {
          nome: "Remada unilateral",
          series: "3x10-12",
          imagem: "https://www.muscleandstrength.com/sites/default/files/one-arm-row.jpg"
        },
        {
          nome: "Elevação lateral + frontal (bi-set)",
          series: "3x15",
          imagem: "https://www.muscleandstrength.com/sites/default/files/dumbbell-lateral-raise.jpg"
        },
        {
          nome: "Tríceps francês + Rosca direta",
          series: "3x12",
          imagem: "https://www.muscleandstrength.com/sites/default/files/overhead-triceps-extension.jpg"
        }
      ]
    },
  
    {
      dia: "Dia 5 – Lower (Foco em mobilidade e posterior)",
      exercicios: [
        {
          nome: "Avanço com halteres",
          series: "3x12 (cada perna)",
          imagem: "https://www.muscleandstrength.com/sites/default/files/dumbbell-lunge.jpg"
        },
        {
          nome: "Agachamento búlgaro",
          series: "3x10-12",
          imagem: "https://www.muscleandstrength.com/sites/default/files/bulgarian-split-squat.jpg"
        },
        {
          nome: "Stiff com halteres",
          series: "3x12-15",
          imagem: "https://www.muscleandstrength.com/sites/default/files/dumbbell-deadlift.jpg"
        },
        {
          nome: "Cadeira abdutora",
          series: "3x15-20",
          imagem: "https://www.muscleandstrength.com/sites/default/files/leg-abductor-machine.jpg"
        },
        {
          nome: "Panturrilha no leg",
          series: "4x20",
          imagem: "https://www.muscleandstrength.com/sites/default/files/calf-raise.jpg"
        },
        {
          nome: "Prancha",
          series: "3x30-60s",
          imagem: "https://www.muscleandstrength.com/sites/default/files/plank.jpg"
        }
      ]
    }
  ];
  
  export default treinos;
  