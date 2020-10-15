const https = require('https');

async function getGoalsForTeam1(team, year){
    var TOTAL = 0;
    var options = {
        hostname: `jsonmock.hackerrank.com`,
        path: `/api/football_matches?year=${year}&team1=${team}&page=${1}`,
        method: 'GET'
    }
    https.request(options, async (res) => {
        res.on('data', d => {
            // process.stdout.write(d);
            var DATA = d.toString('utf8');
            DATA = JSON.parse(DATA);
            // console.log()
            const data = DATA.data;
            const total_pages = DATA.total_pages;
            // console.log(TOTAL);
            for (var i = 0; i < data.length; i++) {
                TOTAL += parseInt(data[i].team1goals);
            }
            // console.log(TOTAL);
            // console.log(total_pages);
            const _foorLoop = async (_loop) => {
                for (var j = 2; j <= total_pages; j++) {
                    const more_options = {
                        hostname: `jsonmock.hackerrank.com`,
                        path: `/api/football_matches?year=${year}&team1=${team}&page=${j}`,
                        method: 'GET'
                    };
                    const req2 = await https.request(more_options, (_res) => {
                        _res.on('data', _d => {
                            DATA = JSON.parse(_d.toString('utf8'));
                            data = DATA.data;
                            for (var i = 0; i < data.length; i++) {
                                TOTAL += parseInt(data[i].team1goals);
                            }
                        });
                    });
                    await req2.on('error', error => {
                        console.error(error);
                    });
                    console.log("exec 1 : iter : " + j);
                    await req2.end();
                }
            };
            _foorLoop();
            console.log("TOTAL hello1 " + TOTAL);
            // console.log(TOTAL);
            flag1 = 1;

        });
    })
        .on('error', error => {
            console.error(error);
        })
        .end();

    return TOTAL;
}

async function getGoalsForTeam2(team, year){
    

    var TOTAL = 0;
    var options = {
        hostname: `jsonmock.hackerrank.com`,
        path: `/api/football_matches?year=${year}&team2=${team}&page=${1}`,
        method: 'GET'
    }
    https.request(options, async (res) => {
        res.on('data', d => {
            // process.stdout.write(d);
            var DATA = d.toString('utf8');
            DATA = JSON.parse(DATA);
            // console.log()
            const data = DATA.data;
            const total_pages = DATA.total_pages;
            // console.log(TOTAL);
            for (var i = 0; i < data.length; i++) {
                TOTAL += parseInt(data[i].team2goals);
            }
            // console.log(TOTAL);
            // console.log(total_pages);
            const forLoop = async (loop) => {
                for (var j = 2; j <= total_pages; j++) {
                    const more_options = {
                        hostname: `jsonmock.hackerrank.com`,
                        path: `/api/football_matches?year=${year}&team2=${team}&page=${j}`,
                        method: 'GET'
                    };
                    const req4 = await https.request(more_options, async (_res) => {
                        _res.on('data', _d => {
                            DATA = JSON.parse(_d.toString('utf8'));
                            data = DATA.data;
                            for (var i = 0; i < data.length; i++) {
                                TOTAL += parseInt(data[i].team2goals);
                            }
                        });
                    });
                    await req4.on('error', error => {
                        console.error(error);
                    });
                    console.log("exec 2 : iter : " + j);

                    await req4.end();
                }
            };
            forLoop();
            console.log("TOTAL hello2 " + TOTAL);
            // return TOTAL;
            flag2 = 1;
            return TOTAL;
        });
    })
        .on('error', error => {
            console.error(error);
        })
        .end()
    return TOTAL;
}


module.exports = async (team, year) => {
    var TOTAL = 0;

    TOTAL += await getGoalsForTeam1(team, year);
    TOTAL += parseInt(await getGoalsForTeam2(team, year));

    return TOTAL;
};

// module.exports = {
//     getTotalGoals: getTotalGoals
// };