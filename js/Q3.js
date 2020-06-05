class Q3{
    constructor() {
        this.index = null;
        this.email = null;
        this.answer = 0;
        this.question = createElement("p");
        this.question.html("Q3. How much per month would you be willing to pay? ")
        this.question.position(15, 10);
        this.question.hide()
        this.hundred = createButton("₹100")
        this.hundred.position(0, 200);
        this.hundred.hide()
        this.fhundred = createButton("₹500")
        this.fhundred.position(0, 250);
        this.fhundred.hide();
        this.thousand = createButton("₹1000")
        this.thousand.position(0, 300);
        this.thousand.hide()
        this.more = createButton("More")
        this.more.position(0, 350);
        this.more.hide();
        this.input = createInput("Email")
        this.input.position(225, 400);
        this.input.hide()
        this.question.style("width: 450px")
    }
    show(){
        form.hide()
        this.question.show();
        this.hundred.show();
        this.thousand.show();
        this.fhundred.show();
        this.more.show();
        this.input.show()
    }
    hide() {
        this.hundred.mousePressed(()=>{
            if(this.input.value().indexOf("@") != -1 && this.input.value().indexOf(".") != -1 && this.input.value().replace(/\s+/g,'').lastIndexOf(".") - this.input.value().replace(/\s+/g,'').lastIndexOf("@") != 1){
                this.email = this.input.value();
                var answer3Ref = database.ref('Question 3/Hundred')//.once("value");
                answer3Ref.on("value", (data)=>{
                    
                    this.answer = Number(data.val())
                    //console.log(answ3)
                }) 
                //console.log(answ3)
                var setAnswer = database.ref('Question 3/').update({
                     Hundred: this.answer + 1
                });
                var index3Ref = database.ref('Question 3/Voters');
                index3Ref.on("value", (data)=>{
                    index3 = data.val();
                })
                index3+=1
                var emailLoc = "email"+index3;
                console.log(emailLoc);
                var emailIndex = database.ref('Question 3/Emails/'+emailLoc).set({
                    email:this.input.value()
                })
                
                var playerCount = database.ref('Question 3/').update({
                    Voters : index2
                })

                form.show();
                this.question.hide();
                this.hundred.hide();
                this.thousand.hide();
                this.fhundred.hide();
                this.more.hide();
                this.input.hide();
                q2yes = false;
            }
        })
        this.fhundred.mousePressed(()=>{
            if(this.input.value().indexOf("@") != -1 && this.input.value().indexOf(".") != -1 && this.input.value().replace(/\s+/g,'').lastIndexOf(".") - this.input.value().replace(/\s+/g,'').lastIndexOf("@") != 1){
                this.email = this.input.value();
                var answer3Ref = database.ref('Question 3/Five Hundred')//.once("value");
                answer3Ref.on("value", (data)=>{
                    
                    this.answer = Number(data.val())
                    //console.log(answ3)
                }) 
                //console.log(answ3)
                var setAnswer = database.ref('Question 3/').update({
                     'Five Hundred': this.answer + 1
                });
                var index3Ref = database.ref('Question 3/Voters');
                index3Ref.on("value", (data)=>{
                    index3 = data.val();
                })
                index3+=1
                var emailLoc = "email"+index3
                console.log(emailLoc);
                var emailIndex = database.ref('Question 3/Emails/'+emailLoc).set({
                    email:this.input.value()
                })
                
                var playerCount = database.ref('Question 3/').update({
                    Voters : index2
                })

                form.show();
                this.question.hide();
                this.hundred.hide();
                this.thousand.hide();
                this.fhundred.hide();
                this.more.hide();
                this.input.hide();
                
            }
        })
        this.thousand.mousePressed(()=>{
            if(this.input.value().indexOf("@") != -1 && this.input.value().indexOf(".") != -1 && this.input.value().replace(/\s+/g,'').lastIndexOf(".") - this.input.value().replace(/\s+/g,'').lastIndexOf("@") != 1){
                this.email = this.input.value();
                var answer3Ref = database.ref('Question 3/Thousand')//.once("value");
                answer3Ref.on("value", (data)=>{
                    
                    this.answer = Number(data.val())
                    //console.log(answ3)
                }) 
                //console.log(answ3)
                var setAnswer = database.ref('Question 3/').update({
                     Thousand : this.answer + 1
                });
                var index3Ref = database.ref('Question 3/Voters');
                index3Ref.on("value", (data)=>{
                    index3 = data.val();
                })
                index3+=1
                var emailLoc = "email"+index3
                console.log(emailLoc);
                var emailIndex = database.ref('Question 3/Emails/'+emailLoc).set({
                    email:this.input.value()
                })
                
                var playerCount = database.ref('Question 3/').update({
                    Voters : index3
                })

                form.show();
                this.question.hide();
                this.hundred.hide();
                this.thousand.hide();
                this.fhundred.hide();
                this.more.hide();
                this.input.hide();
            }
        })
        this.more.mousePressed(()=>{
            if(this.input.value().indexOf("@") != -1 && this.input.value().indexOf(".") != -1 && this.input.value().replace(/\s+/g,'').lastIndexOf(".") - this.input.value().replace(/\s+/g,'').lastIndexOf("@") != 1){
                this.email = this.input.value();
                var answer3Ref = database.ref('Question 3/More')//.once("value");
                answer3Ref.on("value", (data)=>{
                    
                    this.answer = Number(data.val())
                    //console.log(answ3)
                }) 
                //console.log(answ3)
                var setAnswer = database.ref('Question 3/').update({
                     More: this.answer + 1
                });
                var index3Ref = database.ref('Question 3/Voters');
                index3Ref.on("value", (data)=>{
                    index3 = data.val();
                })
                index3+=1
                var emailLoc = "email"+index3
                console.log(emailLoc);
                var emailIndex = database.ref('Question 3/Emails/'+emailLoc).set({
                    email:this.input.value()
                })
                
                var playerCount = database.ref('Question 3/').update({
                    Voters : index3
                })

                form.show();
                this.question.hide();
                this.hundred.hide();
                this.thousand.hide();
                this.fhundred.hide();
                this.more.hide();
                this.input.hide();
                
            }
        })
    
    }

}