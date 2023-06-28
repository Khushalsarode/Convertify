function convert(){
    var getconval;
    var from = document.getElementById("lenfrom").options.selectedIndex;
    var lenfrom = document.getElementById("lenfrom").options[from].value;

    var to = document.getElementById("lento").options.selectedIndex;
    var lento = document.getElementById("lento").options[to].value;

    var getvalue = document.getElementById("lenval").value;

  


    if (getvalue <= -1) {
      window.alert("Length can't be Negative! Try again.");
      return reset();
      
    }
   if(getvalue>=0){
      window.alert(getvalue+lenfrom+"->  from to ->" +lento);
   }
 
    // CONVERSIONS FROM feet(ft) TO OTHER UNITS OF MASS!!!! 
    if(lenfrom=="feet(ft)" && lento=="feet(ft)"){
        document.getElementById("conlen").value=getvalue;
        }
        if(lenfrom=="feet(ft)" && lento=="inches(in)"){

           getconval = getvalue*12;
           document.getElementById("conlen").value = getconval;
        }
        if(lenfrom=="feet(ft)" && lento=="meters(m)"){

        getconval = getvalue/3.2808;
        document.getElementById("conlen").value = getconval;
        }
        if(lenfrom=="feet(ft)" && lento=="centimeters(cm)"){
           getconval = getvalue/0.032808;
           document.getElementById("conlen").value=getconval;
        }
        if(lenfrom=="feet(ft)" && lento=="kilometers(km)"){
           getconval = getvalue/3280.8;
           document.getElementById("conlen").value=getconval;
        }
        if(lenfrom=="feet(ft)" && lento=="yards(yd)"){
           getconval = getvalue*0.33333;
           document.getElementById("conlen").value=getconval;
        }
        if(lenfrom=="feet(ft)" && lento=="miles"){
           getconval = getvalue*0.00018939;
           document.getElementById("conlen").value=getconval;
        }
        
        // CONVERSIONS FROM inches(in) TO OTHER UNITS OF MASS!!!! 
        if(lenfrom=="inches(in)" && lento=="inches(in)"){
            document.getElementById("conlen").value=getvalue;
            }
            if(lenfrom=="inches(in)" && lento=="feet(ft)"){
    
               getconval = getvalue*0.083333;
               document.getElementById("conlen").value = getconval;
            }
            if(lenfrom=="inches(in)" && lento=="meters(m)"){
    
            getconval = getvalue/39.370;
            document.getElementById("conlen").value = getconval;
            }
            if(lenfrom=="inches(in)" && lento=="centimeters(cm)"){
               getconval = getvalue/0.39370;
               document.getElementById("conlen").value=getconval;
            }
            if(lenfrom=="inches(in)" && lento=="kilometers(km)"){
               getconval = getvalue/39370;
               document.getElementById("conlen").value=getconval;
            }
            if(lenfrom=="inches(in)" && lento=="yards(yd)"){
               getconval = getvalue*0.027778;
               document.getElementById("conlen").value=getconval;
            }
            if(lenfrom=="inches(in)" && lento=="miles"){
               getconval = getvalue*0.000015783;
               document.getElementById("conlen").value=getconval;
            }

        // CONVERSIONS FROM meters(m) TO OTHER UNITS OF MASS!!!! 
        if(lenfrom=="meters(m)" && lento=="meters(m)"){
           document.getElementById("conlen").value= getvalue;
        }

        if(lenfrom=="meters(m)" && lento=="feet(ft)"){      
        getconval = getvalue*3.2808;
        document.getElementById("conlen").value = getconval;
        }

        if(lenfrom=="meters(m)" && lento=="inches(in)"){      
        getconval = getvalue*39.370;
        document.getElementById("conlen").value = getconval;
        }

        if(lenfrom=="meters(m)" && lento=="centimeters(cm)"){
        getconval = getvalue/0.01;
        document.getElementById("conlen").value=getconval;
        }

        if(lenfrom=="meters(m)" && lento=="kilometers(km)"){
        getconval = getvalue/1000;
        document.getElementById("conlen").value=getconval;
        }

        if(lenfrom=="meters(m)" && lento=="yards(yd)"){
        getconval = getvalue*1.0936;
        document.getElementById("conlen").value=getconval;
        }

        if(lenfrom=="meters(m)" && lento=="miles"){
        getconval = getvalue*0.00062137;
        document.getElementById("conlen").value=getconval;
        }

        // CONVERSIONS FROM centimeters(cm) TO OTHER UNITS OF MASS!!!! 
        if(lenfrom=="centimeters(cm)" && lento=="centimeters(cm)"){
           document.getElementById("conlen").value= getvalue;
        }

        if(lenfrom=="centimeters(cm)" && lento=="feet(ft)"){      
        getconval = getvalue*0.032808;
        document.getElementById("conlen").value = getconval;
        }

        if(lenfrom=="centimeters(cm)" && lento=="inches(in)"){      
        getconval = getvalue*0.39370;
        document.getElementById("conlen").value = getconval;
        }

        if(lenfrom=="centimeters(cm)" && lento=="meters(m)"){
        getconval = getvalue/100;
        document.getElementById("conlen").value=getconval;
        }

        if(lenfrom=="centimeters(cm)" && lento=="kilometers(km)"){
        getconval = getvalue/100000;
        document.getElementById("conlen").value=getconval;
        }

        if(lenfrom=="centimeters(cm)" && lento=="yards(yd)"){
        getconval = getvalue*0.010936;
        document.getElementById("conlen").value=getconval;
        }

        if(lenfrom=="centimeters(cm)" && lento=="miles"){
        getconval = getvalue*0.0000062137;
        document.getElementById("conlen").value=getconval;
        }

        // CONVERSIONS FROM kilometers(km) TO OTHER UNITS OF MASS!!!! 
        if(lenfrom=="kilometers(km)" && lento=="kilometers(km)"){
           document.getElementById("conlen").value= getvalue;
        }

        if(lenfrom=="kilometers(km)" && lento=="feet(ft)"){      
        getconval = getvalue*3280.8;
        document.getElementById("conlen").value = getconval;
        }
        
        if(lenfrom=="kilometers(km)" && lento=="inches(in)"){      
        getconval = getvalue*39370;
        document.getElementById("conlen").value = getconval;
        }

        if(lenfrom=="kilometers(km)" && lento=="meters(m)"){
        getconval = getvalue*1000;
        document.getElementById("conlen").value=getconval;
        }

        if(lenfrom=="kilometers(km)" && lento=="centimeters(cm)"){
        getconval = getvalue*100000;
        document.getElementById("conlen").value=getconval;
        }

        if(lenfrom=="kilometers(km)" && lento=="yards(yd)"){
        getconval = getvalue*1093.6;
        document.getElementById("conlen").value=getconval;
        }

        if(lenfrom=="kilometers(km)" && lento=="miles"){
        getconval = getvalue* 0.62137;
        document.getElementById("conlen").value=getconval;
        }

     // CONVERSIONS FROM yards(yd) TO OTHER UNITS OF MASS!!!! 
     if(lenfrom=="yards(yd)" && lento=="yards(yd)"){
           document.getElementById("conlen").value= getvalue;
        }

        if(lenfrom=="yards(yd)" && lento=="feet(ft)"){      
        getconval = getvalue*3;
        document.getElementById("conlen").value = getconval;
        }
        
        if(lenfrom=="yards(yd)" && lento=="inches(in)"){      
        getconval = getvalue*36;
        document.getElementById("conlen").value = getconval;
        }

        if(lenfrom=="yards(yd)" && lento=="meters(m)"){
        getconval = getvalue/1.0936;
        document.getElementById("conlen").value=getconval;
        }

        if(lenfrom=="yards(yd)" && lento=="centimeters(cm)"){
        getconval = getvalue/0.010936;
        document.getElementById("conlen").value=getconval;
        }

        if(lenfrom=="yards(yd)" && lento=="kilometers(km)"){
        getconval = getvalue/1093.6;
        document.getElementById("conlen").value=getconval;
        }

        if(lenfrom=="yards(yd)" && lento=="miles"){
        getconval = getvalue*0.00056818;
        document.getElementById("conlen").value=getconval;
        }
        
     // CONVERSIONS FROM miles TO OTHER UNITS OF MASS!!!! 
     if(lenfrom=="miles" && lento=="miles"){
        document.getElementById("conlen").value= getvalue;
     }

     if(lenfrom=="miles" && lento=="feet(ft)"){      
     getconval = getvalue*5280;
     document.getElementById("conlen").value = getconval;
     }
     
     if(lenfrom=="miles" && lento=="inches(in)"){      
     getconval = getvalue*63360;
     document.getElementById("conlen").value = getconval;
     }

     if(lenfrom=="miles" && lento=="meters(m)"){
     getconval = getvalue/0.00062137;
     document.getElementById("conlen").value=getconval;
     }

     if(lenfrom=="miles" && lento=="centimeters(cm)"){
     getconval = getvalue/0.0000062137;
     document.getElementById("conlen").value=getconval;
     }

     if(lenfrom=="miles" && lento=="kilometers(km)"){
     getconval = getvalue/0.62137;
     document.getElementById("conlen").value=getconval;
     }

     if(lenfrom=="miles" && lento=="yards(yd)"){
     getconval = getvalue*1760;
     document.getElementById("conlen").value=getconval;
     }


}
function reset(){
    document.getElementById("lenval").value = "";
    document.getElementById("conlen").value = "";
}