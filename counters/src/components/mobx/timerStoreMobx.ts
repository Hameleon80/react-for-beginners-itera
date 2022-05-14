import { makeAutoObservable } from "mobx";

class TimerStore {
    
    constructor(){
        this.houres = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.isStarted = false;
        makeAutoObservable(this);
    }

    houres: number;
    minutes: number;
    seconds: number;
    isStarted: boolean;

    setHoures(hr: number) {
        this.houres = hr;
    }

    setMinutes(mn: number) {
        this.minutes = mn;
    }

    setSeconds(sec: number) {
        this.seconds = sec;
    }

    setIsStarted(value: boolean){
        this.isStarted = value;
    }

    incrementSeconds() {this.seconds++}
    incrementMinutes() {this.minutes++}
    incrementHoures() {this.houres++}
}

export default new TimerStore()