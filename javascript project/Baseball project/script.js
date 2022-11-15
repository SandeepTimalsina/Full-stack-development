//For home
let HoutEL = document.getElementById('homeoutput')
let Hcount= 0
function Hadd1()
{
    Hcount++
    HoutEL.textContent = Hcount
}
function Hadd2()
{
    Hcount+=2
    HoutEL.textContent = Hcount
}
function Hadd3()
{
    Hcount+=3
    HoutEL.textContent = Hcount
}
//For guest
let GoutEL = document.getElementById('guestoutput')
let Gcount= 0
function Gadd1()
{
    Gcount++
    GoutEL.textContent = Gcount
}
function Gadd2()
{
    Gcount+=2
    GoutEL.textContent = Gcount
}
function Gadd3()
{
    Gcount+=3
    GoutEL.textContent = Gcount
}
//For new game
function newgame()
{
    Hcount = 0
    Gcount = 0
    HoutEL.textContent = Hcount
    GoutEL.textContent = Gcount
}