// So long as there is either no object
// loopTimes[thisGame][thisWeather][thisHour], when the extension
// plays music for game "thisGame", weather "thisWeather", and hour "thisHour",
// it will loop using the old behavior.

// If you add a new game to loopTimes, you don't need
// to add all 24 sets of times at once. If you only add a few,
// it won't introduce any bugs with the other hour tracks.

var loopTimes = {
	"animal-crossing" : {
		"sunny" : {
			17 : {
				start : 54.934,
				end : 114.936
			}
		}
	},
	"wild-world" : {
		"sunny" : {
			0 : {
				start : 12.290,
				end : 61.519
			},
			1 : {
				start : 12.789,
				end : 103.603
			},
			2 : {
				start : 23.529,
				end : 92.012
			},
			3 : {
				start : 26.777,
				end : 66.779
			},
			4 : {
				start : 23.350,
				end : 46.761
			},
			5 : {
				start :18.335,
				end : 92.183
			},
			6 : {
				start : 39.030,
				end : 78.217
			},
			7 : {
				start : 4.546,
				end : 44.543
			},
			8 : {
				start : 6.625,
				end : 33.298
			},
			9 : {
				start : 15.648,
				end : 51.653
			},
			10 : {
				start : 21.807,
				end : 60.723
			},
			11 : {
				start : 29.210,
				end : 80.277
			},
			12 : {
				start : 16.336,
				end : 101.667
			},
			13 : {
				start : 15.343,
				end : 63.349
			},
			14 : {
				start : 22.163,
				end : 75.500
			},
			15 : {
				start : 19.831,
				end : 56.427
			},
			16 : {
				start : 9.838,
				end : 101.752
			},
			17 : {
				start : 6.489,
				end : 46.493
			},
			18 : {
				start : 12.258,
				end : 66.257
			},
			19 : {
				start : 19.880,
				end : 64.865
			},
			20 : {
				start : 63.204,
				end : 137.064
			},
			21 : {
				start : 6.695,
				end : 54.699
			},
			22 : {
				start : 51.741,
				end : 142.547
			},
			23 : {
				start : 50.561,
				end : 126.358
			}
		}
	}
}