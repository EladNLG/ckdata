

// this shit is fucked

function GenerateImage()
{
    let file = document.getElementById("custom-file-upload").value;

    let fileLines = file.split("\n")
    console.log(fileLines.length)

    let avgFrameRate = 0.0
    let frequencies = Array(81)
    let maxSpeedGains = Array(10)
    let actualLen = 0
    frequencies.fill(0,0,81)
    maxSpeedGains.fill(0,0,10)
    for (let i = 0; i < fileLines.length; i++)
    {
        let line = fileLines[i].split(",")
        let lastCrouchTime = parseInt(line[0])
        let jumpTime = parseInt(line[1])
        let jumpSendTime = parseInt(line[2])
        let speedGained = parseFloat(line[3]) * 0.09144 // convert from u/s to kmh
        let framesPassed = parseInt(line[4])
        let frameRate = parseFloat(line[5])
        if (jumpSendTime > 60999)
        {
            continue
        }
        
        actualLen++
        console.log(parseFloat(frameRate))
        frequencies[Math.floor(jumpSendTime / 1000) + 20]++
        if (maxSpeedGains[framesPassed - 1] < speedGained)
            maxSpeedGains[framesPassed - 1] = speedGained
        avgFrameRate += frameRate
    }
    let highestFrequency = Math.max(...frequencies);
    avgFrameRate /= actualLen

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
    
    let fontSize = 48
    ctx.font = "bold " + fontSize + "px JetBrains Mono"
    while (ctx.measureText(name).width > 180)
    {
        fontSize--
        ctx.font = "bold " + fontSize + "px JetBrains Mono"
    }
    ctx.fillText(name, 100, 20, 180)

    let rightSideMiddle = 500
    let leftSideMiddle = 100

    ctx.font = "24px JetBrains Mono"
    ctx.fillText("Crouch Kick Data", 800-300, 20)

    // sidebar data

    ctx.fillStyle = "#aaa"
    ctx.font = "300 20px JetBrains Mono"
    ctx.fillText("FPS", leftSideMiddle, 120)
    
    ctx.fillStyle = "#f55"
    ctx.font = "800 24px JetBrains Mono"
    ctx.fillText(Math.round(avgFrameRate), leftSideMiddle, 150)

    ctx.fillStyle = "#aaa"
    ctx.font = "300 20px JetBrains Mono"
    ctx.fillText("Crouchkicks", leftSideMiddle, 220)
    
    ctx.fillStyle = "#f55"
    ctx.font = "800 24px JetBrains Mono"
    ctx.fillText(actualLen, leftSideMiddle, 250)

    ctx.fillStyle = "#aaa"
    ctx.font = "300 20px JetBrains Mono"
    ctx.fillText("Avg. Buf. Time", leftSideMiddle, 320)
    
    ctx.fillStyle = "#f55"
    ctx.font = "800 24px JetBrains Mono"
    ctx.fillText("1.65ms", leftSideMiddle, 350)

    // FREQUENCY

    ctx.fillStyle = "#fff"

    let graphYOffset = 400

    ctx.font = "18px JetBrains Mono"
    ctx.fillText("Frequency", rightSideMiddle, graphYOffset - 145)
    
    ctx.fillRect(rightSideMiddle - 244, graphYOffset, 488, 4);
    
    for (let i = 0; i < 81; i++)
    {
        let l = frequencies[i] / highestFrequency
        l = Math.min(1, Math.max(l, 0))
        ctx.fillRect(rightSideMiddle - 244 + 2 + 6 * i, graphYOffset - 120 * l, 4, 120 * l)
    }
    
    ctx.font = "12px JetBrains Mono"
    //ctx.textBaseline = "bottom"
    for (let i = 0; i < 9; i++)
    {
        let l = Math.random()
        ctx.fillText(i * 10 - 20, rightSideMiddle - 240 + 60 * i, graphYOffset + 10 )
    }

    // SPEED GAIN

    graphYOffset = 100

    ctx.font = "18px JetBrains Mono"
    ctx.fillText("Max Speed Gain", rightSideMiddle, graphYOffset - 25)
    
    ctx.fillRect(rightSideMiddle - 244, graphYOffset + 120, 488, 4); 

    ctx.fillRect(rightSideMiddle - 244, graphYOffset, 4, 120);

    console.log(maxSpeedGains.length)
    ctx.beginPath()
    ctx.moveTo(rightSideMiddle - 242, graphYOffset + 120 - 110 * (maxSpeedGains[0] / 13.0))
    for (let i = 1; i < maxSpeedGains.length + 1; i++)
    {
        console.log(graphYOffset + 120 - 110 * (maxSpeedGains[i - 1] / 13.0))
        ctx.lineTo(rightSideMiddle - 244 + 485 * (i / maxSpeedGains.length), graphYOffset + 120 - 110 * (maxSpeedGains[i - 1] / 13.0))
        ctx.lineTo(rightSideMiddle - 244 + 485 * (i / maxSpeedGains.length), graphYOffset + 120 - 110 * (i >= maxSpeedGains.length ? 0 : maxSpeedGains[i] / 13.0))
    }
    ctx.lineWidth = 2
    ctx.fillStyle = "#fff"
    ctx.strokeStyle = "#fff"
    ctx.stroke()
    

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
