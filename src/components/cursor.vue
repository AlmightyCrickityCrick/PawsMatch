<template>
    <div class="body">
        <div :class="isCursorToggled ? 'active' : 'inactive'" ref="cursor">
            <div class="cursor__ball cursor__ball--big">
                <div class="circle"><p></p></div>
            </div>
  
            <div class="cursor__ball cursor__ball--small">
                <div class="circle"><p></p></div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    name: 'CursorComponent',

    props: {
      isCursorToggled: {
        default: true
      },
    },
    mounted() {
      this.initCursor();
    },
    methods: {
      initCursor() {
        const cursor = this.$refs.cursor;
        const bigBall = cursor.querySelector('.cursor__ball--big');
        const smallBall = cursor.querySelector('.cursor__ball--small');
        const hoverables = document.querySelectorAll('.hoverable'); // Or use refs if they are within the same component
  
        document.body.addEventListener('mousemove', (e) => this.onMouseMove(bigBall, smallBall, e));
        hoverables.forEach(hoverable => {
          hoverable.addEventListener('mouseenter', () => this.onMouseHover(bigBall));
          hoverable.addEventListener('mouseleave', () => this.onMouseHoverOut(bigBall));
        });
      },
      onMouseMove(bigBall, smallBall, e) {
        gsap.to(bigBall, {
          duration: 0.2,
          x: e.clientX - 10,
          y: e.clientY - 8
        });
        gsap.to(smallBall, {
          duration: 0.006,
          x: e.clientX - 0.3,
          y: e.clientY - 0.3
        });
      },
      onMouseHover(bigBall) {
        gsap.to(bigBall, {
          duration: 0.3,
          scale: 4
        });
      },
      onMouseHoverOut(bigBall) {
        gsap.to(bigBall, {
          duration: 0.3,
          scale: 1
        });
      },
    }
  };
  </script>

  <style>
.active {
  cursor: none;
}
.inactive {
  cursor: pointer;
}
</style>
  <style scoped>

  .active {
    visibility: visible;
  }
  .inactive {
    visibility: hidden;
  }
  .cursor__ball--big{
    width: 40px;
    height: 40px;
    margin: -5.5px 0 0 -6px;
    padding: 0;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 300px;

    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier( 0.07, 0.62, 0.64, 1.4 );
  }
  .cursor__ball--small{
    width: 10px;
    height: 10px;
    padding: 0;
    margin: 3px 0 0 0px;
    background: rgba(123, 30, 2, 0.472);
    border: 1px solid rgba(255, 148, 155, 0.452);
    border-radius: 300px;

    transition-timing-function: cubic-bezier( 0, 0.99, 0, 1 );
  }

  .cursor__ball {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    mix-blend-mode: normal;
    z-index: 1000;
  }
  </style>
  