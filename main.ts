while (true) {
    console.log(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) > 20 || input.acceleration(Dimension.X) < -20) {
        light.showAnimation(light.rainbowAnimation, 100)
    } else {
        light.clear()
    }
    
}
