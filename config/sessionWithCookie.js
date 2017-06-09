/* 
placeholder middleware for handling sessions 


funkcija treba:
	provjeriti ako postoji cookie: ako ne redirect na login
	spremi cookie vrijednosti u cookie objekt na request objektu 
*/

module.exports = function(req, res, next) {
	
	var reqCookie = req.headers.cookie ? req.headers.cookie.split('=') : null;

	req.session = {};

	if (reqCookie) {
		
		req.session[reqCookie[0]] = reqCookie[1];
	}
	
	next();
}

