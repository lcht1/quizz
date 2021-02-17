let container = document.getElementById('question-container')
let questionDiv = document.getElementById('question')
let nextBtn = document.getElementById('next')
let res = document.getElementById('res')
let img = document.getElementById('image')
let playagain = document.getElementById('playagain')

let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')
let option4 = document.getElementById('option4')

let score = 0
let indCurrentQuestion = 0

const questionsArray = [{
        question: "Em um dado a soma dos lados opostos é sempre o mesmo valor. O número da face oposta à face que contém o 1 é:",
        option1: "2",
        option2: "6",
        option3: "3",
        option4: "4",
        answer: 2
    },
    {
        question: "País com o maior número de Divindades Religiosas em todo mundo?",
        option1: "Itália",
        option2: "Índia",
        option3: "Peru",
        option4: "Grécia",
        answer: 2
    },
    {
        question: "Qual a única parte do corpo humano não recebe sangue? Sem considerar, unhas, cabelos, pelos e dentes.",
        option1: "A córnea",
        option2: "A parte inferior das orelhas",
        option3: "A parte superior do cérebro",
        option4: "A língua",
        answer: 1,

    },
    {

        question: "As pessoas de qual tipo sanguíneo são consideradas doadores universais ?",
        option1: "Tipo A",
        option2: "Tipo B",
        option3: "Tipo ABO",
        option4: "Tipo O",
        answer: 4,
    },
    {
        question: "Que animal, em média, vive mais?",
        option1: "A girafa",
        option2: "O porco",
        option3: "O rinoceronte",
        option4: "O chimpanzé",
        answer: 3,
    },
    {
        question: " De onde é a invenção do chuveiro elétrico?",
        option1: "Austrália",
        option2: "Brasil",
        option3: "Espanha",
        option4: "Inglaterra",
        answer: 2,
    },
    {
        question: "Um ser humano tem, em média, quantos fios de cabelos?",
        option1: "Cerca de 1.000",
        option2: "Cerca de 10.000",
        option3: "Cerca de 100.000",
        option4: "Cerca de 1.000.000",
        answer: 3,
    },
    {
        question: "A capital dos Emirados Árabes Unidos é: ",
        option1: "Abu Dhabi",
        option2: "Arábia Saudita",
        option3: "Istambul",
        option4: "Dubai",
        answer: 1,
    }
]



function loadQuestion(i) {
    let index = questionsArray[i]
    questionDiv.innerHTML = i + 1 + '. ' + (index.question)
    option1.innerHTML = index.option1
    option2.innerHTML = index.option2
    option3.innerHTML = index.option3
    option4.innerHTML = index.option4
}


function loadNextQuestion() {
    let chosenQuestion = document.querySelector('input[type=radio]:checked')
    if (!chosenQuestion) window.alert('Por favor, selecione uma opção válida!')

    let answer = chosenQuestion.value
    if (questionsArray[indCurrentQuestion].answer == answer) score += 1

    chosenQuestion.checked = false
    indCurrentQuestion++
    if (indCurrentQuestion == (questionsArray.length) - 1) nextBtn.innerHTML = 'FINALIZAR QUIZ'
    if (indCurrentQuestion == questionsArray.length) {

        container.style.display = 'none'
        nextBtn.style.display = 'none'
        res.style.display = ''
        playagain.style.display = 'block'
        playagain.style.textDecoration = 'none'

        if (score >= 5) {
            res.innerHTML = `Você acertou ${score} de 8 questões. Parabéns!`
            const div = document.getElementById('img')
            const image = new Image(200, 200) //width, height
            image.src = 'orgulho.jpg'
            div.appendChild(image)

        } else {
            res.innerHTML = `Hmmm... você acertou ${score} de 8 questões. Tente mais uma vez!`
            const div = document.getElementById('img')
            const image = new Image(200, 200)
            image.src = 'burro.jpg'
            div.appendChild(image)

        }

        return;

    }
    loadQuestion(indCurrentQuestion)

}

loadQuestion(indCurrentQuestion)