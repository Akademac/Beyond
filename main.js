//NAV

let menu_bars = document.querySelector('#menu_lines');
let left_side = document.querySelector('.left_side');
let right_side = document.querySelector('.right_side');
let open_x = 1;
let video = document.querySelector('#video');
let home_btn = document.querySelector('#home');

home.addEventListener('click', () => {
    menu_bars.style.transform = 'rotate(180deg)';
    left_side.classList.remove('left_side_go');                 //DRY CODE toggle
    right_side.classList.remove('right_side_go');
    open_x = 1;
});

let p = document.querySelector('#txt_over_video_p');
let i = 0;
let type_x = false;


menu_bars.addEventListener('click', () => {
    if(open_x == 1) {
        menu_bars.style.transform = 'rotate(90deg)';
        left_side.classList.add('left_side_go');
        right_side.classList.add('right_side_go');
        open_x = 0;
    }
    else if(open_x == 0) {
        menu_bars.style.transform = 'rotate(180deg)';
        left_side.classList.remove('left_side_go');
        right_side.classList.remove('right_side_go');
        open_x = 1;
    }
});


let txt =  `One day we will take you to the edge of space, for now,
you can reserve your ticket for the flight to Mars,
and we will expect you to be on the point of launching.`;


let typing = () => {
    if(i < txt.length) {
        p.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, 50); 
    }
    type_x = true;
};

let txts = document.querySelectorAll('.txt');

let txt_arr = [];

let crew = document.querySelector('#crew');
let about = document.querySelector('#about');
let reserve = document.querySelector('#reserve');

txts.forEach(e => {
    txt_arr.push(e);
});

//DOTS

let dots = document.querySelectorAll('.nav_dots');
let dots_arr = [];

dots.forEach(e => {
    dots_arr.push(e);
});

dots_arr[0].style.backgroundColor = 'white';


// "Second Page" Crew

let closing = document.querySelector('.x');
let view_crew = document.querySelector('.view_crew');
let astronauts_wraper = document.querySelector('.astronauts_wraper');
let wraper = document.querySelector('.wraper');

view_crew.addEventListener('click', () => {
    wraper.classList.add('wraper_off'); 
    setTimeout(() => {
        astronauts_wraper.classList.add('astronauts_wraper_on'); 
        astronauts_wraper.style.display = 'block';
        wraper.style.display = 'none';
    }, 1000);      
});

closing.addEventListener('click', () => {
    astronauts_wraper.classList.add('wraper_off'); 
    astronauts_wraper.classList.replace('astronauts_wraper_on','wraper_off'); 
    setTimeout(() => {
        astronauts_wraper.style.display = 'none';
        wraper.classList.remove('wraper_off');
        wraper.style.display = 'block';

    }, 1000);      
});

// "Second Page TRIP"

let left_arrow_t = document.querySelector('.left_arrow');
let right_arrow_t = document.querySelector('.right_arrow');
let trip_arrows = document.querySelectorAll('.trip_arrows');
let trip_img = document.querySelector('#trip_img');
let trip_h3 = document.querySelector('#trip_h3');
let trip_p = document.querySelector('#trip_p');
let trip_close = document.querySelector('.trip_x');
let about_trip = document.querySelector('#about_trip');
let trip_wraper = document.querySelector('.trip_wraper');
trip_x = 0;

about_trip.addEventListener('click', () => {
    wraper.classList.add('wraper_off'); 
    setTimeout(() => {
        trip_wraper.classList.add('astronauts_wraper_on'); 
        trip_wraper.style.display = 'block';
        wraper.style.display = 'none';
    }, 1000); 
});

trip_close.addEventListener('click', () => {
    trip_wraper.classList.add('wraper_off'); 
    trip_wraper.classList.replace('astronauts_wraper_on','wraper_off'); 
    setTimeout(() => {
        trip_wraper.style.display = 'none';
        wraper.classList.remove('wraper_off');
        wraper.style.display = 'block';

    }, 1000); 
    trip_x = 0;
    trip_img.src = 'Images/lift_off.png';
    trip_h3.innerHTML = '01. LIFTOFF';
    trip_p.innerHTML = `Tars 9’s first stage lofts Case to orbit.
    Tars 9’s first and second stage separate.
     Second stage accelerates Case to orbital velocity.`;       
});

right_arrow_t.addEventListener('click', () => {
    if(trip_x < 4) {
        trip_x = trip_x+1;

        // console.log(trip_x);
    }
    else {
        trip_x = 5;
    }

    switch(trip_x) {
        case 0:
              trip_img.src = 'Images/lift_off.png';
              trip_h3.innerHTML = '01. LIFTOFF';
              trip_p.innerHTML = `Tars 9’s first stage lofts Case to orbit.
              Tars 9’s first and second stage separate.
               Second stage accelerates Case to orbital velocity.`;  
        break;
        case 1:
                trip_img.src = 'Images/orbit_activation.png';
                trip_h3.innerHTML = '02. ORBIT ACTIVATION';
                trip_p.innerHTML = `Case separates from Tars 9’s 
                second stage and performs initial o
                rbit activation and checkouts of propulsion, life support, and thermal control systems.`
        break;
        case 2:
                trip_img.src = 'Images/phasing_burns.png';
                trip_h3.innerHTML = '03. PHASING BURNS';
                trip_p.innerHTML = `Case performs delta-velocity orbit raising maneuvers 
                to catch up with the International space station.`;                
        break;
        case 3:
                trip_img.src = 'Images/approuch_initiation.png';
                trip_h3.innerHTML = '04 APPROUCH INITIATION';
                trip_p.innerHTML = `Case establishes a communication link with 
                the space station and performs its final orbit 
                raising delta-velocity burn.`;               
        break;
        case 4:
                trip_img.src = 'Images/proximity_operation.png';
                trip_h3.innerHTML = '05 PROXIMITY OPERATION';
                trip_p.innerHTML = `Case establishes relative navigation to the space
                 station and arrives along the docking 
                 axis, initiating an autonomous approach.`;  
        break;
        case 5:
                trip_img.src = 'Images/docking.png';
                trip_h3.innerHTML = '06. DOCKING & PRESSURIZATION';
                trip_p.innerHTML = `Case performs final approach and docks with the
                 space station, followed by pressurization, 
                 hatch open, and crew ingress.`;  
        break;
    }

});


left_arrow_t.addEventListener('click', () => {
    if(trip_x > 0) {
        trip_x = trip_x-1;
    }
    else {
        trip_x = 0;
    }

    switch(trip_x) {
        case 0:
              trip_img.src = 'Images/lift_off.png';
              trip_h3.innerHTML = '01. LIFTOFF';
              trip_p.innerHTML = `Tars 9’s first stage lofts Case to orbit.
              Tars 9’s first and second stage separate.
               Second stage accelerates Case to orbital velocity.`;  
        break;
        case 1:
                trip_img.src = 'Images/orbit_activation.png';
                trip_h3.innerHTML = '02. ORBIT ACTIVATION';
                trip_p.innerHTML = `Case separates from Tars 9’s 
                second stage and performs initial o
                rbit activation and checkouts of propulsion, life support, and thermal control systems.`
        break;
        case 2:
                trip_img.src = 'Images/phasing_burns.png';
                trip_h3.innerHTML = '03. PHASING BURNS';
                trip_p.innerHTML = `Case performs delta-velocity orbit raising maneuvers 
                to catch up with the International space station.`;                
        break;
        case 3:
                trip_img.src = 'Images/approuch_initiation.png';
                trip_h3.innerHTML = '04 APPROUCH INITIATION';
                trip_p.innerHTML = `Case establishes a communication link with 
                the space station and performs its final orbit 
                raising delta-velocity burn.`;               
        break;
        case 4:
                trip_img.src = 'Images/proximity_operation.png';
                trip_h3.innerHTML = '05 PROXIMITY OPERATION';
                trip_p.innerHTML = `Case establishes relative navigation to the space
                 station and arrives along the docking 
                 axis, initiating an autonomous approach.`;  
        break;
        case 5:
                trip_img.src = 'Images/docking.png';
                trip_h3.innerHTML = '06. DOCKING & PRESSURIZATION';
                trip_p.innerHTML = `Case performs final approach and docks with the
                 space station, followed by pressurization, 
                 hatch open, and crew ingress.`;  
        break;
    }


});

//Calendar

let days = document.querySelectorAll('.dates');
let date = document.querySelector('#day_in_h');
let date_clk = false;

days.forEach(e => {
    e.addEventListener('click', ee => {
        let element = ee.target.dataset.day;
        for(let i=1; i<=31; i++) {
            if(element == i && date_clk == false) {
                e.style.backgroundColor = 'blue';
                date_clk = true;
                date.innerHTML = `January ${i}. 2030.`;
            }
        }
    })
});

let date_wraper = document.querySelector('.date_wraper');
let res_x = 1;
let res_interval;
reserve.addEventListener('click', () => {
  res_interval = setInterval(() => {
      reserve.style.opacity = res_x;
      res_x = res_x-0.01;
      if(res_x < -1) {
          res_x = -1;
      }
  }, 10);
  setTimeout(() => {
    date_wraper.classList.add('astronauts_wraper_on');
    date_wraper.style.display = 'block';
  }, 1000)
})


//Testing

// let rocket  = document.querySelector('#video');

dots_arr.forEach(e => {
    e.style.backgroundColor = 'transparent';
})


let vis_main = document.querySelector('#main_div_texts');
let txt_over_video = document.querySelector('#txt_over_video');
let vis_crew = document.querySelector('#vis_crew');
let vis_about_trip = document.querySelector('#vis_about_trip');
let vis_res = document.querySelector("#vis_res");

let create_third_div_anim = () => {
    txt_arr[0].classList.add('desc_text');
    crew.style.display = 'inline';
}

let create_fourth_div_anim = () => {
    txt_arr[1].classList.add('desc_text');
    about.style.display = 'inline-block';
}

let create_sixth_div_anim = () => {
    txt_arr[2].classList.add('desc_text');
    reserve.style.display = 'block';

}

let isInViewport = e =>  {
    const rect = e.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

dots_arr[0].style.backgroundColor = 'white';     

document.addEventListener('scroll', () => {
   console.log(isInViewport(txt_over_video));
   if(isInViewport(vis_main) == true) {
       dots_arr[0].style.backgroundColor = 'white';     
   }
   else {
       dots_arr[0].style.backgroundColor = 'transparent';     

   }
   if(isInViewport(txt_over_video) == true) {
       dots_arr[1].style.backgroundColor = 'white';
       video.play();
       if(type_x == false) {
        typing();  
       } 
   }
   else {
       dots_arr[1].style.backgroundColor = 'transparent';
   }
   if(isInViewport(vis_crew) == true) {
       dots_arr[2].style.backgroundColor = 'white';
       create_third_div_anim();
   }
   else {
       dots_arr[2].style.backgroundColor = 'transparent';
   }
   if(isInViewport(vis_about_trip) == true) {
       dots_arr[3].style.backgroundColor = 'white';
       create_fourth_div_anim();
   }
   else {
       dots_arr[3].style.backgroundColor = 'transparent';
   } 
   if(isInViewport(vis_res) == true) {
       create_sixth_div_anim();
       dots_arr[4].style.backgroundColor = 'white';
   }
   else {
       dots_arr[4].style.backgroundColor = 'transparent';
   } 
})
