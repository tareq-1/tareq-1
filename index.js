const args = process.argv.slice(2);
const name = args[0];
const socialMedia = args[1];

const likes = require('likes')

if (socialMedia === "Facebook") {
    likes.facebook(name, (err, count) => {
        if (err) {
            console.error(err)
            process.exit()
        }
        console.log(name, `has`, count, 'followers on Facebook')
    })
}