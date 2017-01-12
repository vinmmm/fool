var api = {
	getRovers(){
		var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=SL0f6qCLRNPU0IWzM5xPdfFAPtLOQRW1ChxH34WH';
		return fetch(url).then((res) =>res.json());
	}
};

module.exports = api;