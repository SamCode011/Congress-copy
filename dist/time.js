const getRemainTime = deadline => {
    let now = new Date(),
        remainTime    = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours   = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays    = Math.floor(remainTime / (3600 *24));

        return {
            remainTime ,
            remainSeconds,
            remainMinutes ,
            remainHours ,
            remainDays


        }
    }

const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval ( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

        if (t.remainTime <= 1) {
            clearInterval (timerUpdate);
            el.innerHTML = finalMessage;
        }
    },1000)
}
countdown(' Nov 25 2024 14:08:06 GMT-0500','count-reverse','final')
/* console.log(getRemainTime('Nov 08 2023 22:25:06 GMT-0500')) */