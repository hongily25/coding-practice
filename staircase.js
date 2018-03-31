var n = 6;


for (var i = n - 1; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
        process.stdout.write(' ');
    }
    for (var k = i; k < n; k++) {
        process.stdout.write('#');
    }
    process.stdout.write("\n");
}

/* sample output
     #
    ##
   ###
  ####
 #####
######

*/
