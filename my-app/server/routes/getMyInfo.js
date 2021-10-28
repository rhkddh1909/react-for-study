const express = require('express');
const router = express.Router();
const pool = require('./config/dbPool');

pool.on('acquire',function(connection){
    console.log('Connection %d acquired', connection.threadId);
});
pool.on('release',function(connection){
    console.log('Connection %d release', connection.threadId);
});
pool.on('enqueue',function(connection){
    console.log('Connection %d enqueue', connection.threadId);
});

var query = 
"SELECT USER_NAME"  //유저 이름
   + ", CO_NAME"    //화사 이름
   + ", NICK_NAME"  //별명
   + ", JOB"        //직업
   + ", ENTRY_DY"   //입사일
   + ", RESG_DY"    //퇴사일
   + ", INSTA_ID"   //인스타아이디
   + ", CONCAT('https://github.com/',GIT_ID) AS GIT_URL" //git url
   + ", KAKAO_ID"   //카카오아이디
   + ", EMAIL"      //이메일
   + ", PHONE_NUM"  //핸드폰번호
   + ", REG_DY"     //등록일시
   + ", CHG_DY"     //수정일시
+ " FROM MY_PORTFOLIO.MY_INFO"
;

console.log(query);

router.get('/', function(req,res){
    pool.getConnection(function(err,connection){
        if (err) throw err;
        connection.query(query, (err, data) => {
            if(!err) {
                if(data.length == 1){
                    res.send(data[0]);
                }
                else if(data.length > 1){
                    res.send(data);
                }
            }
            else res.send(err);
       })
       connection.release();
    })
})

module.exports = router;