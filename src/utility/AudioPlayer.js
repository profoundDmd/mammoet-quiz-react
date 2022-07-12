export function diminishSound(audio, targetVolume){
    let diminishSound = setInterval(() => {
        audio.volume -= 0.1;

        if(audio.volume <= (targetVolume + 0.1)){
            audio.volume = targetVolume;
            clearInterval(diminishSound);
        }
    }, 200);
}

export function stopSound(audio){
    let diminishSound = setInterval(() => {
        audio.volume -= 0.1;

        if(audio.volume <= 0.1){
            audio.pause();
            audio.currentTime = 0;
            audio.volume = 1;
            clearInterval(diminishSound);
        }
    }, 200);
}

export function turnUpSound(audio, targetVolume){
    let turnUpSound = setInterval(() => {
        audio.volume += 0.1;

        if(audio.volume >= (targetVolume - 0.11)){
            audio.volume = targetVolume;
            clearInterval(turnUpSound);
        }
    }, 200);
}