const helpers = {
    fmtMSS: function(time){
        return Math.floor(time / 60)+'m '+Math.floor(time % 60)+'s';
    }
}

export default helpers


