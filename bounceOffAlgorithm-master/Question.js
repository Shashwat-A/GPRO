class Question {
    constructor(que, opIMG) {
        this.que = que;
        this.op1 = createSprite(100, height - 50, width/2 - 10, 150);
        this.op2 = createSprite(20, 170 + 75, width/2 - 10, 150);
        this.op3 = createSprite(width/2 + 10, height - 50, width/2 - 10, 150);
        this.op4 = createSprite(width/2 + 10, 170 + 75, width/2 - 10, 150);
    
        //add image to the options
        this.op1.addImage("op1",opIMG[0]);
        this.op2.addImage("op2",opIMG[1]);
        this.op3.addImage("op3",opIMG[2]);
        this.op4.addImage("op4",opIMG[3]);
    }

    display(right) {
        //display the question
        textSize(30);
        fill("white");
        text("" + this.que, 20, 150);

        if(mousePressedOver(this.op1)) {
            if(this.op1 === right) {
                score = score + 1;
                ques = ques + 1;
                right.tint = "green";
                flag = true;
            } else {
                ques = ques + 1;
                this.op1.tint = "red";
                right.tint = "green";
                flag = true;
            }
        }

        if(mousePressedOver(this.op2)) {
            if(this.op2 === right) {
                score = score + 1;
                ques = ques + 1;
                right.tint = "green";
                flag = true;
            } else {
                ques = ques + 1;
                this.op2.tint = "red";
                right.tint = "green";
                flag = true;
            }
        }

        if(mousePressedOver(this.op3)) {
            if(this.op3 === right) {
                score = score + 1;
                ques = ques + 1;
                right.tint = "green";
                flag = true;
            } else {
                ques = ques + 1;
                this.op3.tint = "red";
                right.tint = "green";
                flag = true;
            }
        }

        if(mousePressedOver(this.op4)) {
            if(this.op4 === right) {
                score = score + 1;
                ques = ques + 1;
                right.tint = "green";
                flag = true;
            } else {
                ques = ques + 1;
                this.op4.tint = "red";
                right.tint = "green";
                flag = true;
            }
        }
        
    }
}