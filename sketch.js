

var database;
var form, q1;
var q1yes;
var pixel;
var answ1, index1, email1;
var q2;
var q2yes;
var answ2, index2, email2;
var q3;
var answ3, index3, email3;
function setup() {
    createCanvas(500, 500);
    database = firebase.database();
    form = new Form();
    index1 = 0;
    index2 = 0;
    index3 = 0;
    
    // form.display();
}
function draw() {
    
    //console.log(mouseX+" "+mouseY)
    pixel = createSprite(500, 500, 5, 5)
    if (mousePressedOver(pixel)){
        
            let button = createButton("reset");
            button.position(600, 250);
            
        
                button.mousePressed(()=>{
                //database = firebase.database();
                database.ref('/Question 1').update({
                    No:0,
                    Yes:0,
                    Voters:0
                })
                var emails1 = database.ref('/Question 1/Emails');
                emails1.remove();
                database.ref('/Question 2').update({
                    No:0,
                    Yes:0,
                    Voters:0
                })
                var emails2 = database.ref('/Question 2/Emails');
                emails2.remove();
                database.ref('/Question 3').update({
                    Hundred :0,
                    'Five Hundred':0,
                    Thousand:0,
                    More: 0,
                    Voters:0
                })
                var emails3 = database.ref('/Question 3/Emails');
                emails3.remove();

                
            
            })
            
    }
    form.display();
} 