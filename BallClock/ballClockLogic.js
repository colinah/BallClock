class BallClock {
    constructor(){
        this.moveMinBall = true
        this.hourBalls = [{'id': 'fixed',color:0 ,'hourPosition':0}]
        this.fiveMinBalls = [];
        this.minBalls = [];
        this.ballTotal = 30;
        this.queBalls = [];
        this.quepath = [];
        this.moveToQuePath = [];
        this.moveToMinPath = [];
        this.moveToFivePath = [];
        this.moveToHourPath = [];
        this.moveBallToMin = false
        this.movingBall = false;
    }

    newUpdate() {
        
    }

    update() {
        console.log('hourBalls: ',this.hourBalls)
        if(this.minBalls.length === 5 ){
            this.emptyMinPosition();
            this.movingBall = false;
        } else if(this.fiveMinBalls.length === 12){
            for(let i = 11; i >= 0; i--){
                if(i === 11){
                    this.hourPosition(this.fiveMinBalls.pop(1));

                } else {
                    this.enterQue(this.fiveMinBalls.pop(1));
                }
            }
        } else if(this.hourBalls.length === 12){
            for(let i = 11; i > 0 ; i--){
                // console.log('hour:' , this.hourBalls)
                this.enterQue(this.hourBalls.pop(1));
            };
            this.movingBall = true;
        } else {
            if(!this.movingBall){
                this.quePosition()
                this.shiftQuePosition()
                this.movingBall = true;
                this.moveBallToMin = true;
                return
            } else if(this.moveBallToMin) {
                    this.moveBallPath(this.minBalls[this.minBalls.length-1],this.moveToMinPath,'pathPosition')
            }
        }
    }
    

    show() {
        // //Que Position
        this.showBalls(this.queBalls,this.quePath,'quePosition');
        // //Min Position
        this.showBalls(this.minBalls,this.minPath,'minPosition');
        // //Five Min Position
        this.showBalls(this.fiveMinBalls,this.fiveMinPath,'fiveMinPosition');
        //Hour Position
        this.showBalls(this.hourBalls,this.hourPath,'hourPosition')
    
    }


    moveBallPath = (ball,path,positionName) => {
        fill(ball.color);
        console.log(ball[positionName], path)
        circle(path[ball[positionName]].x,path[ball[positionName]].y, 20);
        ball[positionName] += 1;
        if(ball[positionName] === path.length){
            this.movingBall = false;
        }
    };

    showBalls = (balls,path,positionName) => {
        if(balls !== []){
            for(let i = 0; i < balls.length; i++){
                fill(balls[i].color);
                circle(path[balls[i][positionName]].x,path[balls[i][positionName]].y, 20)
            }
        }
    }

    enterQue = (newBall) => {
        newBall.quePosition = this.queBalls[this.queBalls.length - 1].quePosition + 1;
        this.queBalls.push(newBall)
    }

    quePosition = () => {
        this.minPosition(this.queBalls.shift(1));
    }

    shiftQuePosition = () => {
        for(let i = 0; i < this.queBalls.length; i++){
            this.queBalls[i].quePosition = this.queBalls[i].quePosition -1;
        }
    }

    emptyMinPosition = () => {
        for(let i = 4; i >= 0; i--){
                console.log('before' , this.minBalls[i])
            this.minBalls[i]['minPosition'] = null;
            this.minBalls[i]['fiveMinPosition'] = null;
            this.minBalls[i]['hourPosition'] = null;
            this.minBalls[i]['pathPosition'] = 0;
                console.log('AFTER ' , this.minBalls[i])
            if(i === 4){
                this.fiveMinPosition(this.minBalls.pop(1));
            } else {
                this.enterQue(this.minBalls.pop(1));
            }
         }
    }


    minPosition = (newBall) => {
        newBall.minPosition = this.minBalls.length;
        this.minBalls.push(newBall);
    }

    fiveMinPosition = (newBall) => {
        newBall.fiveMinPosition = this.fiveMinBalls.length;
        this.fiveMinBalls.push(newBall)
    }

    hourPosition = (newBall) => {
        newBall.hourPosition = this.hourBalls.length ;
        this.hourBalls.push(newBall);

    }

    moveQue = () => {

    }

    initiateQueBalls = () => {
        for(let i = 0; i < this.queBalls.length; i++){
            
        }
    }

    queStart() {
        for(let i = 0; i < this.ballTotal; i++){
            let color = (255/this.ballTotal) * i // Math.floor(Math.random()*255)
            this.queBalls.push({
                'id': i,
                'color': color,
                'quePosition': i,
                'minPosition': null,
                'fiveMinPosition': null,
                'hourPosition': null,
                'pathPosition': 0
        })
        }
        this.hourPath = [
            {x:342,y:188},
            {x:321,y:188},
            {x:300,y:188},
            {x:279,y:188},
            {x:258,y:188},
            {x:237,y:188},
            {x:342,y:168},
            {x:321,y:168},
            {x:300,y:168},
            {x:279,y:168},
            {x:258,y:168},
            {x:237,y:168},
          ]
          
          this.fiveMinPath = [
            {x:342,y:138},
            {x:321,y:138},
            {x:300,y:138},
            {x:279,y:138},
            {x:258,y:138},
            {x:237,y:138},
            {x:342,y:118},
            {x:321,y:118},
            {x:300,y:118},
            {x:279,y:118},
            {x:258,y:118},
            {x:237,y:118},
          ]
          
          this.minPath = [
            {x:342,y:88},
            {x:321,y:88},
            {x:300,y:88},
            {x:279,y:88},
            {x:258,y:88},
          ]
          
          this.quePath = [
            {x:172,y:288},
            {x:193,y:288},
            {x:214,y:288},
            {x:235,y:288},
            {x:256,y:288},
            {x:277,y:288},
            {x:298,y:288},
            {x:319,y:288},
            {x:340,y:288},
            {x:362,y:292},
            {x:353,y:313},
            {x:332,y:313},
            {x:311,y:313},
            {x:290,y:313},
            {x:269,y:313},
            {x:248,y:313},
            {x:227,y:313},
            {x:206,y:313},
            {x:185,y:313},
            {x:163,y:317},
            {x:175,y:337},
            {x:196,y:338},
            {x:217,y:338},
            {x:238,y:338},
            {x:259,y:338},
            {x:280,y:338},
            {x:301,y:338},
            {x:322,y:338},
            {x:343,y:338},
            {x:364,y:338},
            {x:364,y:362},
            {x:343,y:363},
            {x:322,y:364},
            {x:301,y:364},
            {x:280,y:364},
            {x:259,y:364},
            {x:238,y:364},
            {x:217,y:364},
            {x:196,y:364},
            {x:175,y:364},
            {x:154,y:364},
            {x:133,y:364}
          ].reverse()

          this.moveToMinPath = [
            {x:134 ,y:295 },
            {x:149 ,y:216 },
            {x:174 ,y:135 },
            {x:256 ,y:88 },
          ];
          
          this.moveToFivePath = [
            {x:237, y:100}
          ];
          this.moveToHourPath = [
            {x:211,y:149}
          ];
          this.moveToQuePath = [
            {x:208,y:198},
            {x:164,y:238},
            {x:161,y:287}
          ];
    }
}
 