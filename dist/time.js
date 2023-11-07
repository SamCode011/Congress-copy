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

};
console.log(getRemainTime())