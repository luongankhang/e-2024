import { Component } from '@angular/core';

@Component({
  selector: 'app-e',
  template: `<body>
    <!-- partial:index.partial.html -->
    <div class="screen-1">
      <svg
        class="logo"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="300"
        height="300"
        viewbox="0 0 640 480"
        xml:space="preserve"
      >
        <g transform="matrix(3.31 0 0 3.31 320.4 240.4)">
          <circle
            style="
            stroke: rgb(0, 0, 0);
            stroke-width: 0;
            stroke-dasharray: none;
            stroke-linecap: butt;
            stroke-dashoffset: 0;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            fill: rgb(61, 71, 133);
            fill-rule: nonzero;
            opacity: 1;
          "
            cx="0"
            cy="0"
            r="40"
          ></circle>
        </g>
        <g transform="matrix(0.98 0 0 0.98 268.7 213.7)">
          <circle
            style="
            stroke: rgb(0, 0, 0);
            stroke-width: 0;
            stroke-dasharray: none;
            stroke-linecap: butt;
            stroke-dashoffset: 0;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            fill: rgb(255, 255, 255);
            fill-rule: nonzero;
            opacity: 1;
          "
            cx="0"
            cy="0"
            r="40"
          ></circle>
        </g>
        <g transform="matrix(1.01 0 0 1.01 362.9 210.9)">
          <circle
            style="
            stroke: rgb(0, 0, 0);
            stroke-width: 0;
            stroke-dasharray: none;
            stroke-linecap: butt;
            stroke-dashoffset: 0;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            fill: rgb(255, 255, 255);
            fill-rule: nonzero;
            opacity: 1;
          "
            cx="0"
            cy="0"
            r="40"
          ></circle>
        </g>
        <g transform="matrix(0.92 0 0 0.92 318.5 286.5)">
          <circle
            style="
            stroke: rgb(0, 0, 0);
            stroke-width: 0;
            stroke-dasharray: none;
            stroke-linecap: butt;
            stroke-dashoffset: 0;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            fill: rgb(255, 255, 255);
            fill-rule: nonzero;
            opacity: 1;
          "
            cx="0"
            cy="0"
            r="40"
          ></circle>
        </g>
        <g transform="matrix(0.16 -0.12 0.49 0.66 290.57 243.57)">
          <polygon
            style="
            stroke: rgb(0, 0, 0);
            stroke-width: 0;
            stroke-dasharray: none;
            stroke-linecap: butt;
            stroke-dashoffset: 0;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            fill: rgb(255, 255, 255);
            fill-rule: nonzero;
            opacity: 1;
          "
            points="-50,-50 -50,50 50,50 50,-50 "
          ></polygon>
        </g>
        <g transform="matrix(0.16 0.1 -0.44 0.69 342.03 248.34)">
          <polygon
            style="
            stroke: rgb(0, 0, 0);
            stroke-width: 0;
            stroke-dasharray: none;
            stroke-linecap: butt;
            stroke-dashoffset: 0;
            stroke-linejoin: miter;
            stroke-miterlimit: 4;
            fill: rgb(255, 255, 255);
            fill-rule: nonzero;
            opacity: 1;
          "
            vector-effect="non-scaling-stroke"
            points="-50,-50 -50,50 50,50 50,-50 "
          ></polygon>
        </g>
      </svg>
      <div class="email">
        <label for="email">Email Address</label>
        <div class="sec-2">
          <input type="email" name="email" placeholder="Username@gmail.com" />
        </div>
      </div>
      <div class="password">
        <label for="password">Password</label>
        <div class="sec-2">
          <input
            class="pas"
            type="password"
            name="password"
            placeholder="············"
          />
        </div>
      </div>
      <button class="login">Login</button>
      <div class="footer"><span>Signup</span><span>Forgot Password?</span></div>
    </div>
    <!-- partial -->
  </body> `,
  styles: [
    `
      $p: hsl(213deg 85% 97%);
      $s: hsl(233deg 36% 38%);
      * {
        font-family: 'Poppins';
      }
      @mixin screen {
        background: $p;
        padding: 2em;
        display: flex;
        flex-direction: column;
        border-radius: 30px;
        box-shadow: 0 0 2em hsl(231deg 62% 94%);
      }
      body {
        user-select: none;
        overflow-y: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: hsl(218deg 50% 91%);
        height: 100vh;
      }
      .screen-1 {
        @include screen;
        gap: 2em;
        .logo {
          margin-top: -3em;
        }
        .email {
          background: hsl(0deg 0% 100%);
          box-shadow: 0 0 2em hsl(231deg 62% 94%);
          padding: 1em;
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          border-radius: 20px;
          color: hsl(0deg 0% 30%);
          margin-top: -3em;
          input {
            outline: none;
            border: none;
            &::placeholder {
              color: hsl(0deg 0% 0%);
              font-size: 0.9em;
            }
          }
          ion-icon {
            color: hsl(0deg 0% 30%);
            margin-bottom: -0.2em;
          }
        }
        .password {
          background: hsl(0deg 0% 100%);
          box-shadow: 0 0 2em hsl(231deg 62% 94%);
          padding: 1em;
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          border-radius: 20px;
          color: hsl(0deg 0% 30%);
          input {
            outline: none;
            border: none;
            &::placeholder {
              color: hsl(0deg 0% 0%);
              font-size: 0.9em;
            }
          }
          ion-icon {
            color: hsl(0deg 0% 30%);
            margin-bottom: -0.2em;
          }
          .show-hide {
            margin-right: -5em;
          }
        }
        .login {
          padding: 1em;
          background: hsl(233deg 36% 38%);
          color: hsl(0 0 100);
          border: none;
          border-radius: 30px;
          font-weight: 600;
        }
        .footer {
          display: flex;
          font-size: 0.7em;
          color: hsl(0deg 0% 37%);
          gap: 14em;
          padding-bottom: 10em;
          span {
            cursor: pointer;
          }
        }
      }

      button {
        cursor: pointer;
      }
    `,
  ],
})
export class EComponent {}
