class Form {
    constructor(){
        this.title = createElement('h1')
        this.title.html("Survey");
        this.title.position(212, 0);
        
        this.button1 = createButton('Question 1')
        this.button1.position(0, 100);

        this.button2 = createButton('Question 2')
        this.button2.position(0, 200);

        this.button3 = createButton('Question 3')
        this.button3.position(0, 300);
    }
    display() {
        q1 = new Q1();
        q1.hide();
        q2 = new Q2();
        q2.hide()
        q3 = new Q3();
        q3.hide();
        this.button1.mousePressed(()=>{
            
            q1.show();  
        })
        this.button2.mousePressed(()=>{
            
            q2.show();  
        })
        this.button3.mousePressed(()=>{
            q3.show();
        })
    }
    hide() {
        this.title.hide();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
    }
    show() {
        this.title.show();
        this.button1.show();
        this.button2.show();
        this.button3.show();
    }
}