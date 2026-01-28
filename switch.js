    // let now=new Date();nested switch
    // let day=now.getDay();   
    // switch(day){
    //     case 0:
    //         console.log("Today is Sunday");             
    //         break;
    //     case 1:
    //         console.log("Today is Monday");         
    //         break;
    //     case 2:
    //         console.log("Today is Tuesday");
    //         break;
    //     case 3:
    //         console.log("Today is Wednesday");
    //         break;
    //     case 4:
    //         console.log("Today is Thursday");
    //         break;
    //     case 5:
    //         console.log("Today is Friday");
    //         break;
    //     case 6:
    //         console.log("Today is Saturday");
    //         break;
    //     default:
    //         console.log("Looking forward to the Weekend");
    // }
// let now=new Date();
// let bday=new Date("march 8, 2024");
// let diff=now-bday;
// let a = Math.floor(diff/(1000*60*60*24));
// console.log(a);
// let day="wednesday";
// let time="evening";
// switch(day){
//     case "monday":
//         console.log("Today is Monday");
//         break;
//     case "tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "wednesday":
//         console.log("Today is Wednesday");  
//         switch(time){           
//             case "morning":
//                 console.log("Today is Wednesday morning");
//                 break;
//             case "afternoon":
//                 console.log("Today is Wednesday afternoon");
//                 break;
//                 default:
//            console.log("Time not found");
//         }
//         break;
//     case "thursday":
//         console.log("Today is Thursday");
//         break;
//     case "friday":
//         console.log("Today is Friday");
//         break;
//     case "saturday":
//         console.log("Today is Saturday");
//         break;
//     case "sunday":
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("time not found");
//     }
// let grade="10";
// let rank="A+";

// switch(grade){
//     case "10":
//         console.log("You are in 10th grade");
//         switch(rank){
//             case "A+":
//                 console.log("excellent rank");
//                 break;
//             case "A":
//                 console.log("very good rank");
//                 break;
//             case "B":
//                 console.log("good rank");
//                 break;
//             default:
//                 console.log("rank not found");
//         }
//         break;
//     default:
//         console.log("grade not found");
// }
let grade="8";
let rank="A+";

switch(grade){
    case "10":
        console.log("You are in 10th grade");
        switch(rank){
            case "A+":
                console.log("excellent rank");
                break;
            case "A":
                console.log("very good rank");
                break;
            case "B":
                console.log("good rank");
                break;
            default:
                console.log("rank not found");
        }
        break;
    default:
        console.log("grade not found");
}