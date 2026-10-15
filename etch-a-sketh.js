const container=document.querySelector(".container")
const button=document.querySelector('button')
const body=document.querySelector("body")
const styleTag=document.createElement('style')

body.style.display="flex";
body.style.flexDirection = "column";
body.style.justifyContent='flex-end';
body.style.alignItems='center';
body.style.height = "100vh"; 
body.style.margin = "0";

container.style.display = "flex";
container.style.flexWrap = "wrap";        // Allows items to wrap onto the next line
container.style.width = "100vh";          // Set a fixed width for your grid box
container.style.height = "100vh";         // Make it a square box
container.style.backgroundColor = "#474b51";
container.style.padding = "2px";
container.style.gap = "0px";
container.style.marginBottom="10px"

button.addEventListener('click',()=>{
   let userInput=Number(prompt('enter the number of squares less than 100 to ceate a new grid of squares:'))
   if (userInput>0&&userInput<=100){
        let contents=''
        totalSquares=userInput*userInput
        for(i=0;i<totalSquares;i++){
        contents += `<div class="grid-square"></div>`;
   }
        container.innerHTML=contents
        styleTag.innerHTML=`
        .grid-square {
            flex: 0 0 calc(100% / ${userInput});
            height: calc(100% / ${userInput});
            background-color: #ffffff;
            border: 1px solid #cbd5e1;
            box-sizing: border-box;
            transition: background-color 0.2s ease;
        }
        `;
        const squares = document.querySelectorAll(".grid-square");
        squares.forEach(square => {
        // When mouse enters the square
        square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "#38bdf8"; // Change to your preferred hover color
        }
        )});
   }
   else
    {
    alert('number must be between 0 and 100 and natural number.re-enter:')
   }
});

document.head.appendChild(styleTag)
