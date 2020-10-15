const https = require('https');

function getGoalsForTeam(team, year, team_no){
    return new Promise(resolve => {
        var TOTAL = 0;
        var options = {
            hostname: `jsonmock.hackerrank.com`,
            path: `/api/football_matches?year=${year}&team${team_no}=${team}&page=${1}`,
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
                    if(team_no == 1){
                        TOTAL += parseInt(data[i].team1goals);
                    } else {
                        TOTAL += parseInt(data[i].team2goals);
                    }
                }
                // console.log(TOTAL);
                // console.log(total_pages);
                const _foorLoop = async (_loop) => {
                    for (var j = 2; j <= total_pages; j++) {
                        const more_options = {
                            hostname: `jsonmock.hackerrank.com`,
                            path: `/api/football_matches?year=${year}&team${team_no}=${team}&page=${j}`,
                            method: 'GET'
                        };
                        const req2 = await https.request(more_options, (_res) => {
                            _res.on('data', _d => {
                                DATA = JSON.parse(_d.toString('utf8'));
                                data = DATA.data;
                                for (var i = 0; i < data.length; i++) {
                                    if(team_no == 1){
                                        TOTAL += parseInt(data[i].team1goals);
                                    } else {
                                        TOTAL += parseInt(data[i].team2goals);
                                    }
                                    
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
                console.log(`TOTAL hello${team_no} ` + TOTAL);
                resolve(TOTAL);
                flag1 = 1;

            });
        })
            .on('error', error => {
                console.error(error);
            })
            .end();
    });
}

module.exports = async (team, year) => {
    var TOTAL = 0;

    TOTAL += await getGoalsForTeam(team, year, 1);
    TOTAL += await getGoalsForTeam(team, year, 2);

    return TOTAL;
};
