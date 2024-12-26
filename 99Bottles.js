var count=99;

function bottles() {
    while(count>=1)
    {
        if (count===1)
        {
            console.log( count +" bottles of beer on the wall, "+count+" bottles of beer.");
            console.log("Take one down and pass it around, No more bottles of beer on the wall.")
            count--;
        }
        else{
        console.log( count +" bottles of beer on the wall, "+count+" bottles of beer.");
        console.log("Take one down and pass it around, "+(count-1)+"bottles of beer on the wall.")
        count--;
        }
    }
        console.log( "No more bottles of beer on the wall, No more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
        count--;
}