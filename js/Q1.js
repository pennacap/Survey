class Q1{
    constructor() {
        this.index = null;
        this.email = null;
        this.answer = 0;
        this.question = createElement("p");
        this.question.html("Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?")
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
        this.input.hide();
        this.question.style("width:450px");
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
                var answer1Ref = database.ref('Question 1/Yes')//.once("value");
                answer1Ref.on("value", (data)=>{
                    
                    this.answer = Number(data.val())
                    //console.log(answ1)
                }) 
                //console.log(answ1)
                var setAnswer = database.ref('Question 1/').update({
                     Yes: this.answer + 1
                });
                var index1Ref = database.ref('Question 1/Voters');
                index1Ref.on("value", (data)=>{
                    index1 = data.val();
                })
                index1+=1
                var emailLoc = "email"+index1
                console.log(emailLoc);
                var emailIndex = database.ref('Question 1/Emails/'+emailLoc).set({
                    email:this.input.value()
                })
                
                var playerCount = database.ref('Question 1/').update({
                    Voters : index1
                })

                form.show();
                this.question.hide();
                this.yes.hide();
                this.no.hide();
                this.input.hide();
                q1yes = false;
            }
        })
        this.no.mousePressed(()=>{
            if(this.input.value().indexOf("@") != -1 && this.input.value().indexOf(".") != -1 && this.input.value().replace(/\s+/g,'').lastIndexOf(".") - this.input.value().replace(/\s+/g,'').lastIndexOf("@") != 1){
                this.email = this.input.value();
                var answer1Ref = database.ref('Question 1/No')//.once("value");
                answer1Ref.on("value", (data)=>{
                    
                    this.answer = Number(data.val())
                    //console.log(answ1)
                }) 
                //console.log(answ1)
                var setAnswer = database.ref('Question 1/').update({
                     No: this.answer + 1
                });
                var index1Ref = database.ref('Question 1/Voters');
                index1Ref.on("value", (data)=>{
                    index1 = data.val();
                })
                index1+=1
                var emailLoc = "email"+index1
                console.log(emailLoc);
                var emailIndex = database.ref('Question 1/Emails/'+emailLoc).set({
                    email:this.input.value()
                })
                
                var playerCount = database.ref('Question 1/').update({
                    Voters : index1
                })

                form.show();
                this.question.hide();
                this.yes.hide();
                this.no.hide();
                this.input.hide();
                q1yes = false;
            }
        })
    }

}