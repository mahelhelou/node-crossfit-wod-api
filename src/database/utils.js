const fs = require('fs')

exports.saveToDatabase = function (DB) {
	fs.writeFileSync('./src/database/db.json', JSON.stringify(DB, null, 2), {
		encoding: 'utf-8'
	})
}
