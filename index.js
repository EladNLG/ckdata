

// this shit is fucked

function GenerateImage()
{
    let file = document.getElementById("custom-file-upload").value;

    let canvas = document.getElementById("canvas")
    let imgElem = document.getElementById("generated-image")
    let name = document.getElementById("name").value
    
    const ctx = canvas.getContext("2d");
    

    ctx.fillStyle = "#246";
    ctx.clearRect(0, 0, 800, 600)
    // Add a rectangle at (10, 10) with size 100x100 pixels
    ctx.fillRect(0, 0, 800, 450);
    ctx.fillStyle = "#123"
    ctx.fillRect(0, 0, 200, 450);

    ctx.fillStyle = "#fff";
    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    
    ctx.font = "bold 32px JetBrains Mono"
    ctx.fillText(name, 100, 20, 180)

    let rightSideMiddle = 500
    let leftSideMiddle = 100

    ctx.font = "24px JetBrains Mono"
    ctx.fillText("Crouch Kick Data", 800-300, 20)

    // sidebar data

    ctx.fillStyle = "#aaa"
    ctx.font = "300 24px JetBrains Mono"
    ctx.fillText("FPS", leftSideMiddle, 120)
    
    ctx.fillStyle = "#f55"
    ctx.font = "800 24px JetBrains Mono"
    ctx.fillText("144", leftSideMiddle, 150)

    ctx.fillStyle = "#aaa"
    ctx.font = "300 24px JetBrains Mono"
    ctx.fillText("Crouchkicks", leftSideMiddle, 220)
    
    ctx.fillStyle = "#f55"
    ctx.font = "800 24px JetBrains Mono"
    ctx.fillText("3194", leftSideMiddle, 250)

    ctx.fillStyle = "#aaa"
    ctx.font = "300 24px JetBrains Mono"
    ctx.fillText("Made by", leftSideMiddle, 320)
    
    ctx.fillStyle = "#f55"
    ctx.font = "800 24px JetBrains Mono"
    ctx.fillText("EladNLG", leftSideMiddle, 350)

    // FREQUENCY

    ctx.fillStyle = "#fff"

    let graphYOffset = 400

    ctx.font = "18px JetBrains Mono"
    ctx.fillText("Frequency", rightSideMiddle, graphYOffset - 145)
    
    ctx.fillRect(rightSideMiddle - 244, graphYOffset, 488, 4);
    
    for (let i = 0; i < 81; i++)
    {
        let l = Math.random()
        ctx.fillRect(rightSideMiddle - 244 + 2 + 6 * i, graphYOffset - 120 * l, 4, 120 * l)
    }
    
    ctx.font = "12px JetBrains Mono"
    //ctx.textBaseline = "bottom"
    for (let i = 0; i < 9; i++)
    {
        let l = Math.random()
        ctx.fillText(i * 10, rightSideMiddle - 240 + 60 * i, graphYOffset + 10 )
    }

    // SPEED GAIN

    graphYOffset = 100

    ctx.font = "18px JetBrains Mono"
    ctx.fillText("Speed Gain", rightSideMiddle, graphYOffset - 25)
    
    ctx.fillRect(rightSideMiddle - 244, graphYOffset + 120, 488, 4); 

    ctx.fillRect(rightSideMiddle - 244, graphYOffset, 4, 120);

    ctx.beginPath()
    ctx.moveTo(rightSideMiddle - 242, graphYOffset + 10)
    for (let i = 1; i < 6; i++)
    {
        ctx.lineTo(rightSideMiddle - 244 + 485 * (i / 5), graphYOffset + 120 - 110 * (Math.pow((5 - (i - 1)) / 5, 2)))
        ctx.lineTo(rightSideMiddle - 244 + 485 * (i / 5), graphYOffset + 120 - 110 * (Math.pow((5 - i) / 5, 2)))
    }
    ctx.lineWidth = 2
    ctx.strokeStyle = "#fff"
    ctx.stroke()
    
    ctx.fillStyle = "#000"
    for (let i = 0; i < 5; i++)
    {
        let x = rightSideMiddle - 244 + 485 * (i + 0.5) / 5
        let y = graphYOffset + 120 - 110 * (Math.pow((5 - i) / 5, 2))
        let height = Math.max(110 * Math.random() * Math.pow((5 - i) / 5, 2), 2)
        let thickness = 2
        let width = 32
        ctx.fillRect(x - thickness / 2, y - height / 2, thickness, height)
        ctx.fillRect(x - width / 2, y - height / 2 - thickness, width, thickness)  
        ctx.fillRect(x - width / 2, y + height / 2, width, thickness)  
    }
    ctx.fillStyle = "#fff"

    ctx.font = "12px JetBrains Mono"
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"
    for (let i = 0; i < 5; i++)
    {
        let l = Math.random()
        ctx.fillText(Math.round(i * (13 / 4) * 100) / 100, rightSideMiddle - 248, graphYOffset + 11 + 27 * (4 - i) )
    }
    ctx.textAlign = "middle"
    ctx.textBaseline = "top"

    
    imgElem.src = canvas.toDataURL("image/png")
}

//GenerateImage()
