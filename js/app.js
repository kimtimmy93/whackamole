
$('#container').on('mousedown', (e) => {
    $('#container').css({'cursor': 'url(images/hammer2.png), crosshair'})
        if($(e.target).attr('src') === 'images/mole.png'){
            game.points++
            const audio = new Audio('images/ouch.mp3');
            audio.play();
            console.log(game.points)

        } else if($(e.target).attr('src') === 'images/hole.png' > 1){
        game.points--
        }
    
    $('#points').text(`POINTS: ${game.points}`)
    $(e.target).attr('src', 'images/hole.png')
    console.log(e.target)
})

$('#container').on('mouseup', () => {
    $('#container').css({'cursor': 'url(images/hammer.png), crosshair'})
})


$('#timer').hide();
$('#points').hide();
$('.hole').hide();
$('#reset').hide();

$(window).keydown(function (e) { 
    if(e.keyCode == 32) {
        $('#start').hide();
        $('#timer').show();
        $('#points').show();
        $('.hole').show();
        $('#reset').show();
        $('#container').css('background-image', 'url(images/grass.png)');
        game.setTimer();
        game.setPeepHoles();
        game.setSpawnMoles();
    }
});

const game = {
    timer: 30,
    points: 0,
    setTimer(){
        const $timer = $('#timer')
        const interval = setInterval(() => {
            if(this.timer === 0) {
                clearInterval(interval)
                $('.hole').hide();
                $timer.text(`TIME'S UP!`)
            }
            else {
                this.timer--
                $timer.text(`TIMER: ${this.timer}s`)
            }
            
        },1000);
    },
    setPoints(){
        const $points = $('#points')
        $points.text(`Points: ${this.points}`)
    },
    setSpawnMoles(){
        console.log($(holes).attr('src'))
        if(this.points > 4 && this.points < 10) {
            $('.mole').attr('src', 'images/hole.png');
                        this.setPeepHoles();
                let spawnMoles = setInterval(()=> {
                        this.setSpawnMoles(); 
                        clearInterval(spawnMoles)
                    }, Math.round(Math.random()*(1000 - 500)+500));
            } else if(this.points > 9) {
                $('.mole').attr('src', 'images/hole.png');
                    this.setPeepHoles();
                let spawnMoles = setInterval(()=> {
                    this.setSpawnMoles(); 
                    clearInterval(spawnMoles)
                    }, Math.round(Math.random()*(600 - 300)+300));
            } else if(this.points > 14) {
                $('.mole').attr('src', 'images/hole.png');
                this.setPeepHoles();
                let spawnMoles = setInterval(()=> {
                    this.setSpawnMoles(); 
                    clearInterval(spawnMoles)
                }, Math.round(Math.random()*(300 - 100)+100));
            }  else if(this.points > 19) {
                $('.mole').attr('src', 'images/hole.png');
                this.setPeepHoles();
                let spawnMoles = setInterval(()=> {
                    this.setSpawnMoles(); 
                    clearInterval(spawnMoles)
                }, Math.round(Math.random()*(50 - 10)+10));
            } else {
                $('.mole').attr('src', 'images/hole.png');
                this.setPeepHoles();
                let spawnMoles = setInterval(()=> {
                    this.setSpawnMoles(); 
                    clearInterval(spawnMoles)
                }, Math.round(Math.random()*(1500 - 500)+500))
            }
    },
    setPeepHoles(){
        const $hole = $('.mole');
        const index = Math.floor(Math.random()*$hole.length);
        const randHole = $hole[index];
        console.log($(randHole).attr("src") === "images/mole.png")
            if($(randHole).attr("src") === "images/mole.png") {
                console.log('same hole')
                return this.setPeepHoles();
            } else {
                $(randHole).attr("src", 'images/mole.png')
            }
            return randHole;
    }
}

    






