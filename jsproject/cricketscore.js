let impdetailsbtn = document.querySelector("#imp-details-btn")
let totalover = document.querySelector("#TOTALover")
let aleader = document.querySelector("#a-leader")
let bleader = document.querySelector("#b-leader")
let previousbtn = document.querySelector("#previousbtn")
let nextbtn = document.querySelector("#nextbtn")







document.getElementById('team-a-name').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission
        const inputs = Array.from(this.querySelectorAll('input[type="text"]'));
        const currentIndex = inputs.indexOf(document.activeElement);
        if (currentIndex !== -1 && currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
        }
    }
});


document.getElementById('team-b-name').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission
        const inputs = Array.from(this.querySelectorAll('input[type="text"]'));
        const currentIndex = inputs.indexOf(document.activeElement);
        if (currentIndex !== -1 && currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
        }
    }
});

document.querySelector('.imp-details').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission
        const inputs = Array.from(this.querySelectorAll('input[type="text"]'));
        const currentIndex = inputs.indexOf(document.activeElement);
        if (currentIndex !== -1 && currentIndex < inputs.length - 1) {
            inputs[currentIndex + 1].focus();
        }
    }
});

impdetailsbtn.addEventListener("click", () => {
    if (totalover.value == "" || totalover.value == NaN || aleader.value == "" || bleader.value == "") {
        alert("Enter correct Details")
    }
    else {
        const over = totalover.value
        let Ateam = aleader.value
        let bteam = bleader.value
        document.querySelector(".imp-details").style.display = "none"
        document.querySelector(".players-name-div").style.display = "flex"
        document.querySelector(".player-name-btn-div").style.display = "block"
        document.querySelector("#a-team-name").innerHTML = `${Ateam}`
        document.querySelector("#b-team-name").innerHTML = `${bteam}`
        previousbtn.style.display = "block"
        nextbtn.style.display = "none"
        console.log(over, Ateam, bteam)



    }

})
previousbtn.addEventListener("click", () => {

    document.querySelector(".imp-details").style.display = "flex"
    document.querySelector(".players-name-div").style.display = "none"
    document.querySelector(".player-name-btn-div").style.display = "none"
    previousbtn.style.display = "none"
    nextbtn.style.display = "block"

})

nextbtn.addEventListener("click", () => {

    document.querySelector(".imp-details").style.display = "none"
    document.querySelector(".players-name-div").style.display = "flex"
    document.querySelector(".player-name-btn-div").style.display = "block"
    previousbtn.style.display = "block"
    nextbtn.style.display = "none"

})

let playername_btn = document.querySelector(".player-name-btn-div")

let playera = [document.querySelector("#playera1"), document.querySelector("#playera2"), document.querySelector("#playera3"),
document.querySelector("#playera4"), document.querySelector("#playera5"), document.querySelector("#playera6"),
document.querySelector("#playera7"), document.querySelector("#playera8"), document.querySelector("#playera9"),
document.querySelector("#playera10"), document.querySelector("#playera11")]

let playerb = [document.querySelector("#playerb1"), document.querySelector("#playerb2"), document.querySelector("#playerb3"), document.querySelector("#playerb4"), document.querySelector("#playerb5"),
document.querySelector("#playerb6"), document.querySelector("#playerb7"), document.querySelector("#playerb8"),
document.querySelector("#playerb9"), document.querySelector("#playerb10"), document.querySelector("#playerb11")]

playername_btn.addEventListener("click", () => {
    if (playera[0].value == "" || playera[1].value == "" || playera[2].value == "" || playera[3].value == "" || playera[4].value == ""
        || playera[5].value == "" || playera[6].value == "" || playera[7].value == "" || playera[8].value == "" || playera[9].value == "" || playera[10].value == ""
        || playerb[0].value == "" || playerb[1].value == "" || playerb[2].value == "" || playerb[3].value == "" || playerb[4].value == "" || playerb[5].value == ""
        || playerb[6].value == "" || playerb[7].value == "" || playerb[8].value == "" || playerb[9].value == "" || playerb[10].value == "") {
        alert("Enter Correct Details")
    }
    else {
        let A_team_player_name = [playera[0].value, playera[1].value, playera[2].value, playera[3].value,
        playera[4].value, playera[5].value, playera[6].value,
        playera[7].value, playera[8].value, playera[9].value,
        playera[10].value]

        let B_team_player_name = [playera[0].value, playerb[1].value, playerb[2].value, playerb[3].value,
        playerb[4].value, playerb[5].value, playerb[6].value,
        playerb[7].value, playerb[8].value, playerb[9].value,
        playerb[10].value]

        document.querySelector(".player-a1").innerHTML = A_team_player_name[0]
        document.querySelector(".player-a2").innerHTML = A_team_player_name[1]
        document.querySelector(".player-a3").innerHTML = A_team_player_name[2]
        document.querySelector(".player-a4").innerHTML = A_team_player_name[3]
        document.querySelector(".player-a5").innerHTML = A_team_player_name[4]
        document.querySelector(".player-a6").innerHTML = A_team_player_name[5]
        document.querySelector(".player-a7").innerHTML = A_team_player_name[6]
        document.querySelector(".player-a8").innerHTML = A_team_player_name[7]
        document.querySelector(".player-a9").innerHTML = A_team_player_name[8]
        document.querySelector(".player-a10").innerHTML = A_team_player_name[9]
        document.querySelector(".player-a11").innerHTML = A_team_player_name[10]

        document.querySelector(".player-b1").innerHTML = B_team_player_name[0]
        document.querySelector(".player-b2").innerHTML = B_team_player_name[1]
        document.querySelector(".player-b3").innerHTML = B_team_player_name[2]
        document.querySelector(".player-b4").innerHTML = B_team_player_name[3]
        document.querySelector(".player-b5").innerHTML = B_team_player_name[4]
        document.querySelector(".player-b6").innerHTML = B_team_player_name[5]
        document.querySelector(".player-b7").innerHTML = B_team_player_name[6]
        document.querySelector(".player-b8").innerHTML = B_team_player_name[7]
        document.querySelector(".player-b9").innerHTML = B_team_player_name[8]
        document.querySelector(".player-b10").innerHTML = B_team_player_name[9]
        document.querySelector(".player-b11").innerHTML = B_team_player_name[10]
        document.querySelector(".screen").style.display = "none"
        document.querySelector(".livescore").style.display = "flex"
        previousbtn.style.display = "none"
        nextbtn.style.display = "none"
        for (let i = 0; i < A_team_player_name.length; i++) {
            console.log(`player ${i + 1} = ${A_team_player_name[i]}`);
        }
        for (let j = 0; j < B_team_player_name.length; index++) {
            console.log(`player ${j + 1} = ${B_team_player_name[j]}`);

        }


    }
})



let run = document.querySelector("#run")
let wicket = document.querySelector("#wicket")

let over_current = document.querySelector(".over-current")
let over_total = document.querySelector("#over-total")
let ball_this_over = document.querySelector("#ball-this-over")

let btn_zero = document.querySelector(".zero")
let btn_one = document.querySelector(".one")
let btn_two = document.querySelector(".two")
let btn_three = document.querySelector(".three")
let btn_four = document.querySelector(".four")
let btn_six = document.querySelector(".six")
let out = document.querySelector(".out")

let no_ball = document.querySelector(".no-ball")
let no_ball_pop_up_screen = document.querySelector(".no_ball_pop_up_screen")

let wide = document.querySelector(".wide")

let livescore = document.querySelector(".livescore")

let run_current = 0
let wicket_current = 0

let totalBalls = 0;
const ballsPerOver = 6;



let btn_zero_no = document.querySelector(".zero_no")
let btn_one_no = document.querySelector(".one_no")
let btn_two_no = document.querySelector(".two_no")
let btn_three_no = document.querySelector(".three_no")
let btn_four_no = document.querySelector(".four_no")
let btn_six_no = document.querySelector(".six_no")
let out_no = document.querySelector(".out_no")


function run_counter(btn_run) {
    run_current = run_current + btn_run;
    run.innerHTML = run_current
}

function ball_counter() {
    totalBalls++;
    const overs = Math.floor(totalBalls / ballsPerOver);
    const ballsInCurrentOver = totalBalls % ballsPerOver;

    ball_this_over.textContent = `${ballsInCurrentOver}`
    over_total.textContent = `${overs}`

}
wide.addEventListener("click", () => {

    run_counter(1)
    livescore.style.display = "none"
    no_ball_pop_up_screen.style.display = "flex"

})
no_ball.addEventListener("click", () => {
    run_counter(1)
    livescore.style.display = "none"
    no_ball_pop_up_screen.style.display = "flex"


})

btn_zero_no.addEventListener("click", () => {
    run_counter(0);
    livescore.style.display = "flex"
    no_ball_pop_up_screen.style.display = "none"

})
btn_one_no.addEventListener("click", () => {
    run_counter(1)
    livescore.style.display = "flex"
    no_ball_pop_up_screen.style.display = "none"


})
btn_two_no.addEventListener("click", () => {
    run_counter(2)
    livescore.style.display = "flex"
    no_ball_pop_up_screen.style.display = "none"
})
btn_three_no.addEventListener("click", () => {
    run_counter(3)
    livescore.style.display = "flex"
    no_ball_pop_up_screen.style.display = "none"
})
btn_four_no.addEventListener("click", () => {
    run_counter(4)
    livescore.style.display = "flex"
    no_ball_pop_up_screen.style.display = "none"

})
btn_six_no.addEventListener("click", () => {
    run_counter(6)
    livescore.style.display = "flex"
    no_ball_pop_up_screen.style.display = "none"
})
out_no.addEventListener("click", () => {
    if (wicket_current <= 9) {

        wicket_current = wicket_current + 1
        wicket.innerHTML = wicket_current

        livescore.style.display = "flex"
        no_ball_pop_up_screen.style.display = "none"
    } else {
        alert("all out")
    }
})
btn_zero.addEventListener("click", () => {
    run_counter(0);
    ball_counter()

})
btn_one.addEventListener("click", () => {
    run_counter(1)
    ball_counter()


})
btn_two.addEventListener("click", () => {
    run_counter(2)
    ball_counter()
})
btn_three.addEventListener("click", () => {
    run_counter(3)
    ball_counter()
})
btn_four.addEventListener("click", () => {
    run_counter(4)
    ball_counter()

})
btn_six.addEventListener("click", () => {
    run_counter(6)
    ball_counter()
})
out.addEventListener("click", () => {
    if (wicket_current <= 9) {

        wicket_current = wicket_current + 1
        wicket.innerHTML = wicket_current

    } else {
        alert("all out")
    }
})
