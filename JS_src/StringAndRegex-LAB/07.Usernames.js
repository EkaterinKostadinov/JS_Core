function parseEmails(emails) {
    let usernames = [];

    for (let i = 0; i < emails.length; i++) {
        let splittedEmail = emails[i].split('@');
        let username = '';

        username += splittedEmail[0] + '.';
        splittedEmail = splittedEmail[1].split('.');

        for (let j = 0; j < splittedEmail.length; j++) {

            username += splittedEmail[j][0];

        }
        usernames.push(username);
    }
    console.log(usernames.join(', '));
}