const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4MzY1OTkzMH0.cel3ch1sRm5S5gg5w_Rcx0oB--m2EbsxIV3MMZnuO6U';

const payload = jwt.verify(token, 'mySecret');
console.log(payload);