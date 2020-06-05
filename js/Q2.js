class Q2{
    constructor() {
        this.index = null;
        this.email = null;
        this.answer = 0;
        this.question = createElement("p");
        this.question.html("Q2. Would you be willing to <wbr>contribute a small amount every month for such a  program?")
        this.question.position(15, 10);
        this.question.hide()
        this.yes = createButton("Yes")
        this.yes.position(0, 200);
        this.yes.hide()
        this.no = createButton("No")
        this.no.position(0, 300);
        this.no.hide();
        this.input = createInput("Email")
        this.input.position(225, 400);
        this.input.hide()
        this.question.style("width:450px")
    }
    show(){
        form.hide()
        this.question.show();
        this.yes.show();
        this.no.show();
        this.input.show()
    }
    hide() {
        this.yes.mousePressed(()=>{
            if(this.input.value().indexOf("@") != -1 && this.input.value().indexOf(".") != -1 && this.input.value().replace(/\s+/g,'').lastIndexOf(".") - this.input.value().replace(/\s+/g,'').lastIndexOf("@") != 1){
                this.email = this.input.value();
                var answer2Ref = database.ref('Question 2/Yes')//.once("value");
                answer2Ref.on("value", (data)=>{
                    
                    this.answer = Number(data.val())
                    //console.log(answ2)
                }) 
                //console.log(answ2)
                var setAnswer = database.ref('Question 2/').update({
                     Yes: this.answer + 1
                });
                var index2Ref = database.ref('Question 2/Voters');
                index2Ref.on("value", (data)=>{
                    index2 = data.val();
                })
                index2+=1
                var emailLoc = "email"+index2
                console.log(emailLoc);
                var emailIndex = database.ref('Question 2/Emails/'+emailLoc).set({
                    email:this.input.value()
                })
                
                var playerCount = database.ref('Question 2/').update({
                    Voters : index2
                })

                form.show();
                this.question.hide();
                this.yes.hide();
                this.no.hide();
                this.input.hide();
                q2yes = false;
            }
        })
        this.no.mousePressed(()=>{
            if(this.input.value().indexOf("@") != -1 && this.input.value().indexOf(".") != -1 && this.input.value().replace(/\s+/g,'').lastIndexOf(".") - this.input.value().replace(/\s+/g,'').lastIndexOf("@") != 1){
                this.email = this.input.value();
                var answer2Ref = database.ref('Question 2/No')//.once("value");
                answer2Ref.on("value", (data)=>{
                    
                    this.answer = Number(data.val())
                    //console.log(answ2)
                }) 
                //console.log(answ2)
                var setAnswer = database.ref('Question 2/').update({
                     No: this.answer + 1
                });
                var index2Ref = database.ref('Question 2/Voters');
                index2Ref.on("value", (data)=>{
                    index2 = data.val();
                })
                index2+=1
                var emailLoc = "email"+index2
                console.log(emailLoc);
                var emailIndex = database.ref('Question 2/Emails/'+emailLoc).set({
                    email:this.input.value()
                })
                
                var playerCount = database.ref('Question 2/').update({
                    Voters : index2
                })

                form.show();
                this.question.hide();
                this.yes.hide();
                this.no.hide();
                this.input.hide();
                q2yes = false;
            }
        })
    }

}