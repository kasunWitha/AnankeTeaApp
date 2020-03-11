

const calculateBulbDiff = (t, rh)=>{
    wetBulb = t*Math.atan(0.151977*Math.sqrt(rh + 8.313659)) + Math.atan(t + rh) - Math.atan(rh - 1.676331) + 0.00391838*((Math.sqrt(rh)**3))*Math.atan(0.023101*rh)-4.686035;
    bulbDiff = t-wetBulb;
    return bulbDiff.toFixed(2);
}

module.exports = { calculateBulbDiff };